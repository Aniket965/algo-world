var  a =[2,15,4366,4,123,32,4];
//for merging elements
function Merge(array,left,right,middle){
    n1 = middle - left +1;
    n2 = right - middle;
 var  L = [];
   var R = [];
    for(var i =0;i<n1;i++){
        L[i] = array[left + i];
    }
    console.log(L);
    for(var j=0;j<n2;j++){
        R[j]=array[middle+left+j];
    }
    
    i = 0    
    j = 0    
    k = left    
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]){
            array[k] = L[i]
            i += 1
        }
        else{
            array[k] = R[j]
            j += 1
        k += 1
        }
    }
    while( i < n1){
        array[k] = L[i]
        i += 1
        k += 1
    }
   
    while (j < n2){
        array[k] = R[j]
        j += 1
        k += 1
    }
    

}

function MergeSort(array,left,right){
    if(left < right){
        var middle = Math.floor((left+right)/2);
        MergeSort(array,left,middle);
        MergeSort(array,middle+1,right);
        Merge(array,left,right,middle);

    }
}
MergeSort(a,0,a.length-1);
console.log();