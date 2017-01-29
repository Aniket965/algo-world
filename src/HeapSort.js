exports.Sort = {
HeapSort:function(array,size){
this.buildMax(array, size);
 for(var i = size - 1; i >0; i--){
            var temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            this.MaxHeapify(array, i, 0);
        }
}, buildMax:function(array,  size){
        for(var i =Math.floor((size/2)-1); i >= 0; i--)
        this.MaxHeapify(array, size,i);
}, MaxHeapify:function (array,size,root){
        var left = (2 * root) + 1;
        var right = left + 1;
        var temp,largest=root;
        if(left < size  && array[left] > array[root])
            largest = left;
        else
            largest = root;
        if(right < size && array[right] > array[largest])
            largest = right;
        if(largest != root){
            temp = array[root];
            array[root] = array[largest];
            array[largest] = temp;
            this.MaxHeapify(array, size,largest);
        }
}}