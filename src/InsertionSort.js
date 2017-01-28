exports.Sort={
InsertionSort:function(a){
var i;
for(var j = 1;j < a.length;j++){
    var key = a[j];
   i=j-1;
   while(i>=0 && a[i]>key){
       a[i+1] = a[i];
       i--;

   }
   a[i+1]=key;
}
}}