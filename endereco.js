class Endereco {
    constructor(logradouro, cep) {
        this.logradouro = logradouro;
        this.cep = cep;
    }

    get Logradouro() { return this.logradouro; }
    set Logradouro (logradouro) { this.logradouro = logradouro; }

    get cep() { return this.cep; }
    set cep (cep) { this.cep = cep; }

}

module.exports = Endereco;