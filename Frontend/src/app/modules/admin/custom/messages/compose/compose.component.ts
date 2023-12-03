import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

    liste:any;
  composeForm: FormGroup;
  copyFields: { cc: boolean; bcc: boolean } = {
      cc : false,
      bcc: false
  };
  quillModules: any = {
      toolbar: [
          ['bold', 'italic', 'underline'],
          [{align: []}, {list: 'ordered'}, {list: 'bullet'}],
          ['clean']
      ]
  };

  /**
   * Constructor
   */
  constructor(
      public matDialogRef: MatDialogRef<ComposeComponent>,
      private _formBuilder: FormBuilder,
      private _matDialog: MatDialog,private messageService:MessagesService
  )
  {
  }

  getDataCategories(): void {
    this.messageService.getAll().subscribe(data=>{
      this.liste = data
    })
  }

  ngOnInit(): void
    {
        // Create the form
        this.composeForm = this._formBuilder.group({
            idListe     : ['', [Validators.required]],
            body   : ['', [Validators.required]]
        });

        this.getDataCategories();
    }

    /**
     * Show the copy field with the given field name
     *
     * @param name
     */
     showCopyField(name: string): void
     {
         // Return if the name is not one of the available names
         if ( name !== 'cc' && name !== 'bcc' )
         {
             return;
         }
 
         // Show the field
         this.copyFields[name] = true;
     }
 
     /**
      * Save and close
      */
     saveAndClose(): void
     {
         // Save the message as a draft
         this.saveAsDraft();
 
         // Close the dialog
         this.matDialogRef.close();
     }
 
     /**
      * Discard the message
      */
     discard(): void
     {
 
     }
 
     /**
      * Save the message as a draft
      */
     saveAsDraft(): void
     {
 
     }
 
     /**
      * Send the message
      */
     send(): void
     {
        console.log(this.composeForm.value);
        this.messageService.envoyer(this.composeForm.value).subscribe({
            next:(res)=>{
              alert("Message envoyé avec succés");
                this.composeForm.reset();
                this.matDialogRef.close('save');
            },
            error:()=>{
              alert(" Message non envoyé ");
            }
          })
     }

}
