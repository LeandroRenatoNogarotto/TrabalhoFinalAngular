import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { PaginaAlimentacaoComponent } from './pagina-alimentacao/pagina-alimentacao.component';
import { PaginaExercicioComponent } from './pagina-exercicio/pagina-exercicio.component';
import { PaginaPessoalComponent } from './pagina-pessoal/pagina-pessoal.component';
import { PaginaSaudeComponent } from './pagina-saude/pagina-saude.component';

const routes: Routes = [
  {path: 'pagina-pessoal', component: PaginaPessoalComponent},
  {path: 'pagina-alimentacao', component: PaginaAlimentacaoComponent},
  {path: 'pagina-exercicios', component: PaginaExercicioComponent},
  {path: 'pagina-saude', component: PaginaSaudeComponent},
  {path: 'Login', component: FormLoginComponent},
  {path: 'Cadastro', component: FormCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
