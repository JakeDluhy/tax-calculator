// @flow
import type { SalesItem, CalculatedSalesData } from '../types/sales.js';

// This function can be used for listing both input and output
function listItem(count: number, isImported: boolean, label: string, value: number) {
  const importedLabel = isImported ? 'imported ' : '';

  return `${count} ${importedLabel}${label} at ${value.toFixed(2)}\n`;
}

module.exports = function printInformation(
  salesData: Array<SalesItem>,
  calculatedSalesData: CalculatedSalesData
): string {
  // List out each sales input by count, label, and value. Include if the item is imported
  const inputString = salesData.map((data: SalesItem) =>
    listItem(data.count, data.isImported, data.label, data.value)
  ).join('');

  const { taxes, total } = calculatedSalesData;

  // Now list out each item's value, including sales tax
  const outputString = salesData.map((data: SalesItem, idx: number) => {
    const newValue = data.value + (taxes[idx] / data.count);

    return listItem(data.count, data.isImported, data.label, newValue);
  }).join('');

  // Calculate total tax
  const totalSalesTax = taxes.reduce((sum: number, val: number) => sum + val, 0);

  // Not using multiline template because of maintaining indentation
  return 'INPUT:\n' +
         inputString +
         '\n' +
         'OUTPUT:\n' +
         outputString +
         `Sales Taxes: ${totalSalesTax.toFixed(2)}\n` +
         `Total: ${total.toFixed(2)}`;
}
