import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Participant } from '../participant.model';
import { ParticipantService } from '../participants.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
    @Input() name;
    imagepath:any= 'http://127.0.0.1:8000/storage/';
    participant: Participant;
    url:string;
    action: 'edit' | 'new' = 'new';

    formFieldHelpers: string[] = [''];
    constructor(public fb: FormBuilder,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        public matDialogRef: MatDialogRef<AddComponent>,
        public participantsService: ParticipantService
    ) {
        // this.participantForm = this.fb.group({
        //     name: [''],
        //     prenom: [''],
        //     adresse: [''],
        //     genre: [''],
        //     contact: [''],
        //     email: [''],
        //     password: [''],
        //     date_naissance: [''],
        //     numero_cnib: [''],
        //     photo: [null],
        //   });
        this.participant = new Participant(_data.participant);
        console.log(this.participant);
        this.action = _data.action;
        this.participantForm = this.createParticipantForm();
    }
    participantForm: FormGroup;
    
    ngOnInit(): void {

        if (this.action == 'new') {
            this.url="../assets/avatar.png";
            }
            else{
              this.url ="http://127.0.0.1:8000/storage/" + this.participant.photo ;
              
            }
    }
   

    createParticipantForm(): FormGroup {
        return this._formBuilder.group({
        //id:[this.participant.id],
        name:[this.participant.name],
        prenom:[this.participant.prenom],
        genre:[this.participant.genre],
        contact:[this.participant.contact],
        email:[this.participant.email],
        password:[this.participant.password],
        adresse:[this.participant.adresse],
        //idRole:[this.participant.idRole],
        photo:[this.participant.photo],
        profession:[this.participant.profession],
        date_naissance:[this.participant.date_naissance],
        lieu_naissance:[this.participant.lieu_naissance],
        Pays_naissance:[this.participant.Pays_naissance],
        numero_cnib:[this.participant.numero_cnib],
        date_etablissement:[this.participant.date_etablissement],
        lieu_etablissement:[this.participant.lieu_etablissement],
        dernier_diplome:[this.participant.dernier_diplome],
        //idProvince:[this.participant.idProvince],
        //idSession:[this.participant.idSession],
        });
    }

    onselectFiles(e:any){
        if(e.target.files){
          var reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload=(event:any)=>{
            this.url=event.target.result;
          }
          const file = (e.target).files[0];
          this.participantForm.patchValue({
            photo: file,
          });
          this.participantForm.get('photo').updateValueAndValidity();
        }
      }

    onSubmit() {
        if (this.action == 'new') {
            // let participants = this.participantForm.getRawValue();
            // console.log(participants)
            var formData: any = new FormData();
                formData.append('name', this.participantForm.get('name').value);
                formData.append('email', this.participantForm.get('email').value);
                formData.append('password', this.participantForm.get('password').value);
                formData.append('genre', this.participantForm.get('genre').value);
                formData.append('contact', this.participantForm.get('contact').value);
                formData.append('prenom', this.participantForm.get('prenom').value);
                formData.append('date_naissance', this.participantForm.get('date_naissance').value);
                formData.append('photo', this.participantForm.get('photo').value);

                formData.append('profession', this.participantForm.get('profession').value);
                formData.append('date_naissance', this.participantForm.get('date_naissance').value);
                formData.append('lieu_naissance', this.participantForm.get('lieu_naissance').value);
                formData.append('Pays_naissance', this.participantForm.get('Pays_naissance').value);
                formData.append('numero_cnib', this.participantForm.get('numero_cnib').value);
                formData.append('date_etablissement', this.participantForm.get('date_etablissement').value);
                formData.append('lieu_etablissement', this.participantForm.get('lieu_etablissement').value);
                formData.append('dernier_diplome', this.participantForm.get('dernier_diplome').value);
                console.log(formData);
            this.participantsService.add(formData).subscribe(
                (data) => {
                   // console.log(data);
                    this.matDialogRef.close(this.participantForm);
                },
                (err) => {
                    console.log(err);
                }
            );
        } else {

            var formData: any = new FormData();
            formData.append('name', this.participantForm.get('name').value);
            formData.append('email', this.participantForm.get('email').value);
            formData.append('password', this.participantForm.get('password').value);
            formData.append('genre', this.participantForm.get('genre').value);
            formData.append('contact', this.participantForm.get('contact').value);
            formData.append('prenom', this.participantForm.get('prenom').value);
            formData.append('date_naissance', this.participantForm.get('date_naissance').value);
            formData.append('photo', this.participantForm.get('photo').value);
            formData.append('adresse', this.participantForm.get('adresse').value);

            formData.append('profession', this.participantForm.get('profession').value);
            formData.append('date_naissance', this.participantForm.get('date_naissance').value);
            formData.append('lieu_naissance', this.participantForm.get('lieu_naissance').value);
            formData.append('Pays_naissance', this.participantForm.get('Pays_naissance').value);
            formData.append('numero_cnib', this.participantForm.get('numero_cnib').value);
            formData.append('date_etablissement', this.participantForm.get('date_etablissement').value);
            formData.append('lieu_etablissement', this.participantForm.get('lieu_etablissement').value);
            formData.append('dernier_diplome', this.participantForm.get('dernier_diplome').value);
                console.log(formData);         

            this.participantsService.update(this.participant.id,formData)
                .subscribe((data) => {
                    console.log(data);
                    this.matDialogRef.close(this.participantForm);
                });
        }
    }
}
