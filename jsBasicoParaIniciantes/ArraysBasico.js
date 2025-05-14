const nome = "Luiz Maria João";
console.log(nome[0]);

const alunosArray = ["Luiz", "Maria", "João"];

console.log(alunosArray);
console.log(alunosArray[0]);

alunosArray[0] = "Eduardo"; // mudando um existente
console.log(alunosArray);

alunosArray[3] = "Louise"; // add um novo
console.log(alunosArray);

console.log(alunosArray.length); // tamanho do array

alunosArray[alunosArray.length] = "José"; // add um novo sem precisar passar o numero do mesmo, indo ao fim array
console.log(alunosArray);

alunosArray.push("Otavio"); // outra maneira de add ao array, e ao final do mesmo
console.log(alunosArray);

alunosArray.unshift("Matheus"); // será o primeiro do array, devido ao unshift
console.log(alunosArray);

alunosArray.pop(); // removendo do fim do array
alunosArray.pop();
console.log(alunosArray);

const removido = alunosArray.pop(); // salvar o removido
console.log(removido);
console.log(alunosArray);

alunosArray.shift(); // removido o primeiro
console.log(alunosArray);

console.log(alunosArray.slice(0, -1));


console.log(typeof alunosArray);
console.log(alunosArray instanceof Array);
