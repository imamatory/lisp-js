// @flow

import { makeEmptyList } from '../src/list';
import { getType, Types as T } from '../src/type';

test('should return proper type', () => {
  const l = makeEmptyList();
  expect(getType(l)).toEqual(T.List);
  expect(getType('string type')).toEqual(T.String);
  expect(getType(123)).toEqual(T.Number);
});
