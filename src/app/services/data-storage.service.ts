import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Receta } from "../models/receta.model";
import { RecipeService } from './receta.service';

@Injectable({providedIn: 'root'})
export class DataStorageService{
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService

  ){}
//guardar recetas en DB
storeRecipes(){
  const recipes = this.recipeService.getRecipes();
  this.http.put(
    'https://recipebook-e9a31-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
    recipes
  ).subscribe(response => {
    console.log(response)
  })
}
//obtener recetas de DB
fetchRecipes(){
  return this.http.get<Receta[]>(
    'https://recipebook-e9a31-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
  ).pipe(map(recipes =>{
    return recipes.map(recipe => {
    return {
      ...recipe,
      ingredientes: recipe.ingredientes ? recipe.ingredientes: [] }
  });
}),tap(recipes => {
  this.recipeService.setRecipes(recipes)
})
  )
}
//borrar receta de DB
deleteRecipe(index: number){
  console.log(('https://recipebook-e9a31-default-rtdb.europe-west1.firebasedatabase.app/recipes.json/'+index))
 // this.http.delete('https://recipebook-e9a31-default-rtdb.europe-west1.firebasedatabase.app/recipes.json/'+index)
}

}
