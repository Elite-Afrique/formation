import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute,Router } from '@angular/router';
import moment from 'moment';
import { AddComponent } from '../add/add.component';
import { Participant } from '../participant.model';
import { ParticipantService } from '../participants.service';
import { AddpsComponent } from '../addps/addps.component';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {
  imagepath:any= 'http://127.0.0.1:8000/storage/';
  dialogRef: any;
  participant:Participant = new Participant({})
  id 
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  data:any;
  displayedColumns: string[] = [
    'id',
    'formation',
    'session',
    'periode',
    'status',
    'actions',
];
  constructor(private participantService:ParticipantService,
    private _matDialog: MatDialog,
    private route: ActivatedRoute) { 
      
      this.route.params.subscribe((params) => {
        this.participant = new Participant(params);
        if (params['id']) {
            this.participantService.get(params['id']).subscribe((data) => {
              this.id = params['id'];
                this.participant = data;
            });

            // this.participantService.getParticipants_Session(params['id']).subscribe((data) => {
            //   this.id = params['id'];
            //     this.data = data 
            // });
           
        }
    });  
   }

  ngOnInit(): void {
    this.getParticipants_Session();
    
  }

  getParticipants_Session(){
    this.participantService.getParticipants_Session(this.participant.id).subscribe((data) => {
      this.data = data 
        //console.log(data);
    });
  }

  addPartSession(): void
    {
        this.dialogRef = this._matDialog.open(AddpsComponent, {
            panelClass: '',
            data      : {
                participant:this.participant,
                // action: 'new'
            } 
        });
        //console.log(this.participant);
  
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
      this.getParticipants_Session();
      }
  
  edit() {
    this.dialogRef = this._matDialog.open(AddComponent, {
        data: {
          participant: this.participant,
            action: 'edit',
        },
    });

    this.dialogRef.afterClosed().subscribe((response: FormGroup) => {
        if (!response) {
            return;
        }
        this.participantService.get(this.id).subscribe((data) => {
          this.participant = data;
      });
    });
} 

  getAttestation(ids:number , idp:number){  
      window.open("http://127.0.0.1:8000/api/generatePDF/"+ ids + "/"+idp );
    }

  valider(ids:number , idp:number){  
      // return this.apiService.get('api/valider/'+ ids + "/"+idp);
      this.participantService.valider(ids , idp).subscribe((data) => {
          this._updateDataSource();
      });
  
    }

  



}
