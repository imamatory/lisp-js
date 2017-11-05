// @flow

import _ from 'lodash';
import { car, cdr, isEmptyList } from './list';
import { getValue } from './symbol';
import { getType } from './type';

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
    case 'list':
      return isEmptyList(data) ? '' : inspectList(data);
    case 'symbol': return getValue(data);
    case 'number': return data;
    case 'string': return `"${data}"`;
    default: return data;
  }
};

export default inspect;
