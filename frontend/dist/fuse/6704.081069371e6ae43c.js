"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[6704],{16704:(E,g,r)=>{r.r(g),r.d(g,{SupportsModule:()=>H});var c=r(69808),f=r(77579),l=r(82722),t=r(5e3),a=r(4521),x=r(61135),h=r(18505),Z=r(95698),b=r(54004),y=r(63900),T=r(62843),A=r(39646),C=r(40520);let k=(()=>{class n{constructor(e){this._httpClient=e,this._item=new x.X(null),this._items=new x.X(null)}get items$(){return this._items.asObservable()}get item$(){return this._item.asObservable()}getItems(e=null){return this._httpClient.get("api/custom/supports",{params:{folderId:e}}).pipe((0,h.b)(i=>{this._items.next(i)}))}getItemById(e){return this._items.pipe((0,Z.q)(1),(0,b.U)(i=>{const s=[...i.folders,...i.files].find(u=>u.id===e)||null;return this._item.next(s),s}),(0,y.w)(i=>i?(0,A.of)(i):(0,T._)("Could not found the item with id of "+e+"!")))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(C.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Q=r(94880),p=r(2638),m=r(47423),d=r(25245),v=r(87238);const U=["matDrawer"];function I(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",29),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.contents)}}const _=function(n){return["./details/",n]},S=function(n){return["/apps/file-manager/folders/",n]};function w(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",20)(2,"a",21),t.NdJ("click",function(i){return i.preventDefault()}),t._UZ(3,"mat-icon",22),t.qZA(),t.TgZ(4,"a",23)(5,"div",24)(6,"div",25),t._UZ(7,"mat-icon",26),t.qZA()(),t.TgZ(8,"div",27)(9,"div",28),t._uU(10),t.qZA(),t.YNc(11,I,3,1,"ng-container",16),t.qZA()()(),t.BQk()),2&n){const e=o.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(7,_,e.id)),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:information-circle"),t.xp6(1),t.Q6J("routerLink",t.VKq(9,S,e.id)),t.xp6(3),t.Q6J("svgIcon","iconsmind:folder"),t.xp6(2),t.Q6J("matTooltip",e.name),t.xp6(1),t.Oqu(e.name),t.xp6(1),t.Q6J("ngIf",e.contents)}}function q(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div")(2,"div",17),t._uU(3,"Folders"),t.qZA(),t.TgZ(4,"div",18),t.YNc(5,w,12,11,"ng-container",19),t.qZA()(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(5),t.Q6J("ngForOf",e.items.folders)("ngForTrackBy",e.trackByFn)}}function D(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",29),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.contents)}}function J(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"a",30)(2,"div",24)(3,"div",25)(4,"div",31),t._UZ(5,"mat-icon",26),t.TgZ(6,"div",32),t._uU(7),t.qZA()()()(),t.TgZ(8,"div",27)(9,"div",28),t._uU(10),t.qZA(),t.YNc(11,D,3,1,"ng-container",16),t.qZA()(),t.BQk()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(16,_,e.id)),t.xp6(4),t.Q6J("svgIcon","iconsmind:file"),t.xp6(1),t.ekj("bg-red-600","PDF"===e.type)("bg-blue-600","DOC"===e.type)("bg-green-600","XLS"===e.type)("bg-gray-600","TXT"===e.type)("bg-amber-600","JPG"===e.type),t.xp6(1),t.hij(" ",e.type.toUpperCase()," "),t.xp6(2),t.Q6J("matTooltip",e.name),t.xp6(1),t.Oqu(e.name),t.xp6(1),t.Q6J("ngIf",e.contents)}}function B(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div")(2,"div",17),t._uU(3,"Files"),t.qZA(),t.TgZ(4,"div",18),t.YNc(5,J,12,18,"ng-container",19),t.qZA()(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(5),t.Q6J("ngForOf",e.items.files)("ngForTrackBy",e.trackByFn)}}function F(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",15),t.YNc(2,q,6,2,"ng-container",16),t.YNc(3,B,6,2,"ng-container",16),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.items.folders.length>0),t.xp6(1),t.Q6J("ngIf",e.items.files.length>0)}}function O(n,o){1&n&&(t.TgZ(0,"div",33),t._UZ(1,"mat-icon",34),t.TgZ(2,"div",35),t._uU(3,"There are no items!"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("svgIcon","iconsmind:file_hide"))}let M=(()=>{class n{constructor(e,i,s,u,V){this._activatedRoute=e,this._changeDetectorRef=i,this._router=s,this._fileManagerService=u,this._fuseMediaWatcherService=V,this._unsubscribeAll=new f.x}ngOnInit(){this._fileManagerService.items$.pipe((0,l.R)(this._unsubscribeAll)).subscribe(e=>{this.items=e,this._changeDetectorRef.markForCheck()}),this._fileManagerService.item$.pipe((0,l.R)(this._unsubscribeAll)).subscribe(e=>{this.selectedItem=e,this._changeDetectorRef.markForCheck()}),this._fuseMediaWatcherService.onMediaQueryChange$("(min-width: 1440px)").pipe((0,l.R)(this._unsubscribeAll)).subscribe(e=>{this.drawerMode=e.matches?"side":"over",this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onBackdropClicked(){this._router.navigate(["./"],{relativeTo:this._activatedRoute}),this._changeDetectorRef.markForCheck()}trackByFn(e,i){return i.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.gz),t.Y36(t.sBO),t.Y36(a.F0),t.Y36(k),t.Y36(Q.T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-supports"]],viewQuery:function(e,i){if(1&e&&t.Gf(U,7),2&e){let s;t.iGM(s=t.CRH())&&(i.matDrawer=s.first)}},decls:20,vars:8,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full","bg-card","dark:bg-transparent",3,"backdropClick"],[1,"w-full","sm:w-100","dark:bg-gray-900",3,"mode","opened","position","disableClose"],["matDrawer",""],[1,"flex","flex-col","bg-gray-100","dark:bg-transparent"],[1,"flex","flex-col","flex-auto"],[1,"flex","flex-col","sm:flex-row","items-start","sm:items-center","sm:justify-between","p-6","sm:py-12","md:px-8","border-b","bg-card","dark:bg-transparent"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"flex","items-center","mt-0.5","font-medium","text-secondary"],[1,"mt-4","sm:mt-0"],["mat-flat-button","",3,"color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[4,"ngIf","ngIfElse"],["noItems",""],[1,"p-6","md:p-8","space-y-8"],[4,"ngIf"],[1,"font-medium"],[1,"flex","flex-wrap","-m-2","mt-2"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"relative","w-40","h-40","m-2","p-4","shadow","rounded-2xl","bg-card"],["mat-icon-button","",1,"absolute","z-20","top-1.5","right-1.5","w-8","h-8","min-h-8",3,"routerLink","click"],[1,"icon-size-5",3,"svgIcon"],[1,"z-10","absolute","inset-0","flex","flex-col","p-4","cursor-pointer",3,"routerLink"],[1,"aspect-w-9","aspect-h-6"],[1,"flex","items-center","justify-center"],[1,"icon-size-14","text-hint",3,"svgIcon"],[1,"flex","flex-col","flex-auto","justify-center","text-center","text-sm","font-medium"],[1,"truncate",3,"matTooltip"],[1,"text-secondary","truncate"],[1,"flex","flex-col","w-40","h-40","m-2","p-4","shadow","rounded-2xl","cursor-pointer","bg-card",3,"routerLink"],[1,"relative"],[1,"absolute","left-0","bottom-0","px-1.5","rounded","text-sm","font-semibold","leading-5","text-white"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"mat-drawer-container",1),t.NdJ("backdropClick",function(){return i.onBackdropClicked()}),t.TgZ(2,"mat-drawer",2,3),t._UZ(4,"router-outlet"),t.qZA(),t.TgZ(5,"mat-drawer-content",4)(6,"div",5)(7,"div",6)(8,"div")(9,"div",7),t._uU(10,"File Manager"),t.qZA(),t._UZ(11,"div",8),t.qZA(),t.TgZ(12,"div",9)(13,"button",10),t._UZ(14,"mat-icon",11),t.TgZ(15,"span",12),t._uU(16,"Upload file"),t.qZA()()()(),t.YNc(17,F,4,2,"ng-container",13),t.YNc(18,O,4,1,"ng-template",null,14,t.W1O),t.qZA()()()()),2&e){const s=t.MAs(19);t.xp6(2),t.Q6J("mode",i.drawerMode)("opened",!1)("position","end")("disableClose",!0),t.xp6(11),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus"),t.xp6(3),t.Q6J("ngIf",i.items&&(i.items.folders.length>0||i.items.files.length>0))("ngIfElse",s)}},directives:[p.kh,p.jA,a.lC,p.LW,m.lW,d.Hw,c.O5,c.sg,m.zs,a.yS,v.gM],styles:[""],encapsulation:2,changeDetection:0}),n})();var Y=r(39367),j=r(39211);function L(n,o){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",23),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","iconsmind:folder"))}function N(n,o){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",23),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","iconsmind:file"))}function z(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",12)(2,"div",13),t._uU(3,"Contents"),t.qZA(),t.TgZ(4,"div"),t._uU(5),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(5),t.Oqu(e.item.contents)}}function R(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.item.description)}}function $(n,o){1&n&&(t.ynx(0),t.TgZ(1,"div",24),t._uU(2,"Click here to add a description"),t.qZA(),t.BQk())}const X=function(){return["../../"]};let W=(()=>{class n{constructor(e,i,s){this._changeDetectorRef=e,this._fileManagerListComponent=i,this._fileManagerService=s,this._unsubscribeAll=new f.x}ngOnInit(){this._fileManagerListComponent.matDrawer.open(),this._fileManagerService.item$.pipe((0,l.R)(this._unsubscribeAll)).subscribe(e=>{this._fileManagerListComponent.matDrawer.open(),this.item=e,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDrawer(){return this._fileManagerListComponent.matDrawer.close()}trackByFn(e,i){return i.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(Y.l),t.Y36(j.j))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-details"]],decls:51,vars:28,consts:[[1,"flex","flex-col","flex-auto","p-6","md:p-8"],[1,"flex","items-center","justify-end"],["mat-icon-button","",3,"routerLink"],[3,"svgIcon"],[1,"aspect-w-9","aspect-h-6","mt-8"],[1,"flex","items-center","justify-center","border","rounded-lg","bg-gray-50","dark:bg-card"],[4,"ngIf"],[1,"flex","flex-col","items-start","mt-8"],[1,"text-xl","font-medium"],[1,"mt-1","px-1.5","rounded","text-sm","font-semibold","leading-5","text-white"],[1,"text-lg","font-medium","mt-8"],[1,"flex","flex-col","mt-4","border-t","border-b","divide-y","font-medium"],[1,"flex","items-center","justify-between","py-3"],[1,"text-secondary"],[1,"flex","items-center","justify-between","mt-8"],[1,"text-lg","font-medium"],["mat-icon-button",""],[1,"icon-size-5",3,"svgIcon"],[1,"flex","mt-2","border-t"],[1,"py-3"],[1,"grid","grid-cols-2","gap-4","w-full","mt-8"],["mat-flat-button","",1,"flex-auto",3,"color"],["mat-stroked-button","",1,"flex-auto"],[1,"icon-size-14","text-hint",3,"svgIcon"],[1,"italic","text-secondary"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t._UZ(3,"mat-icon",3),t.qZA()(),t.TgZ(4,"div",4)(5,"div",5),t.YNc(6,L,2,1,"ng-container",6),t.YNc(7,N,2,1,"ng-container",6),t.qZA()(),t.TgZ(8,"div",7)(9,"div",8),t._uU(10),t.qZA(),t.TgZ(11,"div",9),t._uU(12),t.qZA()(),t.TgZ(13,"div",10),t._uU(14,"Information"),t.qZA(),t.TgZ(15,"div",11)(16,"div",12)(17,"div",13),t._uU(18,"Created By"),t.qZA(),t.TgZ(19,"div"),t._uU(20),t.qZA()(),t.TgZ(21,"div",12)(22,"div",13),t._uU(23,"Created At"),t.qZA(),t.TgZ(24,"div"),t._uU(25),t.qZA()(),t.TgZ(26,"div",12)(27,"div",13),t._uU(28,"Modified At"),t.qZA(),t.TgZ(29,"div"),t._uU(30),t.qZA()(),t.TgZ(31,"div",12)(32,"div",13),t._uU(33,"Size"),t.qZA(),t.TgZ(34,"div"),t._uU(35),t.qZA()(),t.YNc(36,z,6,1,"ng-container",6),t.qZA(),t.TgZ(37,"div",14)(38,"div",15),t._uU(39,"Description"),t.qZA(),t.TgZ(40,"button",16),t._UZ(41,"mat-icon",17),t.qZA()(),t.TgZ(42,"div",18)(43,"div",19),t.YNc(44,R,3,1,"ng-container",6),t.YNc(45,$,3,0,"ng-container",6),t.qZA()(),t.TgZ(46,"div",20)(47,"button",21),t._uU(48," Download "),t.qZA(),t.TgZ(49,"button",22),t._uU(50," Delete "),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("routerLink",t.DdM(27,X)),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:x"),t.xp6(3),t.Q6J("ngIf","folder"===i.item.type),t.xp6(1),t.Q6J("ngIf","folder"!==i.item.type),t.xp6(3),t.Oqu(i.item.name),t.xp6(1),t.ekj("bg-indigo-600","folder"===i.item.type)("bg-red-600","PDF"===i.item.type)("bg-blue-600","DOC"===i.item.type)("bg-green-600","XLS"===i.item.type)("bg-gray-600","TXT"===i.item.type)("bg-amber-600","JPG"===i.item.type),t.xp6(1),t.hij(" ",i.item.type.toUpperCase()," "),t.xp6(8),t.Oqu(i.item.createdBy),t.xp6(5),t.Oqu(i.item.createdAt),t.xp6(5),t.Oqu(i.item.modifiedAt),t.xp6(5),t.Oqu(i.item.size),t.xp6(1),t.Q6J("ngIf",i.item.contents),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:pencil"),t.xp6(3),t.Q6J("ngIf",i.item.description),t.xp6(1),t.Q6J("ngIf",!i.item.description),t.xp6(2),t.Q6J("color","primary"))},directives:[m.lW,a.rH,d.Hw,c.O5],styles:[""],encapsulation:2,changeDetection:0}),n})();var G=r(80672);const P=[{path:"",component:M},{path:":id",component:W}];let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,a.Bz.forChild(P),m.ot,d.Ps,p.SJ,v.AV,G.m]]}),n})()}}]);