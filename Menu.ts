import readline from "readline-sync";
import { colors } from "./src/util/Colors";
import { Antibiotic } from "./src/model/Antibiotic";
import { Psychotropic } from "./src/model/Psychotropic";
import { MedicineController } from "./src/controller/MedicineController";


export function main() {

    let medicines: MedicineController = new MedicineController();
    let option: number, id: number, laboratory: number, medicineType: number, medicineName: string, treatmentTime: number, medicineLabel: number, prescriptionColor: number;
    const medicineTypes: string[] = ["Antibiótico", "Psicotrópico"];
    const laboratories: string[] = ["Pfizer", "AstraZeneca"];
    const medicineLabels: string[] = ["Vermelha", "Preta"];
    const prescriptionColors: string[] = ["Amarela", "Azul"];

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
                
                console.log("Digite o nome do mediamento: ");
                medicineName = readline.question("");

                console.log("Digite o laboratório do Medicamento: ");
                laboratory = readline.keyInSelect(laboratories, "", {cancel: false}) + 1;

                console.log("Digite o tipo do Medicamento: ");
                medicineType = readline.keyInSelect(medicineTypes, "", {cancel: false}) + 1;

                switch(medicineType) {
                    case 1:
                        console.log("Tempo de tratamento (em dias) do antibiótico: ");
                        treatmentTime = readline.questionInt("");
                        medicines.registerMedicine(new Antibiotic(medicines.generateId(), laboratory, medicineType, medicineName, treatmentTime));
                        break;
                    case 2:
                        console.log("Tarja do psicotrópico: ");
                        medicineLabel = readline.keyInSelect(medicineLabels, "", {cancel: false}) + 1;
                        console.log("Cor da receita para retirada do medicamento: ");
                        prescriptionColor = readline.keyInSelect(prescriptionColors, "", {cancel: false}) + 1;
                        medicines.registerMedicine(new Psychotropic(medicines.generateId(), laboratory, medicineType, medicineName, medicineLabel, prescriptionColor));
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Medicamentos\n\n", colors.reset);
                medicines.listAllMedicines();
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar Medicamento por Número \n\n", colors.reset);
                console.log("Digite o ID do medicamento: ");
                id = readline.questionInt("");
                medicines.findMedicineById(id);
                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar Dados do Medicamento\n\n", colors.reset);
                console.log("Digite o ID do medicamento: ");
                id = readline.questionInt("");
                let medicine = medicines.searchInInventory(id);
                
                if (medicine !== null) {
                    console.log("Digite o nome do mediamento: ");
                    medicineName = readline.question("");

                    console.log("Digite o laboratório do Medicamento: ");
                    laboratory = readline.keyInSelect(laboratories, "", {cancel: false}) + 1;

                    medicineType = medicine.medicineType;

                    switch(medicineType) {
                        case 1:
                            console.log("Tempo de tratamento (em dias) do antibiótico: ");
                            treatmentTime = readline.questionInt("");
                            medicines.updateMedicine(new Antibiotic(medicine.id, laboratory, medicineType, medicineName, treatmentTime));
                            break;
                        case 2:
                            console.log("Tarja do psicotrópico: ");
                            medicineLabel = readline.keyInSelect(medicineLabels, "", {cancel: false}) + 1;
                            console.log("Cor da receita para retirada do medicamento: ");
                            prescriptionColor = readline.keyInSelect(prescriptionColors, "", {cancel: false}) + 1;
                            medicines.updateMedicine(new Psychotropic(medicine.id, laboratory, medicineType, medicineName, medicineLabel, prescriptionColor));
                            break;
                    }
                } else console.log(colors.fg.red, `\nO medicamento de ID ${id} não foi encontrado!`)


                keyPress();
                break;
            case 5:
                console.log("\n\nApagar Medicamento\n\n", colors.reset);
                console.log("Digite o ID do medicamento: ");
                id = readline.questionInt("");
                medicines.deleteMedicine(id);
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