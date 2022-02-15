

export class Medidas {
  id: number ;
  gramos: number;
  ml: number;
  nombre: string ;
  tazas: number;
  cucharadas: number;

  constructor(id: number, nombre: string, gramos: number, ml:number, tazas: number, cucharadas: number) {
    this.id = id;
    this.nombre = nombre;
    this.ml = ml;
    this.gramos = gramos;
    this.tazas = tazas;
    this.cucharadas = cucharadas;
  }

}
