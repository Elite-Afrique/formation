"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5265],{7853:(q,x,n)=>{n.d(x,{V:()=>g});var d=n(5e3);let g=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=d.oAB({type:m}),m.\u0275inj=d.cJS({}),m})()},65265:(q,x,n)=>{n.r(x),n.d(x,{FormationsModule:()=>H});var d=n(69808),g=n(61135),m=n(77579),l=n(48966);class p{constructor(r){this.id=r.id,this.libelleFormation=r.libelleFormation,this.volume_horaire=r.volume_horaire,this.nombre_module=r.nombre_module,this.duree_formation=r.duree_formation,this.prix=r.prix,this.idCategorie=r.idCategorie,this.description=r.description}}var e=n(5e3),c=n(93075),h=n(7468),f=n(67322),A=n(98833),T=n(74107),U=n(90508),Z=n(25245),b=n(47423);function J(i,r){if(1&i&&(e.TgZ(0,"mat-option",17),e._uU(1),e.qZA()),2&i){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.libelleCategorie)}}let F=(()=>{class i{constructor(t,o,a,s){this._formBuilder=t,this._data=o,this.matDialogRef=a,this.formationService=s,this.action="new",this.formFieldHelpers=[""],this.formation=new p(o.formation),this.action=o.action,this.formationForm=this.createFormationForm(),this.getCategories()}ngOnInit(){}getCategories(){this.formationService.getCategories().subscribe(t=>{this.categorie=t})}createFormationForm(){return this._formBuilder.group({id:[this.formation.id],libelleFormation:[this.formation.libelleFormation],volume_horaire:[this.formation.volume_horaire],nombre_module:[this.formation.nombre_module],duree_formation:[this.formation.duree_formation],prix:[this.formation.prix],idCategorie:[this.formation.idCategorie],description:[this.formation.description]})}onSubmit(){if("new"==this.action){let t=this.formationForm.getRawValue();console.log(t),this.formationService.add(t).subscribe(o=>{this.matDialogRef.close(this.formationForm)},o=>{console.log(o)})}else this.formationService.update(this.formationForm.getRawValue()).subscribe(t=>{console.log(t),this.matDialogRef.close(this.formationForm)})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.qu),e.Y36(l.WI),e.Y36(l.so),e.Y36(h.G))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add"]],decls:44,vars:16,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"sm:p-6","w-200"],[1,"",3,"formGroup"],[1,"flex","flex-col","w-full"],[1,"flex"],[1,"w-2/5","pr-2"],["matInput","","required","",3,"formControlName"],[1,"w-2/5","pl-2"],["required","",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-8"],[1,"fuse-mat-textarea","fuse-mat-no-subscript","w-full"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","","matTextareaAutosize","",3,"formControlName","placeholder","rows","spellcheck"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""],["mat-button","",3,"disabled","click"],[3,"value"]],template:function(t,o){1&t&&(e.TgZ(0,"h2",0),e._uU(1),e.qZA(),e.TgZ(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),e._uU(8,"Nom"),e.qZA(),e._UZ(9,"input",6),e.qZA(),e.TgZ(10,"mat-form-field",5)(11,"mat-label"),e._uU(12,"Volume Horaire"),e.qZA(),e._UZ(13,"input",6),e.qZA()(),e.TgZ(14,"div",4)(15,"mat-form-field",5)(16,"mat-label"),e._uU(17,"Nombre de module"),e.qZA(),e._UZ(18,"input",6),e.qZA(),e.TgZ(19,"mat-form-field",5)(20,"mat-label"),e._uU(21,"Dur\xe9e de la formation"),e.qZA(),e._UZ(22,"input",6),e.qZA()(),e.TgZ(23,"div",4)(24,"mat-form-field",5)(25,"mat-label"),e._uU(26,"Prix"),e.qZA(),e._UZ(27,"input",6),e.qZA(),e.TgZ(28,"mat-form-field",7)(29,"mat-label"),e._uU(30,"Categorie"),e.qZA(),e.TgZ(31,"mat-select",8),e.YNc(32,J,2,2,"mat-option",9),e.qZA()()(),e.TgZ(33,"div",10)(34,"mat-form-field",11)(35,"mat-label"),e._uU(36,"Description"),e.qZA(),e._UZ(37,"mat-icon",12)(38,"textarea",13),e.qZA()()()()(),e.TgZ(39,"div",14)(40,"button",15),e._uU(41,"Annuler"),e.qZA(),e.TgZ(42,"button",16),e.NdJ("click",function(){return o.onSubmit()}),e._uU(43),e.qZA()()),2&t&&(e.xp6(1),e.Oqu("new"==o.action?"Ajouter un formation":"Modifier la formation "+o.formation.libelleFormation),e.xp6(2),e.Q6J("formGroup",o.formationForm),e.xp6(6),e.Q6J("formControlName","libelleFormation"),e.xp6(4),e.Q6J("formControlName","volume_horaire"),e.xp6(5),e.Q6J("formControlName","nombre_module"),e.xp6(4),e.Q6J("formControlName","duree_formation"),e.xp6(5),e.Q6J("formControlName","prix"),e.xp6(4),e.Q6J("formControlName","idCategorie"),e.xp6(1),e.Q6J("ngForOf",o.categorie),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:menu-alt-2"),e.xp6(1),e.Q6J("formControlName","description")("placeholder","description")("rows",5)("spellcheck",!1),e.xp6(4),e.Q6J("disabled",!o.formationForm.valid),e.xp6(1),e.hij(" ","new"==o.action?"Enregister":"Modifier",""))},directives:[l.uh,l.xY,c._Y,c.JL,c.sg,f.KE,f.hX,A.Nt,c.Fj,c.Q7,c.JJ,c.u,T.gD,d.sg,U.ey,Z.Hw,f.qo,l.H8,b.lW,l.ZT],styles:[""]}),i})();var _=n(32075),u=n(4521),Q=n(5303);function S(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"mat-option",6),e._uU(2),e.qZA(),e.BQk()),2&i){const t=r.$implicit;e.xp6(1),e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.libelleCategorie)}}const D=function(i){return[i]};function N(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",14)(2,"div",15)(3,"div",16)(4,"div",17),e._uU(5),e.qZA()(),e.TgZ(6,"div",18),e._uU(7),e.qZA(),e.TgZ(8,"div",19),e._uU(9),e.qZA(),e._UZ(10,"div",20),e.TgZ(11,"div",21),e._UZ(12,"mat-icon",22),e.TgZ(13,"div",23),e._uU(14),e.qZA()(),e.TgZ(15,"div",24),e._UZ(16,"mat-icon",22),e._uU(17),e.qZA()(),e.TgZ(18,"div",25)(19,"div",26)(20,"button",27)(21,"span",28),e.ynx(22),e.TgZ(23,"span"),e._uU(24,"Continue"),e.qZA(),e.BQk(),e._UZ(25,"mat-icon",29),e.qZA()()()()(),e.BQk()),2&i){const t=r.$implicit;e.xp6(5),e.hij(" ",t.libelleCategorie," "),e.xp6(2),e.Oqu(t.libelleFormation),e.xp6(2),e.Oqu(t.description),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:clock"),e.xp6(2),e.hij("",t.volume_horaire," heures"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:academic-cap"),e.xp6(1),e.hij(" ",t.duree_formation," semaines "),e.xp6(3),e.Q6J("routerLink",e.VKq(9,D,t.id)),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:arrow-sm-right")}}function B(i,r){1&i&&(e.TgZ(0,"div",30),e._UZ(1,"mat-icon",31),e.TgZ(2,"div",32),e._uU(3,"No courses found!"),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("svgIcon","iconsmind:file_search"))}let I=(()=>{class i{constructor(t,o,a,s,v,y){this._activatedRoute=t,this._changeDetectorRef=o,this._router=a,this._academyService=s,this._matDialog=v,this.formationService=y,this.filters={categorySlug$:new g.X("all"),query$:new g.X(""),hideCompleted$:new g.X(!1)},this._unsubscribeAll=new m.x,this.dataSource=new _.by,this.getCategories()}ngOnInit(){this.getFormations()}getFormations(){this.formationService.getAll().subscribe(t=>{this.dataSource.data=t,console.log(t)})}getCategories(){this.formationService.getCategories().subscribe(t=>{this.categories=t})}ajouter(){this.dialogRef=this._matDialog.open(F,{panelClass:"",data:{formation:{},action:"new"}}),this.dialogRef.afterClosed().subscribe(t=>{!t||this._updateDataSource()})}_updateDataSource(){this.getFormations()}editer(t){this.dialogRef=this._matDialog.open(F,{panelClass:"",data:{formation:new p(t),action:"update"}}),this.dialogRef.afterClosed().subscribe(o=>{!o||this._updateDataSource()})}supprimer(t){}filterByQuery(t){this.filters.query$.next(t)}filterByCategory(t){this.filters.categorySlug$.next(t.value)}toggleCompleted(t){this.filters.hideCompleted$.next(t.checked)}trackByFn(t,o){return o.id||t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(u.gz),e.Y36(e.sBO),e.Y36(u.F0),e.Y36(h.G),e.Y36(l.uw),e.Y36(h.G))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-formations"]],decls:19,vars:8,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-auto","p-6","sm:p-10"],[1,"flex","flex-col","flex-auto","w-full","max-w-xs","sm:max-w-5xl","mx-auto"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-xs","sm:max-w-none"],[1,"fuse-mat-no-subscript","w-full","sm:w-36"],[3,"value","selectionChange"],[3,"value"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"w-2/3","text-right","items-center"],["mat-flat-button","",1,"ml-4",3,"color","click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","mt-8","sm:mt-10"],["noCourses",""],[1,"flex","flex-col","h-96","shadow","rounded-2xl","overflow-hidden","bg-card"],[1,"flex","flex-col","p-6"],[1,"flex","items-center","justify-between"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold","text-blue-800","bg-blue-100","dark:text-blue-50","dark:bg-blue-500"],[1,"mt-4","text-lg","font-medium"],[1,"mt-0.5","line-clamp-2","text-secondary"],[1,"w-12","h-1","my-6","border-t-2"],[1,"flex","items-center","leading-5","text-md","text-secondary"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"ml-1.5"],[1,"flex","items-center","mt-2","leading-5","text-md","text-secondary"],[1,"flex","flex-col","w-full","mt-auto"],[1,"px-6","py-4","text-right","bg-gray-50","dark:bg-transparent"],["mat-stroked-button","",3,"routerLink"],[1,"inline-flex","items-center"],[1,"ml-1.5","icon-size-5",3,"svgIcon"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-20",3,"svgIcon"],[1,"mt-6","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-form-field",4)(5,"mat-select",5),e.NdJ("selectionChange",function(s){return o.filterByCategory(s)}),e.TgZ(6,"mat-option",6),e._uU(7,"Categorie"),e.qZA(),e.YNc(8,S,3,2,"ng-container",7),e.qZA()(),e.TgZ(9,"div",8)(10,"button",9),e.NdJ("click",function(){return o.ajouter()}),e._UZ(11,"mat-icon",10),e.TgZ(12,"span",11),e._uU(13,"Ajouter"),e.qZA()()()(),e.ynx(14),e.TgZ(15,"div",12),e.YNc(16,N,26,11,"ng-container",7),e.qZA(),e.BQk(),e.YNc(17,B,4,1,"ng-template",null,13,e.W1O),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("value","all"),e.xp6(1),e.Q6J("value","all"),e.xp6(2),e.Q6J("ngForOf",o.categories)("ngForTrackBy",o.trackByFn),e.xp6(2),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:plus"),e.xp6(5),e.Q6J("ngForOf",o.dataSource.data)("ngForTrackBy",o.trackByFn))},directives:[Q.PQ,f.KE,T.gD,U.ey,d.sg,b.lW,Z.Hw,u.rH],styles:[""]}),i})();var k=n(71683),j=n(19602),w=n(87238);const O=function(){return["/dashboards/project"]},Y=function(){return["/custom/participants"]};let R=(()=>{class i{constructor(t,o,a,s,v,y,X){this.formationService=t,this._matDialog=o,this.route=a,this.router=s,this._changeDetectorRef=v,this._formationService=y,this._fuseConfirmationService=X,this.formation=new p({}),this.dataSource=new _.by,this.route.params.subscribe(C=>{console.log(C),C.id&&this.formationService.get(C.id).subscribe(G=>{this.id=C.id,this.formation=G})})}ngOnInit(){}edit(){this.dialogRef=this._matDialog.open(F,{data:{formation:this.formation,action:"edit"}}),this.dialogRef.afterClosed().subscribe(t=>{!t||this.formationService.get(this.id).subscribe(o=>{this.formation=o})})}delete(t){this._fuseConfirmationService.open({title:"Supprimer la formation",message:"Voulez-vous supprimer la formation ?",actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(a=>{"confirmed"===a&&(this._formationService.delete(this.formation.id).subscribe(v=>{}),this.router.navigateByUrl("custom/formations"),this._changeDetectorRef.markForCheck())})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.G),e.Y36(l.uw),e.Y36(u.gz),e.Y36(u.F0),e.Y36(e.sBO),e.Y36(h.G),e.Y36(k.R))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-fiche"]],decls:67,vars:17,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","pr-6","pl-6","pt-1","pb-1","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLinkActive","router-link-active",1,"whitespace-nowrap","text-primary-500",3,"routerLink"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-default-500"],[1,"flex-auto","p-6","pt-6"],[1,"border-dashed","border-gray-300","rounded-2xl","mt-10"],[1,"flex","flex-col","max-w-300","w-full","px-8","pt-6","pb-4","filter-list"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-semibold","leading-tight"],[1,"flex","items-center","ml-auto","mb-1"],["mat-button","",3,"color","matTooltip","click"],["mat-stroked-button","",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex","flex-col","mt-5"],[1,"flex","flex-col","w-full"],[1,"flex","mb-3"],[1,"w-1/3","pr-2","flex"],[1,"w-1/2"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Tableau de board"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",4),e._uU(10,"Formations"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14),e.qZA()()()()(),e.TgZ(15,"div",8)(16,"div",9)(17,"fuse-card",10)(18,"div",11)(19,"div",12),e._uU(20,"Informations sur la Formation"),e.qZA(),e.TgZ(21,"div",13)(22,"button",14),e.NdJ("click",function(){return o.delete(o.id)}),e._uU(23," supprimer "),e.qZA(),e.TgZ(24,"button",15),e.NdJ("click",function(){return o.edit()}),e._UZ(25,"mat-icon",16),e.TgZ(26,"span",17),e._uU(27,"Modifier"),e.qZA()()()(),e.TgZ(28,"div",18)(29,"div",19)(30,"div",20)(31,"div",21)(32,"mat-label",22),e._uU(33,"Nom de la formation : "),e.qZA(),e.TgZ(34,"mat-label",22),e._uU(35),e.qZA()(),e.TgZ(36,"div",21)(37,"mat-label",22),e._uU(38,"Volume Horaire : "),e.qZA(),e.TgZ(39,"mat-label",22),e._uU(40),e.qZA()(),e.TgZ(41,"div",21)(42,"mat-label",22),e._uU(43,"Nombre de module : "),e.qZA(),e.TgZ(44,"mat-label",22),e._uU(45),e.qZA()()(),e.TgZ(46,"div",20)(47,"div",21)(48,"mat-label",22),e._uU(49,"Dur\xe9e de la formation : "),e.qZA(),e.TgZ(50,"mat-label",22),e._uU(51),e.qZA()(),e.TgZ(52,"div",21)(53,"mat-label",22),e._uU(54,"Prix : "),e.qZA(),e.TgZ(55,"mat-label",22),e._uU(56),e.qZA()(),e.TgZ(57,"div",21)(58,"mat-label",22),e._uU(59,"Categorie : "),e.qZA(),e.TgZ(60,"mat-label",22),e._uU(61),e.qZA()()(),e.TgZ(62,"div",20)(63,"mat-label",22),e._uU(64,"Description : "),e.qZA(),e.TgZ(65,"mat-label",22),e._uU(66),e.qZA()()()()()()()()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(15,O)),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(1),e.Q6J("routerLink",e.DdM(16,Y)),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(2),e.Oqu(o.id),e.xp6(8),e.Q6J("color","warn")("matTooltip","Delete"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:pencil-alt"),e.xp6(10),e.Oqu(o.formation.libelleFormation),e.xp6(5),e.hij("",o.formation.volume_horaire," heures"),e.xp6(5),e.hij("",o.formation.nombre_module," modules"),e.xp6(6),e.hij("",o.formation.duree_formation," semaines"),e.xp6(5),e.hij("",o.formation.prix," Fcfa"),e.xp6(5),e.Oqu(o.formation.idCategorie),e.xp6(5),e.Oqu(o.formation.description))},directives:[u.yS,u.Od,Z.Hw,j.y,b.lW,w.gM,f.hX],styles:[""]}),i})();var M=n(85899),z=n(2638),P=n(32368),L=n(7853),V=n(80672),$=n(53251);const E=[{path:"",component:I},{path:"",component:F},{path:":id",component:R}];let H=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[d.ez,u.Bz.forChild(E),b.ot,f.lN,Z.Ps,A.c,M.Cv,T.LD,z.SJ,P.rP,w.AV,L.V,V.m,$.Nh]]}),i})()}}]);