export type { helper } from './helper';

export declare const items: {
  foo: string;
  bar: string;
  auth: typeof import("./helper").helper;
}[];

/*
  items would be
  export default [item1, item2];
*/