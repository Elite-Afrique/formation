import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import { AddComponent as AddPersonnelComponent } from './add/add.component';
import { Personnel } from './personnels.model';
import { PersonnelsService } from './personnels.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.scss']
})
export class PersonnelsComponent implements OnInit {

  constructor(private _matDialog: MatDialog,private personnelService:PersonnelsService) { }

  imagepath:any= 'http://127.0.0.1:8000/storage/';
    searchControl: FormControl = new FormControl();

    dialogRef: any;
    dataSource: MatTableDataSource<Personnel> = new MatTableDataSource();

    displayedColumns: string[] = [
        'id',
        'nomprenom',
        'contact',
        'fonction',
        'email',
    ];

    recherche(textRecherche) {
        textRecherche = textRecherche.trim(); // Remove whitespace
        textRecherche = textRecherche.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = textRecherche;
    }

  ngOnInit(): void {
    this.getDataPersonnels();
  }

  getDataPersonnels(): void {
    this.personnelService.getAll().subscribe(data=>{
        this.dataSource.data = data
      })
  }

  ajouter(): void
    {
        this.dialogRef = this._matDialog.open(AddPersonnelComponent, {
            panelClass: '',
            data      : {
                personnel:{},
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
        this.getDataPersonnels();
    }

    editer(element){
      this.dialogRef = this._matDialog.open(AddPersonnelComponent, {
        panelClass: '',
        data      : {
            personnel:new Personnel(element),
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
