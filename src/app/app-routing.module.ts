import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { RecetaComponent } from './lista-recetas/receta/receta.component';
import { EditarRecetaComponent } from './editar-receta/editar-receta.component';
import { RecetaDetalleComponent } from './receta-detalle/receta-detalle.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { AuthGuard } from './authentification/auth.guard';
import { CalculatorEditComponent } from './calculator/calculator-edit/calculator-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent, },
  { path: 'calculator-edit', component: CalculatorEditComponent, },
  {
    path: 'recetas', component: ListaRecetasComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'new', component: EditarRecetaComponent },
      { path: ':id', component: RecetaDetalleComponent },
      { path: ':id/edit', component: EditarRecetaComponent },

    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
