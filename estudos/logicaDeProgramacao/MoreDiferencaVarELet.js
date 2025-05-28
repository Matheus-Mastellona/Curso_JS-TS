/*
   Let tem escopo de bloco { ... bloco }
   Var só tem escopo de função
 */

{
  {
    {
      {
        var sera = "Será???";
        console.log(sera);
      }
    }
  }
}

console.log(sera);

function teste() {
  var local = 123;
  console.log(local);
}

teste();
console.log(local); // Erro, pois a variável local só existe dentro da função teste()

/* 
Quando se cria uma variável fora de uma função, ela é global
   Quando se cria uma variável dentro de uma função, ela é local
   O escopo de uma variável var é global e de uma variável let é local
   O escopo de uma variável var é global e de uma variável let é local
   O escopo de uma variável var é global e de uma variável let é local
Let tem escopo de bloco {... bloco} 
*/
