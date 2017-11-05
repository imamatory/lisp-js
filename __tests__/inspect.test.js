// @flow

import { makeEmptyList, cons } from '../src/list';
import { makeSymbol } from '../src/symbol';
import inspect from '../src/inspect';

test('should render list to string', () => {
  const plus = makeSymbol('+');
  const l1 = cons(plus, cons(3, cons(2, makeEmptyList())));
  const l2 = cons('Test me', makeEmptyList());
  const l3 = cons(plus, cons(l2, l1));

  expect(inspect(l3)).toMatchSnapshot();
});

