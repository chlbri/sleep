import { vi } from 'vitest';

type VitestUtils = Omit<
  typeof vi,
  '_timers' | '_mockedDate' | '_mocker' | 'getImporter' | '_config'
>;
type Primitive = number | boolean | string;
type Props = {
  [key in string]?:
    | Primitive
    | Primitive[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ((this: VitestUtils, ...args: any) => any);
};

export default function extendVitest<T extends Props>(options: T) {
  return Object.assign(vi as VitestUtils, options);
}
