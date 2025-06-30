

// deepcopy means 
// create a new object with the same properties as the original object.
let obj1 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "gaming"]
};
let obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy using JSON methods
obj1.address.city = "Los Angeles"; // Modifying the original object
obj1.address.district = "Downtown"; // Adding a new property to the original object
obj2.address.district = "San Francisco"; // Modifying the deep copy object
obj1.education = "Bachelor's"; // Adding a new property to the original object(not in obj2 because it is deep copy)
obj2.education = "Master's"; // Adding a new property to the deep copy object
console.log("Original Object:", obj1);
console.log("Deep Copied Object:", obj2);