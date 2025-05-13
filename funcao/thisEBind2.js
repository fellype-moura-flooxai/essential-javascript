const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar(); // Bom dia
const falar = pessoa.falar; // função anônima
falar(); // undefined

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa(); // Bom dia
// this é o objeto que está chamando a função
