function retornar(x) {
  return typeof x !== 'number'
    ? "Digite um número!" 
    : x % 3 === 0 && x % 5 === 0
    ? "FizzBuzz"
    : x % 3 === 0
    ? "Fizz"
    : x % 5 === 0
    ? "Buzz"
    : x;
}

console.log(retornar('A'));
