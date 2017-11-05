// @flow

import { getType, Types as T } from './type';

export const makeSymbol = (value: string) => ({
  type: T.Symbol,
  value,
});

export const getValue = sym => sym.value;
