import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSerializer } from '@angular/router';
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
  nombre!: string;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private dataService: DataStorageService,
    private urlSerializer: UrlSerializer) { }

  ngOnInit(): void {
    //obtener datos de receta por id
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.nombre = params['nombre']
          this.recipe = this.recipeService.getRecipe(this.id);
          console.log(this.id);
        }
      )
  }

  //editar receta
  onEditRecipe() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }
//borrar receta
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.dataService.storeRecipes();
    this.router.navigate(['/recetas'])
  }
//copiar enlase
  copyToClipboard() {
    const url = this.urlSerializer.serialize(this.router.createUrlTree([], {
      queryParams: {
        nombre: this.recipe.nombre
      }
    }))
    console.log(url);
    const textArea = document.createElement('textarea');
    textArea.value = window.location.origin + url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    alert('Shared link copied to clipboard!');

  }
}
