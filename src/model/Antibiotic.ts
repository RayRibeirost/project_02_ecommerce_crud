import { Medicine } from "./Medicine";

export class Antibiotic extends Medicine {
    private _treatmentTime: number;

    constructor(
        id: number,
        laboratory: number,
        medicineType: number,
        medicineName: string,
        systemCount: number,
        inventoryCount: number,
        systemId: number,
        treatmentTime: number,
    ) {
        super(id, laboratory, medicineType, medicineName, systemCount, inventoryCount, systemId);
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