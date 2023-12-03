import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Formation } from '../formations.model';
import { FormationsService } from '../formations.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  formation: Formation;
  categorie:any;
  action: 'edit' | 'new' = 'new';

  formFieldHelpers: string[] = [''];
  constructor(
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      public matDialogRef: MatDialogRef<AddComponent>,
      public formationService: FormationsService
  ) {
      this.formation = new Formation(_data.formation);
      this.action = _data.action;
      this.formationForm = this.createFormationForm();
      this.getCategories();
  }
  formationForm: any;

  ngOnInit(): void {

  }

  getCategories(){
    this.formationService.getCategories().subscribe(data=>{
      this.categorie=data;
    })
  }

  createFormationForm(): FormGroup {

    return this._formBuilder.group({
      id:[this.formation.id],
      libelleFormation:[this.formation.libelleFormation],
      volume_horaire:[this.formation.volume_horaire],
      nombre_module:[this.formation.nombre_module],
      duree_formation:[this.formation.duree_formation],
      prix:[this.formation.prix],
      idCategorie:[this.formation.idCategorie],
      description:[this.formation.description],
    });
}

onSubmit() {
    if (this.action == 'new') {
        let formations = this.formationForm.getRawValue();
        console.log(formations)
        this.formationService.add(formations).subscribe(
            (data) => {
                this.matDialogRef.close(this.formationForm);
            },
            (err) => {
                console.log(err);
            }
        );
    } else {
        this.formationService
            .update(this.formationForm.getRawValue())
            .subscribe((data) => {
                console.log(data);
                this.matDialogRef.close(this.formationForm);
            });
    }
}
}
