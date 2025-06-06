let texto = '"Texto"';
console.log(texto);

console.log(texto[4]);
console.log(texto[10]);
console.log(texto[-10]);

console.log(texto.charAt(4));
console.log(texto.charAt(3));
console.log(texto.charAt(8));

console.log(texto.concat(" descrito no codigo"));

let descricao = "Olá mundo";

console.log();
console.log(descricao.indexOf("mundo"));
console.log(descricao.indexOf("mundo", 6));
console.log(descricao.indexOf("n", 5));
console.log(descricao.lastIndexOf("n", 5));

console.log();
console.log("Expressão Regular");
console.log();

let teste = "Um teste";
console.log(teste.match(/[a-z]/g));
console.log(teste.match(/s/));
console.log(teste.search(/s/));

console.log();
console.log("Substituição");
console.log();

console.log(teste.replace("Um", "Outro"));
// console.log(teste.replace(/Um/,'Outro'));
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.replace(/r/, "#"));
console.log(umaString.replace(/r/g, "#"));

console.log();
console.log(umaString.length);

console.log();
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-3));

console.log();
console.log(umaString.split(" "));
console.log(umaString.split(" ", 2));

console.log();
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
