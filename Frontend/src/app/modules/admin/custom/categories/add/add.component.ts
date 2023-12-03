import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categorie } from '../categories.model';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  categorie: Categorie;
  action: 'edit' | 'new' = 'new';

  formFieldHelpers: string[] = [''];
  constructor(
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      public matDialogRef: MatDialogRef<AddComponent>,
      public categorieService: CategoriesService
  ) {
      this.categorie = new Categorie(_data.categorie);
      this.action = _data.action;
      this.categorieForm = this.createCategorieForm();
  }
  categorieForm: any;

  ngOnInit(): void {
  }

  createCategorieForm(): FormGroup {
    return this._formBuilder.group({
    id:[this.categorie.id],
    libelleCategorie:[this.categorie.libelleCategorie],
    });
}

onSubmit() {
    if (this.action == 'new') {
        let categories = this.categorieForm.getRawValue();
        console.log(categories)
        this.categorieService.add(categories).subscribe(
            (data) => {
                this.matDialogRef.close(this.categorieForm);
            },
            (err) => {
                console.log(err);
            }
        );
    } else {
        this.categorieService
            .update(this.categorieForm.getRawValue())
            .subscribe((data) => {
                console.log(data);
                this.matDialogRef.close(this.categorieForm);
            });
    }
}

}
