import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreExampleComponent } from './modules/core/components/store-example/store-example.component';

const routes: Routes = [
  // { path: '', component: StoreExampleComponent },
  { path: 'home', component: StoreExampleComponent },
  // { path: 'category', component: ResultContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
