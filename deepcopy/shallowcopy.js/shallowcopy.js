
// In shallowcopy we create only the reference of the original object.
// If we change the original object, the shallow copy will also reflect that change.
let obj1 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "gaming"]
};

let obj2={...obj1}; // Shallow copy using spread operator
obj1.address.city = "Los Angeles"; // Modifying the original object
obj1.address.district = "Downtown"; // Adding a new property to the original object
obj2.address.district = "San Francisco"; // Modifying the shallow copy object
obj1.education = "Bachelor's"; // Adding a new property to the original object(not in obj2 because it is shallow copy       )
obj2.education = "Master's"; // Adding a new property to the shallow copy object
console.log("Original Object:", obj1);
console.log("Shallow Copied Object:", obj2);

// Arrays are also objects in JavaScript, so the same shallow copy applies.
let arr1 = [1, 2, 3, { a: 4 }];
let arr2 = [...arr1]; // Shallow copy using spread operator
arr1[3].a = 5; // Modifying the original array
arr2[3].b = 6; // Adding a new property to the shallow copy array
console.log("Original Array:", arr1);
console.log("Shallow Copied Array:", arr2);