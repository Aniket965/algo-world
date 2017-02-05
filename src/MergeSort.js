exports.Sort={
Merge:function (array,left,right,middle){
    n1 = middle - left +1;
    n2 = right - middle;
   var  L = [];
   var R = [];
    for(var i =0;i<n1;i++){
        L[i] = array[left + i ];
    }
    for(var j=0;j<n2;j++){
        R[j]=array[middle+j+1];
    }
    
    i = 0;    
    j = 0 ;   
    var k = left;
	        while (i < n1 && j < n2)
	        {
	            if (L[i] <= R[j])
	            {
	                array[k] = L[i];
	                i++;
	            }
	            else
	            {
	                array[k] = R[j];
	                j++;
	            }
	            k++;
	        }
	 
	        while (i < n1)
	        {
	            array[k] = L[i];
	            i++;
	            k++;
	        }
	 
	   while (j < n2)
	        {
	            array[k] = R[j];
	            j++;
	            k++;
	        }
	    },
 MergeSort:function(array,left,right){
    if(left < right){
        var middle = Math.floor((left +right)/2);
        this.MergeSort(array,left,middle);
        this.MergeSort(array,middle+1,right);
        this.Merge(array,left,right,middle);

    }
}
}