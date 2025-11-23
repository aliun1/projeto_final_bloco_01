// tudo que tem no ProdutoController ele esta sendo usado pelo Produto.ts
    export class Produto { // export permite que outros arquivos importem essa classe e estou criando um modelo chamado Produto
    //ATRIBUTOS
    private _id: number; // private só o proprio arquivo pode acessar diretamente
    private _preco: number; // nome comeca com _ para diferenciar do getter/setter
    private _nomeProduto: string; // string = texto 
    private _quantidade: number; // number = tipo numerico

     constructor(
        _id: number,
        _preco: number,
        _nomeProduto: string,
        _quantidade: number
    ) {
        this._id = _id;
        this._preco = _preco;
        this._nomeProduto = _nomeProduto;
        this._quantidade = _quantidade;
    }
// // id: identificador do produto (único)
// _preco: quanto custa
// _nomeProduto: nome
// _quantidade: estoque disponível

// constructor é chamado toda vez que eu criar um novo produto
// id → vira _id
// preco → vira _preco
// nomeProduto → vira _nomeProduto
// quantidade → vira _quantidade
// Ou seja, ele recebe valores e guarda dentro do objeto

    // GETTERS - para ler os valores dos atributos
    public get id() { // public pode ser acessado por outros arquivos
        return this._id;
    }
// get = quando você acessar produto.id, esse método roda
// return this._id = devolve o id salvo
//nao é permitido fazer = ._id (porque é private)
        public get preco() {
        return this._preco;
    }
        public get nomeProduto() {
        return this._nomeProduto;
    }
            public get quantidade() {
        return this._quantidade;
    }
    // SETTERS - para alterar os valores dos atributos
        public set preco(value: number) { //value é o novo valor.
        this._preco = value;
    }
        public set nomeProduto(value: string) {
        this._nomeProduto = value;
    }
        public set quantidade(value: number) {
        this._quantidade = value;
    }

        public visualizar(): void { // void = nao retorna nada
        console.log("\n-----------------------------");
        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nomeProduto}`);
        console.log(`Preço: R$ ${this._preco}`);
        console.log(`Quantidade: ${this._quantidade}`);
        console.log("-----------------------------");
    }
}