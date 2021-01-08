"use strict";
let array_a = [0,1,2,3] ;
let array_b = [3,2,4,5];

console.log("union"+" "+[...new Set(array_a.concat(array_b))]);
console.log("array_a - array_b"+" "+ "=" + " " +array_a.filter(item => !array_b.includes(item)));
console.log("array_b - array_a"+" "+ "=" + " " +array_b.filter(item => !array_a.includes(item)));
console.log("intersection"+" "+ "=" + " " +array_a.filter(x => array_b.includes(x)));