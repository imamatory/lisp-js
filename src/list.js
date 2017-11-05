// @flow

export const makeEmptyList = () => ({
  type: 'list',
  head: null,
  tail: null,
});

export const isEmptyList = list => (list.head === null && list.tail === null);

export const cons = (head, tail) => ({
  type: 'list',
  head,
  tail,
});

export const car = list => list.head;
export const cdr = list => list.tail;
