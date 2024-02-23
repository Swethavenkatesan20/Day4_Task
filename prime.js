//Return all the prime numbers in an array
//IIFE function
console.log("IIFE function");
let count = 0;

(
    function(arr){
    for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 1; j <= arr[i]; j++) {
        if (arr[i] % j === 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log(arr[i] + " is prime");
    } 
}
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//anonymous function
console.log("anonymous function");
let arr1 = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count1 = 0; 
        for (let j = 1; j <= arr[i]; j++) {
            if (arr[i] % j === 0) {
                count1++;
            }
        }
        if (count1 === 2) {
            console.log(arr[i] + " is prime");
        }
    }
}

arr1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Arrow function

console.log("arrow function");
const arr2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 1; j <= arr[i]; j++) {
            if (arr[i] % j === 0) {
                count++;
            }
        }
        if (count === 2) {
            console.log(arr[i] + " is prime");
        }
    }
};

arr2([11, 12, 13, 14, 15, 16, 17, 18, 19, 10]);

