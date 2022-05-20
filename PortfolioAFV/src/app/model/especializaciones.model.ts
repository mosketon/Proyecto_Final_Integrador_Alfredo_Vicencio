export class especializaciones{
    id?: number;
    especialización: String;
    descripcion: String;
    foto: String;

    constructor (especializacion: String, descripcion: String, foto: String){

        this.especialización = especializacion;
        this.descripcion = descripcion;
        this.foto = foto;
    }
}