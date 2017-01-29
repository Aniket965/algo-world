exports.Sort = {
HeapSort:function(array,size){
this.buildMax(array, size);
 for(var i = size - 1; i >=0; i--){
            var temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            this.MaxHeapify(array, 0, i);
        }
}, buildMax:function(array,  size){
        for(var i = (size - 1) / 2; i >= 0; i--)
        this.MaxHeapify(array, i, size);
}, MaxHeapify:function (array,root){
        var left = 2 * root + 1;
        var right = left + 1;
        var temp,largest;
        if(left < array.length && array[left] > array[root])
            largest = left;
        else
            largest = root;
        if(right < size && array[right] > array[largest])
            largest = right;
        if(largest != root){
            temp = array[root];
            array[root] = array[largest];
            array[largest] = temp;
            this.MaxHeapify(array, largest, size);
        }
}}