import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './form-login/form-login.component';

const routes: Routes = [
  {path: 'Login', component: FormLoginComponent},
  {path: 'Cadastro', component: FormCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
