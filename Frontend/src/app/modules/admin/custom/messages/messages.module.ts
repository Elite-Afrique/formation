import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { ComposeComponent } from './compose/compose.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { QuillModule } from 'ngx-quill';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { SidebarComponent } from 'app/modules/admin/custom/messages/sidebar/sidebar.component';
import { AddComponent } from './add/add.component';
import { AjouterComponent } from './ajouter/ajouter.component';




const routes: Routes = [
  { path: '', component: MessagesComponent },
  { path: '', component: ComposeComponent },
  { path: '', component: ListComponent },
  { path: ':id', component: DetailsComponent },
];


@NgModule({
  declarations: [
    MessagesComponent,
    ComposeComponent,
    ListComponent,
    SidebarComponent,
    AddComponent,
    DetailsComponent,
    AjouterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    QuillModule.forRoot(),
    FuseFindByKeyPipeModule,
    FuseNavigationModule,
    FuseScrollbarModule,
    FuseScrollResetModule,
    SharedModule
  ]
})
export class MessagesModule { }
