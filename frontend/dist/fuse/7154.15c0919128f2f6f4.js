"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[7154],{57154:(j,u,o)=>{o.r(u),o.d(u,{IconsModule:()=>$,routes:()=>x});var a=o(93075),h=o(4521),m=o(67322),p=o(25245),f=o(98833),g=o(74107),I=o(10921),Z=o(80672),d=o(61135),T=o(77579),A=o(82722),y=o(39841),C=o(54004),n=o(5e3),U=o(18505),J=o(40520);let v=(()=>{class e{constructor(t){this._httpClient=t,this._icons=new d.X(null)}get icons(){return this._icons.asObservable()}getIcons(t){return this._httpClient.get(t="api"+t).pipe((0,U.b)(s=>{this._icons.next(s)}))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(J.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=o(69808),Q=o(9572),S=o(90508);function z(e,c){if(1&e&&(n.ynx(0),n.TgZ(1,"h1"),n._uU(2),n.qZA(),n.BQk()),2&e){const t=c.ngIf;n.xp6(2),n.Oqu(t.name)}}function b(e,c){if(1&e&&(n.ynx(0),n._UZ(1,"textarea",20),n.BQk()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("code",'<mat-icon svgIcon="'+t.calcSvgIconAttr()+'"></mat-icon>')}}function w(e,c){if(1&e){const t=n.EpF();n.ynx(0),n.TgZ(1,"div",22),n.NdJ("click",function(){const r=n.CHM(t).$implicit,M=n.oxw().ngIf;return n.oxw().selectIcon(M.namespace,r)}),n.TgZ(2,"div",23),n._UZ(3,"mat-icon",24),n.qZA(),n.TgZ(4,"div",25),n._uU(5),n.qZA()(),n.BQk()}if(2&e){const t=c.$implicit,s=n.oxw().ngIf,i=n.oxw();n.xp6(1),n.ekj("border-primary",i.selectedIcon[1]===t),n.xp6(2),n.Q6J("ngClass",i.iconSize)("svgIcon",s.namespace+":"+t),n.xp6(2),n.Oqu(t)}}function O(e,c){if(1&e&&(n.ynx(0),n.YNc(1,w,6,5,"ng-container",21),n.BQk()),2&e){const t=c.ngIf;n.xp6(1),n.Q6J("ngForOf",t.list)}}const x=[{path:"",pathMatch:"full",redirectTo:"material-twotone"},{path:"",component:(()=>{class e{constructor(t){this._iconsService=t,this.filterValue$=new d.X(""),this.iconSize="icon-size-8",this._unsubscribeAll=new T.x}ngOnInit(){this.icons$=this._iconsService.icons,this._iconsService.icons.pipe((0,A.R)(this._unsubscribeAll)).subscribe(t=>{this.iconSize=t.grid,this.selectedIcon=[t.namespace,t.list[0]]}),this.filteredIcons$=(0,y.a)([this.icons$,this.filterValue$]).pipe((0,C.U)(([t,s])=>{const i=t.list.filter(r=>r.toLowerCase().includes(s.toLowerCase()));return Object.assign(Object.assign({},t),{list:i})}))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}filterIcons(t){this.filterValue$.next(t.target.value)}selectIcon(t,s){this.selectedIcon=[t,s]}calcSvgIconAttr(){return this.selectedIcon?""===this.selectedIcon[0]?this.selectedIcon[1]:this.selectedIcon.join(":"):""}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(v))},e.\u0275cmp=n.Xpm({type:e,selectors:[["icons"]],decls:49,vars:19,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[4,"ngIf"],[1,"flex-auto","p-6","sm:p-10"],[1,"prose","prose-sm","max-w-5xl"],[1,"flex","my-6","xs:flex-col"],[1,"flex-auto"],["matInput","",3,"input"],[1,"min-w-40","ml-8","xs:ml-0"],[3,"ngModel","ngModelChange"],[3,"value"],[1,"flex","flex-wrap","-mx-4"],["fuse-highlight","","lang","html",3,"code"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","items-center","justify-center","m-4","p-4","min-w-36","max-w-36","min-h-30","max-h-30","rounded","border-2","cursor-pointer","bg-card",3,"click"],[1,"flex","items-center","justify-center","mb-3"],[3,"ngClass","svgIcon"],[1,"text-sm","text-center","break-all","text-secondary"]],template:function(t,s){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),n._uU(6,"User Interface"),n.qZA()(),n.TgZ(7,"div",5),n._UZ(8,"mat-icon",6),n.TgZ(9,"a",7),n._uU(10,"Icons"),n.qZA()()(),n.TgZ(11,"div",8)(12,"h2",9),n.YNc(13,z,3,1,"ng-container",10),n.ALo(14,"async"),n.qZA()()()(),n.TgZ(15,"div",11)(16,"div",12)(17,"h2"),n._uU(18,"Usage"),n.qZA(),n.YNc(19,b,2,1,"ng-container",10),n.ALo(20,"async"),n.TgZ(21,"h2"),n._uU(22,"Icons"),n.qZA(),n.TgZ(23,"div",13)(24,"mat-form-field",14)(25,"mat-label"),n._uU(26,"Search an icon"),n.qZA(),n.TgZ(27,"input",15),n.NdJ("input",function(r){return s.filterIcons(r)}),n.qZA()(),n.TgZ(28,"mat-form-field",16)(29,"mat-label"),n._uU(30,"Icon size"),n.qZA(),n.TgZ(31,"mat-select",17),n.NdJ("ngModelChange",function(r){return s.iconSize=r}),n.TgZ(32,"mat-option",18),n._uU(33,"16"),n.qZA(),n.TgZ(34,"mat-option",18),n._uU(35,"20"),n.qZA(),n.TgZ(36,"mat-option",18),n._uU(37,"24"),n.qZA(),n.TgZ(38,"mat-option",18),n._uU(39,"32"),n.qZA(),n.TgZ(40,"mat-option",18),n._uU(41,"40"),n.qZA(),n.TgZ(42,"mat-option",18),n._uU(43,"48"),n.qZA(),n.TgZ(44,"mat-option",18),n._uU(45,"64"),n.qZA()()()(),n.TgZ(46,"div",19),n.YNc(47,O,2,1,"ng-container",10),n.ALo(48,"async"),n.qZA()()()()),2&t&&(n.xp6(8),n.Q6J("svgIcon","heroicons_solid:chevron-right"),n.xp6(5),n.Q6J("ngIf",n.lcZ(14,13,s.icons$)),n.xp6(6),n.Q6J("ngIf",n.lcZ(20,15,s.filteredIcons$)),n.xp6(8),n.uIk("autocomplete","off"),n.xp6(4),n.Q6J("ngModel",s.iconSize),n.xp6(1),n.Q6J("value","icon-size-4"),n.xp6(2),n.Q6J("value","icon-size-5"),n.xp6(2),n.Q6J("value","icon-size-6"),n.xp6(2),n.Q6J("value","icon-size-8"),n.xp6(2),n.Q6J("value","icon-size-10"),n.xp6(2),n.Q6J("value","icon-size-12"),n.xp6(2),n.Q6J("value","icon-size-16"),n.xp6(3),n.Q6J("ngIf",n.lcZ(48,17,s.filteredIcons$)))},directives:[p.Hw,l.O5,Q.L,m.KE,m.hX,f.Nt,g.gD,a.JJ,a.On,S.ey,l.sg,l.mk],pipes:[l.Ov],encapsulation:2}),e})(),children:[{path:"**",resolve:{icons:(()=>{class e{constructor(t){this._iconsService=t}resolve(t,s){return this._iconsService.getIcons(s.url)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(v))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]}];let $=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.UX,h.Bz.forChild(x),m.lN,p.Ps,f.c,g.LD,I.$A,Z.m]]}),e})()}}]);