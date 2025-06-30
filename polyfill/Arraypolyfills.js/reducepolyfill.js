

// Reduce Polyfill
// reduce takes a callback function and an initial value
// it returns a single value by applying the callback function to each element in the array


if(!Array.prototype.myReduce) {
 
    Array.prototype.myReduce = function(callback, initialValue) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        
        let accumulator = initialValue;
        let startIndex = 0;

        // If initialValue is not provided, use the first element of the array
        if (accumulator === undefined) {
            if (this.length === 0) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            accumulator = this[0];
            startIndex = 1; // Start from the second element
        }

        for (let i = startIndex; i < this.length; i++) {
            accumulator = callback(accumulator, this[i], i, this);
        }
        
        return accumulator;
    };
}



let arr= [1, 2, 3, 4, 5];





const sum=arr.reduce((acc, item)=>{
    console.log("acc", acc);
    console.log("item", item);
    return acc + item;
},5)

 console.log("sum", sum);

