# Changelog

<details>
<summary>

## **[0.2.2] - 10/03/2026** => _21:50_

</summary>

### Breaking Changes

- BREAKING CHANGE: `sleep` is now a named export — replace
  `import sleep from '@bemedev/sleep'` with
  `import { sleep } from '@bemedev/sleep'`

### Features

- Add `src/fixtures.ts` for Vitest utils extension helpers
- Migrate ESLint config to flat config format (`eslint.config.mjs`)
- Add `"type": "module"` to package.json
- Add `ci`, `ci:admin` and `config:off` scripts
- Update author field to structured object with email, name and url

### Refactoring

- Rename `_augment.ts` → `fixtures.ts`
- Remove `vite.config.ts` (migrated away from Vite)
- Raise Node.js engine requirement from `>=12` to `>=22`

### Dependencies

- Add `@bemedev/build-tests`, `@bemedev/fsf`, `@bemedev/sequence`,
  `@bemedev/vitest-alias`, `@bemedev/vitest-exclude`,
  `@bemedev/vitest-extended`
- Add `@eslint/eslintrc`, `@eslint/js`, `globals` for ESLint flat config
- Add `@types/clone-deep`, `@types/node`, `glob`, `rxjs`, `tsx`,
  `@vitest/ui`
- Remove `@vitejs/plugin-react`, `esbuild`, `vite`, `vite-tsconfig-paths`
- Remove `rollup-plugin-dts`, `rollup-plugin-esbuild`,
  `rollup-plugin-terser`, `rollup-plugin-typescript2`
- Update `rollup`, `@typescript-eslint/*`, `eslint`, `typescript`,
  `vitest`, `husky`, `tslib`

- <u>Test coverage **_100%_**</u>

</details>

<br/>

<details>
<summary>

## **[0.2.1] - 18/02/2026** => _15:21_

</summary>

### Features

- Add automated version bump GitHub Action workflow
- Add comprehensive GitHub Actions documentation (bump-version,
  add-and-commit)
- Add RxJS documentation with features and usage examples
- Add translation and update-docs prompts for Copilot

### CI/CD

- Add NPM publishing workflows (stable, beta, canary)
- Add automated upgrade workflow
- Update CI workflow configuration
- Remove deprecated check-secret and publish workflows

### Configuration

- Add commit message editor configuration and documentation
- Add pnpm workspace configuration
- Update Rollup configuration with enhanced build setup

### Refactoring

- Refactor sleep function from declaration to arrow function
- Rename augment.ts to \_augment.ts for better convention

### Documentation

- Add extensive GitHub Actions documentation
- Add commit message guidelines
- Add Copilot instructions for project workflow

### Dependencies

- Update pnpm-lock.yaml with latest dependencies

- <u>Test coverage **_100%_**</u>

</details>

<br/>

<details>
<summary>

## **[0.2.0] - 2022/11/18** => _17:01_

</summary>

- Add simple sleep function with promise-based API
- Add comprehensive documentation and README
- Add test suite with Vitest
- Add TypeScript support with full type definitions
- Add build configuration with Rollup
- Add ESLint and Prettier for code quality
- Add keywords for better package discovery
- <u>Test coverage **_100%_**</u>

</details>

<br/>
