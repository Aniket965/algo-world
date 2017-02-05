var MergeSort = require('./src/MergeSort');
var InsertionSort = require('./src/InsertionSort');
var HeapSort = require('./src/HeapSort');
var ShakerSort= require('./src/ShakerSort');
var PeakFinding = require('./src/PeakFinding');
var BinarySearch = require('./src/BinarySearch');
exports.sort = {
         InsertionSort : function(a){
             InsertionSort.Sort.InsertionSort(a);
  },
        MergeSort : function (array){
            left = 0
            right= array.length -1;
            MergeSort.Sort.MergeSort(array,left,right);
        },
        HeapSort:function(array){
            HeapSort.Sort.HeapSort(array,array.length);

        },
        ShakerSort:function(array){
            ShakerSort.Sort.shakerSort(array);
        }
       
      
    }
    exports.find={
         PeakFinding1D:function(array){
            PeakFinding.Find.PeakFinding1D(array);
        },
        BinarySearch:function(key,array){
            BinarySearch.Find.BinarySearch(key,array,0,array.length);
        }

    }