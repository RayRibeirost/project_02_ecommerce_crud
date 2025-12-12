import { Medicine } from "./Medicine";

export class Antibiotic extends Medicine {
    private _treatmentTime: number;

    constructor(
        id: number,
        laboratory: number,
        medicineType: number,
        medicineName: string,
        treatmentTime: number,
    ) {
        super(id, laboratory, medicineType, medicineName);
        this._treatmentTime = treatmentTime;
    }

    // getters

    public get treatmentTime(): number {
        return this._treatmentTime;
    }

    // setters

    public set treatmentTime(treatmentTime: number) {
        this._treatmentTime = treatmentTime;
    }

    // methods

    public viewMedicine(): void {
        super.viewMedicine()
        console.log(`Tempo de tratamento (em dias): ${this._treatmentTime}`);
    }
}