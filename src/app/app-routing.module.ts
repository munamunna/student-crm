import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { StdenteditComponent } from './stdentedit/stdentedit.component';

const routes: Routes = [
  {path:"students",component:StudentlistComponent},
  {path:"student-add",component:StudentcreateComponent},
  {path:"students/:id",component:StudentdetailComponent},
  {path:"student-edit/:id",component:StdenteditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
