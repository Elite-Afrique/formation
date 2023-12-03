import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsComponent } from './sessions.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { AddComponent as AddSessionComponent } from './add/add.component';
import { FicheComponent } from './fiche/fiche.component';

const routes: Routes = [
  { path: '', component: SessionsComponent },
  { path: '', component: AddSessionComponent },
  { path: ':id', component: FicheComponent },
];

@NgModule({
  declarations: [
    SessionsComponent,
    AddComponent,
    FicheComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,SharedModule
  ]
})
export class SessionsModule { }
