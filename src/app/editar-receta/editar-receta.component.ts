import { validateHorizontalPosition } from '@angular/cdk/overlay'
import { Component, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { RecipeService } from '../services/receta.service'
import { Ingredient } from '../models/ingredient.model'
import { Receta } from '../models/receta.model'
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.component.html',
  styleUrls: ['./editar-receta.component.css'],
})
export class EditarRecetaComponent implements OnInit {
  id!: number
  editMode = false
  recipeForm!: FormGroup
  unidades: string[] = []

  constructor(
    public recipeServise: RecipeService,
    public router: Router,
    private route: ActivatedRoute,
    private dataService: DataStorageService
  ) {}

  ngOnInit(): void {
    //  this.initForm();
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null
      this.initForm()
    })
    this.unidades = this.recipeServise.unidades
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeServise.updateRecipe(this.id, this.recipeForm.value);
      this.dataService.storeRecipes();
    } else {
      this.recipeServise.addRecipe(this.recipeForm.value);
      this.dataService.storeRecipes();
    }
    this.onCancel()
  }

  onCancel() {
    this.router.navigate(['/recetas'])
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredientes')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
        unidad: new FormControl(null, Validators.required),
      }),
    )
  }

  private initForm() {
    let nombre = '';
    let preparacion = '';
    let imagePath = '';
    let ingredientes = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeServise.getRecipe(this.id)
      nombre = recipe.nombre
      preparacion = recipe.preparacion
      imagePath = recipe.imagePath
      if (recipe['ingredientes']) {
        for (let ingredient of recipe.ingredientes) {
          ingredientes.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
              unidad: new FormControl(ingredient.unidad, Validators.required),
            }),
          )

        }
      }
    }

    this.recipeForm = new FormGroup({
      nombre: new FormControl(nombre, Validators.required),
      preparacion: new FormControl(preparacion, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      ingredientes: ingredientes,
    })
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredientes')).controls
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredientes')).removeAt(index);

  }
}
