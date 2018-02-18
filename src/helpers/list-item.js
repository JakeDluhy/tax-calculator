// Print out the information about an item
module.exports = function listItem(count: number, isImported: boolean, label: string, value: number) {
  const importedLabel = isImported ? 'imported ' : '';

  return `${count} ${importedLabel}${label} at ${value.toFixed(2)}\n`;
};
