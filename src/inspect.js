// @flow

import _ from 'lodash';
import { car, cdr, isEmptyList } from './list';
import { getValue } from './symbol';
import { getType, Types as T } from './type';

const inspect = (data) => {
  const inspectList = (l) => {
    if (isEmptyList(l)) {
      return '';
    }

    const headString = inspect(car(l));
    const tailString = inspectList(cdr(l));
    const listContent = _.trim(`${headString} ${tailString}`);
    return _.isEmpty(tailString) ? listContent : `(${listContent})`;
  };

  const type = getType(data);

  switch (type) {
    case T.List:
      return isEmptyList(data) ? '' : inspectList(data);
    case T.Symbol: return getValue(data);
    case T.Number: return data;
    case T.String: return `"${data}"`;
    default: return data;
  }
};

export default inspect;
