export class habilidades{
    id?: number;
    tipo: String;
    porcentaje: String;
    foto: String;

    constructor (tipo: String, porcentaje: String, foto: String){

        this.tipo = tipo;
        this.porcentaje = porcentaje;
        this.foto = foto;
    }
}