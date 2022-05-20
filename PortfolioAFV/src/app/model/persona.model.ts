export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    acercaDe: String;
    fotoperfil: String;

    constructor (nombre: String, apellido: String, acercaDe: String, fotoperfil: String){

        this.nombre = nombre;
        this.apellido = apellido;
        this.acercaDe = acercaDe;
        this.fotoperfil = fotoperfil;
    }
}