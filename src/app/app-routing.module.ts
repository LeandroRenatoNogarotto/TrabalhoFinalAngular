import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPessoalComponent } from './pagina-pessoal/pagina-pessoal.component';

const routes: Routes = [
  {path: 'pagina-pessoal', component: PaginaPessoalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
