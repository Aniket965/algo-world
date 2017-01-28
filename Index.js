var MergeSort = require('./src/MergeSort');
var InsertionSort = require('./src/InsertionSort');
exports.sort = {
         InsertionSort : function(a){
             InsertionSort.Sort.InsertionSort(a);
  },
        MergeSort : function (array,left,right){
            MergeSort.Sort.MergeSort(array,left,right);
        }
      
    }