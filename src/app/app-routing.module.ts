import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AtomDemoComponent } from './Demos/Atoms/atom-demo/atom-demo.component';
import { MoleculesDemoComponent } from './Demos/Molecules/molecules-demo/molecules-demo.component';
import { OrganismsDemoComponent } from './Demos/Organisms/organisms-demo/organisms-demo.component';

const routes: Routes = [
  { path:'atoms', component:AtomDemoComponent },
  { path:'molecules',component:MoleculesDemoComponent },
  { path:'organisms',component:OrganismsDemoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
