export class experiencia{
    id?: number;
    nombreEx: string;
    descripcionEx: string;
    fotoEx: string;

    constructor (nombreEx: string, descripcionEx: string, fotoEx: string){

        this.nombreEx = nombreEx;
        this.descripcionEx = descripcionEx;
        this.fotoEx = fotoEx;
    }
}