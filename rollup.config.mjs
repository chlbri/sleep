/* eslint-disable @typescript-eslint/no-var-requires */
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { terser } from 'rollup-plugin-terser';

/**
 *
 * @param {import('rollup').RollupOptions} config
 * @returns {import('rollup').RollupOptions}
 */
const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id),
});

const config = [
  bundle({
    plugins: [esbuild(), terser({})],
    output: [
      {
        file: `lib/index.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `lib/index.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `lib/index.d.ts`,
      format: 'es',
    },
  }),
];

export default config;
