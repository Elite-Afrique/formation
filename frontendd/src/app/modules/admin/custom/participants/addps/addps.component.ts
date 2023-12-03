import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Participant } from '../participant.model';
import { ParticipantService } from '../participants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addps',
  templateUrl: './addps.component.html',
  styleUrls: ['./addps.component.scss']
})
export class AddpsComponent implements OnInit {
  session:any;
  formFieldHelpers: string[] = [''];
  displayedColumns: string[] = ['idSession','idParticipant'];
  id
  idParticipant
  participant: Participant;
  constructor(
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      public matDialogRef: MatDialogRef<AddpsComponent>,
      public participantService: ParticipantService,
      private route: ActivatedRoute) {

        this.participant = new Participant(_data.participant);
        //console.log(this.participant);
         this.getSessions();
    }
  psessionForm: any;
  participantSession:any;
 
  ngOnInit(): void {

    this.getSessions();

    this.psessionForm = this._formBuilder.group({
      idSession : ['',Validators.required],
      idParticipant : this.participant.id
     });
  }

  getSessions(){
    this.participantService.getSessions().subscribe(data=>{
      this.session=data;
    })
  }

  onSubmit(){
    this.participantService.addPartSession(this.psessionForm.value).subscribe({
      next:(res)=>{
        alert("session ajouter avec succes");
        this.psessionForm.reset();
        this.matDialogRef.close('save');
      },
      error:()=>{
        alert("session non ajouter");
      }
    })
  }

}
