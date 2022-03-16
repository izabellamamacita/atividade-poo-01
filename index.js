class Pessoa{
  constructor(nome, data_nascimento, ano_nascimento, altura){
    this.nome = nome;
    this.data_nascimento = data_nascimento;
    this.ano_nascimento = ano_nascimento;
    this.altura = altura;
  }

  mostrarAtributos(){
    console.log(this.nome)
    console.log(this.data_nascimento)
    console.log(this.ano_nascimento)
    console.log(this.altura)
    
  }

calcularIdade(){
  return 2022 - this.ano_nascimento;
}

idade(){
  return this.calcularIdade();
 }
}

let pessoa = new Pessoa("Izabella", "25/05", "2005", "160");

pessoa.mostrarAtributos();
console.log(pessoa.idade());