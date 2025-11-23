import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

// Controller que implementa o contrato da interface ProdutoRepository
export class ProdutoController implements ProdutoRepository {

    // Lista onde os produtos serão armazenados
    private listaProdutos: Produto[] = [];

    // Controla a geração de IDs automáticos
    private proximoId: number = 0;

    // Gera um novo ID incremental
    public gerarId(): number {
        return ++this.proximoId;
    }

    // Procura um produto pelo ID e retorna ele ou null
    public procurarPorId(id: number): Produto | null {
        for (let p of this.listaProdutos) {
            if (p.id === id) return p;
        }
        return null;
    }

    // Lista todos os produtos cadastrados
    public listar(): void {
        if (this.listaProdutos.length === 0) {
            console.log("\nNenhum produto cadastrado!");
            return;
        }

        console.log("\nLista de Produtos:");
        this.listaProdutos.forEach(p => p.visualizar());
    }

    // Cria (adiciona) um novo produto na lista
    public criar(produto: Produto): void {
        this.listaProdutos.push(produto);
    }

    // ------------------------------
    // MÉTODO CORRIGIDO
    // Agora corresponde à interface:
    // atualizar(produto: Produto): void;
    // ------------------------------
    public atualizar(produtoAtualizado: Produto): void {

        // Busca o produto pelo ID
        const index = this.listaProdutos.findIndex(p => p.id === produtoAtualizado.id);

        if (index !== -1) {
            // Substitui o produto antigo pelo atualizado
            this.listaProdutos[index] = produtoAtualizado;
            console.log("\nProduto atualizado com sucesso!");
        } else {
            console.log("\nProduto não encontrado!");
        }
    }

    // Remove um produto pelo ID
    public remover(id: number): void {
        let produto = this.procurarPorId(id);

        if (produto) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(produto), 1);
            console.log("\nProduto removido com sucesso!");
        } else {
            console.log("\nProduto não encontrado!");
        }
    }

    // Método adicional usado para compras
    public comprar(id: number, quantidade: number): void {
        let produto = this.procurarPorId(id);

        if (!produto) {
            console.log("\nProduto não encontrado!");
            return;
        }

        if (produto.quantidade < quantidade) {
            console.log("\nEstoque insuficiente!");
            return;
        }

        // Atualiza o estoque após a compra
        produto.quantidade = produto.quantidade - quantidade;
        console.log(`\nCompra realizada com sucesso! (${quantidade} unidades compradas)`);
    }
}
