// Collection Functions (Arrays or Objects)

// Function to iterate over the collection and apply a callback to each element
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (const key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

// Function to create a new array by applying a callback to each element in the collection
function myMap(collection, callback) {
    const result = [];
    myEach(collection, item => result.push(callback(item)));
    return result;
}

// Function to reduce a collection to a single value
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue === undefined ? collection[0] : initialValue;
    const startIndex = initialValue === undefined ? 1 : 0;
    myEach(collection.slice(startIndex), item => accumulator = callback(accumulator, item));
    return accumulator;
}

// Function to find the first element in the collection that satisfies the predicate
function myFind(collection, predicate) {
    for (const item of collection) {
        if (predicate(item)) {
            return item;
        }
    }
}

// Function to filter elements in the collection based on a predicate
function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, item => {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
}

// Function to get the size of the collection
function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions

// Function to get the first n elements of an array
function myFirst(array, n = 1) {
    return array.slice(0, n);
}

// Function to get the last n elements of an array
function myLast(array, n = 1) {
    return array.slice(Math.max(array.length - n, 0));
}

// Sample usage:
const sampleArray = [1, 2, 3, 4, 5];
const sampleObject = { one: 1, two: 2, three: 3 };

console.log(myEach(sampleArray, num => console.log(num))); // Output: 1 2 3 4 5 [1, 2, 3, 4, 5]
console.log(myEach(sampleObject, num => console.log(num))); // Output: 1 2 3 { one: 1, two: 2, three: 3 }

console.log(myMap(sampleArray, num => num * 2)); // Output: [2, 4, 6, 8, 10]
console.log(myMap(sampleObject, num => num * 2)); // Output: [2, 4, 6]

console.log(myReduce(sampleArray, (acc, num) => acc + num, 0)); // Output: 15
console.log(myReduce(sampleObject, (acc, num) => acc + num, 0)); // Output: 6

console.log(myFind(sampleArray, num => num % 2 === 0)); // Output: 2
console.log(myFind(sampleObject, num => num % 2 === 0)); // Output: 2

console.log(myFilter(sampleArray, num => num % 2 === 0)); // Output: [2, 4]
console.log(myFilter(sampleObject, num => num % 2 === 0)); // Output: [2]

console.log(mySize(sampleArray)); // Output: 5
console.log(mySize(sampleObject)); // Output: 3

console.log(myFirst(sampleArray, 2)); // Output: [1, 2]
console.log(myLast(sampleArray, 2)); // Output: [4, 5]
