import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute ,Router} from '@angular/router';
import moment from 'moment';
import { AddComponent } from '../add/add.component';
import { Personnel } from '../personnels.model';
import { PersonnelsService } from '../personnels.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  imagepath:any= 'http://127.0.0.1:8000/storage/';
  dialogRef: any;
  personnel:Personnel = new Personnel({})
  id 
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  
  constructor(private personnelService:PersonnelsService,
    private _personnelService: PersonnelsService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _matDialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    
    private _fuseConfirmationService: FuseConfirmationService,) { 
      this.route.params.subscribe((params) => {
        console.log(params);
        if (params['id']) {
            this.personnelService.get(params['id']).subscribe((data) => {
              this.id = params['id'];
                this.personnel = data;
            });
        }
    });
    }
    

  ngOnInit(): void {
    
  }
  
  edit() {
          this.dialogRef = this._matDialog.open(AddComponent, {
              data: {
                personnel: this.personnel,
                  action: 'edit',
              },
          });

          this.dialogRef.afterClosed().subscribe((response: FormGroup) => {
              if (!response) {
                  return;
              }
              this.personnelService.get(this.id).subscribe((data) => {
                this.personnel = data;
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
             title  : 'Supprimer le ¨Personnel',
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
                 const id = this.personnel.id;
 
                 this._personnelService.delete(id)
                     .subscribe((isDeleted) => {
                      
                         // Return if the contact wasn't deleted...
                         if ( !isDeleted )
                         {
                             return;
                         }
                     });
                     this.router.navigateByUrl("custom/personnels");
                 // Mark for check
                 this._changeDetectorRef.markForCheck();
              }
         });
     }

}
