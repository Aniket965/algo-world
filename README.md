# algo-world [![Build Status](https://travis-ci.org/Aniket965/algo-world.svg?branch=master)](https://travis-ci.org/Aniket965/algo-world)

This is an  node package  which enable you to use different algorithms which are inbuilt in it

[NPM](https://www.npmjs.com/package/algo-world)

## Install

```
npm install algo-world
```
## Usage

```javascript
const algoworld = require('algo-world');
array=[2,4,3,6,2,4,234,23,2,0,7,9,3,45,5,6,6,2,1,4];
algoWorld.sort.InsertionSort(array);
console.log(array);
```

## Content
InsertionSort
```javascript
algoWorld.sort.InsertionSort(array);
```
MergeSort
```javascript
algoWorld.sort.MergeSort(array);
```
ShakerSort
```javascript
algoWorld.sort.ShakerSort(array);
```
HeapSort
```javascript
algoWorld.sort.HeapSort(array);
```
Peakfinding1D
```javascript
algoWorld.find.Peakfinding1D(array);
// logs the peak with index
```
BinarySearch
```javascript
algoWorld.find.BinarySearch(key,array);
// logs if found with index
```
QuickSort
```javascript
algoWorld.sort.QuickSort(array);
```
SelectionSort
```javascript
algoWorld.sort.SelectionSort(array);
```
