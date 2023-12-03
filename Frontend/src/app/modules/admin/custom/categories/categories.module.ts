import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { AddComponent } from './add/add.component';
import { FicheComponent } from './fiche/fiche.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';


const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: '', component: AddComponent },
  { path: ':id', component: FicheComponent },
];


@NgModule({
  declarations: [
    CategoriesComponent,
    AddComponent,
    FicheComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,SharedModule
  ]
})
export class CategoriesModule { }
