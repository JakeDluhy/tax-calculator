// @flow
import type { SalesItem, CalculatedSalesData } from './types/sales.js';

const taxCalculator = require('./src/tax-calculator');
const printInformation = require('./src/print-information')

const TEST_CASE_1: Array<SalesItem> = [
  {
    label:      'book',
    value:      12.49,
    count:      1,
    isExempt:   true,
    isImported: false,
  },
  {
    label:      'music CD',
    value:      14.99,
    count:      1,
    isExempt:   false,
    isImported: false,
  },
  {
    label:      'chocolate bar',
    value:      0.85,
    count:      1,
    isExempt:   true,
    isImported: false,
  },
];

const TEST_CASE_2: Array<SalesItem> = [
  {
    label:      'box of chocolates',
    value:      10.00,
    count:      1,
    isExempt:   true,
    isImported: true,
  },
  {
    label:      'bottle of perfume',
    value:      47.50,
    count:      1,
    isExempt:   false,
    isImported: true,
  },
];

const TEST_CASE_3: Array<SalesItem> = [
  {
    label:      'bottle of perfume',
    value:      27.99,
    count:      1,
    isExempt:   false,
    isImported: true,
  },
  {
    label:      'bottle of perfume',
    value:      18.99,
    count:      1,
    isExempt:   false,
    isImported: false,
  },
  {
    label:      'packet of headache pills',
    value:      9.75,
    count:      1,
    isExempt:   true,
    isImported: false,
  },
  {
    label:      'chocolates',
    value:      11.25,
    count:      1,
    isExempt:   true,
    isImported: true,
  },
];

const TEST_CASES = [ TEST_CASE_1, TEST_CASE_2, TEST_CASE_3 ];

TEST_CASES.forEach((data, idx) => {
  const calculatedSalesData: CalculatedSalesData = taxCalculator(data);

  console.log(`TEST CASE ${idx + 1}`);
  console.log(printInformation(data, calculatedSalesData));
  console.log('\n\n');
});
