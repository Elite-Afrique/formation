import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import { Categorie } from '../../categories/categories.model';
import { AddComponent } from '../add/add.component';
import { DetailsComponent } from '../details/details.component';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _matDialog: MatDialog,private messageService:MessagesService) { }
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
    this.messageService.getAll().subscribe(data=>{
      this.dataSource.data = data
    })
  }

  ajouter(): void
    {
        this.dialogRef = this._matDialog.open(AddComponent, {
            panelClass: '',
            data      : {
                liste:{},
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

    // editer(element){
    //   this.dialogRef = this._matDialog.open(AddCategoriesComponent, {
    //     panelClass: '',
    //     data      : {
    //       categorie:new Categorie(element),
    //         action: 'update'
    //     } 
    // });

    // this.dialogRef.afterClosed()
    //     .subscribe((response: FormGroup) => {
    //         if ( !response )
    //         {
    //             return;
    //         }
            
    //         this._updateDataSource();
    //     });
    // }

}
