"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2292],{82292:(be,w,s)=>{s.r(w),s.d(w,{MessagesModule:()=>Ze});var C=s(69808),T=s(77579),S=s(82722),e=s(5e3),M=s(94880),v=s(2638),a=s(93075),c=s(48966),L=s(55384);let h=(()=>{class o{constructor(t){this.apiService=t}getAll(){return this.apiService.get("api/listes/")}get(t){return this.apiService.get("api/liste/"+t)}add(t){return this.apiService.post("api/addListe",t)}update(t){return this.apiService.post("api/addListe",t)}addParticipantListe(t){return this.apiService.post("api/addListe_participant",t)}getListe_Participant(t){return this.apiService.get("api/liste_participant/"+t)}getParticipant(){return this.apiService.get("api/participants/")}envoyer(t){return this.apiService.post("api/sendSms",t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(L.s))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var p=s(47423),g=s(25245),d=s(67322),_=s(74107),A=s(90508),x=s(98833);function N(o,n){if(1&o&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.libelle)}}let D=(()=>{class o{constructor(t,i,r,m){this.matDialogRef=t,this._formBuilder=i,this._matDialog=r,this.messageService=m,this.copyFields={cc:!1,bcc:!1},this.quillModules={toolbar:[["bold","italic","underline"],[{align:[]},{list:"ordered"},{list:"bullet"}],["clean"]]}}getDataCategories(){this.messageService.getAll().subscribe(t=>{this.liste=t})}ngOnInit(){this.composeForm=this._formBuilder.group({idListe:["",[a.kI.required]],body:["",[a.kI.required]]}),this.getDataCategories()}showCopyField(t){"cc"!==t&&"bcc"!==t||(this.copyFields[t]=!0)}saveAndClose(){this.saveAsDraft(),this.matDialogRef.close()}discard(){}saveAsDraft(){}send(){console.log(this.composeForm.value),this.messageService.envoyer(this.composeForm.value).subscribe({next:t=>{alert("Message envoy\xe9 avec succ\xe9s"),this.composeForm.reset(),this.matDialogRef.close("save")},error:()=>{alert(" Message non envoy\xe9 ")}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.so),e.Y36(a.qu),e.Y36(c.uw),e.Y36(h))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-compose"]],decls:26,vars:14,consts:[[1,"flex","flex-col","max-w-240","md:min-w-160","max-h-screen","-m-6"],[1,"flex","flex-0","items-center","justify-between","h-16","pr-3","sm:pr-5","pl-6","sm:pl-8","bg-primary","text-on-primary"],[1,"text-lg","font-medium"],["mat-icon-button","",3,"tabIndex","click"],[1,"text-current",3,"svgIcon"],[1,"flex","flex-col","flex-auto","p-6","sm:p-8","overflow-y-auto",3,"formGroup"],["required","",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["matInput","","matTextareaAutosize","",1,"mat-form-field-wrapper","ng-tns-c36-13",3,"formControlName","placeholder","rows","spellcheck"],[1,"flex","flex-col","sm:flex-row","sm:items-center","justify-between","mt-4","sm:mt-6"],[1,"-ml-2"],["mat-icon-button",""],[1,"icon-size-5",3,"svgIcon"],[1,"flex","items-center","mt-4","sm:mt-0"],["mat-flat-button","",1,"order-first","sm:order-last",3,"color","click"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Nouveau Message"),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return i.saveAndClose()}),e._UZ(5,"mat-icon",4),e.qZA()(),e.TgZ(6,"form",5)(7,"mat-form-field")(8,"mat-label"),e._uU(9,"Choisir la liste"),e.qZA(),e.TgZ(10,"mat-select",6),e.YNc(11,N,2,2,"mat-option",7),e.qZA()(),e._UZ(12,"textarea",8),e.TgZ(13,"div",9)(14,"div",10)(15,"button",11),e._UZ(16,"mat-icon",12),e.qZA(),e.TgZ(17,"button",11),e._UZ(18,"mat-icon",12),e.qZA(),e.TgZ(19,"button",11),e._UZ(20,"mat-icon",12),e.qZA(),e.TgZ(21,"button",11),e._UZ(22,"mat-icon",12),e.qZA()(),e.TgZ(23,"div",13)(24,"button",14),e.NdJ("click",function(){return i.send()}),e._uU(25," Envoyer "),e.qZA()()()()()),2&t&&(e.xp6(4),e.Q6J("tabIndex",-1),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:x"),e.xp6(1),e.Q6J("formGroup",i.composeForm),e.xp6(4),e.Q6J("formControlName","idListe"),e.xp6(1),e.Q6J("ngForOf",i.liste),e.xp6(1),e.Q6J("formControlName","body")("placeholder","message")("rows",5)("spellcheck",!1),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:paper-clip"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:link"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:emoji-happy"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:photograph"),e.xp6(2),e.Q6J("color","primary"))},directives:[p.lW,g.Hw,a._Y,a.JL,a.sg,d.KE,d.hX,_.gD,a.Q7,a.JJ,a.u,C.sg,A.ey,x.Nt,a.Fj],styles:[""]}),o})();var q=s(25402),y=s(76859),I=s(29551);let F=(()=>{class o{constructor(t,i,r){this._mailboxService=t,this._matDialog=i,this._fuseNavigationService=r,this.menuData=[],this._filtersMenuData=[],this._foldersMenuData=[],this._labelsMenuData=[],this._otherMenuData=[],this._unsubscribeAll=new T.x}ngOnInit(){}openComposeDialog(){this._matDialog.open(D).afterClosed().subscribe(i=>{console.log("Compose dialog was closed!")})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(q.e),e.Y36(c.uw),e.Y36(y.Jf))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-sidebar"]],decls:8,vars:6,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"mt-10","mb-8","mx-6","text-4xl","font-extrabold","tracking-tight","leading-none"],["mat-flat-button","",1,"mx-6",3,"color","click"],[3,"svgIcon"],[1,"ml-2"],[3,"navigation","inner","mode","opened"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Message"),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return i.openComposeDialog()}),e._UZ(4,"mat-icon",3),e.TgZ(5,"span",4),e._uU(6,"NOUVEAU MESSAGE"),e.qZA()(),e._UZ(7,"fuse-vertical-navigation",5),e.qZA()),2&t&&(e.xp6(3),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:plus"),e.xp6(3),e.Q6J("navigation",i.menuData)("inner",!0)("mode","side")("opened",!0))},directives:[p.lW,g.Hw,I.j],styles:["mailbox-sidebar[_ngcontent-%COMP%]   fuse-vertical-navigation[_ngcontent-%COMP%]   .fuse-vertical-navigation-wrapper[_ngcontent-%COMP%]{box-shadow:none!important}"]}),o})();var u=s(4521),l=s(32075);class Z{constructor(n){this.id=n.id,this.libelle=n.libelle}}let Y=(()=>{class o{constructor(t,i,r,m){this._formBuilder=t,this._data=i,this.matDialogRef=r,this.messageService=m,this.action="new",this.formFieldHelpers=[""],this.liste=new Z(i.liste),this.action=i.action,this.listeForm=this.createListeForm()}ngOnInit(){}createListeForm(){return this._formBuilder.group({libelle:[this.liste.libelle]})}onSubmit(){if("new"==this.action){let t=this.listeForm.getRawValue();console.log(t),this.messageService.add(t).subscribe(i=>{this.matDialogRef.close(this.listeForm)},i=>{console.log(i)})}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.qu),e.Y36(c.WI),e.Y36(c.so),e.Y36(h))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add"]],decls:15,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"sm:p-6","w-200"],[1,"",3,"formGroup"],[1,"flex","flex-col","w-full"],[1,"flex"],[1,"w-4/5","pr-2"],["matInput","","required","",3,"formControlName"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""],["mat-button","",3,"disabled","click"]],template:function(t,i){1&t&&(e.TgZ(0,"h2",0),e._uU(1),e.qZA(),e.TgZ(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),e._uU(8,"Nom"),e.qZA(),e._UZ(9,"input",6),e.qZA()()()()(),e.TgZ(10,"div",7)(11,"button",8),e._uU(12,"Annuler"),e.qZA(),e.TgZ(13,"button",9),e.NdJ("click",function(){return i.onSubmit()}),e._uU(14),e.qZA()()),2&t&&(e.xp6(1),e.Oqu("new"==i.action?"Ajouter un categorie":"Modifier la categorie "+i.liste.libelle),e.xp6(2),e.Q6J("formGroup",i.listeForm),e.xp6(6),e.Q6J("formControlName","libelle"),e.xp6(4),e.Q6J("disabled",!i.listeForm.valid),e.xp6(1),e.hij(" ","new"==i.action?"Enregister":"Modifier",""))},directives:[c.uh,c.xY,a._Y,a.JL,a.sg,d.KE,d.hX,x.Nt,a.Fj,a.Q7,a.JJ,a.u,c.H8,p.lW,c.ZT],styles:[""]}),o})();function k(o,n){1&o&&(e.TgZ(0,"th",26),e._uU(1," No. "),e.qZA())}const J=function(o){return["/custom/listes/",o]};function j(o,n){if(1&o&&(e.TgZ(0,"td",27),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("routerLink",e.VKq(2,J,t.id)),e.xp6(1),e.hij("",t.id," ")}}function O(o,n){1&o&&(e.TgZ(0,"th",28),e._uU(1," Nom de le categorie "),e.qZA())}function P(o,n){if(1&o&&(e.TgZ(0,"td",27),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("routerLink",e.VKq(2,J,t.id)),e.xp6(1),e.hij(" ",t.libelle," ")}}function R(o,n){1&o&&e._UZ(0,"tr",29)}function H(o,n){1&o&&e._UZ(0,"tr",30)}const B=function(){return["/dashboards/project"]};let U=(()=>{class o{constructor(t,i){this._matDialog=t,this.messageService=i,this.searchControl=new a.NI,this.dataSource=new l.by,this.displayedColumns=["id","libelle"]}recherche(t){t=(t=t.trim()).toLowerCase(),this.dataSource.filter=t}ngOnInit(){this.getDataCategories()}getDataCategories(){this.messageService.getAll().subscribe(t=>{this.dataSource.data=t})}ajouter(){this.dialogRef=this._matDialog.open(Y,{panelClass:"",data:{liste:{},action:"new"}}),this.dialogRef.afterClosed().subscribe(t=>{!t||this._updateDataSource()})}_updateDataSource(){this.getDataCategories()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.uw),e.Y36(h))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list"]],decls:33,vars:10,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","pr-6","pl-6","pt-1","pb-1","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLinkActive","router-link-active",1,"whitespace-nowrap","text-primary-500",3,"routerLink"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-default-500"],[1,"flex-auto","p-6","sm:p-10"],[1,"flex","w-full","min-w-0"],[1,"flex","flex-col","w-full"],[1,"flex"],[1,"w-1/3"],["matInput","",3,"formControl","placeholder","ngModelChange"],[1,"w-2/3","text-right","items-center"],["mat-flat-button","",1,"ml-4",3,"color","click"],[3,"svgIcon"],[1,"ml-2","mr-1"],["mat-table","",1,"mat-elevation-z1","w-full",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","class","mdd2",4,"matHeaderCellDef"],["mat-cell","",3,"routerLink",4,"matCellDef"],["matColumnDef","libelle"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",1,"mdd2"],["mat-cell","",3,"routerLink"],["mat-header-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Tableau de board"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Listes de Diffusion"),e.qZA()()()()(),e.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"mat-form-field",12)(16,"mat-label"),e._uU(17,"Rechercher"),e.qZA(),e.TgZ(18,"input",13),e.NdJ("ngModelChange",function(m){return i.recherche(m)}),e.qZA()(),e.TgZ(19,"div",14)(20,"button",15),e.NdJ("click",function(){return i.ajouter()}),e._UZ(21,"mat-icon",16),e.TgZ(22,"span",17),e._uU(23,"Ajouter"),e.qZA()()()(),e.TgZ(24,"table",18),e.ynx(25,19),e.YNc(26,k,2,0,"th",20),e.YNc(27,j,2,4,"td",21),e.BQk(),e.ynx(28,22),e.YNc(29,O,2,0,"th",23),e.YNc(30,P,2,4,"td",21),e.BQk(),e.YNc(31,R,1,0,"tr",24),e.YNc(32,H,1,0,"tr",25),e.qZA()()()()()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(9,B)),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(10),e.Q6J("formControl",i.searchControl)("placeholder","Search for a page or a contact"),e.xp6(2),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:plus"),e.xp6(3),e.Q6J("dataSource",i.dataSource),e.xp6(7),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns))},directives:[u.yS,u.Od,g.Hw,d.KE,d.hX,x.Nt,a.Fj,a.JJ,a.oH,p.lW,l.BZ,l.w1,l.fO,l.ge,l.Dz,l.ev,u.rH,l.as,l.XQ,l.nj,l.Gk],styles:[".mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{cursor:pointer}.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%]{background-color:#e2e8f0}.mdd2[_ngcontent-%COMP%]{width:5%!important}"]}),o})();const z=["drawer"];let E=(()=>{class o{constructor(t){this._fuseMediaWatcherService=t,this.drawerMode="side",this.drawerOpened=!0,this._unsubscribeAll=new T.x}ngOnInit(){this._fuseMediaWatcherService.onMediaChange$.pipe((0,S.R)(this._unsubscribeAll)).subscribe(({matchingAliases:t})=>{t.includes("md")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1)})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(M.T))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-messages"]],viewQuery:function(t,i){if(1&t&&e.Gf(z,5),2&t){let r;e.iGM(r=e.CRH())&&(i.drawer=r.first)}},decls:9,vars:2,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full"],[1,"w-72","dark:bg-gray-900",3,"mode","opened"],["drawer",""],[1,"flex","flex-col","overflow-hidden"],[1,"flex","flex-auto","overflow-hidden"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"mat-drawer-container",1)(2,"mat-drawer",2,3),e._UZ(4,"app-sidebar"),e.qZA(),e.TgZ(5,"mat-drawer-content",4)(6,"div",5),e._UZ(7,"router-outlet")(8,"app-list"),e.qZA()()()()),2&t&&(e.xp6(2),e.Q6J("mode",i.drawerMode)("opened",i.drawerOpened))},directives:[v.kh,v.jA,F,v.LW,u.lC,U],styles:[""],encapsulation:2}),o})();function X(o,n){if(1&o&&(e.TgZ(0,"mat-option",12),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.AsE("",t.name," ",t.prenom,"")}}let G=(()=>{class o{constructor(t,i,r,m){this._formBuilder=t,this._data=i,this.matDialogRef=r,this.messageService=m,this.liste=new Z(i.liste)}getParticipant(){this.messageService.getParticipant().subscribe(t=>{this.participant=t})}ngOnInit(){this.getParticipant(),this.psessionForm=this._formBuilder.group({idParticipant:["",a.kI.required],idListe:this.liste.id})}onSubmit(){this.messageService.addParticipantListe(this.psessionForm.value).subscribe({next:t=>{alert("Participant ajouter avec succes"),this.psessionForm.reset(),this.matDialogRef.close("save")},error:()=>{alert("Participant non ajouter")}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.qu),e.Y36(c.WI),e.Y36(c.so),e.Y36(h))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-ajouter"]],decls:17,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"sm:p-6","w-200"],[1,"",3,"formGroup"],[1,"flex","flex-col","w-full"],[1,"flex"],[1,"w-4/5","pl-2"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["required","",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""],["mat-button","",3,"disabled","click"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Ajouter une Session de formation"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),e._uU(8,"Ajouter un participant a une liste de diffusion"),e.qZA(),e._UZ(9,"mat-icon",6),e.TgZ(10,"mat-select",7),e.YNc(11,X,2,3,"mat-option",8),e.qZA()()()()()(),e.TgZ(12,"div",9)(13,"button",10),e._uU(14,"Annuler"),e.qZA(),e.TgZ(15,"button",11),e.NdJ("click",function(){return i.onSubmit()}),e._uU(16,"Ajouter"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("formGroup",i.psessionForm),e.xp6(6),e.Q6J("svgIcon","heroicons_solid:book open"),e.xp6(1),e.Q6J("formControlName","idParticipant"),e.xp6(1),e.Q6J("ngForOf",i.participant),e.xp6(4),e.Q6J("disabled",!i.psessionForm.valid))},directives:[c.uh,c.xY,a._Y,a.JL,a.sg,d.KE,d.hX,g.Hw,d.qo,_.gD,a.Q7,a.JJ,a.u,C.sg,A.ey,c.H8,p.lW,c.ZT],styles:[""]}),o})();var W=s(19602),b=s(92181);function $(o,n){1&o&&(e.TgZ(0,"th",39),e._uU(1," No. "),e.qZA())}const Q=function(o){return["/custom/formations/",o]};function K(o,n){if(1&o&&(e.TgZ(0,"td",40),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("routerLink",e.VKq(2,Q,t.id)),e.xp6(1),e.hij("",t.id," ")}}function V(o,n){1&o&&(e.TgZ(0,"th",39),e._uU(1," Nom "),e.qZA())}function ee(o,n){if(1&o&&(e.TgZ(0,"td",40)(1,"label"),e._uU(2),e.qZA()()),2&o){const t=n.$implicit;e.Q6J("routerLink",e.VKq(2,Q,t.id)),e.xp6(2),e.hij("",t.name," ")}}function te(o,n){1&o&&(e.TgZ(0,"th",39),e._uU(1," Prenom "),e.qZA())}function oe(o,n){if(1&o&&(e.TgZ(0,"td",41),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.hij(" ",t.prenom,"")}}function ie(o,n){1&o&&(e.TgZ(0,"th",42),e._uU(1," Actions "),e.qZA())}function ne(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"td",43)(1,"div",44)(2,"button",45),e._UZ(3,"mat-icon",15),e.qZA(),e.TgZ(4,"mat-menu",null,46)(6,"button",47),e._uU(7,"Archiver"),e.qZA(),e.TgZ(8,"button",48),e.NdJ("click",function(){const m=e.CHM(t).$implicit,f=e.oxw();return f.valider(m.id,f.participant.id)}),e._uU(9,"Valider"),e.qZA(),e.TgZ(10,"button",48),e.NdJ("click",function(){const m=e.CHM(t).$implicit,f=e.oxw();return f.getAttestation(m.id,f.participant.id)}),e._uU(11,"G\xe9n\xe9rer Attestation"),e.qZA()()()()}if(2&o){const t=e.MAs(5);e.xp6(2),e.Q6J("matMenuTriggerFor",t),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:dots-vertical")}}function se(o,n){1&o&&e._UZ(0,"tr",49)}function ae(o,n){1&o&&e._UZ(0,"tr",50)}const le=function(){return["/dashboards/project"]},re=function(){return["/custom/participants"]};let ce=(()=>{class o{constructor(t,i,r){this.messagesService=t,this._matDialog=i,this.route=r,this.imagepath="http://127.0.0.1:8000/storage/",this.liste=new Z({}),this.dataSource=new l.by,this.displayedColumns=["id","nom","prenom"],this.route.params.subscribe(m=>{this.liste=new Z(m),m.id&&this.messagesService.get(m.id).subscribe(f=>{this.id=m.id,this.liste=f})})}ngOnInit(){this.getListe_Participant()}getListe_Participant(){this.messagesService.getListe_Participant(this.liste.id).subscribe(t=>{this.data=t})}addParticipantListe(){this.dialogRef=this._matDialog.open(G,{panelClass:"",data:{liste:this.liste,action:"new"}}),console.log(this.liste),this.dialogRef.afterClosed().subscribe(t=>{!t||this._updateDataSource()})}_updateDataSource(){this.getListe_Participant()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h),e.Y36(c.uw),e.Y36(u.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-details"]],decls:59,vars:14,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","pr-6","pl-6","pt-1","pb-1","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLinkActive","router-link-active",1,"whitespace-nowrap","text-primary-500",3,"routerLink"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-default-500"],[1,"flex-auto","p-6","pt-6"],[1,"border-dashed","border-gray-300","rounded-2xl","mt-10"],[1,"flex","flex-col","max-w-300","w-full","px-8","pt-6","pb-4","filter-list"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-semibold","leading-tight"],[1,"flex","items-center","ml-auto","mb-1"],["mat-stroked-button",""],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex","flex-col","mt-5"],[1,"flex","flex-col","w-full"],[1,"flex","mb-3","mt-5"],[1,"w-1/3","pr-2","flex"],[1,"w-1/2","text-l","font-semibold","leading-tight"],[1,"w-1/2"],[1,"flex","flex-col","max-w-300","w-full","px-8","pt-6","pb-4","filter-list","mt-6"],["mat-flat-button","",1,"ml-4",3,"color","click"],[3,"svgIcon"],[1,"ml-2","mr-1"],["mat-table","",1,"mat-elevation-z1","w-full",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"routerLink",4,"matCellDef"],["matColumnDef","nom"],["matColumnDef","prenom"],["mat-cell","",4,"matCellDef"],["matColumnDef","actions"],["mat-header-cell","","class","mdd2",4,"matHeaderCellDef"],["mat-cell","","class","text-justify",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",3,"routerLink"],["mat-cell",""],["mat-header-cell","",1,"mdd2"],["mat-cell","",1,"text-justify"],[1,"ml-2","-mt-2","-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],["featuresMenu","matMenu"],["mat-menu-item",""],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Tableau de board"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",4),e._uU(10,"Participants"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"mat-icon",6),e.TgZ(13,"a",7),e._uU(14),e.qZA()()()()(),e.TgZ(15,"div",8)(16,"div",9)(17,"fuse-card",10)(18,"div",11)(19,"div",12),e._uU(20,"Informations personnelles"),e.qZA(),e.TgZ(21,"div",13)(22,"button",14),e._UZ(23,"mat-icon",15),e.TgZ(24,"span",16),e._uU(25,"Edit"),e.qZA()()()(),e.TgZ(26,"div",17)(27,"div",18)(28,"div",19)(29,"div",20)(30,"mat-label",21),e._uU(31,"Nom : "),e.qZA(),e.TgZ(32,"mat-label",22),e._uU(33),e.qZA()()()()()(),e.TgZ(34,"fuse-card",23)(35,"div",11)(36,"div",12),e._uU(37,"Les participants de la liste"),e.qZA(),e.TgZ(38,"button",24),e.NdJ("click",function(){return i.addParticipantListe()}),e._UZ(39,"mat-icon",25),e.TgZ(40,"span",26),e._uU(41,"Add"),e.qZA()()(),e.TgZ(42,"div",17)(43,"div",18)(44,"table",27),e.ynx(45,28),e.YNc(46,$,2,0,"th",29),e.YNc(47,K,2,4,"td",30),e.BQk(),e.ynx(48,31),e.YNc(49,V,2,0,"th",29),e.YNc(50,ee,3,4,"td",30),e.BQk(),e.ynx(51,32),e.YNc(52,te,2,0,"th",29),e.YNc(53,oe,2,1,"td",33),e.BQk(),e.ynx(54,34),e.YNc(55,ie,2,0,"th",35),e.YNc(56,ne,12,2,"td",36),e.BQk(),e.YNc(57,se,1,0,"tr",37),e.YNc(58,ae,1,0,"tr",38),e.qZA()()()()()()()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(12,le)),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(1),e.Q6J("routerLink",e.DdM(13,re)),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(2),e.Oqu(i.id),e.xp6(9),e.Q6J("svgIcon","heroicons_solid:pencil-alt"),e.xp6(10),e.Oqu(i.liste.libelle),e.xp6(5),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:plus"),e.xp6(5),e.Q6J("dataSource",i.data),e.xp6(13),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns))},directives:[u.yS,u.Od,g.Hw,W.y,p.lW,d.hX,l.BZ,l.w1,l.fO,l.ge,l.Dz,l.ev,u.rH,b.p6,b.VK,b.OP,l.as,l.XQ,l.nj,l.Gk],styles:[""]}),o})();var me=s(77446),de=s(4834),ue=s(85899),pe=s(89273),fe=s(7853),ge=s(89567),he=s(94384),ve=s(80672);const xe=[{path:"",component:E},{path:"",component:D},{path:"",component:U},{path:":id",component:ce}];let Ze=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[C.ez,u.Bz.forChild(xe),p.ot,me.p9,c.Is,de.t,d.lN,g.Ps,x.c,b.Tx,ue.Cv,_.LD,v.SJ,pe.fi.forRoot(),fe.V,y.PU,ge.o,he.O,ve.m]]}),o})()}}]);