


// Polyfill for Array.prototype.forEach
// return undefined, takes a callback function
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        // this refers to the array(in context) on which myForEach is called
        for (let i = 0; i < this.length; i++) {
            // call the callback function with the current element, index, and the array itself
            callback(this[i], i, this);
        }
    };
}

let arr=[1, 2, 3, 4, 5];

arr.myForEach((item, index) => {
    console.log(`Item at index ${index}: ${item}`);
}
);