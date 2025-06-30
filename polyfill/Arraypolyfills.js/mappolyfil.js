

// what does the map return?
// new array takes the result of the callback function
// it does not change the original array

if(!Array.prototype.myMap) {
    Array.prototype.myMap = function(userfunction) {
        console.log("userfunction", userfunction);
        if (typeof userfunction !== 'function') {
            throw new TypeError(userfunction + ' is not a function');
        }
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        // this refers to the array(in context) on which myMap is called
        const result = [];
        for (let i = 0; i < this.length; i++) {
            const value=userfunction(this[i], i,);
            console.log("value", value);
            result.push(value);
        }
        return result;
    }
}

let arr=["2","3","4"]

const doubled=arr.myMap((item) => {
    return item * 2;
    }
);
console.log(arr.__proto__)
console.log(arr.__proto__.map);   // function map() { [native code] }
console.log(arr.__proto__.filter); // function filter() { [native code] }

console.log(doubled);