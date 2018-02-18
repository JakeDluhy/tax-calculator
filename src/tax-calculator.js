// @flow
import type { SalesItem, CalculatedSalesData } from '../types/sales.js';

const SALES_TAX_RATE = 0.10;
const IMPORT_RATE = 0.05;

const TAX_ROUNDING_FACTOR = 0.05;

function roundTaxes(tax: number): number {
  return Math.ceil(tax / TAX_ROUNDING_FACTOR) * TAX_ROUNDING_FACTOR;
}

module.exports = function taxCalculator(salesData: Array<SalesItem>): CalculatedSalesData {
  const calculatedSalesData = {
    taxes: [],
    total: 0,
  };

  return salesData.reduce((dataObj: CalculatedSalesData, sale: SalesItem) => {
    const { value, count, isExempt, isImported } = sale;

    // Based on tax exempt and imported, set the rate that the item will be taxed at
    const salesTaxModifier = isExempt ? 0 : SALES_TAX_RATE;
    const importTaxModifier = isImported ? IMPORT_RATE : 0;

    // Calculate sales tax
    const itemValue = (value * count);
    const rawSalesTax = itemValue * (salesTaxModifier + importTaxModifier);
    const salesTax = roundTaxes(rawSalesTax);

    return {
      taxes: dataObj.taxes.concat([salesTax]),
      total: dataObj.total + (itemValue + salesTax),
    };
  }, calculatedSalesData);
};
