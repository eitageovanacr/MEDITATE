import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TiposComponent } from './tipos/tipos.component';
import { MeditacaoGuiadaComponent } from './meditacaoguiada/meditacaoguiada.component';
import {CadastroComponent} from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path : 'tipos' , component : TiposComponent},
  {path: 'meditacaoguiada', component : MeditacaoGuiadaComponent},
  {path: 'cadastro', component : CadastroComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
