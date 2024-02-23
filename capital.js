//Convert all the strings to title caps in a string array


// IIFE function
console.log("IIFE function");
let string = ["swetha", "venkatesan"];

(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  console.log(string);
})(string);



//Amomymous Function

console.log("Amomymous Function");
let string1=function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
 console.log(arr);
}
string1(["swetha", "venkatesan"])


//Arrow function
console.log("Arrow function");
let string2 = ["swetha", "venkatesan"];

(() => {
  string2 = string2.map(str => str.charAt(0).toUpperCase() + str.slice(1));
})();
console.log(string2);