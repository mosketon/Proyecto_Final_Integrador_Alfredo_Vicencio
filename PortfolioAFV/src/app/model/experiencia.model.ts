export class experiencia{
    id?: number;
    nombre: String;
    lugar: String;
    desde: String;
    hasta: String;
    foto: String;

    constructor (nombre: String, lugar: String, desde: String, hasta: String, foto: String){

        this.nombre = nombre;
        this.lugar = lugar;
        this.desde = desde;
        this.hasta = hasta;
        this.foto = foto;
    }
}