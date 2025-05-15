function criaPessoa(nome, sobreNome, idade) {
  return { nome, sobreNome, idade };
}

const pessoa1 = criaPessoa("Jose", "Aluario", 1);

console.log(pessoa1);
console.log(pessoa1.nome);

const pessoa2 = criaPessoa("Maria", "Aluario", 2);
const pessoa3 = criaPessoa("Matheus", "Aluario", 3);

console.log(pessoa2.nome, pessoa3.nome);

const pessoa4 = {
  nome: "Luiz",
  sobreNome: "Miranda",
  saldo: 25,

  fala() {
    console.log(
      `${this.nome} ${this.sobreNome} está online.`
    );
  },

  comprarSorvete(n) {
    this.saldo = this.saldo - n;
  },

  infoSaldo() {
    console.log(
      `${this.nome} ${this.sobreNome} está com o saldo de: ${this.saldo}`
    );
  },
};

pessoa4.fala();
pessoa4.comprarSorvete(5);
pessoa4.infoSaldo();
