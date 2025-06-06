/* Declaração de função ( Function hoisting ) */
z();

function z(){
    console.log('Olá!');
}

/*
 First-class objects (Objetos de primeira classe)
 Function expression
 */

const souUmDado = function(){
    console.log('Sou um dado.');
}

souUmDado();

function executaFuncao(funcao){
    console.log("Vou executar a sua função a baixo:");
    funcao();
}

executaFuncao(souUmDado);

/* Arrow function */ 

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();

/*
    Dentro de um objeto
*/

const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
}

obj.falar();


/*
    setInterval(function(){
    console.log('Executando a cada 1 segundo');
    }, 1000);
*/
