import { Medicine } from "../model/Medicine";

export interface MedicineRepository {
    findMedicineById(id: number): void;
    listAllMedicines(): void;
    registerMedicine(medicine: Medicine): void;
    updateMedicine(medicine: Medicine): void;
    deleteMedicine(medicine: Medicine): void;
}