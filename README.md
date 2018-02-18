# Audio Staq Tax Calculator Problem
A module to calculate sales tax for items

## The Problem
Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.
 
When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid.  The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

## Running the Tests
This project depends on flow and was built and tested on node `v8.9.4`. Run
```
npm install
npm test
```
To run the test cases.
