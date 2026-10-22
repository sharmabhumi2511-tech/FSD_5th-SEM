//map , filter , reduce , find arr mtd imp
//hof = higher order function

let nums = [1, 2, 3, 4, 5];

// map map takes callback
let mapResult = nums.map(num => num * 2);

// filter
let filterResult = nums.filter(num => num > 2);

// reduce
// array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, initialValue);
let reduceResult = nums.reduce((sum, num) => sum + num, 0);

// find
let findResult = nums.find(num => num > 3); //pahli matching value return krega

console.log(mapResult);     // [2, 4, 6, 8, 10]
console.log(filterResult);  // [3, 4, 5]
console.log(reduceResult);  // 15
console.log(findResult);    // 4