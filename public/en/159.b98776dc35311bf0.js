"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[159],{9159:(I,d,r)=>{r.r(d),r.d(d,{TaskModule:()=>Y});var s=r(7772),l=r(7972),a=r(6978),e=r(9905);let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"router-outlet"),e.qZA()())},dependencies:[a.lC],encapsulation:2}),t})();var m=r(2405),c=r(6973);function f(t,o){if(1&t&&(e.TgZ(0,"tr",9)(1,"td"),e._uU(2),e.TgZ(3,"div",10),e._uU(4," Assigned to "),e.TgZ(5,"b"),e._uU(6),e.qZA(),e._uU(7," by "),e.TgZ(8,"b"),e._uU(9),e.qZA()()(),e.TgZ(10,"td")(11,"span",11),e._uU(12),e.ALo(13,"date"),e.qZA()(),e.TgZ(14,"td"),e._uU(15),e.qZA()()),2&t){const n=o.$implicit;e.xp6(2),e.hij(" ",n.title," "),e.xp6(4),e.Oqu(null==n.user?null:n.user.name),e.xp6(3),e.Oqu(null==n.admin?null:n.admin.name),e.xp6(3),e.Oqu(e.xi3(13,5,n.created_at,"dd/MM/YYYY hh:mm a")),e.xp6(3),e.Oqu(n.description)}}function Z(t,o){if(1&t&&(e.TgZ(0,"option",16),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.name," ")}}function v(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Assigned By is required "),e.qZA())}function T(t,o){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,v,2,0,"div",18),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.f.assigned_by_id.errors.required)}}function b(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Title is required"),e.qZA())}function C(t,o){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,b,2,0,"div",18),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.f.title.errors.required)}}function h(t,o){if(1&t&&(e.TgZ(0,"option",16),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.name," ")}}function A(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Assigned To is required "),e.qZA())}function q(t,o){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,A,2,0,"div",18),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.f.assigned_to_id.errors.required)}}function U(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Description is required"),e.qZA())}function y(t,o){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,U,2,0,"div",18),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.f.description.errors.required)}}function k(t,o){1&t&&e._UZ(0,"span",19)}const p=function(t){return{"is-invalid":t}},J=[{path:"",component:g,children:[{path:"",component:(()=>{class t{constructor(n){this.accountService=n,this.account=this.accountService.accountValue,this.pagination={current_page:0,last_page:0,total:0,data:[],first_page_url:"",from:0,last_page_url:"",next_page_url:"",path:"",per_page:"",prev_page_url:"",to:""}}ngOnInit(){this.loadTasks()}loadTasks(n=1){this.accountService.getAllTasks(n).pipe((0,m.P)()).subscribe(i=>{this.pagination=i,this.tasks=i?.data})}nextPage(n=1){const{current_page:i,last_page:u}=this.pagination??{};i&&u&&i+n>=1&&i+n<=u&&this.loadTasks(i+n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.B))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:28,vars:6,consts:[[1,"container"],["routerLink","create"],[1,"table","table-responsive"],["class","list-unstyled",4,"ngFor","ngForOf"],[1,"row","justify-content-center"],[1,"col","col-auto"],[1,"input-group"],[1,"btn","btn-outline-primary",3,"disabled","click"],[1,"d-flex","px-2","border-top","border-primary","border-bottom","justify-content-center","align-items-center"],[1,"list-unstyled"],[1,"text-muted"],[1,"badge","bg-secondary","fs-6"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4,"List of available tasks"),e.qZA(),e.TgZ(5,"p")(6,"a",1),e._uU(7,"Create Task"),e.qZA()(),e.TgZ(8,"table",2)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Date"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Task"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Description"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,f,16,8,"tr",3),e.qZA()(),e.TgZ(19,"div",4)(20,"div",5)(21,"div",6)(22,"button",7),e.NdJ("click",function(){return i.nextPage(-1)}),e._uU(23," Previous "),e.qZA(),e.TgZ(24,"div",8),e._uU(25),e.qZA(),e.TgZ(26,"button",7),e.NdJ("click",function(){return i.nextPage()}),e._uU(27," Next "),e.qZA()()()()()),2&n&&(e.xp6(2),e.hij("Hi ",null==i.account?null:i.account.name,"!"),e.xp6(16),e.Q6J("ngForOf",i.tasks),e.xp6(4),e.Q6J("disabled",1===i.pagination.current_page),e.xp6(3),e.AsE(" ",i.pagination.current_page," of ",i.pagination.last_page," "),e.xp6(1),e.Q6J("disabled",i.pagination.current_page>=i.pagination.last_page))},dependencies:[l.sg,a.rH,l.uU],encapsulation:2}),t})()},{path:"create",component:(()=>{class t{constructor(n,i,u,Q,N){this.formBuilder=n,this.route=i,this.router=u,this.accountService=Q,this.alertService=N,this.submitting=!1,this.submitted=!1,this.deleting=!1}ngOnInit(){this.accountService.getAllUsers().subscribe(n=>this.users=n.data),this.accountService.getAllAdmins().subscribe(n=>this.admins=n.data),this.form=this.formBuilder.group({title:["",s.kI.required],assigned_by_id:["",s.kI.required],assigned_to_id:["",s.kI.required],description:["",s.kI.max(1500)]},{})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(console.log(this.form.value),this.accountService.createTask(this.form.value).pipe((0,m.P)()).subscribe({next:()=>{this.alertService.success("Task Created successfully",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})},error:n=>{this.alertService.error(n),this.submitting=!1}}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.qu),e.Y36(a.gz),e.Y36(a.F0),e.Y36(c.B),e.Y36(c.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:34,vars:21,consts:[[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-3"],[1,"form-label"],["formControlName","assigned_by_id",1,"form-select",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback",4,"ngIf"],[1,"mb-3","col-6"],["type","text","formControlName","title",1,"form-control",3,"ngClass"],["formControlName","assigned_to_id",1,"form-select",3,"ngClass"],[1,"mb-3"],["rows","3","formControlName","description",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","me-2",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../","href","",1,"btn","btn-link"],[3,"value"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(n,i){1&n&&(e.TgZ(0,"h1"),e._uU(1,"Create Task"),e.qZA(),e.TgZ(2,"form",0),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(3,"div",1)(4,"div",2)(5,"label",3),e._uU(6,"Assigned By"),e.qZA(),e.TgZ(7,"select",4),e._UZ(8,"option",5),e.YNc(9,Z,2,2,"option",6),e.qZA(),e.YNc(10,T,2,1,"div",7),e.qZA(),e.TgZ(11,"div",8)(12,"label",3),e._uU(13,"Title"),e.qZA(),e._UZ(14,"input",9),e.YNc(15,C,2,1,"div",7),e.qZA(),e.TgZ(16,"div",2)(17,"label",3),e._uU(18,"Assigned To"),e.qZA(),e.TgZ(19,"select",10),e._UZ(20,"option",5),e.YNc(21,h,2,2,"option",6),e.qZA(),e.YNc(22,q,2,1,"div",7),e.qZA()(),e.TgZ(23,"div",11)(24,"label",3),e._uU(25,"Description"),e.qZA(),e._UZ(26,"textarea",12),e.YNc(27,y,2,1,"div",7),e.qZA(),e.TgZ(28,"div",11)(29,"button",13),e.YNc(30,k,1,0,"span",14),e._uU(31," Update "),e.qZA(),e.TgZ(32,"a",15),e._uU(33,"Cancel"),e.qZA()()()),2&n&&(e.xp6(2),e.Q6J("formGroup",i.form),e.xp6(5),e.Q6J("ngClass",e.VKq(13,p,i.submitted&&i.f.assigned_by_id.errors)),e.xp6(2),e.Q6J("ngForOf",i.admins),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.assigned_by_id.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(15,p,i.submitted&&i.f.title.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.title.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(17,p,i.submitted&&i.f.assigned_to_id.errors)),e.xp6(2),e.Q6J("ngForOf",i.users),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.assigned_to_id.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(19,p,i.submitted&&i.f.description.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.description.errors),e.xp6(2),e.Q6J("disabled",i.submitting),e.xp6(1),e.Q6J("ngIf",i.submitting))},dependencies:[l.mk,l.sg,l.O5,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.sg,s.u,a.rH],encapsulation:2}),t})()}]}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(J),a.Bz]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,s.UX,x]}),t})()}}]);