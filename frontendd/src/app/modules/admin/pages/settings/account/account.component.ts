import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/core/user/user.service';

@Component({
    selector       : 'settings-account',
    templateUrl    : './account.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsAccountComponent implements OnInit
{
    accountForm: FormGroup;

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: FormBuilder, private userService:UserService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.accountForm = this._formBuilder.group({
            name    : [''],
            username: [''],
            title   : ['Senior Frontend Developer'],
            adresse   : ['Hey! This is Brian; husband, father and gamer. I\'m mostly passionate adresse bleeding edge tech and chocolate! 🍫'],
            email   : ['', Validators.email],
            phone   : ['']
        });
        this.userService.get().subscribe(u=>{
            
            this.accountForm.setValue({
                name    : u.name,
                username: u.prenom,
                title   : 'Senior Frontend Developer',
                adresse : u.adresse,
                email   : u.email,
                phone   : u.contact
            });
            
        
        
    })
    }
}
