import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Medidas } from '../models/medidas.model';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class   CalculatorComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'gramos', 'ml', 'tazas', 'cucharadas'];
  selectedObject!: Medidas;


  columns = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (medida: Medidas) => `${medida.id}`,
    },

    {
      columnDef: 'nombre',
      header: 'Nombre',
      cell: (medida: Medidas) => `${medida.nombre}`,
    },
    {
      columnDef: 'gramos',
      header: 'Gramos',
      cell: (medida: Medidas) => `${medida.gramos}`,
    },
    {
      columnDef: 'ml',
      header: 'Ml',
      cell: (medida: Medidas) => `${medida.ml}`,
    },
    {
      columnDef: 'tazas',
      header: 'Tazas',
      cell: (medida: Medidas) => `${medida.tazas}`,
    },
    {
      columnDef: 'cucharadas',
      header: 'Cucharadas',
      cell: (medida: Medidas) => `${medida.cucharadas}`,
    },
  ];

  dataSource: Medidas[] = [
    {id:1, nombre: 'Azucar', gramos: 100, ml: 125, tazas: 0.55, cucharadas: 4},
    {id:2, nombre: 'Agua', gramos: 100, ml: 100, tazas: 0.42, cucharadas: 6.25},
    {id:3, nombre: 'Harina', gramos: 100, ml: 190, tazas: 0.4, cucharadas: 5},
    {id:4, nombre: 'Cacao', gramos: 100, ml: 250, tazas: 1.05, cucharadas: 6.67},
  ];

  medidas = this.dataSource.map(data=> data.nombre);
  selected!:string;
  tazas!:number;
  ml!:number;
  cucharadas!: number;
  @ViewChild('gramos', { static: true }) // igual a getElementBy ID
  gramos!: ElementRef;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  calculate(){
    console.log(this.selected)
      let gramosValue = parseInt(this.gramos.nativeElement.value)

      for(let data of this.dataSource){

        if(data.nombre === this.selected){
          this.tazas = Math.round((gramosValue/data.gramos*data.tazas+ Number.EPSILON) * 100) / 100;
          this.ml = Math.round((gramosValue/data.gramos*data.ml+ Number.EPSILON));
          this.cucharadas = Math.round((gramosValue/data.gramos*data.cucharadas+ Number.EPSILON));
        }
      }
  }


  onEnter(){
    this.router.navigate(['/recetas'])
  }

onAdminEdit(){

}
  }


