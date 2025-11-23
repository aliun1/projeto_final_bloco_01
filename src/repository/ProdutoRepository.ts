import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    procurarPorId(id: number): Produto | null;
    listar(): void;
    criar(produto: Produto): void;
    atualizar(produto: Produto): void;
    remover(id: number): void;
}
