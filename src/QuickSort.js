 exports.Sort={ 
partition:function(array,left,right){
   var pivot = array[right];
   var partitionLine = left;
    for(i = left;i<right;i++){
        if(array[i]<=pivot){
           var  temp =array[partitionLine];
            array[partitionLine]= array[i];
            array[i]= temp ;
            partitionLine++;
        }
        
    }
    var  temp =array[partitionLine];
            array[partitionLine]= array[right];
            array[right]= temp ;
            return partitionLine;

},


 quickSort:function(array,left,right){
    if(left<=right){
      var   partitionLine  =  this.partition(array,left,right);
      this.quickSort(array,left,partitionLine-1);
      this.quickSort(array,partitionLine+1,right);
    }
}


 }
