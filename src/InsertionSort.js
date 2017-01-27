var  a =[2,15,4366,4,123,32,4];
function InsertionSort(a){
var i;
for(var j = 1;j < a.length;j++){
    var key = a[j];
   i=j-1;
   while(i>0 && a[i]>key){
       a[i+1] = a[i];
       i--;

   }
   a[i+1]=key;
}

console.log(a);
}
InsertionSort(a);
