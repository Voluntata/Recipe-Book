import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Receta } from '../models/receta.model';
import { RecipeService } from '../services/receta.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css'],
})
export class ListaRecetasComponent implements OnInit, OnDestroy {
  recipes: Receta[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    public recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataStorageService
  ) { }

  ngOnInit(): void {
    //  this.subscription = this.recipeService.recipesChanged.subscribe(
    //    (recipes: Receta[])=>{
    //      this.recipes = recipes;
    //      console.log(this.recipes)
    //    }
    //  )
    //  this.recipes = this.recipeService.getRecipes();
   this.subscription  = this.dataService.fetchRecipes().subscribe((recipes) => {
    this.recipes = recipes;
    });
    this.router.navigate(['recetas'])
    //console.log(this.recipes);
  }

  addRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
