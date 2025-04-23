function S_sort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = Number.MAX_SAFE_INTEGER;
        let min_Idx= -1;
        for(let j=i;j<=arr.length-1;j++){
            if(min > arr[j]){
                min = arr[j];
                min_Idx = j;
            }
        }
        let temp = arr[min_Idx];
        arr[min_Idx] = arr[i];
        arr[i] = temp;

    }
    console.log(arr);
}

let arr= [5,4,3,2,1];
S_sort(arr);