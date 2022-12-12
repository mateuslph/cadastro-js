const readline = require('readline-sync');
const Endereco = require('./endereco');
const PessoaFisica = require('./pessoaFisica');
const PessoaJuridica = require('./pessoaJuridica');

const cadastra = function (pessoa) {

    if (Object.hasOwn(pessoa, 'cpf')) {
        pessoa.Logradouro = readline.question('Informe o Logradouro: ');
        pessoa.cep = readline.question('Informe o CEP: ');
        // endereco.Logradouro = readline.question('Informe o Logradouro: ');
        // endereco.cep = readline.question('Informe o CEP: ');
        pessoa.nome = readline.question('Informe o nome: ');
        pessoa.cpf = readline.question('Informe o CPF: ');
        pessoa.dataNascimento = readline.question('Infore a Data de Nascimento: ');
    } else {
        pessoa.Logradouro = readline.question('Informe o Logradouro: ');
        pessoa.cep = readline.question('Informe o CEP: ');
        pessoa.nome = readline.question('Informe o nome: ');
        pessoa.cnpj = readline.question('Informe o CNPJ: ');
        pessoa.razaoSocial = readline.question('Informe a Razao Social: ');
    }

    return pessoa;
}

var lista = [];
var idx = 0;

do {
    var opcao = readline.question(`Cadastro de Produtos
    
    F - Pessoa Fisica
    J - Pessoa Juridica
    S - Sair
    
    opcao: `).toLowerCase();

    if (opcao == 'f') {
        lista[idx++] = cadastra(new PessoaFisica());
    } else if (opcao == 'j') {
        lista[idx++] = cadastra(new PessoaJuridica());
    }
} while (opcao != 's');

lista.forEach(pessoa => {
    console.log('\n');
    console.log('Nome: ', pessoa.nome);
    console.log('Logradouro: ', pessoa.Logradouro);
    console.log('CEP: ', pessoa.cep);
    if (Object.hasOwn(pessoa, 'cpf')) {
        console.log('CPF: ', pessoa.cpf);
        console.log('Data de Nascimento: ', pessoa.dataNascimento);
    } else {
        console.log('CNPJ: ', pessoa.cnpj);
        console.log('Razao Social: ', pessoa.razaoSocial);
    }
});
