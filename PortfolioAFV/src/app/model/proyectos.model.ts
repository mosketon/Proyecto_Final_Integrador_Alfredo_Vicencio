export class proyectos{
    id?: number;
    nombrePro: String;
    descripcionPro: String;
    fotoPro: String;

    constructor (nombrePro: String, descripcionPro: String, fotoPro: String){

        this.nombrePro = nombrePro;
        this.descripcionPro = descripcionPro;
        this.fotoPro = fotoPro;
    }
}