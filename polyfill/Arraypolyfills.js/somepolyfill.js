


// Polyfill for Array.prototype.some
// takes one callback function
// returns true if at least one element in the array satisfies the provided testing function

Array.prototype.mySome = function(callback) {
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    // this refers to the array(in context) on which mySome is called
    for (let i = 0; i < this.length; i++) {
        // If the callback returns true for any element, return true
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    // If no element satisfies the condition, return false
    return false;
}

let arr = [1, 2, 3, 4, 5];

 const result=arr.some((item) => {
    // console.log(item);
    return item > 8; // returns true if any item is greater than 3
}
);

console.log(result); // Output: true, because 4 and 5 are greater than 3


