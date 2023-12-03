import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute,Router } from '@angular/router';
import moment from 'moment';
import { AddComponent } from '../add/add.component';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { Liste } from '../messages.model';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  imagepath:any= 'http://127.0.0.1:8000/storage/';
  dialogRef: any;
  liste:Liste = new Liste({})
  id 
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  data:any;
  displayedColumns: string[] = [
    'id',
    'nom',
    'prenom',
];
  constructor(private messagesService:MessagesService,
    private _matDialog: MatDialog,
    private route: ActivatedRoute) { 
      
      this.route.params.subscribe((params) => {
        this.liste = new Liste(params);
        if (params['id']) {
            this.messagesService.get(params['id']).subscribe((data) => {
              this.id = params['id'];
                this.liste = data;
            });

            // this.participantService.getParticipants_Session(params['id']).subscribe((data) => {
            //   this.id = params['id'];
            //     this.data = data 
            // });
           
        }
    });  
   }

  ngOnInit(): void {
    this.getListe_Participant();
    
  }

  getListe_Participant(){
    this.messagesService.getListe_Participant(this.liste.id).subscribe((data) => {
      this.data = data 
        //console.log(data);
    });
  }

  addParticipantListe(): void
    {
        this.dialogRef = this._matDialog.open(AjouterComponent, {
            panelClass: '',
            data      : {
                liste:this.liste,
                 action: 'new'
            } 
        });

         console.log(this.liste);

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if ( !response )
                {
                    return;
                }
                
                this._updateDataSource();
            });
    }

    _updateDataSource(){
      this.getListe_Participant();
    }
}
