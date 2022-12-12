const Pessoa = require('./pessoa');
class PessoaJuridica extends Pessoa {
    constructor(nome, cnpj, razaoSocial) {
        super(nome);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }

    get Cnpj() { return this.cnpj; }
    set Cnpj (cnpj) { this.cnpj = cnpj; }

    get RazaoSocial() { return this.razaoSocial; }
    set RazaoSocial (razaoSocial) { this.razaoSocial = razaoSocial; }

}

module.exports = PessoaJuridica;