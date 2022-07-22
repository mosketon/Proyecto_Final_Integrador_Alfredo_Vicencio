export class habilidades{
    id?: number;
    nombreHabi: string;
    porcentajeHabi: number;
    fotoHabi: string;

    constructor (nobreHabi: string, porcentajeHabi:number, fotoHabi: string){

        this.nombreHabi = nobreHabi;
        this.porcentajeHabi = porcentajeHabi;
        this.fotoHabi = fotoHabi;
    }
}