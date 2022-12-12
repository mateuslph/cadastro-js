const Pessoa = require('./pessoa');

class PessoaFisica extends Pessoa {
    constructor(nome, cpf, dataNascimento) {
        super(nome);
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    get Cpf() { return this.cpf; }
    set Cpf (cpf) { this.cpf = cpf; }

    get DataNascimento() { return this.dataNascimento; }
    set DataNascimento (dataNascimento) { this.dataNascimento = dataNascimento; }

}

module.exports = PessoaFisica;