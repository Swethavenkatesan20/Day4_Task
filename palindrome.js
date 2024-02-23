//Return all the palindromes in an array
console.log("IIFE function");
const palindrom = (() => {
    const num = (str) => {
        const len = Math.floor(str.length / 2);
        for (let i = 0; i < len; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    };

    const arr = ["mom","swe"];
    return arr.filter(word => num(word));
})();
console.log(palindrom); 




console.log("Anonymous function");
const strings = ['swe', 'mom'];
const palindromes = strings.filter(function(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
});
console.log(palindromes); 



console.log("Arrow function");
const strings1 = ['swe', 'mom'];
const palindrom1 = strings1.filter(str => {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
});
console.log(palindrom1); // Output: ['mom']
