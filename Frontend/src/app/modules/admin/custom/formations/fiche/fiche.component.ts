import { ChangeDetectorRef, Component, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import moment from 'moment';
import { AddComponent } from '../add/add.component';
import { Formation } from '../formations.model';
import { FormationsService } from '../formations.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {
  dialogRef: any;
  dialogRef2: any;
  formation:Formation = new Formation({})
  id 
  dataSource: MatTableDataSource<any> = new MatTableDataSource();


 constructor(private formationService:FormationsService,
    private _matDialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private _changeDetectorRef: ChangeDetectorRef,
    private _formationService: FormationsService,
    private _fuseConfirmationService: FuseConfirmationService,
        
    ) { 
      this.route.params.subscribe((params) => {
        console.log(params);
        if (params['id']) {
            this.formationService.get(params['id']).subscribe((data) => {
              this.id = params['id'];
                this.formation = data;
            });
        }
    });
  }

  ngOnInit(): void {
    
  }


  edit() {
    this.dialogRef = this._matDialog.open(AddComponent, {
        data: {
          formation: this.formation,
            action: 'edit',
        },
    });

    this.dialogRef.afterClosed().subscribe((response: FormGroup) => {
        if (!response) {
            return;
        }
        this.formationService.get(this.id).subscribe((data) => {
          this.formation = data;
      });
    });
} 

    /**
     * Delete the contact
     */
     delete(id:number): void
     {
         // Open the confirmation dialog
         const confirmation = this._fuseConfirmationService.open({
             title  : 'Supprimer la formation',
             message: 'Voulez-vous supprimer la formation ?',
             actions: {
                 confirm: {
                     label: 'Delete'
                 }
             }
         });
 
         // Subscribe to the confirmation dialog closed action
         confirmation.afterClosed().subscribe((result) => {
 
             // If the confirm button pressed...
             if ( result === 'confirmed' )
             {
                 // Get the current contact's id
                 const id = this.formation.id;
 
                 this._formationService.delete(id)
                     .subscribe((isDeleted) => {
                      
                         // Return if the contact wasn't deleted...
                         if ( !isDeleted )
                         {
                             return;
                         }
                     });
                     this.router.navigateByUrl("custom/formations");
                 // Mark for check
                 this._changeDetectorRef.markForCheck();
              }
         });
     }
}
