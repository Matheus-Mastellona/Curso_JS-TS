/*

&& -> false && true -> false "o valor mesmo"
|| -> true || false -> true "o valor verdadeiro"

FALSY VALUES -> 0, "", undefined, null, NaN, false

truthy values -> "0", " ", [], {}, function(){}, true, 1, -1

*/

let h = 10;
let i = ++h;
console.log(i);
console.log(h);
 
let j = 10;
let k = j--;
console.log(k);
console.log(j);

let l = 10;
let m = --l;
console.log(m);
console.log(l);

let n = 10;
let o = 20;
let p = 30;

console.log(n > o && n > p);
console.log(n > o || n > p);
console.log(!(n > o));

/*

if else if else
! ->

let a = 10;
let b = 20;
let c = 30;
let d = 40;

if(a > b && a > c && a > d){
    console.log("a is greater");
}else if(b > c && b > d){
    console.log("b is greater");
}else if(c > d){
    console.log("c is greater");
}else{
    console.log("d is greater");
}

*/