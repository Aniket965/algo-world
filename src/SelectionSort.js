 exports.Sort ={
     
      SelectionSort:function(array){
    for(var i =0;i<array.length-1;i++){

        for(var j =i+1 ;j < array.length;j++){

            if(array[j]<array[i]){
                var temp = array[j];
                array[j] = array[i];
                array[i] = array[j]; 
            }
        }
    }
}


}
