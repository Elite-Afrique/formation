import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import { AddComponent as AddCategoriesComponent } from './add/add.component';
import { Categorie } from './categories.model';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _matDialog: MatDialog,private categorieService:CategoriesService) { }
  searchControl: FormControl = new FormControl();

  dialogRef: any;
  dataSource: MatTableDataSource<Categorie> = new MatTableDataSource();
  displayedColumns: string[] = [ 'id','libelle'];

  recherche(textRecherche) {
      textRecherche = textRecherche.trim(); // Remove whitespace
      textRecherche = textRecherche.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = textRecherche;
  }
  ngOnInit(): void {
   this.getDataCategories();
  }

  getDataCategories(): void {
    this.categorieService.getAll().subscribe(data=>{
      this.dataSource.data = data
    })
  }

  ajouter(): void
    {
        this.dialogRef = this._matDialog.open(AddCategoriesComponent, {
            panelClass: '',
            data      : {
                categorie:{},
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
      this.getDataCategories();
    }

    editer(element){
      this.dialogRef = this._matDialog.open(AddCategoriesComponent, {
        panelClass: '',
        data      : {
          categorie:new Categorie(element),
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
