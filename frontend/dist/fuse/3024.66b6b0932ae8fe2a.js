"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3024],{3024:(Jt,I,a)=>{a.r(I),a.d(I,{NotesModule:()=>kt});var J=a(4521),b=a(47423),Q=a(77446),m=a(48966),u=a(67322),v=a(25245),T=a(98833),C=a(92181),Z=a(90508),N=a(2638),D=a(96557),B=a(3921),$=a(80672),t=a(5e3);let O=(()=>{class o{constructor(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["notes"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},directives:[J.lC],encapsulation:2,changeDetection:0}),o})();var f=a(61135),x=a(77579),U=a(39841),S=a(71884),h=a(54004),y=a(82722),A=a(39646),L=a(78372),g=a(63900),d=a(18505),Y=a(95698),H=a(62843),M=a(45840),R=a(40520);let k=(()=>{class o{constructor(e){this._httpClient=e,this._labels=new f.X(null),this._note=new f.X(null),this._notes=new f.X(null)}get labels$(){return this._labels.asObservable()}get notes$(){return this._notes.asObservable()}get note$(){return this._note.asObservable()}getLabels(){return this._httpClient.get("api/apps/notes/labels").pipe((0,d.b)(e=>{this._labels.next(e)}))}addLabel(e){return this._httpClient.post("api/apps/notes/labels",{title:e}).pipe((0,d.b)(n=>{this._labels.next(n)}))}updateLabel(e){return this._httpClient.patch("api/apps/notes/labels",{label:e}).pipe((0,d.b)(n=>{this.getNotes().subscribe(),this._labels.next(n)}))}deleteLabel(e){return this._httpClient.delete("api/apps/notes/labels",{params:{id:e}}).pipe((0,d.b)(n=>{this.getNotes().subscribe(),this._labels.next(n)}))}getNotes(){return this._httpClient.get("api/apps/notes/all").pipe((0,d.b)(e=>{this._notes.next(e)}))}getNoteById(e){return this._notes.pipe((0,Y.q)(1),(0,h.U)(n=>{const i=n.find(s=>s.id===e)||null;return this._note.next(i),i}),(0,g.w)(n=>n?(0,A.of)(n):(0,H._)("Could not found the note with id of "+e+"!")))}addTask(e,n){return this._httpClient.post("api/apps/notes/tasks",{note:e,task:n}).pipe((0,g.w)(()=>this.getNotes().pipe((0,g.w)(()=>this.getNoteById(e.id)))))}createNote(e){return this._httpClient.post("api/apps/notes",{note:e}).pipe((0,g.w)(n=>this.getNotes().pipe((0,g.w)(()=>this.getNoteById(n.id).pipe((0,h.U)(()=>n))))))}updateNote(e){const n=(0,M.Z)(e);return n.labels.length&&(n.labels=n.labels.map(i=>i.id)),this._httpClient.patch("api/apps/notes",{updatedNote:n}).pipe((0,d.b)(i=>{this.getNotes().subscribe()}))}deleteNote(e){return this._httpClient.delete("api/apps/notes",{params:{id:e.id}}).pipe((0,h.U)(n=>(this.getNotes().subscribe(),n)))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(R.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var l=a(69808),p=a(93075);function q(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",6)(2,"div",7)(3,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().ngIf;return t.oxw().removeImage(i)}),t._UZ(4,"mat-icon",9),t.qZA()(),t._UZ(5,"img",10),t.qZA(),t.BQk()}if(2&o){const e=t.oxw().ngIf;t.xp6(4),t.Q6J("svgIcon","heroicons_outline:trash"),t.xp6(1),t.Q6J("src",e.image,t.LSH)}}const j=function(o){return{"text-secondary line-through":o}};function E(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",17)(2,"mat-checkbox",18),t.NdJ("ngModelChange",function(i){return t.CHM(e).$implicit.completed=i})("change",function(){const s=t.CHM(e).$implicit,r=t.oxw(2).ngIf;return t.oxw().updateTaskOnNote(r,s)}),t.qZA(),t.TgZ(3,"input",19),t.NdJ("ngModelChange",function(i){return t.CHM(e).$implicit.content=i})("input",function(){const s=t.CHM(e).$implicit,r=t.oxw(2).ngIf;return t.oxw().updateTaskOnNote(r,s)}),t.qZA(),t.TgZ(4,"mat-icon",20),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw(2).ngIf;return t.oxw().removeTaskFromNote(r,s)}),t.qZA()(),t.BQk()}if(2&o){const e=c.$implicit;t.xp6(2),t.Q6J("color","primary")("ngModel",e.completed),t.xp6(1),t.Q6J("ngClass",t.VKq(6,j,e.completed))("placeholder","Task")("ngModel",e.content),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x")}}function W(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",11),t.YNc(2,E,5,8,"ng-container",12),t.TgZ(3,"div",13),t._UZ(4,"mat-icon",14),t.TgZ(5,"input",15,16),t.NdJ("keydown.enter",function(){t.CHM(e);const i=t.MAs(6),s=t.oxw().ngIf;return t.oxw().addTaskToNote(s,i.value),i.value=""}),t.qZA()()(),t.BQk()}if(2&o){const e=t.oxw().ngIf,n=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.tasks)("ngForTrackBy",n.trackByFn),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(1),t.Q6J("placeholder","Add task")}}function z(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",22)(2,"div"),t._uU(3),t.qZA(),t.TgZ(4,"mat-icon",23),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw(2).ngIf;return t.oxw().toggleLabelOnNote(r,s)}),t.qZA()(),t.BQk()}if(2&o){const e=c.$implicit;t.xp6(3),t.hij(" ",e.title," "),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x-circle")}}function X(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"div",21),t.YNc(2,z,5,2,"ng-container",12),t.qZA(),t.BQk()),2&o){const e=t.oxw().ngIf,n=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.labels)("ngForTrackBy",n.trackByFn)}}function K(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",24)(2,"button",25),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().ngIf;return t.oxw().createNote(i)}),t._uU(3," Save "),t.qZA()(),t.BQk()}if(2&o){const e=t.oxw().ngIf;t.xp6(2),t.Q6J("color","primary")("disabled",!e.title&&!e.content)}}function P(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",36),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw(3).ngIf;return t.oxw().toggleLabelOnNote(r,s)}),t.TgZ(2,"span",13),t._UZ(3,"mat-checkbox",37),t.TgZ(4,"span",38),t._uU(5),t.qZA()()(),t.BQk()}if(2&o){const e=c.$implicit,n=t.oxw(3).ngIf,i=t.oxw();t.xp6(3),t.Q6J("color","primary")("checked",i.isNoteHasLabel(n,e)),t.xp6(2),t.Oqu(e.title)}}function G(o,c){if(1&o&&(t.ynx(0),t.YNc(1,P,6,3,"ng-container",35),t.BQk()),2&o){const e=c.ngIf;t.xp6(1),t.Q6J("ngForOf",e)}}function V(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",26)(2,"div",27)(3,"div")(4,"input",28,29),t.NdJ("change",function(){t.CHM(e);const i=t.MAs(5),s=t.oxw().ngIf;return t.oxw().uploadImage(s,i.files)}),t.qZA(),t.TgZ(6,"label",30),t._UZ(7,"mat-icon",31),t.qZA()(),t.TgZ(8,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().ngIf;return t.oxw().addTasksToNote(i)}),t._UZ(9,"mat-icon",31),t.qZA(),t.TgZ(10,"button",32),t._UZ(11,"mat-icon",31),t.qZA(),t.TgZ(12,"mat-menu",null,33),t.YNc(14,G,2,1,"ng-container",1),t.ALo(15,"async"),t.qZA(),t.TgZ(16,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().ngIf;return t.oxw().toggleArchiveOnNote(i)}),t._UZ(17,"mat-icon",31),t.qZA(),t.TgZ(18,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().ngIf;return t.oxw().deleteNote(i)}),t._UZ(19,"mat-icon",31),t.qZA()(),t.TgZ(20,"button",34),t._uU(21," Close "),t.qZA()(),t.BQk()}if(2&o){const e=t.MAs(13),n=t.oxw(2);t.xp6(4),t.Q6J("multiple",!1)("accept","image/jpeg, image/png"),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:photograph"),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:clipboard-list"),t.xp6(1),t.Q6J("matMenuTriggerFor",e),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:tag"),t.xp6(3),t.Q6J("ngIf",t.lcZ(15,9,n.labels$)),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:archive"),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:trash")}}function tt(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.YNc(1,q,6,2,"ng-container",1),t.TgZ(2,"div",2)(3,"div")(4,"input",3),t.NdJ("ngModelChange",function(i){return t.CHM(e).ngIf.title=i})("input",function(){const s=t.CHM(e).ngIf;return t.oxw().updateNoteDetails(s)}),t.qZA()(),t.TgZ(5,"div",4)(6,"textarea",5),t.NdJ("ngModelChange",function(i){return t.CHM(e).ngIf.content=i})("input",function(){const s=t.CHM(e).ngIf;return t.oxw().updateNoteDetails(s)}),t.qZA()(),t.YNc(7,W,7,4,"ng-container",1),t.YNc(8,X,3,2,"ng-container",1),t.YNc(9,K,4,2,"ng-container",1),t.YNc(10,V,22,11,"ng-container",1),t.qZA(),t.BQk()}if(2&o){const e=c.ngIf;t.xp6(1),t.Q6J("ngIf",e.image),t.xp6(3),t.Q6J("placeholder","Title")("ngModel",e.title),t.xp6(2),t.Q6J("placeholder","Note")("ngModel",e.content),t.xp6(1),t.Q6J("ngIf",e.tasks),t.xp6(1),t.Q6J("ngIf",e.labels&&e.labels.length),t.xp6(1),t.Q6J("ngIf",!e.id),t.xp6(1),t.Q6J("ngIf",e.id)}}let F=(()=>{class o{constructor(e,n,i,s){this._changeDetectorRef=e,this._data=n,this._notesService=i,this._matDialogRef=s,this.noteChanged=new x.x,this._unsubscribeAll=new x.x}ngOnInit(){this._data.note.id?(this._notesService.getNoteById(this._data.note.id).subscribe(),this.note$=this._notesService.note$):this.note$=(0,A.of)({id:null,title:"",content:"",tasks:null,image:null,reminder:null,labels:[],archived:!1,createdAt:null,updatedAt:null}),this.labels$=this._notesService.labels$,this.noteChanged.pipe((0,y.R)(this._unsubscribeAll),(0,L.b)(500),(0,g.w)(e=>this._notesService.updateNote(e))).subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createNote(e){this._notesService.createNote(e).pipe((0,h.U)(()=>{this.note$=this._notesService.note$})).subscribe()}uploadImage(e,n){if(!n.length)return;const s=n[0];!["image/jpeg","image/png"].includes(s.type)||this._readAsDataURL(s).then(r=>{e.image=r,this.noteChanged.next(e)})}removeImage(e){e.image=null,this.noteChanged.next(e)}addTasksToNote(e){e.tasks||(e.tasks=[])}addTaskToNote(e,n){""!==n.trim()&&this._notesService.addTask(e,n).subscribe()}removeTaskFromNote(e,n){e.tasks=e.tasks.filter(i=>i.id!==n.id),this.noteChanged.next(e)}updateTaskOnNote(e,n){n.id&&this.noteChanged.next(e)}isNoteHasLabel(e,n){return!!e.labels.find(i=>i.id===n.id)}toggleLabelOnNote(e,n){this.isNoteHasLabel(e,n)?e.labels=e.labels.filter(i=>i.id!==n.id):e.labels.push(n),this.noteChanged.next(e)}toggleArchiveOnNote(e){e.archived=!e.archived,this.noteChanged.next(e),this._matDialogRef.close()}updateNoteDetails(e){this.noteChanged.next(e)}deleteNote(e){this._notesService.deleteNote(e).subscribe(n=>{!n||this._matDialogRef.close()})}trackByFn(e,n){return n.id||e}_readAsDataURL(e){return new Promise((n,i)=>{const s=new FileReader;s.onload=()=>{n(s.result)},s.onerror=r=>{i(r)},s.readAsDataURL(e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.sBO),t.Y36(m.WI),t.Y36(k),t.Y36(m.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["notes-details"]],decls:3,vars:3,consts:[[1,"flex","flex-col","flex-auto","md:w-160","md:min-w-160","-m-6"],[4,"ngIf"],[1,"m-4"],[1,"w-full","p-2","text-2xl",3,"placeholder","ngModel","ngModelChange","input"],[1,"flex","w-full","py-5","px-2"],["matTextareaAutosize","",1,"w-full",3,"placeholder","ngModel","ngModelChange","input"],[1,"relative","w-full"],[1,"absolute","right-0","bottom-0","p-4"],["mat-icon-button","",3,"click"],[1,"text-white",3,"svgIcon"],[1,"w-full","object-cover",3,"src"],[1,"mx-2","mt-4","space-y-1.5"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-center"],[1,"-ml-0.5","icon-size-5","text-hint",3,"svgIcon"],[1,"w-full","ml-1.5","px-1","py-0.5",3,"placeholder","keydown.enter"],["newTaskInput",""],[1,"group","flex","items-center"],[1,"flex","items-center",3,"color","ngModel","ngModelChange","change"],[1,"w-full","px-1","py-0.5",3,"ngClass","placeholder","ngModel","ngModelChange","input"],[1,"hidden","group-hover:flex","ml-auto","icon-size-5","cursor-pointer",3,"svgIcon","click"],[1,"flex","flex-wrap","items-center","mx-1","mt-6"],[1,"flex","items-center","m-1","py-0.5","px-3","rounded-full","text-sm","font-medium","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700"],[1,"ml-1","icon-size-4","cursor-pointer",3,"svgIcon","click"],[1,"flex","items-center","justify-end","mt-4"],["mat-flat-button","",3,"color","disabled","click"],[1,"flex","items-center","justify-between","mt-4"],[1,"flex","items-center","space-x-2"],["id","image-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["imageFileInput",""],["for","image-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-gray-400","hover:bg-opacity-20","dark:hover:bg-black","dark:hover:bg-opacity-5"],[3,"svgIcon"],["mat-icon-button","",3,"matMenuTriggerFor"],["labelsMenu","matMenu"],["mat-flat-button","","matDialogClose",""],[4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"],["disableRipple","",1,"flex","items-center","pointer-events-none",3,"color","checked"],[1,"ml-1","leading-5"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,tt,11,9,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.note$)))},directives:[l.O5,b.lW,v.Hw,p.Fj,p.JJ,p.On,l.sg,Q.oG,l.mk,Z.wG,C.p6,C.VK,C.OP,m.ZT],pipes:[l.Ov],encapsulation:2,changeDetection:0}),o})();var et=a(39300);function nt(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"mat-form-field",13)(2,"button",14),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).deleteLabel(s.id)}),t._UZ(3,"mat-icon",9),t.qZA(),t.TgZ(4,"input",15),t.NdJ("ngModelChange",function(i){return t.CHM(e).$implicit.title=i})("input",function(){const s=t.CHM(e).$implicit;return t.oxw(2).updateLabel(s)}),t.qZA()(),t.BQk()}if(2&o){const e=c.$implicit;t.xp6(3),t.Q6J("svgIcon","heroicons_solid:trash"),t.xp6(1),t.Q6J("autocomplete","off")("ngModel",e.title)}}function ot(o,c){if(1&o&&(t.ynx(0),t.YNc(1,nt,5,3,"ng-container",12),t.BQk()),2&o){const e=c.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",n.trackByFn)}}let it=(()=>{class o{constructor(e,n){this._changeDetectorRef=e,this._notesService=n,this.labelChanged=new x.x,this._unsubscribeAll=new x.x}ngOnInit(){this.labels$=this._notesService.labels$,this.labelChanged.pipe((0,y.R)(this._unsubscribeAll),(0,L.b)(500),(0,et.h)(e=>""!==e.title.trim()),(0,g.w)(e=>this._notesService.updateLabel(e))).subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addLabel(e){this._notesService.addLabel(e).subscribe()}updateLabel(e){this.labelChanged.next(e)}deleteLabel(e){this._notesService.deleteLabel(e).subscribe(()=>{this._changeDetectorRef.markForCheck()})}trackByFn(e,n){return n.id||e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.sBO),t.Y36(k))},o.\u0275cmp=t.Xpm({type:o,selectors:[["notes-labels"]],decls:14,vars:10,consts:[[1,"flex","flex-col","flex-auto","w-80","min-w-80","p-2","md:p-4"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-semibold"],["matDialogClose","","mat-icon-button",""],[3,"svgIcon"],[1,"fuse-mat-dense","w-full","mt-8",3,"floatLabel"],["name","new-label","matInput","",3,"autocomplete","placeholder"],["newLabelInput",""],["mat-icon-button","","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"flex","flex-col","mt-4"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"fuse-mat-dense","w-full"],["mat-icon-button","","matPrefix","",3,"click"],["required","","matInput","",3,"autocomplete","ngModel","ngModelChange","input"]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Edit labels"),t.qZA(),t.TgZ(4,"button",3),t._UZ(5,"mat-icon",4),t.qZA()(),t.TgZ(6,"mat-form-field",5),t._UZ(7,"input",6,7),t.TgZ(9,"button",8),t.NdJ("click",function(){t.CHM(i);const r=t.MAs(8);return n.addLabel(r.value),r.value=""}),t._UZ(10,"mat-icon",9),t.qZA()(),t.TgZ(11,"div",10),t.YNc(12,ot,2,2,"ng-container",11),t.ALo(13,"async"),t.qZA()()}if(2&e){const i=t.MAs(8);t.xp6(5),t.Q6J("svgIcon","heroicons_outline:x"),t.xp6(1),t.Q6J("floatLabel","always"),t.xp6(1),t.Q6J("autocomplete","off")("placeholder","Create new label"),t.xp6(2),t.ekj("invisible",""===i.value.trim()),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(2),t.Q6J("ngIf",t.lcZ(13,8,n.labels$))}},directives:[b.lW,m.ZT,v.Hw,u.KE,T.Nt,u.R9,l.O5,l.sg,u.qo,p.Fj,p.Q7,p.JJ,p.On],pipes:[l.Ov],encapsulation:2,changeDetection:0}),o})();var st=a(94880);const w=function(o,c){return{"bg-gray-200 dark:bg-gray-700 text-primary dark:text-primary-400":o,"text-hint hover:bg-hover":c}};function ct(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",6),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).filterByLabel(s.id)}),t._UZ(2,"mat-icon",7),t.TgZ(3,"div",8),t._uU(4),t.qZA()(),t.BQk()}if(2&o){const e=c.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngClass",t.WLB(4,w,"label:"+e.id===n.filterStatus,"label:"+e.id!==n.filterStatus))("matRippleDisabled","label:"+e.id===n.filterStatus),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:tag"),t.xp6(2),t.Oqu(e.title)}}function rt(o,c){if(1&o&&(t.ynx(0),t.YNc(1,ct,5,7,"ng-container",29),t.BQk()),2&o){const e=c.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",n.trackByFn)}}function at(o,c){if(1&o&&(t.ynx(0),t._UZ(1,"img",35),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.image,t.LSH)}}function lt(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"div",36),t._uU(2),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.title," ")}}function _t(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.ekj("text-xl",e.content.length<70),t.xp6(1),t.hij(" ",e.content," ")}}function gt(o,c){1&o&&(t.ynx(0),t.TgZ(1,"div",39),t._UZ(2,"div",40),t.qZA(),t.BQk())}function pt(o,c){1&o&&(t.ynx(0),t._UZ(1,"mat-icon",41),t.BQk()),2&o&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"))}const mt=function(o){return{"text-secondary line-through":o}};function ut(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"div",15),t.YNc(2,gt,3,0,"ng-container",9),t.YNc(3,pt,2,1,"ng-container",9),t.TgZ(4,"div",38),t._uU(5),t.qZA()(),t.BQk()),2&o){const e=c.$implicit;t.xp6(2),t.Q6J("ngIf",!e.completed),t.xp6(1),t.Q6J("ngIf",e.completed),t.xp6(1),t.Q6J("ngClass",t.VKq(4,mt,e.completed)),t.xp6(1),t.hij(" ",e.content," ")}}function dt(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"div",37),t.YNc(2,ut,6,6,"ng-container",29),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit,n=t.oxw(5);t.xp6(2),t.Q6J("ngForOf",e.tasks)("ngForTrackBy",n.trackByFn)}}function ft(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"div",43),t._uU(2),t.qZA(),t.BQk()),2&o){const e=c.$implicit;t.xp6(2),t.hij(" ",e.title," ")}}function xt(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"div",42),t.YNc(2,ft,3,1,"ng-container",29),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit,n=t.oxw(5);t.xp6(2),t.Q6J("ngForOf",e.labels)("ngForTrackBy",n.trackByFn)}}function ht(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",33),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(5).openNoteDialog(s)}),t.YNc(2,at,2,1,"ng-container",9),t.TgZ(3,"div",34),t.YNc(4,lt,3,1,"ng-container",9),t.YNc(5,_t,3,3,"ng-container",9),t.YNc(6,dt,3,2,"ng-container",9),t.YNc(7,xt,3,2,"ng-container",9),t.qZA()(),t.BQk()}if(2&o){const e=c.$implicit;t.xp6(2),t.Q6J("ngIf",e.image),t.xp6(2),t.Q6J("ngIf",e.title),t.xp6(1),t.Q6J("ngIf",e.content),t.xp6(1),t.Q6J("ngIf",e.tasks),t.xp6(1),t.Q6J("ngIf",e.labels)}}function bt(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"div",32),t.YNc(2,ht,8,5,"ng-container",29),t.qZA(),t.BQk()),2&o){const e=c.$implicit,n=t.oxw(4);t.xp6(2),t.Q6J("ngForOf",e.items)("ngForTrackBy",n.trackByFn)}}function vt(o,c){if(1&o&&t.YNc(0,bt,3,2,"ng-container",29),2&o){const e=c.$implicit,n=t.oxw(3);t.Q6J("ngForOf",e)("ngForTrackBy",n.trackByFn)}}function Ct(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"fuse-masonry",30),t.YNc(2,vt,1,2,"ng-template",null,31,t.W1O),t.qZA(),t.BQk()),2&o){const e=t.MAs(3),n=t.oxw().ngIf,i=t.oxw();t.xp6(1),t.Q6J("items",n)("columns",i.masonryColumns)("columnsTemplate",e)}}function Nt(o,c){if(1&o&&(t.ynx(0),t.YNc(1,Ct,4,3,"ng-container",26),t.BQk()),2&o){const e=c.ngIf;t.oxw();const n=t.MAs(39);t.xp6(1),t.Q6J("ngIf",e.length)("ngIfElse",n)}}function Tt(o,c){1&o&&(t.TgZ(0,"div",44)(1,"div",45),t._uU(2,"Loading..."),t.qZA()())}function Zt(o,c){1&o&&(t.TgZ(0,"div",44),t._UZ(1,"mat-icon",46),t.TgZ(2,"div",45),t._uU(3,"There are no notes!"),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("svgIcon","iconsmind:file_hide"))}const yt=[{path:"",component:O,children:[{path:"",component:(()=>{class o{constructor(e,n,i,s){this._changeDetectorRef=e,this._fuseMediaWatcherService=n,this._matDialog=i,this._notesService=s,this.drawerMode="side",this.drawerOpened=!0,this.filter$=new f.X("notes"),this.searchQuery$=new f.X(null),this.masonryColumns=4,this._unsubscribeAll=new x.x}get filterStatus(){return this.filter$.value}ngOnInit(){this._notesService.getLabels().subscribe(),this._notesService.getNotes().subscribe(),this.labels$=this._notesService.labels$,this.notes$=(0,U.a)([this._notesService.notes$,this.filter$,this.searchQuery$]).pipe((0,S.x)(),(0,h.U)(([e,n,i])=>{if(!e||!e.length)return;let s=e;i&&(i=i.trim().toLowerCase(),s=s.filter(_=>_.title.toLowerCase().includes(i)||_.content.toLowerCase().includes(i)));const r="archived"===n;if(s=s.filter(_=>_.archived===r),n.startsWith("label:")){const _=n.split(":")[1];s=s.filter(wt=>!!wt.labels.find(It=>It.id===_))}return s})),this._fuseMediaWatcherService.onMediaChange$.pipe((0,y.R)(this._unsubscribeAll)).subscribe(({matchingAliases:e})=>{e.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this.masonryColumns=e.includes("xl")?5:e.includes("lg")?4:e.includes("md")?3:e.includes("sm")?2:1,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addNewNote(){this._matDialog.open(F,{autoFocus:!1,data:{note:{}}})}openEditLabelsDialog(){this._matDialog.open(it,{autoFocus:!1})}openNoteDialog(e){this._matDialog.open(F,{autoFocus:!1,data:{note:(0,M.Z)(e)}})}filterByArchived(){this.filter$.next("archived")}filterByLabel(e){this.filter$.next(`label:${e}`)}filterByQuery(e){this.searchQuery$.next(e)}resetFilter(){this.filter$.next("notes")}trackByFn(e,n){return n.id||e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.sBO),t.Y36(st.T),t.Y36(m.uw),t.Y36(k))},o.\u0275cmp=t.Xpm({type:o,selectors:[["notes-list"]],decls:40,vars:28,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full","bg-card","dark:bg-transparent"],[1,"w-2/3","sm:w-72","lg:w-56","border-r-0","bg-default",3,"mode","opened"],["drawer",""],[1,"p-6","lg:py-8","lg:pl-4","lg:pr-0"],[1,"space-y-2"],["matRipple","",1,"relative","flex","items-center","py-2","px-4","font-medium","rounded-full","cursor-pointer",3,"ngClass","matRippleDisabled","click"],[1,"text-current",3,"svgIcon"],[1,"ml-3","leading-5","select-none","text-default"],[4,"ngIf"],["matRipple","",1,"relative","flex","items-center","py-2","px-4","font-medium","rounded-full","cursor-pointer","hover:bg-hover",3,"click"],[1,"text-hint",3,"svgIcon"],[1,"ml-3","leading-5","select-none"],[1,"flex","flex-col","bg-gray-100","dark:bg-transparent"],[1,"flex","flex-col","flex-auto","p-6","md:p-8"],[1,"flex","items-center"],[1,"flex","items-center","flex-auto"],["mat-icon-button","",1,"flex","lg:hidden","-ml-2",3,"click"],[3,"svgIcon"],[1,"fuse-mat-rounded","fuse-mat-dense","fuse-mat-no-subscript","flex-auto","ml-4","lg:ml-0"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder","input"],["searchInput",""],["mat-flat-button","",1,"ml-4","px-1","sm:px-4","min-w-10",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"hidden","sm:inline-block","ml-2"],[4,"ngIf","ngIfElse"],["loading",""],["noNotes",""],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"-mx-2","mt-8",3,"items","columns","columnsTemplate"],["columnsTemplate",""],[1,"flex-1","px-2","space-y-4"],[1,"flex","flex-col","shadow","rounded-2xl","overflow-hidden","cursor-pointer","bg-card",3,"click"],[1,"flex","flex-auto","flex-col","p-6","space-y-4"],[1,"w-full","object-cover",3,"src"],[1,"font-semibold","line-clamp-3"],[1,"space-y-1.5"],[1,"ml-1.5","leading-5",3,"ngClass"],[1,"flex","items-center","justify-center","w-5","h-5"],[1,"w-4","h-4","rounded-full","border-2"],[1,"text-hint","icon-size-5",3,"svgIcon"],[1,"flex","flex-wrap","items-center","-m-1"],[1,"m-1","py-0.5","px-3","rounded-full","text-sm","font-medium","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"],[1,"icon-size-24",3,"svgIcon"]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"mat-drawer-container",1)(2,"mat-drawer",2,3)(4,"div",4)(5,"div",5)(6,"div",6),t.NdJ("click",function(){return n.resetFilter()}),t._UZ(7,"mat-icon",7),t.TgZ(8,"div",8),t._uU(9,"Notes"),t.qZA()(),t.TgZ(10,"div",6),t.NdJ("click",function(){return n.filterByArchived()}),t._UZ(11,"mat-icon",7),t.TgZ(12,"div",8),t._uU(13,"Archive"),t.qZA()(),t.YNc(14,rt,2,2,"ng-container",9),t.ALo(15,"async"),t.TgZ(16,"div",10),t.NdJ("click",function(){return n.openEditLabelsDialog()}),t._UZ(17,"mat-icon",11),t.TgZ(18,"div",12),t._uU(19,"Edit labels"),t.qZA()()()()(),t.TgZ(20,"mat-drawer-content",13)(21,"div",14)(22,"div",15)(23,"div",16)(24,"button",17),t.NdJ("click",function(){return t.CHM(i),t.MAs(3).toggle()}),t._UZ(25,"mat-icon",18),t.qZA(),t.TgZ(26,"mat-form-field",19),t._UZ(27,"mat-icon",20),t.TgZ(28,"input",21,22),t.NdJ("input",function(){t.CHM(i);const r=t.MAs(29);return n.filterByQuery(r.value)}),t.qZA()()(),t.TgZ(30,"button",23),t.NdJ("click",function(){return n.addNewNote()}),t._UZ(31,"mat-icon",24),t.TgZ(32,"span",25),t._uU(33,"New note"),t.qZA()()(),t.YNc(34,Nt,2,2,"ng-container",26),t.ALo(35,"async"),t.YNc(36,Tt,3,0,"ng-template",null,27,t.W1O),t.YNc(38,Zt,4,1,"ng-template",null,28,t.W1O),t.qZA()()()()}if(2&e){const i=t.MAs(37);t.xp6(2),t.Q6J("mode",n.drawerMode)("opened",n.drawerOpened),t.xp6(4),t.Q6J("ngClass",t.WLB(22,w,"notes"===n.filterStatus,"notes"!==n.filterStatus))("matRippleDisabled","notes"===n.filterStatus),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:pencil-alt"),t.xp6(3),t.Q6J("ngClass",t.WLB(25,w,"archived"===n.filterStatus,"archived"!==n.filterStatus))("matRippleDisabled","archived"===n.filterStatus),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:archive"),t.xp6(3),t.Q6J("ngIf",t.lcZ(15,18,n.labels$)),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:pencil"),t.xp6(8),t.Q6J("svgIcon","heroicons_outline:menu"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(1),t.Q6J("autocomplete","off")("placeholder","Search notes"),t.xp6(2),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus-circle"),t.xp6(3),t.Q6J("ngIf",t.lcZ(35,20,n.notes$))("ngIfElse",i)}},directives:[N.kh,N.jA,Z.wG,l.mk,v.Hw,l.O5,l.sg,N.LW,b.lW,u.KE,u.qo,T.Nt,D.H],pipes:[l.Ov],encapsulation:2,changeDetection:0}),o})()}]}];let kt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[J.Bz.forChild(yt),b.ot,Q.p9,m.Is,u.lN,v.Ps,T.c,C.Tx,Z.si,N.SJ,B.O,$.m]]}),o})()}}]);