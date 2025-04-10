function pairs(arr){
    let target = 8;
    let pairs=0;
   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===target){
            pairs++;
            console.log(`the number:${arr[i]} and the number ${arr[j]} additin is:`,arr[i]+arr[j]);
            break;
        }
    }
   }
}
let arr=[1,2,3,4,5,8,9,10]
pairs(arr);