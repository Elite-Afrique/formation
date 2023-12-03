import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Liste } from '../messages.model';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  liste: Liste;
  action: 'edit' | 'new' = 'new';

  formFieldHelpers: string[] = [''];
  constructor(
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      public matDialogRef: MatDialogRef<AddComponent>,
      public messageService: MessagesService
  ) {
      this.liste = new Liste(_data.liste);
      this.action = _data.action;
      this.listeForm = this.createListeForm();
  }

  
  listeForm: FormGroup;

  ngOnInit(): void {
  }

  createListeForm(): FormGroup {
    return this._formBuilder.group({
      libelle:[this.liste.libelle]
    });
}

onSubmit() {
    if (this.action == 'new') {
        let liste = this.listeForm.getRawValue();
        console.log(liste)
        this.messageService.add(liste).subscribe(
            (data) => {
                this.matDialogRef.close(this.listeForm);
            },
            (err) => {
                console.log(err);
            }
        );
    } else {
        // this.messageService
        //     .update(this.categorieForm.getRawValue())
        //     .subscribe((data) => {
        //         console.log(data);
        //         this.matDialogRef.close(this.categorieForm);
        //     });
    }
  }

}
