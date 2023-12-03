import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationsComponent } from './formations.component';
import { AddComponent } from './add/add.component';
import { FicheComponent } from './fiche/fiche.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { SharedModule } from 'app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  { path: '', component: FormationsComponent },
  { path: '', component: AddComponent },
  { path: ':id', component: FicheComponent },
];

@NgModule({
  declarations: [
    FormationsComponent,
    AddComponent,
    FicheComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTooltipModule,
    FuseFindByKeyPipeModule,
    SharedModule,
    MatTabsModule
  ]
})
export class FormationsModule { }
