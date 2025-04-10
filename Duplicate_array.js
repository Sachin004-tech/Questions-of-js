function duplicate(arr) {
    let n=arr.length-1;
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i]
    }
    let expectedSum = (n * (n + 1)) / 2;
    let result = sum - expectedSum;
    console.log("Actual sum:", sum);
    console.log("Expected sum:", expectedSum);
    console.log("Duplicate number is:", result);
}

let arr = [6,1,7,3,2,5,4,8,9,9,10];
duplicate(arr);
