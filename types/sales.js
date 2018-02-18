// @flow
export type SalesItem = {
  label:      string,
  value:      number,
  count:      number,
  isExempt:   boolean,
  isImported: boolean,
};

export type CalculatedSalesData = {
  taxes: Array<number>,
  total: number,
};
