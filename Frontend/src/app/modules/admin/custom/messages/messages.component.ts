import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;

  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(private _fuseMediaWatcherService: FuseMediaWatcherService)
  {
  }

  ngOnInit(): void {
    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(({matchingAliases}) => {

        // Set the drawerMode and drawerOpened if the given breakpoint is active
        if ( matchingAliases.includes('md') )
        {
            this.drawerMode = 'side';
            this.drawerOpened = true;
        }
        else
        {
            this.drawerMode = 'over';
            this.drawerOpened = false;
        }
    });
  }

  ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

}
