exports.Sort={
PeakFinding:function (array){
    for(var i =1 ;i<array.length-1;i++){
        if(array[i-1]<array[i]&&array[i]>array[i+1]){
        console.log("found peak "+array[i]+ " at Index " +` ${i+1}`);
            break;
        }}}
}
