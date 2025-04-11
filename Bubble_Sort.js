function Bubble(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
    console.log(arr);
}
let arr=[5,4,3,2,1]  // worst case
// let arr=[9,1,3,4,10,5,6]  // normal ccase
Bubble(arr)