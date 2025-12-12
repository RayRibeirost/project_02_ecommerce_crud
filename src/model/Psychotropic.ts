import { Medicine } from "./Medicine";

export class Psychotropic extends Medicine {
        private _medicineLabel: number;
        private _prescriptionColor: number;

    constructor(
        id: number,
        laboratory: number,
        medicineType: number,
        medicineName: string,
        medicineLabel: number,
        prescriptionColor: number,
    ) {
        super(id, laboratory, medicineType, medicineName);
        this._medicineLabel = medicineLabel;
        this._prescriptionColor = prescriptionColor;
    }

    // getters

    public get medicineLabel(): number {
        return this._medicineLabel;
    }

    public get prescriptionColor(): number {
        return this._prescriptionColor;
    }

    // setters

    public set medicineLabel(medicineLabel: number) {
        this._medicineLabel = medicineLabel;
    }

    public set prescriptionColor(prescriptionColor: number) {
        this._prescriptionColor = prescriptionColor;
    }

    // methods
    public viewMedicine(): void {
        super.viewMedicine();
        let medicineLabel = "";
        let prescriptionColor = "";
        switch(this._medicineLabel) {
            case 1:
                medicineLabel = "Vermelha";
                break;
            case 2: 
                medicineLabel = "Preta"
                break;
        }

        switch(this._prescriptionColor) {
            case 1:
                prescriptionColor = "Amarela (Receita tipo A)";
                break;
            case 2:
                prescriptionColor = "Azul (Receita tipo B)";
                break;
        }
        console.log(`Tarja do Medicamento: ${medicineLabel}`);
        console.log(`Cor da Receita Médica: ${prescriptionColor}`);

    }
}