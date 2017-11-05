// @flow

import { getType } from '../src/type';
import { makeSymbol } from '../src/symbol';

test('should create symbol', () => {
  const symbol = makeSymbol('sym_name');
  expect(getType(symbol)).toEqual('symbol');
});
