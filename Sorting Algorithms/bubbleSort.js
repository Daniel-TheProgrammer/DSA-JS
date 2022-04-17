/**
 * @file bubbleSort.js
 * @title BubbleSort
 * @Description 
 *  Implementing the Bubble Sort Algorithm
 * @Date 17 April 2022
 * @author Samuel Tiokeng
 */

function swap(array, index1, index2) {
  var temp = array[index1]
  array[index1] = array[index2]
  array[index2] = array[index1]
}

function bubbleSort(array) {
  for(var i = 0; i < array.length; i++) {
    for( var j = 0; j <= i; j++) {
      if(array[i] > array[j]) {
        swap(array, i, j)
      }
    }
  }
  return array
}