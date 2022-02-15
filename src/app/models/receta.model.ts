import { Ingredient } from './ingredient.model';


export class Receta {
  public nombre: string;
  public preparacion: string;
  public imagePath: string;
  public ingredientes?: Ingredient[];

  constructor(nombre: string, preparacion: string, imagePath: string, ingredientes: Ingredient[]) {
    this.nombre = nombre;
    this.preparacion = preparacion;
    this.imagePath = imagePath;
    this.ingredientes = ingredientes;
  }
}
