const Endereco = require("./endereco");

class Pessoa {
    constructor(nome, endereco) { 
       this.nome = nome;
       endereco = Endereco;
    }

    get Nome() { return this.nome; }
    set Nome (nome) { this.nome = nome; }

    get Endereco() { return this.endereco; }
    set Endereco (endereco) { this.endereco = endereco; }

}

module.exports = Pessoa;