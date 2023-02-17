import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { PaginaPessoalComponent } from './pagina-pessoal/pagina-pessoal.component';

const routes: Routes = [
  {path: 'pagina-pessoal', component: PaginaPessoalComponent},
  {path: 'Login', component: FormLoginComponent},
  {path: 'Cadastro', component: FormCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
