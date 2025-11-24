import * as readlinesync from 'readline-sync';
import { Produto } from './model/Produto';
import { ProdutoController } from './controller/ProdutoController';
import { colors } from './util/Colors';
import { keyPress } from './util/KeyPress';

// Instancia o controlador (responsável por toda lógica dos produtos)
const controller = new ProdutoController();

export function main() {

    let escolha: number;
    let escolhaCliente: number;
    let escolhaVendedor: number;

    do {
        console.clear();
        console.log(colors.bg.black, colors.fg.yellow);
        console.log("                JÓIAS DO BRASIL                      ");
        console.log("               1 - Sou Vendedor                      ");


        console.log("               2 - Sou Cliente                       ");
        console.log("               0 - Sair                              ", colors.reset);

        // le a opcao escolhida
        escolha = Number(readlinesync.question("Informe o numero de acordo com a opção desejada: "));
        
        switch (escolha) {

            // menu do vendedor
            case 1:
                do {
                    console.clear();
                    console.log(colors.fg.pinkpastel,"\nESPACO DO VENDEDOR\n", colors.reset);
                    console.log("1 - Cadastrar Produto");
                    console.log("2 - Listar Produtos");
                    console.log("3 - Atualizar Produto");
                    console.log("4 - Deletar Produto");
                    console.log("0 - Voltar");

                    escolhaVendedor = Number(readlinesync.question("Escolha: "));
                    
                    switch (escolhaVendedor) { // começa o switch (escolhaVendedor)

                        // cadastrar produto
                        case 1:
                            console.log("\nCadastrar Produto");

                            const preco = Number(readlinesync.question("Valor do Produto: R$ "));
                            const nome  = readlinesync.question("Nome do Produto: ");
                            const quantidade = Number(readlinesync.question("Quantidade em estoque: "));

                            // Ele gera um ID automaticamente no controller
                            const id = controller.gerarId();

                            // cria o objeto produto
                            const novoProduto = new Produto(id, preco, nome, quantidade);

                            controller.criar(novoProduto);

                            console.log(colors.fg.greenstrong, "\nProduto cadastrado com sucesso!", colors.reset);
                            keyPress();
                            break;
                    
                        // listar produtos
                        case 2:
                            console.log("\nLista de Produtos:\n");
                            controller.listar();
                            keyPress();
                            break;

                        // atualizar produto
                        case 3:
                            console.log("\nAtualizar Produto");
                            controller.listar();

                            const idAtt = Number(readlinesync.question("ID do produto para atualizar: "));
                            const p = controller.procurarPorId(idAtt);

                            if (!p) {
                                console.log("\nProduto não encontrado!");
                                keyPress();
                                break;
                            }

                            // pergunta apenas o preço e quantidade (nome não muda)
                            const novoPreco = Number(readlinesync.question("Novo preço: R$ "));
                            const novaQtd = Number(readlinesync.question("Nova quantidade: "));

                            // cria novo objeto atualizado
                            const produtoAtualizado = new Produto(
                                idAtt,
                                novoPreco,
                                p.nomeProduto, // mantém o nome original
                                novaQtd
                            );

                            // atualização no Controller (Falta no código original)
                            controller.atualizar(produtoAtualizado); 
                            console.log(colors.fg.greenstrong, "\nProduto atualizado com sucesso!", colors.reset);

                            keyPress();
                            break;
                        
                        // deletar produto (Lógica Faltante no código original)
                        case 4:
                            console.log("\nDeletar Produto");
                            controller.listar();
                            const idDeletar = Number(readlinesync.question("ID do produto para deletar: "));
                            controller.remover(idDeletar); 
                            console.log(colors.fg.greenstrong, "\nProduto deletado com sucesso (se existir)!", colors.reset);
                            keyPress();
                            break;

                        case 0:
                            // Voltar (sai do switch e do do...while interno)
                            break;

                        default:
                            console.log(colors.fg.red, "\nOpção Inválida!", colors.reset);
                            keyPress();
                            break;

                    } // fechamento do switch (escolhaVendedor)

                } while (escolhaVendedor !== 0); // <-- fechamento do...while do vendedor

                break; // fechamento do case 1 (Vendedor)

            // menu do cliente
            case 2:
                console.log("\nVocê é cliente! Este menu será implementado.");
                keyPress();
                break;

            // sair
            case 0:
                console.log(colors.fg.yellow, "\nObrigado por utilizar o JÓIAS DO BRASIL!", colors.reset);
                break;

            default:
                console.log(colors.fg.red, "\nOpção Inválida!", colors.reset);
                keyPress();
                break;
                
        } // fechamento do switch (escolha)

    } while (escolha !== 0); // fechamento do...while principal

} // fechamento da funcao export function main()
main();
