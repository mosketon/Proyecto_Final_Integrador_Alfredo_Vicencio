export class especializaciones{
    id?: number;
    nombreEspe: string;
    descripcionEspe: string;
    fotoEspe: string;

    constructor (nombreEspe: string, descripcionEspe: string, fotoEspe: string){

        this.nombreEspe = nombreEspe;
        this.descripcionEspe = descripcionEspe;
        this.fotoEspe = fotoEspe;
    }
}