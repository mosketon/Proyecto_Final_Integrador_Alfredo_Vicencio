export class educacion{
    id?: number;
    establecimiento: String;
    lugar: String;
    desde: String;
    hasta: String;
    titulo: String;
    foto: String;

    constructor (establecimiento: String, lugar: String, desde: String, hasta: String, titulo:String, foto: String){

        this.establecimiento = establecimiento;
        this.lugar = lugar;
        this.desde = desde;
        this.hasta = hasta;
        this.titulo = titulo;
        this.foto = foto;
    }
}