import * as moment from 'moment';

export function hours(): Array<any> {
  const items = [];
  new Array(24).fill(null).forEach((acc, index) => {
    items.push(moment( {hour: index} ).format('h:mm A'));
    items.push(moment({ hour: index, minute: 30 }).format('h:mm A'));
  });
  return items;
}
