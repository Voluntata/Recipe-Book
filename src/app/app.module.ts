import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './authentification/login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { RecetaComponent } from './lista-recetas/receta/receta.component';
import { RecipeService } from './services/receta.service';
import { EditarRecetaComponent } from './editar-receta/editar-receta.component';
import { RecetaDetalleComponent } from './receta-detalle/receta-detalle.component';
import { DataStorageService } from './services/data-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './authentification/register/register.component';
import { AuthService } from './authentification/auth.service';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { CalculatorEditComponent } from './calculator/calculator-edit/calculator-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalculatorComponent,
    ListaRecetasComponent,
    RecetaComponent,
    EditarRecetaComponent,
    RecetaDetalleComponent,
    RegisterComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    CalculatorEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule

  ],
  providers: [RecipeService, DataStorageService,
    AuthService  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
