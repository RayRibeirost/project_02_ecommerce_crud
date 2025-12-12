import { Medicine } from "../model/Medicine";
import { MedicineRepository } from "../repository/MedicineRepository";
import { colors } from "../util/Colors";

export class MedicineController implements MedicineRepository {

    private medicineList: Array<Medicine> = new Array<Medicine>();
    lastIdNumber: number = 0

    findMedicineById(id: number): void {
        let searchMedicine = this.searchInInventory(id);
        searchMedicine?.viewMedicine();
    }
    listAllMedicines(): void {
        this.medicineList.forEach((med : Medicine) => med.viewMedicine());
    }
    registerMedicine(medicine: Medicine): void {
        this.medicineList.push(medicine);
        console.log(colors.fg.green, `\nO medicamento número ${medicine.id} foi cadastrado com sucesso!`, colors.reset);
    }
    updateMedicine(medicine: Medicine): void {
        let searchMedicine = this.searchInInventory(medicine.id);
        if (searchMedicine !== null) {
            this.medicineList[this.medicineList.indexOf(searchMedicine)] = medicine;
            console.log(colors.fg.green, `\nO registro do medicamento de ID: ${medicine.id} foi atualizado com sucesso!`, colors.reset)
        } else console.log(colors.fg.red, `\nO medicamento de ID ${medicine.id} não foi encontrado!`);
    }
    deleteMedicine(id: number): void {
        let searchMedicine = this.searchInInventory(id);
        if (searchMedicine !== null) {
            this.medicineList.splice(this.medicineList.indexOf(searchMedicine), 1);
            console.log(colors.fg.green, `\nO Medicamento de ID ${id} foi apagado dos registros com sucesso!`);
        } else console.log(colors.fg.red, `\nO medicamento de ID ${id} não foi encontrado!`);
    }
    generateId(): number {
        return ++this.lastIdNumber;
    }
    searchInInventory(id: number): any {
        try {
            let findMedicine: Medicine | undefined = this.medicineList.find((med : Medicine) => med.id === id);
            if(!findMedicine || findMedicine === undefined || findMedicine === null) {
                throw new Error(`\nO medicamento de ID ${id} não foi encontrado!`)
            }

            return findMedicine
             
        } catch(error: any) {
            console.error(error.message);
        }
    }   
}