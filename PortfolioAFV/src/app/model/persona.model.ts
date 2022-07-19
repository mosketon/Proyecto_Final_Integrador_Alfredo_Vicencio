export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    acercaDe: string;
    fotoperfil: string;

    constructor (nombre: string, apellido: string, acercaDe: string, fotoperfil: string){

        this.nombre = nombre;
        this.apellido = apellido;
        this.acercaDe = acercaDe;
        this.fotoperfil = fotoperfil;
    }
}