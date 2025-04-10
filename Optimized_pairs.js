function pairs(){
    let target =8;
    let i=0;
    let j=arr.length-1;
    while(i<j){
        if(arr[i] + arr[j] === target){
            console.log(`the number:${arr[i]} and the number ${arr[j]} additin is:`,arr[i]+arr[j]);
            break;
        }
        if(arr[i] + arr[j] > target){
            j--;
        }
        if(arr[i] + arr[j] < target){
            i++;
        }
    }
}
let arr=[1,2,3,4,5,8,9,10]
pairs(arr);