import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelsComponent } from './personnels.component';
import { AddComponent } from './add/add.component';
import { FicheComponent } from './fiche/fiche.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { AddComponent as AddPersonnelComponent } from './add/add.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';



const routes: Routes = [
  { path: '', component: PersonnelsComponent },
  { path: '', component: AddPersonnelComponent },
  { path: ':id', component: FicheComponent },
];

@NgModule({
  declarations: [
    PersonnelsComponent,
    AddComponent,
    FicheComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    SharedModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    NgApexchartsModule,
    TranslocoModule,

  ]
})
export class PersonnelsModule { }
