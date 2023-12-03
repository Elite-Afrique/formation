import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import { AddComponent as AddSessionComponent } from './add/add.component';
import { Session } from './sessions.model';
import { SessionsService } from './sessions.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  constructor(private _matDialog: MatDialog,private sessionService:SessionsService) {}

  searchControl: FormControl = new FormControl();

    dialogRef: any;
    dataSource: MatTableDataSource<Session> = new MatTableDataSource();

    displayedColumns: string[] = [
        'id',
        'libelle',
        'date_debut',
        'date_fin',
        'localite',
        'idFormation'
    ];

    recherche(textRecherche) {
        textRecherche = textRecherche.trim(); // Remove whitespace
        textRecherche = textRecherche.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = textRecherche;
    }

    ngOnInit(): void { 
        this.getDataSessions();
    }

    getDataSessions(): void {
      this.sessionService.getAll().subscribe(data=>{
        this.dataSource.data = data
      })
    }

    ajouter(): void
    {
        this.dialogRef = this._matDialog.open(AddSessionComponent, {
            panelClass: '',
            data      : {
                session:{},
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
      this.getDataSessions();
    }

    editer(element){
      this.dialogRef = this._matDialog.open(AddSessionComponent, {
        panelClass: '',
        data      : {
            session:new Session(element),
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
