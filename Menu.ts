import * as readlinesync from 'readline-sync';

let escolha, escolhaCliente , escolhaVendedor: number;

    do {

        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                JÓIAS DO BRASIL                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");                        ");
        console.log("            1 - Sou Cliente                          ");
        console.log("            2 - Sou Vendedor                         ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        escolha = Number(readlinesync.question("Infome o numero de acordo com a opção desejada: "));
        
        switch (escolha) {
            case 1:
            do {
               console.clear();
               console.log(colors.fg.pinkpastel,
            "n\ESPACO DO VENDEDOR\n", colors.reset);
               console.log(colors.fg.pinkpastel,
            "1 - Cadastrar Produto\n", colors.reset);
               console.log(colors.fg.pinkpastel,
            "2 - Lista de Produtos\n", colors.reset);
               console.log(colors.fg.pinkpastel,
            "3 - Atualizar Produto\n", colors.reset);
               console.log(colors.fg.pinkpastel,
            "4 - Deletar Produto\n", colors.reset);
               console.log(colors.fg.pinkpastel,
            "0 - Voltar ao Menu Principal\n", colors.reset);
               escolhaCliente = Number(readlinesync.question("Infome o numero de acordo com a opção desejada: "));

            }
            switch (escolhaVendedor) {
                case 1:
                    console.log(colors.fg.pinkpastel, "\nCadastrar Produto\n");
                    const preco = Number(readlinesync.question("Valor do Produto: R$ "));
                    const nome  = readlinesync.question("Nome do Produto: ");
                    const quantidade = Number(readlinesync.question("Quantidade do Produto em estoque: ")) 
            }
                const novoProduto = new Produto(preco, nome, quantidade)
                controller.criar(novoProduto);
                console.log(colors.fg.greenstrong, "\nProduto cadastrado com sucesso!", colors.reset);
                keyPress();
                break;

            case 2:
                console.log("\n\Lista de Produtos:\n\n", colors.reset);
                contas.listar();
                keyPress();
                break;
            
            case 3:
                console.log("\nAtualizar Produto\n");
                controller.listar();
                const idAtualizar = Number (readlinesync.question("Digite o ID do produto que deseja atualizar: "));
                const precoAtualizado = Number(readlinesync.question("Novo valor do Produto: R$ "));
                const quantidadeAtualizada = Number(readlinesync.question("Nova quantidade do Produto em estoque: "));
                controller.atualizar(idAtualizar, precoAtualizado, quantidadeAtualizada);
                console.log(colors.fg.greenstrong, "\nProduto atualizado com sucesso!", colors.reset);
                keyPress();
                break;

            case 4:
                console.log("\nDeletar Produto\n");
                controller.listar();
                const idDeletar = Number (readlinesync.question("Digite o ID do produto que deseja deletar: "));
                controller.remover(idDeletar);
                console.log(colors.fg.greenstrong, "\nProduto deletado com sucesso!", colors.reset);
                keyPress();
                break;

              case 0:
            console.log("\nRetornar ao Menu");
            break;

          default:
            console.log("\nOpção inválida. Tente novamente mais tarde!");
            break;
        }

        if (escolhaVendedor !== 0)
          readlinesync.question("\nPressione ENTER para continuar...");
      } while (escolhaVendedor !== 0);
      break;


      case 2:
        do {
            console
            console.clear();
               console.log(colors.fg.pinkpastel,
            "n\ESPACO DO CLIENTE\n", colors.reset);
               console.log(colors.fg.pinkpastel,
            "1 - Dados do Cliente\n", colors.reset);
               console.log(colors.fg.pinkpastel,
            "2 - Lista de Compras\n", colors.reset);
               console.log(colors.fg.pinkpastel,
            "4 - Efetuar uma Compra\n", colors.reset);
               console.log(colors.fg.pinkpastel,
            "0 - Voltar ao Menu Principal\n", colors.reset);
               escolhaCliente = Number(readlinesync.question("Infome o numero de acordo com a opção desejada: "));
        }

        switch (escolhaCliente) {
            case 1: 
            const nomeCliente = readlinesync.question("Digite o nome do titular da compra:");
            console.log("Seja Bem Vindo(a), " + nomeCliente + "!");
            keyPress();
            break;
            
            case 2:
                console.log("\n\Lista de Compras:\n\n", colors.reset);
                controller.listar();
                keyPress();
                break;
        }
            case 3:
            console.log("\nEfetuar uma Compra\n")
            controller.listar();
            const idCompra = Number (readlinesync.question("Digite o ID do produto que deseja comprar: "));
            const quantidadeCompra = Number (readlinesync.question("Digite a quantidade que deseja comprar: "))

            controller.comprar(idCompra, quantidadeCompra);
            console.log(colors.fg.greenstrong, "\nCompra realizada com sucesso!", colors.reset);
            keyPress();
            break;

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Aline Vieira");
    console.log("Generation Brasil - alinevieiraqq@gmail.com");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, " ");

    console.log("\nPressione ENTER para continuar...");
    readlinesync.prompt();
}
