(self.webpackChunkzendu_ui=self.webpackChunkzendu_ui||[]).push([[878],{878:(Z,M,p)=>{"use strict";p.r(M),p.d(M,{SubmissionsModule:()=>z});var g=p(6895),C=p(4736),e=p(8256),h=p(7625),y=p(4327);let _=(()=>{class o{constructor(){}csvDownload(t,n){if(!n&&!n.length)return;const r=t.join(",")+"\n"+n.map(v=>t.map(T=>null===v[T.toLowerCase().replaceAll(" ","_")]||void 0===v[T.toLowerCase().replaceAll(" ","_")]?"":v[T.toLowerCase().replaceAll(" ","_")]).join(",")).join("\n");this.exportFile(r,"text/csv")}exportFile(t,n){const s=new Blob([t],{type:n});y.saveAs(s,"Downloaded CSV")}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();var u=p(5702),A=p(805),f=p(99),a=p(433),i=p(585),m=p(5593),c=p(5362);function d(o,l){if(1&o&&e._UZ(0,"span",3),2&o){const t=e.oxw();e.Q6J("ngClass",t.icon)}}const L=["*"];let D=(()=>{class o{containerClass(){return{"p-tag p-component":!0,"p-tag-info":"info"===this.severity,"p-tag-success":"success"===this.severity,"p-tag-warning":"warning"===this.severity,"p-tag-danger":"danger"===this.severity,"p-tag-rounded":this.rounded}}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["p-tag"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",severity:"severity",value:"value",icon:"icon",rounded:"rounded"},ngContentSelectors:L,decls:5,vars:6,consts:[[3,"ngClass","ngStyle"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-value"],[1,"p-tag-icon",3,"ngClass"]],template:function(t,n){1&t&&(e.F$t(),e.TgZ(0,"span",0),e.Hsn(1),e.YNc(2,d,1,1,"span",1),e.TgZ(3,"span",2),e._uU(4),e.qZA()()),2&t&&(e.Tol(n.styleClass),e.Q6J("ngClass",n.containerClass())("ngStyle",n.style),e.xp6(2),e.Q6J("ngIf",n.icon),e.xp6(2),e.Oqu(n.value))},dependencies:[g.mk,g.O5,g.PC],styles:[".p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}\n"],encapsulation:2,changeDetection:0}),o})(),w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez]}),o})();var S=p(1997);const x=["mapContainer"],b=["dashboardChanger"];function F(o,l){1&o&&e.GkF(0)}function k(o,l){if(1&o&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.xp6(1),e.Oqu(t.label)}}function O(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"th",25)(2,"input",26),e.NdJ("ngModelChange",function(s){e.CHM(t);const r=e.oxw(2);return e.KtG(r.selectAll=s)})("change",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onSelectAllChange())}),e.qZA()(),e.YNc(3,k,2,1,"th",27),e.qZA()}if(2&o){const t=e.oxw(2);e.xp6(2),e.Q6J("ngModel",t.selectAll),e.xp6(1),e.Q6J("ngForOf",t.tableHeaders)}}function E(o,l){1&o&&e.GkF(0)}function R(o,l){if(1&o&&e._UZ(0,"p-tag",30),2&o){const t=e.oxw().$implicit,n=e.oxw().$implicit,s=e.oxw(2);e.Akn(s.getStatusStyle(n[t.value])),e.Q6J("value",n[t.value])}}function U(o,l){if(1&o&&e._uU(0),2&o){const t=e.oxw().$implicit,n=e.oxw().$implicit;e.Oqu(n[t.value])}}function J(o,l){if(1&o&&(e.TgZ(0,"td"),e.YNc(1,E,1,0,"ng-container",15),e.YNc(2,R,1,3,"ng-template",null,28,e.W1O),e.YNc(4,U,1,1,"ng-template",null,29,e.W1O),e.qZA()),2&o){const t=l.$implicit,n=e.MAs(3),s=e.MAs(5);e.xp6(1),e.Q6J("ngIf","status"===t.value)("ngIfThen",n)("ngIfElse",s)}}function I(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"input",26),e.NdJ("ngModelChange",function(s){const v=e.CHM(t).rowIndex,T=e.oxw(2);return e.KtG(T.checkBox[v]=s)})("change",function(){const r=e.CHM(t).rowIndex,v=e.oxw(2);return e.KtG(v.onSelectionChange(r))}),e.qZA()(),e.YNc(3,J,6,3,"td",27),e.qZA()}if(2&o){const t=l.rowIndex,n=e.oxw(2);e.xp6(2),e.Q6J("ngModel",n.checkBox[t]),e.xp6(1),e.Q6J("ngForOf",n.tableHeaders)}}const N=function(){return{"min-width":"50rem"}};function j(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",21)(1,"p-table",22),e.NdJ("onLazyLoad",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.loadDatas())}),e.YNc(2,O,4,2,"ng-template",23),e.YNc(3,I,4,2,"ng-template",24),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("value",t.tableData)("selectAll",t.selectAll)("lazy",!0)("loading",t.loading)("tableStyle",e.DdM(8,N))("scrollable",!0)("rows",4)("rowHover",!0)}}function B(o,l){if(1&o&&(e.TgZ(0,"span",37)(1,"div",38)(2,"h6",39),e._uU(3),e.qZA(),e.TgZ(4,"div",40),e._UZ(5,"p-tag",30),e.qZA()(),e.TgZ(6,"div",41)(7,"ul",42)(8,"p",43),e._uU(9),e.qZA(),e.TgZ(10,"p",43),e._uU(11),e.qZA(),e.TgZ(12,"p",43),e._uU(13),e.qZA()()()()),2&o){const t=l.$implicit,n=e.oxw(2);e.xp6(3),e.Oqu(t.task),e.xp6(2),e.Akn(n.getStatusStyle(t.status)),e.Q6J("value",t.status),e.xp6(4),e.hij("From: ",t.from,""),e.xp6(2),e.hij("To: ",t.to,""),e.xp6(2),e.hij("Due date: ",t.dueDate,"")}}function Q(o,l){if(1&o&&(e.TgZ(0,"div",31)(1,"div",32),e.YNc(2,B,14,7,"span",33),e.qZA(),e.TgZ(3,"div",34),e._UZ(4,"div",35,36),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.tableData)}}const P=[{path:"",component:(()=>{class o{constructor(t,n){this.tableDataService=t,this.exportDataService=n,this.formList=[],this.statusList=[],this.selectedForm={},this.stateOptions=[],this.tableData=[],this.selectedDatas=[],this.tableHeaders=[],this.selectAll=!1,this.loading=!1,this.totalRecords=0,this.rows=4,this.first=0,this.pageReport="",this.currentPage=0,this.lat=40.73061,this.lng=-73.935242,this.coordinates=new google.maps.LatLng(this.lat,this.lng),this.mapOptions={center:this.coordinates,zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!0,mapTypeControl:!1,streetViewControl:!1},this.marker=new google.maps.Marker({position:this.coordinates,map:this.map}),this.zoom=12,this.checkBox=[],this.markers=[{position:new google.maps.LatLng(40.73061,73.935242),map:this.map,title:"Marker 1"},{position:new google.maps.LatLng(32.06485,34.763226),map:this.map,title:"Marker 2"}],this.myEvent=new e.vpe}mapInitializer(){this.map=new google.maps.Map(this.gmap.nativeElement,this.mapOptions),this.marker.setMap(this.map),this.loadAllMarkers()}loadAllMarkers(){this.markers.forEach(t=>{new google.maps.Marker({...t}).setMap(this.map)})}ngOnInit(){this.firstLoad=!0,this.formList=[{label:"Select Form",value:"Select Form"},{label:"Form 1",value:"Form 1"},{label:"Form 2",value:"Form 2"},{label:"Form 3",value:"Form 3"}],this.statusList=[{label:"Select Status",value:"Select Status"},{label:"Unassigned",value:"Unassigned"},{label:"Uncomplete",value:"Uncomplete"},{label:"Low Risk",value:"Low Risk"}],this.stateOptions=[{label:"Map",value:"Map"},{label:"List",value:"List"}],this.selectedDashboard="Map",this.tableHeaders=[{label:"Task",value:"task"},{label:"Status",value:"status"},{label:"From",value:"from"},{label:"To",value:"to"},{label:"Customer Address",value:"address"},{label:"Due Date",value:"dueDate"}],this.loading=!0;for(let t=0;t<this.rows;t++)this.checkBox[t]=!1;this.loadDatas()}onSelectAllChange(){if(this.selectAll){this.selectedDatas=this.tableData;for(let t=0;t<this.rows;t++)this.checkBox[t]=!0}else{this.selectedDatas=[],this.selectAll=!1;for(let t=0;t<this.rows;t++)this.checkBox[t]=!1}}loadDatas(t,n,s){this.loading=!0,setTimeout(()=>{this.tableDataService.getTableData(this.currentPage,this.rows,t,n,s).then(r=>{this.res=r,this.tableData=this.res.data,this.totalRecords=this.res.totalRecords,this.loading=!1,this.pageReport=this.first+1+" - "+(this.first+this.rows<=this.totalRecords?+(this.first+this.rows):this.totalRecords+" of "+this.totalRecords)+" submissions"},r=>{console.log(r)})},10)}onSelectionChange(t){this.checkBox[t]&&this.selectedDatas.push(this.tableData[t]),this.selectAll=this.selectedDatas.length===this.tableData.length}getDate(t){const n=t.toDateString().split(" "),s=t.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});return n[1]+" "+n[2]+","+s}getStatusStyle(t){switch(t){case"Low Risk":return{"background-color":"#c6f7d8",color:"#178e42","border-style":"solid","border-width":"1px","border-radius":"4px"};case"Uncomplete":return{"background-color":"#ecc2c2",color:"rgb(159, 3, 3)","border-style":"solid","border-width":"1px","border-radius":"4px"};case"Unassigned":return{"background-color":"#e9e9e9",color:"rgb(93, 93, 93)","border-style":"solid","border-width":"1px","border-radius":"4px"};default:return"blue"}}onPageChange(t){this.first=t.first,this.rows=t.rows,this.currentPage=t.page,this.loadDatas()}onDropdownChange(t){this.loadDatas("Select Status"===t.value?null:t.value)}ngAfterViewInit(){this.firstLoad&&(this.mapInitializer(),this.firstLoad=!1),this.myEvent.subscribe(()=>{"List"===this.selectedDashboard?(this.selectedDashboard="List",this.rows=10):(this.selectedDashboard="Map",this.rows=4,this.mapInitializer()),this.loadDatas()},t=>console.error(t))}dashboardChange(){this.myEvent.emit()}onSearch(){this.searchText=this.searchText.trim(),this.searchText.length>0&&this.loadDatas(this.selectedStatus,this.searchText)}onDateSelect(t){t&&this.loadDatas(this.selectedStatus,this.searchText,this.getNumericDate(this.selectedDate.toLocaleTimeString("en-US",{day:"numeric",month:"numeric",year:"numeric"})))}exportCsv(){const t=[];this.tableHeaders.forEach(n=>{t.push(n.value)}),this.exportDataService.csvDownload(t,this.selectedDatas.length>0?this.selectedDatas:this.tableData)}getNumericDate(t){let n=0;const s=t.split("/");return n+=Number.parseInt(s[1]),n*=100,n+=Number.parseInt(s[0]),n*=1e4,n+=Number.parseInt(s[2]),n}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.Q),e.Y36(_))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-submissions"]],viewQuery:function(t,n){if(1&t&&(e.Gf(x,5),e.Gf(b,5)),2&t){let s;e.iGM(s=e.CRH())&&(n.gmap=s.first),e.iGM(s=e.CRH())&&(n.eleRef=s.first)}},decls:30,vars:19,consts:[[1,"vh-100","mx-5"],[1,"row","mx-3"],[1,"text","start","fs-3","fw-bold","lh-lg"],[1,"d-flex","flex-wrap","justify-content-between","row-gap-3","col-gap-3"],[1,"d-flex","search-box"],["icon","pi pi-search","styleClass","p-button-text",3,"onClick"],["pInputText","","placeholder","Search...",1,"search-input",3,"ngModel","ngModelChange"],["optionLabel","label","optionValue","value","placeholder","Select Form",3,"options","ngModel","ngModelChange"],["optionLabel","label","optionValue","value","placeholder","Select Status",3,"options","ngModel","ngModelChange","onChange"],["appendTo","body","dateFormat","dd/mm/yy",3,"ngModel","showIcon","placeholder","showClear","ngModelChange","onSelect","onBlur"],[1,"card","flex","justify-content-center"],["optionLabel","label","optionValue","value",3,"options","ngModel","ngModelChange","click"],["styleClass","p-button-outlined",3,"click"],[1,"pi","pi-file-export"],[1,"ml-2","font-bold"],[4,"ngIf","ngIfThen","ngIfElse"],["listDashboard",""],["mapDashboard",""],[1,"container","d-flex","justify-content-between"],[1,"d-flex","align-items-center"],[3,"first","rows","totalRecords","showFirstLastIcon","onPageChange"],[1,"card",2,"margin-top","20px"],["dataKey","code","selectionMode","single",3,"value","selectAll","lazy","loading","tableStyle","scrollable","rows","rowHover","onLazyLoad"],["pTemplate","header"],["pTemplate","body"],[2,"width","3rem"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["statusTag",""],["noTag",""],["icon","pi pi-circle-fill",3,"value"],[1,"row","d-flex","justify-content-between",2,"margin-top","10px"],[1,"col-4","d-flex","flex-column","row-gap-2","card-header"],["class","card my-10",4,"ngFor","ngForOf"],[1,"col-8"],["id","map"],["mapContainer",""],[1,"card","my-10"],[1,"d-flex","justify-content-between","card-header","bg-transparent"],[1,"card-title"],[1,"status"],[1,"card-body"],[1,"pl-0"],[1,"card-text"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3," Submissions"),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"p-button",5),e.NdJ("onClick",function(){return n.onSearch()}),e.qZA(),e.TgZ(7,"input",6),e.NdJ("ngModelChange",function(r){return n.searchText=r}),e.qZA()(),e.TgZ(8,"div")(9,"p-dropdown",7),e.NdJ("ngModelChange",function(r){return n.selectedForm=r}),e.qZA()(),e.TgZ(10,"div")(11,"p-dropdown",8),e.NdJ("ngModelChange",function(r){return n.selectedStatus=r})("onChange",function(r){return n.onDropdownChange(r)}),e.qZA()(),e.TgZ(12,"div")(13,"p-calendar",9),e.NdJ("ngModelChange",function(r){return n.selectedDate=r})("onSelect",function(){return n.onDateSelect()})("onBlur",function(r){return n.onDateSelect(r)}),e.qZA()(),e.TgZ(14,"div",10)(15,"p-selectButton",11),e.NdJ("ngModelChange",function(r){return n.selectedDashboard=r})("click",function(){return n.myEvent.emit()}),e.qZA()(),e.TgZ(16,"div")(17,"p-button",12),e.NdJ("click",function(){return n.exportCsv()}),e._UZ(18,"span",13),e.TgZ(19,"span",14),e._uU(20,"export"),e.qZA()()()(),e.YNc(21,F,1,0,"ng-container",15),e.YNc(22,j,4,9,"ng-template",null,16,e.W1O),e.YNc(24,Q,6,1,"ng-template",null,17,e.W1O),e.TgZ(26,"div",18)(27,"div",19),e._uU(28),e.qZA(),e.TgZ(29,"p-paginator",20),e.NdJ("onPageChange",function(r){return n.onPageChange(r)}),e.qZA()()()),2&t){const s=e.MAs(23),r=e.MAs(25);e.xp6(7),e.Q6J("ngModel",n.searchText),e.xp6(2),e.Q6J("options",n.formList)("ngModel",n.selectedForm),e.xp6(2),e.Q6J("options",n.statusList)("ngModel",n.selectedStatus),e.xp6(2),e.Q6J("ngModel",n.selectedDate)("showIcon",!0)("placeholder","Select Date")("showClear",!0),e.xp6(2),e.Q6J("options",n.stateOptions)("ngModel",n.selectedDashboard),e.xp6(6),e.Q6J("ngIf","Map"===n.selectedDashboard)("ngIfThen",r)("ngIfElse",s),e.xp6(7),e.hij(" ",n.pageReport," "),e.xp6(1),e.Q6J("first",n.first)("rows",n.rows)("totalRecords",n.totalRecords)("showFirstLastIcon",!1)}},dependencies:[g.sg,g.O5,u.Lt,A.jx,f.iA,a.Fj,a.Wl,a.JJ,a.On,i.f,m.zx,c.UN,D,S.D],styles:[".search-box[_ngcontent-%COMP%]{border-style:solid;border-radius:.5rem;border-width:thin;border-color:#c4c3c3}.search-box[_ngcontent-%COMP%]:focus-within{outline:auto;outline-width:3px;outline-style:solid;outline-color:#719cf3}.search-box[_ngcontent-%COMP%]:hover{outline-width:.5px;outline-style:solid;outline-color:#6191ef}.search-input[_ngcontent-%COMP%]{outline:none!important;border:none!important}.p-button-icon[_ngcontent-%COMP%]{color:#c4c4c4;background-color:#6c757d}.p-calendar-w-btn[_ngcontent-%COMP%]   .p-datepicker-trigger[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0;background-color:transparent;border-color:#6c757d;color:#6c757d}#map[_ngcontent-%COMP%]{height:100%;width:100%;position:relative}.card-header[_ngcontent-%COMP%]{border-bottom:none}.card-title[_ngcontent-%COMP%]{font-weight:700}"]}),o})(),data:{title:"Submissions"}}];let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[C.Bz.forChild(P),C.Bz]}),o})(),z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[h.Q,_],imports:[g.ez,H,u.kW,f.U$,a.u5,i._8,c.Qy,w,S.U]}),o})()},4327:function(Z,M){var p,C;void 0!==(C="function"==typeof(p=function(){"use strict";function h(a,i,m){var c=new XMLHttpRequest;c.open("GET",a),c.responseType="blob",c.onload=function(){f(c.response,i,m)},c.onerror=function(){console.error("could not download file")},c.send()}function y(a){var i=new XMLHttpRequest;i.open("HEAD",a,!1);try{i.send()}catch{}return 200<=i.status&&299>=i.status}function _(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(i)}}var u="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,A=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),f=u.saveAs||("object"!=typeof window||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!A?function(a,i,m){var c=u.URL||u.webkitURL,d=document.createElement("a");d.download=i=i||a.name||"download",d.rel="noopener","string"==typeof a?(d.href=a,d.origin===location.origin?_(d):y(d.href)?h(a,i,m):_(d,d.target="_blank")):(d.href=c.createObjectURL(a),setTimeout(function(){c.revokeObjectURL(d.href)},4e4),setTimeout(function(){_(d)},0))}:"msSaveOrOpenBlob"in navigator?function(a,i,m){if(i=i||a.name||"download","string"!=typeof a)navigator.msSaveOrOpenBlob(function e(a,i){return typeof i>"u"?i={autoBom:!1}:"object"!=typeof i&&(console.warn("Deprecated: Expected third argument to be a object"),i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}(a,m),i);else if(y(a))h(a,i,m);else{var c=document.createElement("a");c.href=a,c.target="_blank",setTimeout(function(){_(c)})}}:function(a,i,m,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof a)return h(a,i,m);var d="application/octet-stream"===a.type,L=/constructor/i.test(u.HTMLElement)||u.safari,D=/CriOS\/[\d]+/.test(navigator.userAgent);if((D||d&&L||A)&&typeof FileReader<"u"){var w=new FileReader;w.onloadend=function(){var b=w.result;b=D?b:b.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=b:location=b,c=null},w.readAsDataURL(a)}else{var S=u.URL||u.webkitURL,x=S.createObjectURL(a);c?c.location=x:location.href=x,c=null,setTimeout(function(){S.revokeObjectURL(x)},4e4)}});u.saveAs=f.saveAs=f,Z.exports=f})?p.apply(M,[]):p)&&(Z.exports=C)}}]);