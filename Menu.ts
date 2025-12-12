import readline from "readline-sync";
import { colors } from "./src/util/Colors";


export function main() {

    let option: number;

    while (true) {
        console.log(colors.bg.black, colors.fg.yellow, "***************************************************************");
        console.log("                                                               ");
        console.log("                 Rede Inventários Farmacêuticos                ");
        console.log("                                                               ");
        console.log("***************************************************************");
        console.log("                                                               ");
        console.log("                 1 - Registrar Medicamento                     ");
        console.log("                 2 - Listar todos os Medicamentos              ");
        console.log("                 3 - Buscar Medicamento por Número             ");
        console.log("                 4 - Atualizar Dados do Medicamento            ");
        console.log("                 5 - Apagar Medicamento                        ");
        console.log("                 6 - Sair                                      ");
        console.log("                                                               ");
        console.log("***************************************************************", colors.reset);


        console.log("Entre com a opção desejada");
        option = readline.questionInt("");

        if (option === 6) {
            console.log("\nRede inventários farmacêuticos - Organizando a saúde da sua farmácia");
            about();
            process.exit(0);
        }

        switch(option) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nRegistrar Medicamento\n\n", colors.reset);
                


                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Medicamentos\n\n", colors.reset);



                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar Medicamento por Número \n\n", colors.reset);



                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar Dados do Medicamento\n\n", colors.reset);



                keyPress();
                break;
            case 5:
                console.log("\n\nApagar Medicamento\n\n", colors.reset);

                

                keyPress();
                break;
            default:
                console.log(colors.fg.whitestrong, "\n\nOpção inválida!\n\n", colors.reset);
                keyPress();
                break;
        }
    };
};

function about(): void {
    console.log("\n***************************************************************");
    console.log("Projeto desenvolvido por: Raylander Ribeiro (rayribeirost)");
    console.log("Generation Brasil - generation@generation.com");
    console.log("github.com/rayribeirost")
    console.log("***************************************************************");

};

function keyPress():void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...")
    readline.prompt();
};

main();