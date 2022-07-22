export class educacion{
    id?: number;
    nombreEdu: string;
    descripcionEdu: string;
    fotoEdu: string;

    constructor (nombreEdu: string, descripcionEdu: string, fotoEdu: string){

        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.fotoEdu = fotoEdu;
    }
}