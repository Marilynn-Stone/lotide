# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mlstone/lotide`

**Require it:**

`const _ = require('@mlstone/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: takes in 2 arrays and logs an appropriate message based on whether they are equal or not

* `function2(assertEqual)`: takes in 2 values and returns true if they are equal and false otherwise

* `function3(assertObjectsEqual)`: takes in 2 objects and returns true if they are equal and false otherwise

* `function4(countLetters)`: takes in a sentence and returns a count of each of the letters in the sentence

* `function5(countOnly)`:  takes in a collection of items and returns a specific subset of those items

* `function6(eqArrays)`: takes in 2 arrays and returns true if the arrays are equal and false otherwise

* `function7(eqObjects)`: takes in 2 objects and return true if they are equal and false otherwise

* `function8(findKey)`: takes in an object and callback and returns the first key that meets the criteria specified in callback

* `function9(findKeyByValue)`: takes in an object and a value and returns the first key that corresponds to that value

* `function10(flatten)`: takes in an array that contains elements including nested array of elements and returns a flattened version of the array

* `function11(head)`: takes in an array and returns the first element in the array

* `function12(letterPositions)`: takes in a string and returns all indices of letter positions in the string

* `function13(map)`: takes in an array and a callback and returns a new array based on the results of the callback on each item in the array

* `function14(middle)`: takes in an array and returns middle most element of the array

* `function15(tail)`: takes in an array and returns everything except the first element of the array

* `function16(takeUntil)`: takes in an array and callback and returns a slice of the array based on the criteria specified in the callback

* `function17(without)`: takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array
