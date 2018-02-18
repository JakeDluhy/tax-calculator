// @flow
import type { SalesItem } from '../types/sales.js';

const listItem = require('./helpers/list-item');

module.exports = function printInput(salesData: Array<SalesItem>): string {
  // List out each sales input by count, label, and value. Include if the item is imported
  const inputString = salesData.map((data: SalesItem) =>
    listItem(data.count, data.isImported, data.label, data.value)
  ).join('');

  // Not using multiline template because of maintaining indentation
  return 'INPUT:\n' + inputString;
};
