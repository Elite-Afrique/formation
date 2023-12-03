import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Session } from '../sessions.model';
import { SessionsService } from '../sessions.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() name;

    session: Session;
    action: 'edit' | 'new' = 'new';

    formFieldHelpers: string[] = [''];
    constructor(
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        public matDialogRef: MatDialogRef<AddComponent>,
        public sessionsService: SessionsService
    ) {
        this.session = new Session(_data.session);
        this.action = _data.action;
        this.sessionForm = this.createSessionForm();
        this.getFormation(); 
        this.getProvince();
    }
    sessionForm: any;
    formation:any;
    province:any;

    ngOnInit(): void {
      
    }

    getFormation(){
      this.sessionsService.getFormation().subscribe(data=>{
        this.formation=data;
      })
    }
    
    getProvince(){
      this.sessionsService.getProvince().subscribe(data=>{
        this.province=data;
      })
    }
    /**
     * Create user form
     *
     * @returns {FormGroup}
     */

    createSessionForm(): FormGroup {
        return this._formBuilder.group({
        id:[this.session.id],
        libelle:[this.session.libelle],
        date_debut:[this.session.date_debut],
        date_fin:[this.session.date_fin],
        idProvince:[this.session.idProvince],
        idFormation:[this.session.idFormation],

        });
    }

    onSubmit() {
        if (this.action == 'new') {
            let sessions = this.sessionForm.getRawValue();
            console.log(sessions)
            this.sessionsService.add(sessions).subscribe(
                (data) => {
                    this.matDialogRef.close(this.sessionForm);
                },
                (err) => {
                    console.log(err);
                }
            );
        } else {
            this.sessionsService
                .update(this.sessionForm.getRawValue())
                .subscribe((data) => {
                    console.log(data);
                    this.matDialogRef.close(this.sessionForm);
                });
        }
    }

}
