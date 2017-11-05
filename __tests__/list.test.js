// @flow

import { makeEmptyList, isEmptyList, cons, car, cdr } from '../src/list';

describe('list operations', () => {
  test('should create an empty list', () => {
    const emptyList = makeEmptyList();
    expect(isEmptyList(emptyList)).toBe(true);
  });

  test('car, cdr', () => {
    const emptyList = makeEmptyList();
    const l1 = cons(1, emptyList);
    const l2 = cons('test', l1);
    const l3 = cons(10, l2);

    expect(car(l1)).toEqual(1);
    expect(cdr(l2)).toEqual(l1);
    expect(car(cdr(l3))).toEqual('test');
  });

  test('should determine empty lists', () => {
    const emptyList = makeEmptyList();
    expect(isEmptyList(emptyList)).toBe(true);
    expect(isEmptyList(cons(1, emptyList))).toBe(false);
    expect(isEmptyList('not a list')).toBe(false);
  });
});
