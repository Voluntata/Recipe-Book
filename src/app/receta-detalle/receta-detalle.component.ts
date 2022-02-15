import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Receta } from '../models/receta.model';
import { RecipeService } from '../services/receta.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.css']
})
export class RecetaDetalleComponent implements OnInit {
  recipe!: Receta;
  id!: number;

  constructor(private route:ActivatedRoute, private recipeService:RecipeService, private router: Router, private dataService: DataStorageService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
        console.log(this.id)
      }

    )
  }

  onEditRecipe(){
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.dataService.storeRecipes();
    this.router.navigate(['/recetas'])


  }
}
