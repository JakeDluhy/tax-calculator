// @flow
import type { SalesItem, CalculatedSalesData } from '../types/sales.js';

const listItem = require('./helpers/list-item');

module.exports = function printInformation(
  salesData: Array<SalesItem>,
  calculatedSalesData: CalculatedSalesData
): string {
  const { taxes, total } = calculatedSalesData;

  // Now list out each item's value, including sales tax
  const outputString = salesData.map((data: SalesItem, idx: number) => {
    const newValue = data.value + (taxes[idx] / data.count);

    return listItem(data.count, data.isImported, data.label, newValue);
  }).join('');

  // Calculate total tax
  const totalSalesTax = taxes.reduce((sum: number, val: number) => sum + val, 0);

  // Not using multiline template because of maintaining indentation
  return 'OUTPUT:\n' +
         outputString +
         `Sales Taxes: ${totalSalesTax.toFixed(2)}\n` +
         `Total: ${total.toFixed(2)}`;
};
