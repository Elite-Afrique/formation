import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { FuseNavigationItem, FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { MailboxService } from 'app/modules/admin/apps/mailbox/mailbox.service';
import { labelColorDefs } from 'app/modules/admin/apps/mailbox/mailbox.constants';
import { MailFilter, MailFolder, MailLabel } from 'app/modules/admin/apps/mailbox/mailbox.types';
import { ComposeComponent } from '../compose/compose.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  filters: MailFilter[];
  folders: MailFolder[];
  labels: MailLabel[];
  menuData: FuseNavigationItem[] = [];
  private _filtersMenuData: FuseNavigationItem[] = [];
  private _foldersMenuData: FuseNavigationItem[] = [];
  private _labelsMenuData: FuseNavigationItem[] = [];
  private _otherMenuData: FuseNavigationItem[] = [];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
      private _mailboxService: MailboxService,
      private _matDialog: MatDialog,
      private _fuseNavigationService: FuseNavigationService
  )
  {
  }

  ngOnInit(): void {
  }

  /**
     * Open compose dialog
     */
   openComposeDialog(): void
   {
       // Open the dialog
       const dialogRef = this._matDialog.open(ComposeComponent);

       dialogRef.afterClosed()
                .subscribe((result) => {
                    console.log('Compose dialog was closed!');
                });
   }

}
