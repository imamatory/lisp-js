// @flow

export const makeSymbol = (value: string) => ({
  type: 'symbol',
  value,
});

export const getValue = sym => sym.value;
