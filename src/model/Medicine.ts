export abstract class Medicine {
    private _id: number;
    private _laboratory: number;
    private _medicineType: number;
    private _medicineName: string;
    private _systemCount: number;
    private _inventoryCount: number;
    private _systemId: number;

    constructor (
        id: number,
        laboratory: number,
        medicineType: number,
        medicineName: string,
        systemCount: number,
        inventoryCount: number,
        systemId: number,
    ) {
        this._id = id;
        this._laboratory = laboratory;
        this._medicineType = medicineType;
        this._medicineName = medicineName;
        this._systemCount = systemCount;
        this._inventoryCount = inventoryCount;
        this._systemId = systemId; 
    }

    //getters

    public get id(): number {
        return this._id;
    };

    public get laboratory(): number {
        return this._laboratory;
    }

    public get medicineType(): number {
        return this._medicineType;
    }

    public get medicineName(): string {
        return this._medicineName;
    }

    public get systemCount(): number {
        return this._systemCount;
    }

    public get inventoryCount(): number {
        return this._inventoryCount;
    }

    public get systemId(): number {
        return this._systemId;
    }

    //setters

    public set id(id: number) {
        this._id = id;
    };

    public set laboratory(laboratory: number) {
        this._laboratory = laboratory;
    }

    public set medicineType(medicineType: number) {
        this._medicineType = medicineType;
    }

    public set medicineName(medicineName: string) {
        this._medicineName = medicineName;
    }

    public set systemCount(systemCount: number) {
        this._systemCount = systemCount
    }

    public set inventoryCount(inventoryCount: number) {
        this._inventoryCount = inventoryCount
    }

    public set systemId(systemId: number) {
        this._systemId = systemId
    }

    // methods
    public viewMedicine(): void {
        let laboratory: string = "";
        let medicineType: string = "";

        switch(this._laboratory) {
            case 1:
                laboratory = "Pfizer";
                break;
            case 2: 
                laboratory = "AstraZeneca"
                break;
        }

        switch(this._medicineType) {
            case 1:
                medicineType = "Antibiótico";
                break;
            case 2:
                medicineType = "Psicotrópico";
                break;
        }

        console.log("\n\n******************************************************");
        console.log("Dados do Medicamento:");
        console.log("******************************************************");
        console.log(`ID do Medicamento: ${this._id}`);
        console.log(`ID do sistema farmacêutico geral: ${this._systemId}`);
        console.log(`Nome do Medicamento: ${this._medicineName}`);
        console.log(`Unid. no sistema: ${this._systemCount} | Unid. contadas na coleta: ${this._inventoryCount}`);
        console.log(`Tipo do Medicamento: ${medicineType}`);
        console.log(`Laboratório: ${laboratory}`);
    }

}