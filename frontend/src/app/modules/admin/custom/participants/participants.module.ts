import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from './participants.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { AddComponent as AddParticipantComponent } from './add/add.component';
import { FicheComponent } from './fiche/fiche.component';
import { AddpsComponent } from './addps/addps.component';


const routes: Routes = [
  { path: '', component: ParticipantsComponent },
  { path: '', component: AddParticipantComponent },
  { path: ':id', component: FicheComponent },
  { path: ':id', component: AddpsComponent },
];

@NgModule({
  declarations: [
    ParticipantsComponent,AddParticipantComponent, FicheComponent, AddpsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,SharedModule
  ]
})
export class ParticipantsModule { }
