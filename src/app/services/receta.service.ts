import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../models/ingredient.model";
import { Receta } from '../models/receta.model';

@Injectable()
export class RecipeService {

 recipesChanged = new Subject<Receta[]>();

public unidades: string[] = [
  'gr', 'ml', 'cup', 'tbsp', 'tsp', 'u', 'medida'
]
private recipes: Receta[] = [];

  // public recipes: Receta[] = [
  //   new Receta(
  //     'Tortilla de patata',
  //     'Comenzamos con la tarea más larga, la de caramelizar la cebolla que nos llevará unos 30 minutos. Para ello, pelamos la cebolla y la cortamos en juliana. Después la ponemos en una sartén a fuego muy lento y dejamos que se haga muy despacio, removiendo de vez en cuando. No nos interesa que se dore la cebolla sino que se vaya pochando muy despacio. Aquí podéis ver con detalle todos los trucos para caramelizar la cebolla en sus propios azúcares naturales.Mientras la cebolla se hace, pelamos las patatas y las cortamos en rodajas finas, procurando que todas ellas sean de tamaño uniforme. Las dejamos en agua durante 15 minutos y ponemos una sartén con aceite de oliva abundante en el fuego.Sin dar tiempo a que el aceite se caliente, añadimos las patatas y dejamos que se vayan friendo muy despacio, partiendo de un aceite casi en frío. Así conseguimos que las patatas se confiten en lugar de dorarse. De todas formas, cuando lleven unos diez minutos y hayamos removido de vez en cuando, podemos subir el fuego para conseguir que algunas de las patatas queden más tostaditas, originando así contrastes en el plato final.Sacamos las patatas y las escurrimos bien del aceite y las ponemos en un bol grande. Escurrimos la cebolla cuando esté en su punto, y la ponemos sobre las patatas. Batimos los huevos y los añadimos al bol, removiendo con un tenedor para que se mezclen bien los tres ingredientes.',
  //     'https://th.bing.com/th/id/OIP.vKDSNJ5btZvGKeCQDGbfAgHaHa?pid=ImgDet&rs=1',
  //     [
  //       new Ingredient('Patatas', 3, 'u'),
  //       new Ingredient('Huevos', 3, 'u')
  //     ]),
  //     new Receta(
  //       'Arroz con leche',
  //       'Hervir la leche con azucar, añadir arroz',
  //       'https://th.bing.com/th/id/OIP.rX5TNa17UjbJ_Kf521czOQHaHa?pid=ImgDet&rs=1',
  //       [
  //         new Ingredient('Leche', 200, 'ml'),
  //         new Ingredient('Arroz', 100, 'gr'),
  //         new Ingredient('Azucar', 50, 'gr'),

  //       ]),
  //   ]

    setRecipes(recipes: Receta[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
      return this.recipes.slice();
    }

   getRecipe(index:number){
     return this.recipes[index];
   }

   addRecipe(recipe: Receta){
     this.recipes.push(recipe);
     this.recipesChanged.next(this.recipes.slice());
   }

   updateRecipe(index: number, newRecipe: Receta){
     this.recipes[index] = newRecipe;
     this.recipesChanged.next(this.recipes.slice());
   }

   deleteRecipe(index:number){
     this.recipes.splice(index,1);
     this.recipesChanged.next(this.recipes.slice());
   }

  }
