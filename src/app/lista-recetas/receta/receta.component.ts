import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/receta.model';
import { RecipeService } from '../../services/receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  @Input() index!:number;
  @Input()recipe!: Receta;
   recetas:Receta[] = [];

  constructor(public service: RecipeService) {}

  ngOnInit(): void {
//  this.recetas = this.service.getRecipe;


console.log(this.recipe)

  }

}
