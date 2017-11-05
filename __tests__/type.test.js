// @flow

import { makeEmptyList } from '../src/list';
import { getType } from '../src/type';

test('should return proper type', () => {
  const l = makeEmptyList();
  expect(getType(l)).toEqual('list');
  expect(getType('string type')).toEqual('string');
  expect(getType(123)).toEqual('number');
});
