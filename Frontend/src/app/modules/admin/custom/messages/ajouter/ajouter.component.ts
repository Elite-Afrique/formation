import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Liste } from '../messages.model';
import { MessagesService } from '../messages.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {

  liste: Liste;
  participant:any
  psessionForm: any;
 
  constructor(private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public matDialogRef: MatDialogRef<AjouterComponent>,
    public messageService: MessagesService) { 
      this.liste = new Liste(_data.liste);
      //console.log(this.liste.id);
    }


    getParticipant(){
      this.messageService.getParticipant().subscribe((data) => {
        this.participant = data 
          //console.log(data);
      });
    }

    ngOnInit(): void {
      this.getParticipant();
  
      this.psessionForm = this._formBuilder.group({
        idParticipant : ['',Validators.required],
        idListe : this.liste.id
       });
    }

    onSubmit(){
      
      this.messageService.addParticipantListe(this.psessionForm.value).subscribe({
        next:(res)=>{
          alert("Participant ajouter avec succes");
            this.psessionForm.reset();
            this.matDialogRef.close('save');
        },
        error:()=>{
          alert("Participant non ajouter");
        }
      })
  }
}
