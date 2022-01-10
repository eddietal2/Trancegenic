"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1726],{1726:(h,u,a)=>{a.r(u),a.d(u,{RegisterPageModule:()=>y});var g=a(9808),r=a(4182),s=a(2974),l=a(3425),e=a(2096);function d(t,n){if(1&t&&(e.TgZ(0,"div",20),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.message," ")}}function m(t,n){if(1&t&&(e.ynx(0),e.YNc(1,d,2,1,"div",19),e.BQk()),2&t){const i=n.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.registerForm.get("email").hasError(i.type)&&(o.registerForm.get("email").dirty||o.registerForm.get("email").touched))}}function p(t,n){if(1&t&&(e.TgZ(0,"div",20),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.message," ")}}function Z(t,n){if(1&t&&(e.ynx(0),e.YNc(1,p,2,1,"div",19),e.BQk()),2&t){const i=n.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.registerForm.get("password").hasError(i.type)&&(o.registerForm.get("password").dirty||o.registerForm.get("password").touched))}}function _(t,n){if(1&t&&(e.TgZ(0,"div",20),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.message," ")}}function f(t,n){if(1&t&&(e.ynx(0),e.YNc(1,_,2,1,"div",19),e.BQk()),2&t){const i=n.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.registerForm.get("reTypePassword").hasError(i.type)&&(o.registerForm.get("reTypePassword").dirty||o.registerForm.get("reTypePassword").touched))}}function T(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"ion-content",21),e.TgZ(1,"ion-button",22),e.NdJ("click",function(){return e.CHM(i),e.oxw().closeSuccessModal()}),e._uU(2," Close "),e.qZA(),e.qZA()}}const A=[{path:"",component:(()=>{class t{constructor(i,o){this.formBuilder=i,this.router=o,this.registerSuccessModal=!1,this.validationMessasges={email:[{type:"email",message:"Must be a valid email address"}],password:[{type:"pattern",message:"Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number."}]}}ngOnInit(){this.registerForm=this.formBuilder.group({firstName:["",[r.kI.required]],lastName:["",[r.kI.required]],email:["",[r.kI.required,r.kI.email]],password:["",r.kI.compose([r.kI.minLength(8),r.kI.required,r.kI.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])],reTypePassword:["",r.kI.compose([r.kI.minLength(8),r.kI.required,r.kI.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]})}goToLoginPage(){this.router.navigateByUrl("/login")}tryRegister(){this.showSuccessModal()}showSuccessModal(){return this.registerSuccessModal=!0}closeSuccessModal(){return this.registerSuccessModal=!1}register(){}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(r.qu),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:58,vars:5,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-justify-content-center"],["size-xs","11","size-sm","10","size-md","8","size-lg","5"],[1,"spacer-2x"],[1,"static-alert-yellow"],[3,"formGroup","ngSubmit"],["position","floating"],["color","danger"],["required","","formControlName","firstName","type","text"],["required","","formControlName","lastName","type","text"],["required","","formControlName","email","type","email"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["required","","formControlName","password","type","password"],["required","","formControlName","reTypePassword","type","password"],[3,"isOpen"],["id","register-button","color","success","type","submit",2,"display","block",3,"click"],["id","cancel-button","color","medium",2,"display","block",3,"click"],["class","validation-error-message",4,"ngIf"],[1,"validation-error-message"],[2,"--background","green"],["expand","block","fill","clear","shape","round",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-buttons",1),e._UZ(3,"ion-back-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Register"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"ion-content"),e.TgZ(7,"ion-grid"),e.TgZ(8,"ion-row",2),e.TgZ(9,"ion-col",3),e._UZ(10,"div",4),e.TgZ(11,"div",5),e.TgZ(12,"p"),e._uU(13,"Please fill out the entire form to continue."),e.qZA(),e.qZA(),e.TgZ(14,"form",6),e.NdJ("ngSubmit",function(){return o.register()}),e.TgZ(15,"ion-item"),e.TgZ(16,"ion-label",7),e._uU(17,"First Name "),e.TgZ(18,"ion-text",8),e._uU(19,"*"),e.qZA(),e.qZA(),e._UZ(20,"ion-input",9),e.qZA(),e.TgZ(21,"ion-item"),e.TgZ(22,"ion-label",7),e._uU(23,"First Name "),e.TgZ(24,"ion-text",8),e._uU(25,"*"),e.qZA(),e.qZA(),e._UZ(26,"ion-input",10),e.qZA(),e.TgZ(27,"ion-item"),e.TgZ(28,"ion-label",7),e._uU(29,"Email "),e.TgZ(30,"ion-text",8),e._uU(31,"*"),e.qZA(),e.qZA(),e._UZ(32,"ion-input",11),e.TgZ(33,"div",12),e.YNc(34,m,2,1,"ng-container",13),e.qZA(),e.qZA(),e.TgZ(35,"ion-item"),e.TgZ(36,"ion-label",7),e._uU(37,"Password "),e.TgZ(38,"ion-text",8),e._uU(39,"*"),e.qZA(),e.qZA(),e._UZ(40,"ion-input",14),e.TgZ(41,"div",12),e.YNc(42,Z,2,1,"ng-container",13),e.qZA(),e.qZA(),e.TgZ(43,"ion-item"),e.TgZ(44,"ion-label",7),e._uU(45,"Re-type Password "),e.TgZ(46,"ion-text",8),e._uU(47,"*"),e.qZA(),e.qZA(),e._UZ(48,"ion-input",15),e.TgZ(49,"div",12),e.YNc(50,f,2,1,"ng-container",13),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(51,"ion-modal",16),e.YNc(52,T,3,0,"ng-template"),e.qZA(),e.qZA(),e.TgZ(53,"ion-footer"),e.TgZ(54,"ion-button",17),e.NdJ("click",function(){return o.tryRegister()}),e._uU(55," Register "),e.qZA(),e.TgZ(56,"ion-button",18),e.NdJ("click",function(){return o.goToLoginPage()}),e._uU(57," Cancel "),e.qZA(),e.qZA()),2&i&&(e.xp6(14),e.Q6J("formGroup",o.registerForm),e.xp6(20),e.Q6J("ngForOf",o.validationMessasges.email),e.xp6(8),e.Q6J("ngForOf",o.validationMessasges.password),e.xp6(8),e.Q6J("ngForOf",o.validationMessasges.password),e.xp6(1),e.Q6J("isOpen",o.registerSuccessModal))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,s.jY,s.Nd,s.wI,r._Y,r.JL,r.sg,s.Ie,s.Q$,s.yW,s.pK,s.j9,r.Q7,r.JJ,r.u,g.sg,s.ki,s.fr,s.YG,g.O5],styles:[""]}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(A)],l.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,r.u5,r.UX,s.Pc,q]]}),t})()}}]);