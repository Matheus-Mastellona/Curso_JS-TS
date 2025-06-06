/*

    If pode ser usado sozinho
    Sempre que utilizo a palavra else, preciso de um if antes
    Eu posso ter vários else if na checagem
    Só posso ter um else na checagem
    Podemos usar condições sem else if, utilizando apenas if e else

*/

const hora = 10;

if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

