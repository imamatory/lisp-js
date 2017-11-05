// @flow

import { Types as T } from './type';

export const makeEmptyList = () => ({
  type: T.List,
  head: null,
  tail: null,
});

export const isEmptyList = list => (list.head === null && list.tail === null);

export const cons = (head, tail) => ({
  type: T.List,
  head,
  tail,
});

export const car = list => list.head;
export const cdr = list => list.tail;
