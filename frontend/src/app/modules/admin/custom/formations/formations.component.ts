import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BehaviorSubject, combineLatest, Subject, takeUntil } from 'rxjs';
import { FormationsService } from './formations.service';
import { CategoriesComponent } from '../categories/categories.component';
import moment from 'moment';
import { AddComponent as AddFormationComponent } from './add/add.component';
import { Course } from '../../apps/academy/academy.types';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { Formation } from './formations.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  categories: CategoriesComponent[];
    courses: Course[];
    filteredCourses: Course[];
    filters: {
        categorySlug$: BehaviorSubject<string>;
        query$: BehaviorSubject<string>;
        hideCompleted$: BehaviorSubject<boolean>;
    } = {
        categorySlug$ : new BehaviorSubject('all'),
        query$        : new BehaviorSubject(''),
        hideCompleted$: new BehaviorSubject(false)
    };

    private _unsubscribeAll: Subject<any> = new Subject<any>();
  dialogRef: any;
  dataSource: MatTableDataSource<Formation> = new MatTableDataSource();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _academyService: FormationsService,
        private _matDialog: MatDialog,private formationService:FormationsService,
    )
    {
      this.getCategories();
    }

    ngOnInit(): void { 
      this.getFormations();
    }

    getFormations(){
      this.formationService.getAll().subscribe(data=>{
        this.dataSource.data = data
        console.log(data);
    })
    }

  getCategories(){
    this.formationService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

  ajouter(): void
  {
      this.dialogRef = this._matDialog.open(AddFormationComponent, {
          panelClass: '',
          data      : {
              formation:{},
              action: 'new'
          } 
      });

      this.dialogRef.afterClosed()
          .subscribe((response: FormGroup) => {
              if ( !response )
              {
                  return;
              }
              
              this._updateDataSource();
          });
  }
  
  _updateDataSource(){
    this.getFormations();
  }

  editer(element){
    this.dialogRef = this._matDialog.open(AddFormationComponent, {
      panelClass: '',
      data      : {
          formation:new Formation(element),
          action: 'update'
      } 
  });

  this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
          if ( !response )
          {
              return;
          }
          
          this._updateDataSource();
      });
  }
  supprimer(element){
    
  }
  /**
     * Filter by search query
     *
     * @param query
     */
   filterByQuery(query: string): void
   {
       this.filters.query$.next(query);
   }

   /**
    * Filter by category
    *
    * @param change
    */
   filterByCategory(change: MatSelectChange): void
   {
       this.filters.categorySlug$.next(change.value);
   }

   /**
    * Show/hide completed courses
    *
    * @param change
    */
   toggleCompleted(change: MatSlideToggleChange): void
   {
       this.filters.hideCompleted$.next(change.checked);
   }

   /**
    * Track by function for ngFor loops
    *
    * @param index
    * @param item
    */
   trackByFn(index: number, item: any): any
   {
       return item.id || index;
   }

}
