// JavaScript program to find the area of a triangle where three sides are 5, 6, 7
let sideOne = 5;
let sideTwo = 6;
let sideThree = 7;

let s = (sideOne + sideTwo + sideThree) / 2;

let area = Math.sqrt(s * ((s - sideOne) * (s - sideTwo) * (s - sideThree)));

console.log(area);