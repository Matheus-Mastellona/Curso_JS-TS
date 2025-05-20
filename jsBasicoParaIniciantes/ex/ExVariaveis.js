let varA = "A";
let varB = "B";
let varC = "C";

console.log(varA, varB, varC);

// const temp = varA;

// varA = varB;
// varB = varC;
// varC = temp;

// console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
