// @flow

export const Types = {
  String: 'string',
  Number: 'number',
  Symbol: 'symbol',
  List: 'list',
};

export const getType = data => (data.type || typeof data);

