exports.Find={
 BinarySearch:function(key,array,left,right){

    middle = Math.floor((left+right)/2);
       if(left>right){
         console.log('not found');
     }
   else if(key==array[middle]){
        console.log(`found ${array[middle]} at index ${middle}`);
    }
    else if (key>array[middle]){
        this.BinarySearch(key,array,middle+1,right)
    }
    else if (key<array[middle]){
        this.BinarySearch(key,array,left,middle-1);
    }
    
   
}
}
