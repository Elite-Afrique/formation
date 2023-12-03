"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[1699],{94384:(z,T,a)=>{a.d(T,{O:()=>t});var v=a(5e3);let t=(()=>{class m{}return m.\u0275fac=function(C){return new(C||m)},m.\u0275mod=v.oAB({type:m}),m.\u0275inj=v.cJS({}),m})()},7853:(z,T,a)=>{a.d(T,{V:()=>t});var v=a(5e3);let t=(()=>{class m{}return m.\u0275fac=function(C){return new(C||m)},m.\u0275mod=v.oAB({type:m}),m.\u0275inj=v.cJS({}),m})()},25402:(z,T,a)=>{a.d(T,{e:()=>R});var v=a(61135),t=a(18505),m=a(63900),O=a(62843),C=a(39646),x=a(95698),S=a(54004),D=a(5e3),V=a(40520);let R=(()=>{class q{constructor(l){this._httpClient=l,this.selectedMailChanged=new v.X(null),this._category=new v.X(null),this._filters=new v.X(null),this._folders=new v.X(null),this._labels=new v.X(null),this._mails=new v.X(null),this._mailsLoading=new v.X(!1),this._mail=new v.X(null),this._pagination=new v.X(null)}get category$(){return this._category.asObservable()}get filters$(){return this._filters.asObservable()}get folders$(){return this._folders.asObservable()}get labels$(){return this._labels.asObservable()}get mails$(){return this._mails.asObservable()}get mailsLoading$(){return this._mailsLoading.asObservable()}get mail$(){return this._mail.asObservable()}get pagination$(){return this._pagination.asObservable()}getFilters(){return this._httpClient.get("api/apps/mailbox/filters").pipe((0,t.b)(l=>{this._filters.next(l)}))}getFolders(){return this._httpClient.get("api/apps/mailbox/folders").pipe((0,t.b)(l=>{this._folders.next(l)}))}getLabels(){return this._httpClient.get("api/apps/mailbox/labels").pipe((0,t.b)(l=>{this._labels.next(l)}))}getMailsByFilter(l,d="1"){return this._mailsLoading.next(!0),this._httpClient.get("api/apps/mailbox/mails",{params:{filter:l,page:d}}).pipe((0,t.b)(o=>{this._category.next({type:"filter",name:l}),this._mails.next(o.mails),this._pagination.next(o.pagination),this._mailsLoading.next(!1)}),(0,m.w)(o=>null===o.mails?(0,O._)({message:"Requested page is not available!",pagination:o.pagination}):(0,C.of)(o)))}getMailsByFolder(l,d="1"){return this._mailsLoading.next(!0),this._httpClient.get("api/apps/mailbox/mails",{params:{folder:l,page:d}}).pipe((0,t.b)(o=>{this._category.next({type:"folder",name:l}),this._mails.next(o.mails),this._pagination.next(o.pagination),this._mailsLoading.next(!1)}),(0,m.w)(o=>null===o.mails?(0,O._)({message:"Requested page is not available!",pagination:o.pagination}):(0,C.of)(o)))}getMailsByLabel(l,d="1"){return this._mailsLoading.next(!0),this._httpClient.get("api/apps/mailbox/mails",{params:{label:l,page:d}}).pipe((0,t.b)(o=>{this._category.next({type:"label",name:l}),this._mails.next(o.mails),this._pagination.next(o.pagination),this._mailsLoading.next(!1)}),(0,m.w)(o=>null===o.mails?(0,O._)({message:"Requested page is not available!",pagination:o.pagination}):(0,C.of)(o)))}getMailById(l){return this._mails.pipe((0,x.q)(1),(0,S.U)(d=>{const o=d.find(L=>L.id===l)||null;return this._mail.next(o),o}),(0,m.w)(d=>d?(0,C.of)(d):(0,O._)("Could not found mail with id of "+l+"!")))}updateMail(l,d){return this._httpClient.patch("api/apps/mailbox/mail",{id:l,mail:d}).pipe((0,t.b)(()=>{this.getFolders().subscribe()}))}resetMail(){return(0,C.of)(!0).pipe((0,x.q)(1),(0,t.b)(()=>{this._mail.next(null)}))}addLabel(l){return this.labels$.pipe((0,x.q)(1),(0,m.w)(d=>this._httpClient.post("api/apps/mailbox/label",{label:l}).pipe((0,S.U)(o=>(this._labels.next([...d,o]),o)))))}updateLabel(l,d){return this.labels$.pipe((0,x.q)(1),(0,m.w)(o=>this._httpClient.patch("api/apps/mailbox/label",{id:l,label:d}).pipe((0,S.U)(L=>{const P=o.findIndex(Q=>Q.id===l);return o[P]=L,this._labels.next(o),L}))))}deleteLabel(l){return this.labels$.pipe((0,x.q)(1),(0,m.w)(d=>this._httpClient.delete("api/apps/mailbox/label",{params:{id:l}}).pipe((0,S.U)(o=>{const L=d.findIndex(P=>P.id===l);return d.splice(L,1),this._labels.next(d),o}))))}}return q.\u0275fac=function(l){return new(l||q)(D.LFG(V.eN))},q.\u0275prov=D.Yz7({token:q,factory:q.\u0275fac,providedIn:"root"}),q})()},89273:(z,T,a)=>{a.d(T,{g6:()=>Q,fi:()=>B});var v=a(69808),t=a(5e3),m=a(22313),O=a(49770),C=a(50727),x=a(54968),S=a(34782),D=a(78372),V=a(93075),R=a(70655);const q=[[["","quill-editor-toolbar",""]]],I=["[quill-editor-toolbar]"],l={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},d=(n,E)=>n||E||"html",o=new t.OlP("config",{providedIn:"root",factory:()=>({modules:l})});let L=(()=>{class n{constructor(e,i){this.config=i,this.quill$=(0,O.P)(()=>(0,R.mG)(this,void 0,void 0,function*(){var s,r;if(!this.Quill){const h=this.document.addEventListener;this.document.addEventListener=this.document.__zone_symbol__addEventListener||this.document.addEventListener;const f=yield a.e(9971).then(a.t.bind(a,89971,19));this.document.addEventListener=h,this.Quill=f.default?f.default:f}return null===(s=this.config.customOptions)||void 0===s||s.forEach(h=>{const f=this.Quill.import(h.import);f.whitelist=h.whitelist,this.Quill.register(f,!0,this.config.suppressGlobalRegisterWarning)}),null===(r=this.config.customModules)||void 0===r||r.forEach(({implementation:h,path:f})=>{this.Quill.register(f,h,this.config.suppressGlobalRegisterWarning)}),this.Quill})).pipe((0,S.d)({bufferSize:1,refCount:!0})),this.document=e.get(v.K0),this.config||(this.config={modules:l})}getQuill(){return this.quill$}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.zs3),t.LFG(o,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),P=(()=>{class n{constructor(e,i,s,r,h,f,M,w){this.elementRef=i,this.cd=s,this.domSanitizer=r,this.platformId=h,this.renderer=f,this.zone=M,this.service=w,this.required=!1,this.customToolbarPosition="top",this.sanitize=!1,this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.compareValues=!1,this.filterNull=!1,this.defaultEmptyValue=null,this.onEditorCreated=new t.vpe,this.onEditorChanged=new t.vpe,this.onContentChanged=new t.vpe,this.onSelectionChanged=new t.vpe,this.onFocus=new t.vpe,this.onBlur=new t.vpe,this.disabled=!1,this.subscription=null,this.quillSubscription=null,this.valueGetter=(g,p)=>{let u=p.querySelector(".ql-editor").innerHTML;("<p><br></p>"===u||"<div><br></div>"===u)&&(u=this.defaultEmptyValue);let c=u;const _=d(this.format,this.service.config.format);if("text"===_)c=g.getText();else if("object"===_)c=g.getContents();else if("json"===_)try{c=JSON.stringify(g.getContents())}catch(y){c=g.getText()}return c},this.valueSetter=(g,p)=>{const u=d(this.format,this.service.config.format);if("html"===u)return this.sanitize&&(p=this.domSanitizer.sanitize(t.q3G.HTML,p)),g.clipboard.convert(p);if("json"===u)try{return JSON.parse(p)}catch(c){return[{insert:p}]}return p},this.selectionChangeHandler=(g,p,u)=>{const c=!g&&!!this.onModelTouched;!this.onBlur.observers.length&&!this.onFocus.observers.length&&!this.onSelectionChanged.observers.length&&!c||this.zone.run(()=>{null===g?this.onBlur.emit({editor:this.quillEditor,source:u}):null===p&&this.onFocus.emit({editor:this.quillEditor,source:u}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:p,range:g,source:u}),c&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(g,p,u)=>{const c=this.quillEditor.getText(),_=this.quillEditor.getContents();let y=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===y||"<div><br></div>"===y)&&(y=this.defaultEmptyValue);const b=this.trackChanges||this.service.config.trackChanges,F=("user"===u||b&&"all"===b)&&!!this.onModelChange;!this.onContentChanged.observers.length&&!F||this.zone.run(()=>{F&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:_,delta:g,editor:this.quillEditor,html:y,oldDelta:p,source:u,text:c}),this.cd.markForCheck()})},this.editorChangeHandler=(g,p,u,c)=>{if(this.onEditorChanged.observers.length)if("text-change"===g){const _=this.quillEditor.getText(),y=this.quillEditor.getContents();let b=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===b||"<div><br></div>"===b)&&(b=this.defaultEmptyValue),this.zone.run(()=>{this.onEditorChanged.emit({content:y,delta:p,editor:this.quillEditor,event:g,html:b,oldDelta:u,source:c,text:_}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:g,oldRange:u,range:p,source:c}),this.cd.markForCheck()})},this.document=e.get(v.K0)}static normalizeClassNames(e){return e.trim().split(" ").reduce((s,r)=>{const h=r.trim();return h&&s.push(h),s},[])}ngAfterViewInit(){(0,v.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().subscribe(e=>{this.elementRef.nativeElement.insertAdjacentHTML("top"===this.customToolbarPosition?"beforeend":"afterbegin",this.preserveWhitespace?"<pre quill-editor-element></pre>":"<div quill-editor-element></div>"),this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const i=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),s=Object.assign({},this.modules||this.service.config.modules);i?s.toolbar=i:void 0===s.toolbar&&(s.toolbar=l.toolbar);let r=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===r&&(r="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(u=>{this.renderer.setStyle(this.editorElem,u,this.styles[u])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(u=>{const c=e.import(u.import);c.whitelist=u.whitelist,e.register(c,!0)}),this.customModules.forEach(({implementation:u,path:c})=>{e.register(c,u)});let h=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;h||(h=this.service.config.bounds?this.service.config.bounds:this.document.body);let f=this.debug;!f&&!1!==f&&this.service.config.debug&&(f=this.service.config.debug);let M=this.readOnly;!M&&!1!==this.readOnly&&(M=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let w=this.defaultEmptyValue;this.service.config.hasOwnProperty("defaultEmptyValue")&&(w=this.service.config.defaultEmptyValue);let g=this.scrollingContainer;!g&&null!==this.scrollingContainer&&(g=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let p=this.formats;if(!p&&void 0===p&&(p=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{var u,c,_;if(this.quillEditor=new e(this.editorElem,{bounds:h,debug:f,formats:p,modules:s,placeholder:r,readOnly:M,defaultEmptyValue:w,scrollingContainer:g,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")}),this.linkPlaceholder){const y=null===(c=null===(u=this.quillEditor)||void 0===u?void 0:u.theme)||void 0===c?void 0:c.tooltip,b=null===(_=null==y?void 0:y.root)||void 0===_?void 0:_.querySelector("input[data-link]");(null==b?void 0:b.dataset)&&(b.dataset.link=this.linkPlaceholder)}}),this.content){if("text"===d(this.format,this.service.config.format))this.quillEditor.setText(this.content,"silent");else{const c=this.valueSetter(this.quillEditor,this.content);this.quillEditor.setContents(c,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),(this.onEditorCreated.observers.length||this.onValidatorChanged)&&requestAnimationFrame(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor)})}))}ngOnDestroy(){var e;this.dispose(),null===(e=this.quillSubscription)||void 0===e||e.unsubscribe(),this.quillSubscription=null}ngOnChanges(e){if(this.quillEditor){if(e.readOnly&&this.quillEditor.enable(!e.readOnly.currentValue),e.placeholder&&(this.quillEditor.root.dataset.placeholder=e.placeholder.currentValue),e.defaultEmptyValue&&(this.quillEditor.root.dataset.defaultEmptyValue=e.defaultEmptyValue.currentValue),e.styles){const i=e.styles.currentValue,s=e.styles.previousValue;s&&Object.keys(s).forEach(r=>{this.renderer.removeStyle(this.editorElem,r)}),i&&Object.keys(i).forEach(r=>{this.renderer.setStyle(this.editorElem,r,this.styles[r])})}if(e.classes){const i=e.classes.currentValue,s=e.classes.previousValue;s&&this.removeClasses(s),i&&this.addClasses(i)}e.debounceTime&&this.addQuillEventListeners()}}addClasses(e){n.normalizeClassNames(e).forEach(i=>{this.renderer.addClass(this.editorElem,i)})}removeClasses(e){n.normalizeClassNames(e).forEach(i=>{this.renderer.removeClass(this.editorElem,i)})}writeValue(e){if(this.filterNull&&null===e||(this.content=e,!this.quillEditor))return;const i=d(this.format,this.service.config.format),s=this.valueSetter(this.quillEditor,e);if(this.compareValues){const r=this.quillEditor.getContents();if(JSON.stringify(r)===JSON.stringify(s))return}e?"text"===i?this.quillEditor.setText(e):this.quillEditor.setContents(s):this.quillEditor.setText("")}setDisabledState(e=this.disabled){this.disabled=e,this.quillEditor&&(e?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}registerOnValidatorChange(e){this.onValidatorChanged=e}validate(){if(!this.quillEditor)return null;const e={};let i=!0;const s=this.quillEditor.getText(),r=this.trimOnValidation?s.trim().length:1===s.length&&0===s.trim().length?0:s.length-1,h=this.quillEditor.getContents().ops,f=h&&1===h.length&&["\n",""].includes(h[0].insert);return this.minLength&&r&&r<this.minLength&&(e.minLengthError={given:r,minLength:this.minLength},i=!1),this.maxLength&&r>this.maxLength&&(e.maxLengthError={given:r,maxLength:this.maxLength},i=!1),this.required&&!r&&f&&(e.requiredError={empty:!0},i=!1),i?null:e}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new C.w0,this.subscription.add((0,x.R)(this.quillEditor,"selection-change").subscribe(([s,r,h])=>{this.selectionChangeHandler(s,r,h)}));let e=(0,x.R)(this.quillEditor,"text-change"),i=(0,x.R)(this.quillEditor,"editor-change");"number"==typeof this.debounceTime&&(e=e.pipe((0,D.b)(this.debounceTime)),i=i.pipe((0,D.b)(this.debounceTime))),this.subscription.add(e.subscribe(([s,r,h])=>{this.textChangeHandler(s,r,h)})),this.subscription.add(i.subscribe(([s,r,h,f])=>{this.editorChangeHandler(s,r,h,f)}))})}dispose(){null!==this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.zs3),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(m.H7),t.Y36(t.Lbi),t.Y36(t.Qsj),t.Y36(t.R0b),t.Y36(L))},n.\u0275dir=t.lG2({type:n,inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",required:"required",formats:"formats",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",styles:"styles",strict:"strict",scrollingContainer:"scrollingContainer",bounds:"bounds",customOptions:"customOptions",customModules:"customModules",trackChanges:"trackChanges",preserveWhitespace:"preserveWhitespace",classes:"classes",trimOnValidation:"trimOnValidation",linkPlaceholder:"linkPlaceholder",compareValues:"compareValues",filterNull:"filterNull",debounceTime:"debounceTime",defaultEmptyValue:"defaultEmptyValue",valueGetter:"valueGetter",valueSetter:"valueSetter"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[t.TTD]}),n})(),Q=(()=>{class n extends P{constructor(e,i,s,r,h,f,M,w){super(e,i,s,r,h,f,M,w)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.zs3),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(m.H7),t.Y36(t.Lbi),t.Y36(t.Qsj),t.Y36(t.R0b),t.Y36(L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["quill-editor"]],features:[t._Bn([{multi:!0,provide:V.JU,useExisting:(0,t.Gpc)(()=>n)},{multi:!0,provide:V.Cf,useExisting:(0,t.Gpc)(()=>n)}]),t.qOj],ngContentSelectors:I,decls:1,vars:0,template:function(e,i){1&e&&(t.F$t(q),t.Hsn(0))},styles:[":host{display:inline-block}\n"],encapsulation:2}),n})(),B=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[{provide:o,useValue:e}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[v.ez]]}),n})()}}]);