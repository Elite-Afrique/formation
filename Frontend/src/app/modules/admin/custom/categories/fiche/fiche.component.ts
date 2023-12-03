import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { AddComponent } from '../add/add.component';
import { Categorie } from '../categories.model';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  dialogRef: any;
  categorie:Categorie = new Categorie({})
  id 
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  
  constructor(private categorieService:CategoriesService,
    private _matDialog: MatDialog,
    private route: ActivatedRoute) { 
      this.route.params.subscribe((params) => {
        console.log(params);
        if (params['id']) {
            this.categorieService.get(params['id']).subscribe((data) => {
              this.id = params['id'];
                this.categorie = data;
            });
        }
    });
  }
    

  ngOnInit(): void {

  }
  
  edit() {
    this.dialogRef = this._matDialog.open(AddComponent, {
        data: {
          categorie: this.categorie,
            action: 'edit',
        },
    });

    this.dialogRef.afterClosed().subscribe((response: FormGroup) => {
        if (!response) {
            return;
        }
        this.categorieService.get(this.id).subscribe((data) => {
          this.categorie = data;
      });
    });
} 

}
