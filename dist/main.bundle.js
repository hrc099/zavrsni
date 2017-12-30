webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clanovi_forma_clanovi_forma_component__ = __webpack_require__("../../../../../src/app/clanovi-forma/clanovi-forma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sadrzaj_forma_sadrzaj_forma_component__ = __webpack_require__("../../../../../src/app/sadrzaj-forma/sadrzaj-forma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datoteke_forma_datoteke_forma_component__ = __webpack_require__("../../../../../src/app/datoteke-forma/datoteke-forma.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'clanovi', component: __WEBPACK_IMPORTED_MODULE_2__clanovi_forma_clanovi_forma_component__["a" /* ClanoviFormaComponent */] },
    { path: 'sadrzaj', component: __WEBPACK_IMPORTED_MODULE_3__sadrzaj_forma_sadrzaj_forma_component__["a" /* SadrzajFormaComponent */] },
    { path: 'datoteke', component: __WEBPACK_IMPORTED_MODULE_4__datoteke_forma_datoteke_forma_component__["a" /* DatotekeFormaComponent */] },
    { path: '', redirectTo: 'clanovi', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n\t\t<div class=\"navbar-brand\">\n\t\t\t<a class=\"navbar-item\" routerLink=\"/\">\n\t\t\t\t<img src=\"uploads/logo.svg\" alt=\"Udruga studenata grada Zaprešića\">\n\t\t\t</a>\n\t\t\t<button class=\"button navbar-burger\">\n\t\t      <span></span>\n\t\t      <span></span>\n\t\t      <span></span>\n\t\t    </button>\n\t\t</div>\n\t\t<div class=\"navbar-menu\">\n\t\t\t<div class=\"navbar-start\">\n\t\t\t\t<a class=\"navbar-item\" routerLink=\"/clanovi\" routerLinkActive=\"routerlink-active\">Članovi</a>\n\t\t\t\t<a class=\"navbar-item\" routerLink=\"/sadrzaj\" routerLinkActive=\"routerlink-active\">Sadržaj</a>\n\t\t\t\t<a class=\"navbar-item\" routerLink=\"/datoteke\" routerLinkActive=\"routerlink-active\">Datoteke</a>\n\t\t\t</div>\n\t\t\t<div class=\"navbar-end\"></div>\n\t\t</div>\n\t</nav>\n\t<router-outlet></router-outlet>\n</div>\n\n<script type=\"text/javascript\">\n\tdocument.addEventListener('DOMContentLoaded', function () {\n\n\t  // Get all \"navbar-burger\" elements\n\t  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);\n\n\t  // Check if there are any navbar burgers\n\t  if ($navbarBurgers.length > 0) {\n\n\t    // Add a click event on each of them\n\t    $navbarBurgers.forEach(function ($el) {\n\t      $el.addEventListener('click', function () {\n\n\t        // Get the target from the \"data-target\" attribute\n\t        var target = $el.dataset.target;\n\t        var $target = document.getElementById(target);\n\n\t        // Toggle the class on both the \"navbar-burger\" and the \"navbar-menu\"\n\t        $el.classList.toggle('is-active');\n\t        $target.classList.toggle('is-active');\n\n\t      });\n\t    });\n\t  }\n\n\t});\n</script>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sadrzaj_forma_sadrzaj_forma_component__ = __webpack_require__("../../../../../src/app/sadrzaj-forma/sadrzaj-forma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__clanovi_forma_clanovi_forma_component__ = __webpack_require__("../../../../../src/app/clanovi-forma/clanovi-forma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sort_by_pipe__ = __webpack_require__("../../../../../src/app/sort-by.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__datoteke_forma_datoteke_forma_component__ = __webpack_require__("../../../../../src/app/datoteke-forma/datoteke-forma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sadrzaj_forma_sadrzaj_forma_component__["a" /* SadrzajFormaComponent */],
            __WEBPACK_IMPORTED_MODULE_8__clanovi_forma_clanovi_forma_component__["a" /* ClanoviFormaComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sort_by_pipe__["a" /* SortByPipe */],
            __WEBPACK_IMPORTED_MODULE_10__datoteke_forma_datoteke_forma_component__["a" /* DatotekeFormaComponent */],
            __WEBPACK_IMPORTED_MODULE_11__filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clanovi-forma/clanovi-forma.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".th-center {\r\n\ttext-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clanovi-forma/clanovi-forma.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column\">\n\t  <h3 class=\"is-size-3\">Popis članova</h3>\n\t  <div class=\"field\">\n\t  \t<label for=\"search\" class=\"label\">Pretraga članova</label>\n\t  \t<div class=\"control has-icons-left\">\n\t  \t\t<input [(ngModel)]=\"searchText\" class=\"input\" name=\"search\">\n\t  \t\t<span class=\"icon is-small is-left\">\n\t    \t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t</span>\n\t  \t</div>\n\t  </div>\n\t  <table class=\"table\">\n\t  \t<tr>\n\t  \t\t<th>#</th>\n\t  \t\t<th>Ime</th>\n\t  \t\t<th>Prezime</th>\n\t  \t\t<th>Status članstva</th>\n\t  \t\t<th>Aktivan</th>\n\t  \t\t<th class=\"th-center\">\n\t  \t\t\t<i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n\t  \t\t</th>\n\t  \t\t<th class=\"th-center\">\n\t  \t\t\t<i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n\t  \t\t</th>\n\t  \t</tr>\n\t  \t<tr *ngFor=\"let clan of clanovi | filter:searchText | sortBy:'surname'; let i = index\">\n\t  \t\t<td>\n\t  \t\t\t{{ i + 1 }}\n\t  \t\t</td>\n\t  \t\t<td>\n\t  \t\t\t<span [style.display]=\"clan.isEditMode?'none':'inline-block'\">\n\t  \t\t\t\t{{ clan.name }}\n\t  \t\t\t</span>\n\t  \t\t\t<input type=\"text\" id=\"clanName\" required [(ngModel)]=\"clanovi[i].name\" (keyup.enter)=\"updOnEnter(clan)\" name=\"clanName\" [style.display]=\"!clan.isEditMode?'none':'inline-block'\" class=\"input\">\n\t  \t\t</td>\n\t  \t\t<td>\n\t  \t\t\t<span [style.display]=\"clan.isEditMode?'none':'inline-block'\">\n\t  \t\t\t\t{{ clan.surname }}\n\t  \t\t\t</span>\n\t  \t\t\t<input type=\"text\" id=\"clanSurname\" required [(ngModel)]=\"clanovi[i].surname\" (keyup.enter)=\"updOnEnter(clan)\" name=\"clanSurname\"  [style.display]=\"!clan.isEditMode?'none':'inline-block'\" class=\"input\">\n\t  \t\t</td>\n\t  \t\t<td>\n\t  \t\t\t<span [style.display]=\"clan.isEditMode?'none':'inline-block'\">\n\t  \t\t\t\t{{ clan.status }}\n\t  \t\t\t</span>\n\t\t  \t\t<div [style.display]=\"!clan.isEditMode?'none':'inline-block'\" class=\"select\">\n\t\t  \t\t\t<select #selectStatus (change)=\"setStatusClan(clan, selectStatus.value)\">\n\t\t  \t\t\t\t<option [selected]=\"clan.status==='redovno'\" value=\"redovno\">redovno</option>\n\t\t  \t\t\t\t<option [selected]=\"clan.status==='izvanredno'\" value=\"izvanredno\">izvanredno</option>\n\t\t  \t\t\t\t<option [selected]=\"clan.status==='počasno'\" value=\"počasno\">počasno</option>\n\t\t  \t\t\t</select>\n\t\t  \t\t</div>\n\t  \t\t</td>\n\t  \t\t<td>\n\t  \t\t\t<span [style.display]=\"clan.isEditMode?'none':'inline-block'\">\n\t  \t\t\t\t{{ clan.isActive?\"aktivan\":\"neaktivan\" }}\n\t  \t\t\t</span>\n\t\t  \t\t<div [style.display]=\"!clan.isEditMode?'none':'inline-block'\" class=\"select\">\n\t\t  \t\t\t<select #selectActive (change)=\"setIsActive(clan, selectActive.value)\">\n\t\t  \t\t\t\t<option value=true>aktivan</option>\n\t\t  \t\t\t\t<option [selected]=\"!clan.isActive\" value>neaktivan</option>\n\t\t  \t\t\t</select>\n\t\t  \t\t</div>\n\t  \t\t</td>\n\t  \t\t<td>\n\t  \t\t\t<button class=\"button\" [style.display]=\"clan.isEditMode?'none':'inline-block'\" (click)=\"setEditState(clan, true)\">\n\t  \t\t\t\tUredi člana\n\t  \t\t\t</button>\n\t  \t\t\t<button  class=\"button\" [disabled]=\"!clan.name||!clan.surname\" [style.display]=\"!clan.isEditMode?'none':'inline-block'\" (click)=\"updClan(clan, i);setEditState(clan);\">\n\t  \t\t\t\t<span>\n\t  \t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i> \n\t  \t\t\t\t</span>\n\t  \t\t\t</button>\n\t  \t\t\t<button class=\"button\" [style.display]=\"!clan.isEditMode?'none':'inline-block'\" (click)=\"cancelChanges(clan);setEditState(clan);\">\n\t  \t\t\t\t<i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\n\t  \t\t\t</button>\n\t  \t\t</td>\n\t  \t\t<td>\n\t  \t\t\t<button (click)=\"delClan(clan)\" class=\"button is-danger\">\n\t  \t\t\t\t<span>\n\t  \t\t\t\t\tIzbriši\n\t  \t\t\t\t</span>\n\t  \t\t\t</button>\n\t  \t\t</td>\n\t  \t</tr>\n\t  </table>\n\t  <div [style.display]=\"msgHidden?'none':'block'\" class=\"bottom-info\">\n\t  \t<div class=\"container\">\n\t  \t\t<span>\n\t  \t\t\tIzbrisali ste člana {{ backupClan.name }} {{ backupClan.surname }}.\n\t  \t\t</span>\n\t\t  \t<button class=\"button\" (click)=\"reviveClan();this.msgHidden=true;\">\n\t\t  \t\tVrati člana \n\t\t  \t\t<i class=\"fa fa-undo fa-fw\" aria-hidden=\"true\"></i>\n\t\t  \t</button>\n\t\t  \t<button class=\"button\" (click)=\"msgHidden=true\">\n\t\t  \t\tOK \n\t\t  \t\t<i class=\"fa fa-check fa-fw\" aria-hidden=\"true\"></i>\n\t\t  \t</button>\n\t\t  \t<button class=\"delete\" (click)=\"msgHidden=true\"></button>\n\t  \t</div>\n\t  </div>\n\t  <div [style.display]=\"error===''?'none':'block'\" class=\"bottom-info red-alert\">\n\t  \t<div class=\"container\">\n\t  \t\t<span>\n\t  \t\t\t{{ error }}\n\t  \t\t</span>\n\t\t  \t<button class=\"delete\" (click)=\"error=''\"></button>\n\t  \t</div>\n\t  </div>\n\t</div>\n\t<div class=\"column\">\n\t  \t<h3 class=\"is-size-3\">Dodavanje novog člana</h3>\n\t\t<form (ngSubmit)=\"addClan()\" #formAddClan=\"ngForm\">\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"newClanName\" class=\"label\">Ime</label>\n\t\t\t\t<input type=\"text\" id=\"newClanName\" required [(ngModel)]=\"newClan.name\" name=\"newClanName\" class=\"input\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label for=\"newClanSurname\" class=\"label\">Prezime</label>\n\t\t\t\t<input type=\"text\" id=\"newClanSurname\" required [(ngModel)]=\"newClan.surname\" name=\"newClanSurname\" class=\"input\">\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"newClanStatus\" class=\"label\">Status članstva</label>\n\t\t\t\t<div class=\"control\">\n\t\t\t\t\t<div class=\"select\">\n\t\t\t\t\t\t<select id=\"newClanStatus\" required [(ngModel)]=\"newClan.status\" name=\"newClanStatus\">\n\t\t\t\t\t\t\t<option value=\"redovno\">redovno</option>\n\t\t\t\t\t\t\t<option value=\"izvanredno\">izvanredno</option>\n\t\t\t\t\t\t\t<option value=\"počasno\">počasno</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"newClanIsActive\" class=\"label\">Aktivan</label>\n\t\t\t\t<div class=\"control\">\n\t\t\t\t\t<div class=\"select\">\n\t\t\t\t\t\t<select id=\"newClanIsActive\" required [(ngModel)]=\"newClan.isActive\" name=\"newClanIsActive\" class=\"select\">\n\t\t\t\t\t\t\t<option value=true>aktivan</option>\n\t\t\t\t\t\t\t<option value=false>neaktivan/bivši</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" [disabled]=\"!formAddClan.form.valid\" class=\"button is-info\">Dodaj člana</button>\n\t\t</form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/clanovi-forma/clanovi-forma.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClanoviFormaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClanoviFormaComponent = (function () {
    // Create an instance of the DataService through dependency injection
    function ClanoviFormaComponent(_dataService) {
        this._dataService = _dataService;
        this.backupClan = {};
        this.msgHidden = true;
        this.error = '';
        this.newClan = {
            name: '',
            surname: '',
            status: 'redovno',
            isActive: true
        };
        this.searchText = '';
        this.nameBackup = '';
        this.surnameBackup = '';
        this.statusBackup = '';
    }
    ClanoviFormaComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Access the Data Service's getUsers() method we defined
        this._dataService.getUsers()
            .subscribe(function (res) { return _this.clanovi = res; });
    };
    ClanoviFormaComponent.prototype.addClan = function () {
        var _this = this;
        var result;
        if (this.formClan.valid) {
            this.newClan.name = this.capitalizeFirstLetter(this.newClan.name);
            this.newClan.surname = this.capitalizeFirstLetter(this.newClan.surname);
            result = this._dataService.addClan(this.newClan);
            result.subscribe(function (x) {
                _this._dataService.getUsers()
                    .subscribe(function (res) { return _this.clanovi = res; });
                _this.newClan = {
                    name: '',
                    surname: '',
                    status: 'redovno',
                    isActive: true
                };
            });
        }
    };
    ClanoviFormaComponent.prototype.setEditState = function (user, state) {
        if (state) {
            user.isEditMode = state;
            this.nameBackup = user.name;
            this.surnameBackup = user.surname;
            this.statusBackup = user.status;
            this.isActiveBackup = user.isActive;
        }
        else {
            delete user.isEditMode;
        }
    };
    ClanoviFormaComponent.prototype.setStatusClan = function (user, value) {
        user.status = value;
    };
    ClanoviFormaComponent.prototype.setIsActive = function (user, bool) {
        if (bool) {
            user.isActive = bool;
        }
        else {
            delete user.isActive;
        }
    };
    ClanoviFormaComponent.prototype.updClan = function (user) {
        if (!user._id) {
            this.error = "Član nema ID - ako je bio obrisan, nije povukao novi ID iz baze - osvježi stranicu";
            return;
        }
        var updUser = {};
        if (!user.name || !user.surname || !user.status) {
            this.error = "Ime, prezime i status člana moraju biti popunjeni!";
            return;
        }
        else {
            user.name = this.capitalizeFirstLetter(user.name);
            user.surname = this.capitalizeFirstLetter(user.surname);
            //console.log(user.name + " " + user.surname);
            updUser = {
                _id: user._id,
                name: user.name,
                surname: user.surname,
                status: user.status,
                isActive: user.isActive
            };
            this._dataService.updateClan(updUser)
                .subscribe();
        }
    };
    ClanoviFormaComponent.prototype.cancelChanges = function (user) {
        user.name = this.nameBackup;
        user.surname = this.surnameBackup;
        user.status = this.statusBackup;
        user.isActive = this.isActiveBackup;
    };
    ClanoviFormaComponent.prototype.updOnEnter = function (user) {
        if (!user.name || !user.surname) {
            user.name = this.nameBackup;
            user.surname = this.surnameBackup;
            this.error = "Ime i prezime člana moraju biti ispunjeni";
            this.nameBackup = '';
            this.surnameBackup = '';
        }
        else {
            this.updClan(user);
        }
    };
    ClanoviFormaComponent.prototype.delClan = function (clan) {
        var _this = this;
        if (!clan._id) {
            this.error = "Član nema ID - ako je bio obrisan, nije povukao novi ID iz baze - osvježi stranicu";
            return;
        }
        this.backupClan = {
            name: clan.name,
            surname: clan.surname,
            status: clan.status,
            isActive: clan.isActive
        };
        var clanovi = this.clanovi;
        this._dataService.deleteClan(clan._id)
            .subscribe(function (data) {
            _this._dataService.getUsers()
                .subscribe(function (res) { return _this.clanovi = res; });
        });
        this.msgHidden = false;
    };
    ClanoviFormaComponent.prototype.reviveClan = function () {
        var _this = this;
        var result;
        result = this._dataService.addClan(this.backupClan);
        result.subscribe(function (x) {
            _this._dataService.getUsers()
                .subscribe(function (res) { return _this.clanovi = res; });
            _this.backupClan = {};
        });
    };
    ClanoviFormaComponent.prototype.capitalizeFirstLetter = function (string) {
        return string && string.charAt(0).toUpperCase() + string.slice(1);
    };
    return ClanoviFormaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('formAddClan'),
    __metadata("design:type", Object)
], ClanoviFormaComponent.prototype, "formClan", void 0);
ClanoviFormaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-clanovi-forma',
        template: __webpack_require__("../../../../../src/app/clanovi-forma/clanovi-forma.component.html"),
        styles: [__webpack_require__("../../../../../src/app/clanovi-forma/clanovi-forma.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ClanoviFormaComponent);

var _a;
//# sourceMappingURL=clanovi-forma.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getUsers = function () {
        var _this = this;
        return this._http.get("/api/clanovi")
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.addClan = function (newUser) {
        return this._http.post("/api/clan", newUser)
            .map(function (res) { return res.json().data; });
    };
    DataService.prototype.updateClan = function (updUser) {
        return this._http.put("/api/clanovi/" + updUser._id, updUser)
            .map(function (res) { return res.json().data; });
    };
    DataService.prototype.deleteClan = function (_id) {
        return this._http.delete("/api/clanovi/" + _id);
    };
    DataService.prototype.getSadrzaj = function () {
        return this._http.get("/api/sadrzaj")
            .map(function (res) { return res.json().data; });
    };
    DataService.prototype.updateSadrzaj = function (updClanak) {
        return this._http.put("/api/sadrzaj/" + updClanak._id, updClanak)
            .map(function (res) { return res.json().data; });
    };
    DataService.prototype.addSadrzaj = function (noviClanak) {
        return this._http.post("/api/addsadrzaj", noviClanak)
            .map(function (res) { return res.json().data; });
    };
    DataService.prototype.deleteSadrzaj = function (_id) {
        console.log("--" + _id + "--");
        return this._http.delete("/api/sadrzaj/" + _id);
    };
    DataService.prototype.postDat = function (formData) {
        return this._http.post("/api/uploadDoc", formData);
    };
    DataService.prototype.getImgs = function () {
        return this._http.get("/api/uploads/img")
            .map(function (res) { return res.json().data; });
    };
    DataService.prototype.postImg = function (formData) {
        return this._http.post("/api/uploadImg", formData)
            .map(function (res) { return res.json().data; });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/datoteke-forma/datoteke-forma.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datoteke-forma/datoteke-forma.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h2 class=\"is-size-2\">Upload datoteka</h2>\n\t<span [style.display]=\"error?'block':'none'\" class=\"red-alert\">\n\t\t{{ error }}\n\t</span>\n\t<form (ngSubmit)=\"uploadDat()\" #datForm=\"ngForm\" enctype=\"multipart/form-data\">\n\t\t<div class=\"file has-name\">\n\t\t  <label class=\"file-label\">\n\t\t    <input (change)=\"fileChangeEvent($event)\" class=\"file-input\" type=\"file\" #fileInput name=\"datoteka\" multiple=\"multiple\" accept=\"application/x-zip-compressed,image/*\">\n\t\t    <span class=\"file-cta\">\n\t\t      <span class=\"file-icon\">\n\t\t        <i class=\"fa fa-upload\"></i>\n\t\t      </span>\n\t\t      <span class=\"file-label\">\n\t\t        Izaberi datoteke…\n\t\t      </span>\n\t\t    </span>\n\t\t  </label>\n\t\t</div>\n\t\t<br>\n\t\t<small>\n\t\t\tNajveći broj datoteka u jednom prijenosu: 10\n\t\t\t<br>\n\t\t\tNajveća veličina pojedinačne datoteke: 100MB\n\t\t\t<br>\n\t\t\tDopušteni formati: jpg | jpeg | png | gif | svg | doc | docx | xls | xlsx | ppt | pptx | pdf | txt\n\t\t</small>\n\t\t<br><br>\n\t\t<button type=\"submit\" class=\"button is-info\" [disabled]=\"!(filesToUpload.length>0) || !checkFileSizes(filesToUpload)\">Učitaj datoteke</button>\n\t</form>\n\t<br>\n\t<span>\n\t\tBroj odabranih datoteka: {{ filesToUpload.length }}\n\t</span>\n\t<br>\n\t<div class=\"box\" *ngIf=\"filesToUpload.length > 0\">\n\t\t<ul>\n\t\t\t<li *ngFor=\"let dat of filesToUpload\">\n\t\t\t\t{{ dat.name }}\n\t\t\t\t<span [ngClass]=\"{'red-alert':dat.size>100000000}\">\n\t\t\t\t\t{{ dat.size/1000000 | number:'1.1-2' }}MB\n\t\t\t\t</span>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<span class=\"red-alert\">\n\t\t{{ err }}\n\t</span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/datoteke-forma/datoteke-forma.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatotekeFormaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatotekeFormaComponent = (function () {
    function DatotekeFormaComponent(_dataService) {
        this._dataService = _dataService;
        this.filesToUpload = [];
    }
    DatotekeFormaComponent.prototype.ngOnInit = function () {
    };
    DatotekeFormaComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        //this.product.photo = fileInput.target.files[0]['name'];
    };
    DatotekeFormaComponent.prototype.checkFileSizes = function (filesToUpload) {
        for (var i = 0; i < filesToUpload.length; i++) {
            if (filesToUpload[i].size > 100000000) {
                return false;
            }
        }
        return true;
    };
    DatotekeFormaComponent.prototype.uploadDat = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        //console.log('form data variable :   '+ formData.toString());
        this._dataService.postDat(formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (response) { return console.log('Datoteka prenesena'); }, function (error) { _this.err = error + ' - ' + 'Greška - prevelika datoteka, previše odabranih datoteka ili nedopušteni format'; setTimeout(function () { _this.err = ''; }, 5000); });
        this.fileInput.nativeElement.value = "";
    };
    return DatotekeFormaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], DatotekeFormaComponent.prototype, "fileInput", void 0);
DatotekeFormaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-datoteke-forma',
        template: __webpack_require__("../../../../../src/app/datoteke-forma/datoteke-forma.component.html"),
        styles: [__webpack_require__("../../../../../src/app/datoteke-forma/datoteke-forma.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], DatotekeFormaComponent);

var _a;
//# sourceMappingURL=datoteke-forma.component.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            //return it.name.toLowerCase().includes(searchText) || it.surname.toLowerCase().includes(searchText);
            return (it.name + ' ' + it.surname).toLowerCase().includes(searchText);
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/sadrzaj-forma/sadrzaj-forma.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imgList {\r\n    height: 250px;\r\n    overflow: auto;\r\n}\r\nfigure {\r\n    width: 20%;\r\n    height: 200px;\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\nfigure img {\r\n    width: 100%;\r\n    height: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sadrzaj-forma/sadrzaj-forma.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"columns\">\n  \t<div class=\"column is-half\">\n  \t\t  <h3 class=\"is-size-3\">Uređivanje postojećih članaka</h3>\n\t\t  <form (ngSubmit)=\"updSadrzaj(trenutniSadrzaj)\" #sadrzajForm=\"ngForm\">\n\t\t\t  <div class=\"field\">\n\t\t\t  \t<label class=\"label\">\n\t\t\t  \t\tOdabir članka za uređivanje:\n\t\t\t  \t</label>\n\t\t\t  \t<div class=\"control\">\n\t\t\t\t  \t<div class=\"select\">\n\t\t\t\t  \t\t<select #selectSadrzaj (change)=\"setNoviClanak(selectSadrzaj.value)\">\n\t\t\t\t\t\t  \t<option disabled selected value> -- Odaberi članak -- </option>\n\t\t\t\t\t\t  \t<option *ngFor=\"let clanak of sadrzaj\" [value]=\"sadrzaj.indexOf(clanak)\">\n\t\t\t\t\t\t  \t\t{{ clanak.name }}\n\t\t\t\t\t\t  \t</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t  \t</div>\n\t\t\t  \t</div>\n\t\t\t  </div>\n\t\t\t  <div *ngIf=\"trenutniSadrzaj\">\n\t\t    \t<div class=\"field\">\n\t\t    \t\t<label for=\"name\" class=\"label\">Ime</label>\n\t\t    \t\t<div class=\"control\">\n\t\t    \t\t\t<input type=\"text\" id=\"name\" required [(ngModel)]=\"trenutniSadrzaj.name\" name=\"name\" #name=\"ngModel\" class=\"input\">\n\t\t    \t\t</div>\n\t\t    \t\t<span [style.display]=\"name.valid?'none':'inline-block'\" class=\"red-alert\">\n\t\t    \t\t\tNaslov nije unesen - sadržaj mora imati ime / naslov\n\t\t\t\t\t</span>\n\t\t    \t</div>\n\t\t    \t<div class=\"field\">\n\t\t    \t\t<label for=\"text\" class=\"label\">Tekst</label>\n\t\t    \t\t<div class=\"control\">\n\t\t\t\t\t\t<textarea type=\"text\" id=\"text\" required [(ngModel)]=\"trenutniSadrzaj.text\" name=\"text\" class=\"textarea\" #textareaControl=\"ngModel\"></textarea>\n\t\t\t\t\t\t<span [style.display]=\"textareaControl.valid?'none':'inline-block'\" class=\"red-alert\">\n\t\t\t\t\t\t\tSadržaj mora imati tekst\n\t\t\t\t\t\t</span>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t    \t<div *ngIf=\"trenutniSadrzaj.pic\">\n\t\t\t\t\t<label class=\"label\">Slika (odaberi jednu od opcija)</label>\n\t\t\t\t\t<div class=\"tabs is-fullwidth\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li [className]=\"activeTabTrenutni===1?'is-active':''\">\n\t\t\t\t\t\t\t\t<a (click)=\"toggleActiveTab('trenutni', 1)\">\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\tOdaberi postojeću\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li [className]=\"activeTabTrenutni===2?'is-active':''\">\n\t\t\t\t\t\t\t\t<a (click)=\"toggleActiveTab('trenutni', 2)\">\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\tUploadaj novu\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li [className]=\"activeTabTrenutni===3?'is-active':''\">\n\t\t\t\t\t\t\t\t<a (click)=\"toggleActiveTab('trenutni', 3)\">\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\tUpiši vanjski link\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"imgList\" *ngIf=\"activeTabTrenutni===1\">\n\t\t\t\t\t\t<a *ngFor=\"let img of savedImgs\" (click)=\"selectImgFromSrv('trenutni', img)\">\n\t\t\t\t\t\t\t<figure>\n\t\t\t\t\t\t\t\t<img src=\"uploads/img/{{img}}\">\n\t\t\t\t\t\t\t\t<figcaption>\n\t\t\t\t\t\t\t\t\t{{ img.length<15?img:img.slice(0,12)+'...' }}\n\t\t\t\t\t\t\t\t</figcaption>\n\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"activeTabTrenutni===2\">\n\t\t\t\t\t\t<div class=\"file\">\n\t\t\t\t\t\t\t<label class=\"file-label\">\n\t\t\t\t\t\t\t\t<input (change)=\"imgChangeEvent('trenutni', $event)\" class=\"file-input\" type=\"file\" #imgInputTrenutni name=\"datoteka\" [required]=\"!trenutniSadrzaj.img\">\n\t\t\t\t\t\t\t\t<span class=\"file-cta\">\n\t\t\t\t\t\t\t\t<span class=\"file-icon\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-upload\"></i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span class=\"file-label\">\n\t\t\t\t\t\t\t\t\tUploadaj novu sliku...\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"field\" *ngIf=\"activeTabTrenutni===3\">\n\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t<input type=\"text\" (keyup)=\"setExtLink('trenutni', $event)\" name=\"img\" class=\"input\" placeholder=\"npr. http://via.placeholder.com/350x150\" [required]=\"!trenutniSadrzaj.img\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"is-clearfix\"></div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<span>\n\t\t\t\t\t\tTrenutno odabrana slika: {{ trenutniSadrzaj.img }}\n\t\t\t\t\t</span>\n\t\t\t\t\t<br>\n\t\t\t\t</div>\n\t\t    \t<img *ngIf=\"trenutniSadrzaj.img\" [src]=\"trenutniSadrzaj.img\">\n\t\t    \t<br>\n\t\t    \t<button type=\"submit\" [disabled]=\"!sadrzajForm.form.valid || validateImg('trenutni')\" class=\"button is-info\">\n\t\t    \t\tSpremi promjene\n\t\t    \t</button>\n\t\t    \t<button (click)=\"delSadrzaj(selectSadrzaj.value)\" class=\"button is-danger\">\n\t\t    \t\tIzbriši članak\n\t\t    \t</button>\n\t\t    </div>\n\t\t  </form>\n  \t</div>\n  \t<div class=\"column is-half\">\n  \t\t<h3 class=\"is-size-3\">Dodavanje novog članka</h3>\n  \t\t<form (ngSubmit)=\"addSadrzaj()\" #addSadrzajForm=\"ngForm\">\n  \t\t\t<div class=\"field\">\n  \t\t\t\t<label for=\"clanakType\" class=\"label\">\n  \t\t\t\t\tTip članka\n  \t\t\t\t</label>\n\t  \t\t\t<div class=\"select\">\n\t  \t\t\t\t<select #selectTip (change)=\"setTip()\" required name=\"clanakType\" class=\"select\">\n\t  \t\t\t\t\t<option selected value=\"false\">Bez slike</option>\n\t  \t\t\t\t\t<option value=\"true\">Sa slikom</option>\n\t  \t\t\t\t</select>\n\t  \t\t\t</div>\n  \t\t\t</div>\n  \t\t\t<div class=\"field\">\n  \t\t\t\t<label for=\"noviClanakName\" class=\"label\">\n  \t\t\t\t\tIme\n  \t\t\t\t</label>\n  \t\t\t\t<div class=\"control\">\n  \t\t\t\t\t<input type=\"text\" [(ngModel)]=\"newSadrzaj.name\" required name=\"noviClanakName\" class=\"input\">\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t\t<div class=\"field\">\n\t    \t\t<label for=\"noviClanakText\" class=\"label\">Tekst</label>\n\t    \t\t<div class=\"control\">\n\t    \t\t\t<textarea type=\"text\" [(ngModel)]=\"newSadrzaj.text\" required name=\"noviClanakText\" class=\"textarea\"></textarea>\n\t    \t\t</div>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"clanakSlika\">\n\t\t\t\t<label class=\"label\">Slika (odaberi jednu od opcija)</label>\n\t\t\t\t<div class=\"tabs is-fullwidth\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li [className]=\"activeTab===1?'is-active':''\">\n\t\t\t\t\t\t\t<a (click)=\"toggleActiveTab('novi', 1)\">\n\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\tOdaberi postojeću\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li [className]=\"activeTab===2?'is-active':''\">\n\t\t\t\t\t\t\t<a (click)=\"toggleActiveTab('novi', 2)\">\n\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\tUploadaj novu\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li [className]=\"activeTab===3?'is-active':''\">\n\t\t\t\t\t\t\t<a (click)=\"toggleActiveTab('novi', 3)\">\n\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\tUpiši vanjski link\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<div class=\"imgList\" *ngIf=\"activeTab===1\">\n\t\t\t\t\t<a *ngFor=\"let img of savedImgs\" (click)=\"selectImgFromSrv('novi', img)\">\n\t\t\t\t\t\t<figure>\n\t\t\t\t\t\t\t<img src=\"uploads/img/{{img}}\">\n\t\t\t\t\t\t\t<figcaption>\n\t\t\t\t\t\t\t\t{{ img.length<15?img:img.slice(0,12)+'...' }}\n\t\t\t\t\t\t\t</figcaption>\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"activeTab===2\">\n\t\t\t\t\t<div class=\"file\">\n\t\t\t\t\t\t<label class=\"file-label\">\n\t\t\t\t\t\t\t<input (change)=\"imgChangeEvent('novi', $event)\" class=\"file-input\" type=\"file\" #imgInput name=\"datoteka\" [required]=\"!newSadrzaj.img\">\n\t\t\t\t\t\t\t<span class=\"file-cta\">\n\t\t\t\t\t\t\t<span class=\"file-icon\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-upload\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"file-label\">\n\t\t\t\t\t\t\t\tUploadaj novu sliku...\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field\" *ngIf=\"activeTab===3\">\n\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t<input type=\"text\" (keyup)=\"setExtLink('novi', $event)\" name=\"noviClanakImg\" class=\"input\" placeholder=\"npr. http://via.placeholder.com/350x150\" [required]=\"!newSadrzaj.img\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"is-clearfix\"></div>\n\t\t\t\t<br>\n\t\t\t\t<span>\n\t\t\t\t\tTrenutno odabrana slika: {{ newSadrzaj.img }}\n\t\t\t\t</span>\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<button type=\"submit\" [disabled]=\"!addSadrzajForm.form.valid || validateImg('novi')\" class=\"button is-info\">Dodaj članak</button>\n  \t\t</form>\n  \t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sadrzaj-forma/sadrzaj-forma.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SadrzajFormaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sadrzaj__ = __webpack_require__("../../../../../src/app/sadrzaj.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SadrzajFormaComponent = (function () {
    function SadrzajFormaComponent(_dataService) {
        this._dataService = _dataService;
        this.activeTabTrenutni = 1;
        // Varijable za formu za dodavanje novog članka
        this.clanakSlika = false;
        this.newSadrzaj = {
            pic: false,
            name: '',
            text: ''
        };
        this.activeTab = 1;
    }
    SadrzajFormaComponent.prototype.ngOnInit = function () {
        this.pullSadrzaj();
        this.pullImgs();
    };
    SadrzajFormaComponent.prototype.pullSadrzaj = function () {
        var _this = this;
        this._dataService.getSadrzaj()
            .subscribe(function (res) { return _this.sadrzaj = res; });
    };
    SadrzajFormaComponent.prototype.setNoviClanak = function (index) {
        this.trenutniSadrzaj = this.sadrzaj[index];
    };
    SadrzajFormaComponent.prototype.updSadrzaj = function (clanak) {
        var updClanak = {};
        if (this.form.valid) {
            updClanak = {
                _id: clanak._id,
                pic: clanak.pic,
                name: clanak.name,
                text: clanak.text,
                img: clanak.img ? clanak.img : null
            };
            this._dataService.updateSadrzaj(updClanak)
                .subscribe();
        }
    };
    SadrzajFormaComponent.prototype.delSadrzaj = function (br) {
        var _this = this;
        this._dataService.deleteSadrzaj(this.sadrzaj[br]._id)
            .subscribe(function (data) {
            _this.pullSadrzaj();
            _this.setNoviClanak(0);
        });
    };
    SadrzajFormaComponent.prototype.setTip = function (bool) {
        this.clanakSlika = !this.clanakSlika;
        this.newSadrzaj.pic = this.clanakSlika;
    };
    SadrzajFormaComponent.prototype.selectImgFromSrv = function (tip, img) {
        tip === 'trenutni' ? this.trenutniSadrzaj.img = "uploads/img/" + img : this.newSadrzaj.img = "uploads/img/" + img;
    };
    SadrzajFormaComponent.prototype.imgChangeEvent = function (tip, fileInput) {
        this.imgToUpload = fileInput.target.files[0];
        this.uploadImg(tip);
    };
    SadrzajFormaComponent.prototype.setExtLink = function (tip, imgInput) {
        tip === 'trenutni' ? this.trenutniSadrzaj.img = imgInput.target.value : this.newSadrzaj.img = imgInput.target.value;
    };
    SadrzajFormaComponent.prototype.addSadrzaj = function () {
        var _this = this;
        if (this.addSadrzajForm.valid) {
            this._dataService.addSadrzaj(this.newSadrzaj)
                .subscribe(function (data) {
                _this.pullSadrzaj();
            });
            this.newSadrzaj = new __WEBPACK_IMPORTED_MODULE_2__sadrzaj__["a" /* Sadrzaj */](false, '', '');
        }
    };
    SadrzajFormaComponent.prototype.toggleActiveTab = function (tip, n) {
        tip === 'trenutni' ? this.activeTabTrenutni = n : this.activeTab = n;
    };
    SadrzajFormaComponent.prototype.pullImgs = function () {
        var _this = this;
        this._dataService.getImgs()
            .subscribe(function (res) { return _this.savedImgs = res; });
    };
    SadrzajFormaComponent.prototype.uploadImg = function (tip) {
        var _this = this;
        var formData = new FormData();
        formData.append("uploadImg", this.imgToUpload);
        this._dataService.postImg(formData)
            .subscribe(function (response) { tip === 'novi' ? _this.newSadrzaj.img = "uploads/img/" + response.filename : _this.trenutniSadrzaj.img = "uploads/img/" + response.filename; }, function (error) { console.log(error); });
        this.imgToUpload = null;
        this.pullImgs();
    };
    SadrzajFormaComponent.prototype.validateImg = function (tip) {
        if (tip === 'novi') {
            if (this.newSadrzaj.pic) {
                return this.newSadrzaj.img ? false : true;
            }
            else {
                return false;
            }
        }
        else {
            if (this.trenutniSadrzaj.pic) {
                return this.trenutniSadrzaj.img ? false : true;
            }
            else {
                return false;
            }
        }
    };
    return SadrzajFormaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('sadrzajForm'),
    __metadata("design:type", Object)
], SadrzajFormaComponent.prototype, "form", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('imgInputTrenutni'),
    __metadata("design:type", Object)
], SadrzajFormaComponent.prototype, "imgInputTrenutni", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('addSadrzajForm'),
    __metadata("design:type", Object)
], SadrzajFormaComponent.prototype, "addSadrzajForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('imgInput'),
    __metadata("design:type", Object)
], SadrzajFormaComponent.prototype, "imgInput", void 0);
SadrzajFormaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sadrzaj-forma',
        template: __webpack_require__("../../../../../src/app/sadrzaj-forma/sadrzaj-forma.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sadrzaj-forma/sadrzaj-forma.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], SadrzajFormaComponent);

var _a;
//# sourceMappingURL=sadrzaj-forma.component.js.map

/***/ }),

/***/ "../../../../../src/app/sadrzaj.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sadrzaj; });
var Sadrzaj = (function () {
    function Sadrzaj(pic, name, text, img, moreImg) {
    }
    return Sadrzaj;
}());

//# sourceMappingURL=sadrzaj.js.map

/***/ }),

/***/ "../../../../../src/app/sort-by.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByPipe = (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (array, args) {
        if (array) {
            array.sort(function (a, b) {
                if (a[args] < b[args]) {
                    return -1;
                }
                else if (a[args] > b[args]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return array;
    };
    return SortByPipe;
}());
SortByPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'sortBy'
    })
], SortByPipe);

//# sourceMappingURL=sort-by.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map