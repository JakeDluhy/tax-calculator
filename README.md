# Audio Staq Tax Calculator Problem
A module to calculate sales tax for items

## The Problem
Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.
 
When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid.  The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

## Getting started
This project depends on flow and was built and tested on node `v8.9.4`. Clone the repo and run `npm install`.

## Running the Tests
Run `npm test`

## Checking Flow annotations
Run `npm run flow`

## Building the Modules
Run `npm run build`

## My Solution
Here is an explanation of my thought process for the solution. I tried to capture my programming logic as I went. I would also recommend looking through the git log in order to understand the way I worked.

* I started by initializing the npm project and adding flow. Although I've never used flow outside of a webpack/React build process, I wanted some type annotations in order to help readibility of the application.
* I wrote out the test cases in their own file and defined the types. Were I working with a client, I would work with them in order to define the expected data input and output to the system.

  Because I was defining it myself, I decided that the SalesItem type would containing label, value, and count information about the product. It would also be annotated (with a flag) based on whether it is an item exempt from taxes or imported.

  I thought the idea of parsing through some sort of input text to try and determine whether the item is exempt would be a bad idea. This module shouldn't be concerned with identifying exempt items, only calculating taxes.

  I decided that the returned data object would have an array corresponding with the input data sales item array with each corresponding sales tax total. It would also calculate the total cost of the shopping cart including sales tax.

* I added the tax calculator module itself. This was pretty simple to program, using a simple reduce function and setting the sales tax rate based on the passed in flags for exemptions and importation. I defined several of the application constants in this file, if they would need to be shared or accessed otherwise they could easily be refactored to another module.
* I added a print information module to complement the tax calculator. This prints the input and output information.
* I fixed a bug in the application caught by the test cases where I was rounding to the nearest 5 cent increment, instead of always rounding up.
* I updated the package to better allow it to be built and published.
* I added eslint and caught corresponding linting errors
* I decided that a single print-information file was a little limiting. What if the client needs to print information about the input in one place and the output in another? So I broke out the list-item function into a helper folder, and broke print-information into two modules: print-input and print-output.
