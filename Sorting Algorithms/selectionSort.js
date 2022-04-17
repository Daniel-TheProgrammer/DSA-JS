/**
 * @file selectionSort.js
 * @description 
 *  Implementation of Selection sort
 * @date 17 April 2022
 * @author Samuel Tiokeng
 */

function selectionSort(items) {
  
  var min;

  for(var i = 0; i < items.length; i++) {
    min = i;
    for(var j = i + 1; j < items.length; j++) {
      if(items[j] < item[i]) {
        min = j;
      }
    }

    if( i != min ) {
      swap(items, i, min)
    }
  }
}

selectionSort([6,1,25,4,2])