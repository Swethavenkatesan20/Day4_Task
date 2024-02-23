//Return median of two sorted arrays of the same size
//IIFE
let median = (function() {
    return function(arr1, arr2) {
        let merge = [...arr1, ...arr2].sort((a, b) => a - b);
        let length = merge.length;
        let mid = Math.floor(length / 2);
        
        if (length % 2 === 0) {
            return (merge[mid - 1] + merge[mid]) / 2;
        } else {
            return merge[mid];
        }
    };
})();   //immidiately invoking here
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(median(arr1, arr2)); 




//anonymous function

let median1 = function(arr3, arr4) {
    let merge = [...arr3, ...arr4].sort((a, b) => a - b);
    let length = merge.length;
    let mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (merge[mid - 1] + merge[mid]) / 2;
    } else {
        return merge[mid];
    }
};

let arr3 = [1, 3, 5];
let arr4 = [2, 4, 6];
console.log(median1(arr3, arr4)); 
