const num = prompt("Digite o seu número:");
document.body.innerHTML += `<h1>Seu número é: ${num}</h1><br />`;
document.body.innerHTML += `Raiz quadrada: ${num ** (1 / 2)}<br />`;
document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(
  Number(num)
)}<br />`;
document.body.innerHTML += `É NaN: ${Number.isNaN(num)}<br />`;
document.body.innerHTML += `Arredondado para baixo: ${Math.floor(num)}<br />`;
document.body.innerHTML += `Arredondado para cima: ${Math.ceil(num)}<br />`;
document.body.innerHTML += `Com duas casa decimais: ${Number(num).toFixed(
  2
)}<br />`;
