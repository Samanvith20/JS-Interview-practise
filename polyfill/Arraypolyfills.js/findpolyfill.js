


// Polyfill for Array.prototype.find
//  The find method returns the value of the first element in the array that satisfies the provided testing function.

Array.prototype.myFind = function(callback) {
    if(this == null) {
        throw new TypeError('this is null or not defined');
    }
    if(typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    for(let i = 0; i < this.length; i++) {
        // If the callback returns true, return the current element
        if(callback(this[i], i, this)) {
            return this[i];
        }
    }
}
let arr = [1, 2, 3, 4, 5];

  const result=arr.myFind((item) => {
    return item > 3;
})



console.log(result); // Output: 4
