import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportsComponent } from './supports.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  { path: '', component: SupportsComponent },
  // { path: '', component: ComposeComponent },
  { path: ':id', component: DetailsComponent },
];

@NgModule({
  declarations: [
    SupportsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    SharedModule
  ]
})
export class SupportsModule { }
