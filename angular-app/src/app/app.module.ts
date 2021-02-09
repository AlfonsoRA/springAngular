import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ClientesComponent } from './components/clientes/clientes.component';


import { ClienteService } from "./components/clientes/cliente.service";
import { FormComponent } from './components/clientes/form/form.component';



const ROUTES: Routes =[ 
  /* Pagina Principal */
  {path:'', redirectTo: './clientes', pathMatch: 'full'},
  {path:'directivas', component: DirectivasComponent},
  {path:'clientes', component: ClientesComponent},
  {path: 'form', component:FormComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivasComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
