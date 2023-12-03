import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ElementRef, QueryList, Renderer2, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FuseCardComponent } from '@fuse/components/card';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AcceuilService } from '../acceuil.service';
import { Formation } from 'app/modules/admin/custom/formations/formations.model';



@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss'],
  styles         : [
    `
        cards fuse-card {
            margin: 16px;
        }
    `
],
})

export class FicheComponent implements OnInit {
  data: any;
  id:any;
  formation: Formation;
  constructor(private acceuilService:AcceuilService,
    private _matDialog: MatDialog,
    private route: ActivatedRoute) {
      
      this.id = this.route.snapshot.paramMap.get('id');
      
    }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.acceuilService.get(this.id).subscribe((data) => {
      this.data = data 
        console.log(data);
    });
  }

}
