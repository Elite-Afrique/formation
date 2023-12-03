import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import { AddComponent as AddParticipantComponent } from './add/add.component';
import { Participant } from './participant.model';
import { ParticipantService } from './participants.service';

@Component({
    selector: 'app-participants',
    templateUrl: './participants.component.html',
    styleUrls: ['./participants.component.scss'],
})
export class ParticipantsComponent implements OnInit {
    constructor(private _matDialog: MatDialog,private participantService:ParticipantService) {}
    
    imagepath:any= 'http://127.0.0.1:8000/storage/';
    searchControl: FormControl = new FormControl();

    dialogRef: any;
    dataSource: MatTableDataSource<Participant> = new MatTableDataSource();

    displayedColumns: string[] = [
        'id',
        'nomprenom',
        'contact',
        'profession',
        'email'
    ];

    recherche(textRecherche) {
        textRecherche = textRecherche.trim(); // Remove whitespace
        textRecherche = textRecherche.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = textRecherche;
    }

    ngOnInit(): void { 
        this.getDataParticipants();
    }

    getDataParticipants():void{
        this.participantService.getAll().subscribe(data=>{
            this.dataSource.data = data
        })
    }

    ajouter(): void
    {
        this.dialogRef = this._matDialog.open(AddParticipantComponent, {
            panelClass: '',
            data      : {
                participant:{},
                action: 'new'
            } 
        });
  
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
        this.getDataParticipants();
    }

    editer(element){
      this.dialogRef = this._matDialog.open(AddParticipantComponent, {
        panelClass: '',
        data      : {
            participant:new Participant(element),
            action: 'update'
        } 
    });

    this.dialogRef.afterClosed()
        .subscribe((response: FormGroup) => {
            if ( !response )
            {
                return;
            }
            
            this._updateDataSource();
        });
    }
    supprimer(element){}
}
