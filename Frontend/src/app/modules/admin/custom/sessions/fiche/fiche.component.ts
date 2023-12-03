import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { AddComponent } from '../add/add.component';
import { Session } from '../sessions.model';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  dialogRef: any;
  session:Session = new Session({})
  id 
  data:any;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  
  displayedColumns: string[] = [
    'id',
    'formation',
    'session',
    'periode',
    'status',
    'actions',
];
  constructor(private sessionService:SessionsService,
    private _matDialog: MatDialog,
    private route: ActivatedRoute) { 
      this.route.params.subscribe((params) => {
        console.log(params);
        if (params['id']) {
            this.sessionService.get(params['id']).subscribe((data) => {
              this.id = params['id'];
                this.session = data;
            });
            this.sessionService.getSession_Participants(params['id']).subscribe((data) => {
              this.id = params['id'];
                this.data = data
            });
        }
    });
    }
    

  ngOnInit(): void {
    this.dataSource.data = [{
      id:1,
      formation:"Formation 1",session:"Session 4",
      periode:moment().format("DD/MM/YYYY")+ " au " + moment().format("DD/MM/YYYY"),
      status:"valide"
    },{
      id:2,
      formation:"Formation 2",session:"Session 8",
      periode:moment().format("DD/MM/YYYY")+ " au " + moment().format("DD/MM/YYYY"),
      status:"valide"
    },{
      id:3,
      formation:"Formation 3",session:"Session 2",
      periode:moment().format("DD/MM/YYYY")+ " au " + moment().format("DD/MM/YYYY"),
      status:"valide"
    },
  ]
  }
  
  edit() {
    this.dialogRef = this._matDialog.open(AddComponent, {
        data: {
          session: this.session,
            action: 'edit',
        },
    });

    this.dialogRef.afterClosed().subscribe((response: FormGroup) => {
        if (!response) {
            return;
        }
        this.sessionService.get(this.id).subscribe((data) => {
          this.session = data;
      });
    });
} 

}
