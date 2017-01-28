var  a =[2,15,4366,4,123,32,4];

function Merge(array,left,right,middle){
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
	    }
    

 
    


function MergeSort(array,left,right){
    if(left < right){
        var middle = Math.floor((left +right)/2);
        MergeSort(array,left,middle);
        MergeSort(array,middle+1,right);
        Merge(array,left,right,middle);

    }
}
MergeSort(a,0,a.length-1);
console.log(a);