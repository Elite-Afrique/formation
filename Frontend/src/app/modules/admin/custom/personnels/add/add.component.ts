import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Personnel } from '../personnels.model';
import { PersonnelsService } from '../personnels.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() name;
  fonction : any;
  role : any;
  
  imagepath:any= 'http://127.0.0.1:8000/storage/';
  personnel: Personnel;
  action: 'edit' | 'new' = 'new';
  url: string;
  formFieldHelpers: string[] = [''];
  avatarFileInput: any;
  _personnelsService: PersonnelsService;

  constructor(private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public matDialogRef: MatDialogRef<AddComponent>,
    public personnelsService: PersonnelsService) {
        this.personnel = new Personnel(_data.personnel);
        this.action = _data.action;
        this.personnelForm = this.createPersonnelForm();
        this.getFonction(); 
        this.getRole();
     }

     personnelForm: any;

  ngOnInit(): void {

    if (this.action == 'new') {
    this.url="../assets/avatar.png";
    }
    else{
      this.url ="http://127.0.0.1:8000/storage/" + this.personnel.photo ;
    }
    
  }

  getFonction(){
    this.personnelsService.getFonction().subscribe(data=>{
      this.fonction=data;
    })
  }
  
  getRole(){
    this.personnelsService.getRole().subscribe(data=>{
      this.role=data;
    })
  }

  /**
     * Create user form
     *
     * @returns {FormGroup}
     */

   createPersonnelForm(): FormGroup {
    return this._formBuilder.group({
    id:[this.personnel.id],
    name:[this.personnel.name],
    prenom:[this.personnel.prenom],
    genre:[this.personnel.genre],
    contact:[this.personnel.contact],
    email:[this.personnel.email],
    password:[this.personnel.password],
    adresse:[this.personnel.adresse],
    idRole:[this.personnel.idRole],
    photo:[this.personnel.photo],
    idFonction:[this.personnel.idFonction],
    });
}

onSubmit() {
  if (this.action == 'new') {
      // let personnels = this.personnelForm.getRawValue();
      // console.log(personnels)
      var formData: any = new FormData();
      formData.append('name', this.personnelForm.get('name').value);
      formData.append('email', this.personnelForm.get('email').value);
      formData.append('password', this.personnelForm.get('password').value);
      formData.append('genre', this.personnelForm.get('genre').value);
      formData.append('contact', this.personnelForm.get('contact').value);
      formData.append('adresse', this.personnelForm.get('adresse').value);
      formData.append('prenom', this.personnelForm.get('prenom').value);
      formData.append('idFonction', this.personnelForm.get('idFonction').value);
      formData.append('idRole', this.personnelForm.get('idRole').value);
      formData.append('photo', this.personnelForm.get('photo').value);
      console.log(formData);
      this.personnelsService.add(formData).subscribe(
          (data) => {
              this.matDialogRef.close(this.personnelForm);
          },
          (err) => {
              console.log(err);
          }
      );
  } else {

    var formData: any = new FormData();
    formData.append('name', this.personnelForm.get('name').value);
    formData.append('email', this.personnelForm.get('email').value);
    formData.append('password', this.personnelForm.get('password').value);
    formData.append('genre', this.personnelForm.get('genre').value);
    formData.append('contact', this.personnelForm.get('contact').value);
    formData.append('adresse', this.personnelForm.get('adresse').value);
    formData.append('prenom', this.personnelForm.get('prenom').value);
    formData.append('idFonction', this.personnelForm.get('idFonction').value);
    formData.append('idRole', this.personnelForm.get('idRole').value);
    formData.append('photo', this.personnelForm.get('photo').value);
    console.log(formData);
      this.personnelsService.update(this.personnel.id,formData)
          .subscribe((data) => {
              console.log(data);
              this.matDialogRef.close(this.personnelForm);
          });
  }
}
   

     onselectFiles(e:any){
        if(e.target.files){
          var reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload=(event:any)=>{
            this.url=event.target.result;
          }
          const file = (e.target).files[0];
          this.personnelForm.patchValue({
            photo: file,
          });
          this.personnelForm.get('photo').updateValueAndValidity();
        }
      }
     
}
