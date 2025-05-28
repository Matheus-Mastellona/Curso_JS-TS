const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const key of numeros) {
  if (key === 2) {
    console.log("Pulei o número 2");
    continue; // O continue faz com que a iteração atual seja pulada e o loop continue para o próximo elemento. Neste caso, quando key == 2, o console.log não será executado e o loop seguirá para key == 3
  } else if (key === 5) {
    console.log("Pulei o número 5");
    continue;
  } else {
    console.log(key);
  }
}

console.log("\n");

for (const key of numeros) {
  if (key === 7) {
    console.log(`${key} encontrado, saindo...`);
    break; // O break faz com que o loop seja completamente interrompido quando a condição é satisfeita. Neste caso, quando key === 7, o console.log é executado e o loop é encerrado, não continuando para os elementos restantes
  } else {
    console.log(key);
  }
}
