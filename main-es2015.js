(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _pages_main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main/main.module */ "./src/app/pages/main/main.module.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/callback/callback.component */ "./src/app/pages/callback/callback.component.ts");









const routes = [
    {
        path: '',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => _pages_main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
    },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'callback', component: _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_6__["CallbackComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'spotify-profile';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/__ivy_ngcc__/fesm2015/ngxs-logger-plugin.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngxs-reset-plugin */ "./node_modules/ngxs-reset-plugin/__ivy_ngcc__/fesm2015/ngxs-reset-plugin.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");



// import { LazyLoadImageModule } from 'ng-lazyload-image';














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_7__["Store"], {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
            }),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsLoggerPluginModule"].forRoot(),
            _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_5__["NgxsDispatchPluginModule"].forRoot(),
            ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsResetPluginModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["ɵj"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsLoggerPluginModule"], _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_5__["NgxsDispatchPluginModule"], ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsResetPluginModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_7__["Store"], {
                        developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
                    }),
                    _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsLoggerPluginModule"].forRoot(),
                    _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_5__["NgxsDispatchPluginModule"].forRoot(),
                    ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsResetPluginModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [],
                exports: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.authService.isAuthenticated() &&
            this.authService.accessTokenChecker()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngxs-reset-plugin */ "./node_modules/ngxs-reset-plugin/__ivy_ngcc__/fesm2015/ngxs-reset-plugin.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");









class AuthService {
    constructor(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
    }
    /**
     * isAuthenticated
     */
    isAuthenticated() {
        const token = localStorage.getItem('access_token');
        if (token == null || token === '' || token == 'undefined')
            return false;
        return true;
    }
    /**
     * authenticateUser
     */
    authenticateUser() {
        const state$ = this.generateRandomString(16);
        localStorage.setItem('state', state$);
        const scope$ = [
            'user-read-private',
            'user-read-email',
            'user-follow-read',
            'user-top-read',
            'playlist-read-private',
            // modify user follower scope
            'user-follow-read',
            'user-follow-modify',
            // modify public and private playlist scope
            'playlist-modify-public',
            'playlist-modify-private',
        ];
        window.location.href =
            'https://accounts.spotify.com/authorize?' +
                query_string__WEBPACK_IMPORTED_MODULE_2__["stringify"]({
                    response_type: 'code',
                    client_id: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].client_id,
                    scope: scope$.toString().replace(/,/g, ' '),
                    redirect_uri: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].redirect_uri,
                    state: state$,
                });
        this.store.dispatch(new ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_3__["StateClear"]());
    }
    /**
     * generateRandomString
     */
    generateRandomString(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    /**
     * authHttpHeaders
     */
    authHttpHeaders() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: `Basic ${btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].client_id + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].client_secret)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    }
    /**
     * generateToken
     */
    generateToken(code) {
        const headers = this.authHttpHeaders();
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('code', code)
            .set('redirect_uri', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].redirect_uri)
            .set('grant_type', 'authorization_code');
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].spotify_api_token}`, params.toString(), { headers });
    }
    /**
     * refreshToken
     */
    refreshToken() {
        const refreshToken = localStorage.getItem('refresh_token');
        const headers = this.authHttpHeaders();
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('grant_type', 'refresh_token')
            .set('refresh_token', refreshToken);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].spotify_api_token}`, params.toString(), { headers });
    }
    /**
     * UsersProfile
     */
    fetchCurrentUser() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].spotify_api}me`);
    }
    /**
     * accessTokenChecker
     */
    accessTokenChecker() {
        const accessToken = localStorage.getItem('access_token');
        return accessToken || accessToken !== '' ? true : false;
    }
    /**
     * callback_times
     */
    setCallbackTimes() {
        let times = localStorage.getItem('callback_times');
        let cons$ = times === null ? 1 : parseInt(times) + 1;
        localStorage.setItem('callback_item', cons$.toString());
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/built-with/built-with.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/built-with/built-with.component.ts ***!
  \***************************************************************/
/*! exports provided: BuiltWithComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuiltWithComponent", function() { return BuiltWithComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





class BuiltWithComponent {
    constructor() {
        this.faSpotify = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSpotify"];
        this.faAngular = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngular"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
    }
    ngOnInit() { }
}
BuiltWithComponent.ɵfac = function BuiltWithComponent_Factory(t) { return new (t || BuiltWithComponent)(); };
BuiltWithComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuiltWithComponent, selectors: [["app-built-with"]], decls: 7, vars: 1, consts: [[1, "built-container"], [1, "social-content"], ["href", "https://github.com/RyaiStudio", "target", "_blank", 1, "fa-github"], [3, "icon"]], template: function BuiltWithComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Spotify Profile \u00A92020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".built-container[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  position: absolute;\n  bottom: 30px;\n  width: 100%;\n}\n.built-container[_ngcontent-%COMP%]   .social-content[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #484848;\n}\n.built-container[_ngcontent-%COMP%]   .social-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.built-container[_ngcontent-%COMP%]   .social-content[_ngcontent-%COMP%]   .fa-github[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  color: inherit;\n}\n.built-container[_ngcontent-%COMP%]   .social-content[_ngcontent-%COMP%]   .fa-github[_ngcontent-%COMP%]:hover {\n  color: #1cb954;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvY29tcG9uZW50cy9idWlsdC13aXRoL2J1aWx0LXdpdGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYnVpbHQtd2l0aC9idWlsdC13aXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjtBRHVCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ3JCSjtBRHVCSTtFQUNFLGlCQUFBO0FDckJOO0FEd0JJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDdEJOO0FEd0JNO0VBQ0UsY0FBQTtBQ3RCUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVpbHQtd2l0aC9idWlsdC13aXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1aWx0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC8vIC5idWlsdC1jb250ZW50IHtcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuXG4gIC8vICAgLm5nLWZhLWljb24ge1xuICAvLyAgICAgZm9udC1zaXplOiAycmVtO1xuICAvLyAgICAgbWFyZ2luOiAwIDEwcHg7XG4gIC8vICAgfVxuXG4gIC8vICAgLmZhLXNwb3RpZnkge1xuICAvLyAgICAgY29sb3I6ICMxY2I5NTQ7XG4gIC8vICAgfVxuICAvLyAgIC5mYS1hbmd1bGFyIHtcbiAgLy8gICAgIGNvbG9yOiAjYzQwMzJmO1xuICAvLyAgIH1cbiAgLy8gICAuZmEtcGx1cyB7XG4gIC8vICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgLy8gICAgIGNvbG9yOiAjNzU3ZDgzO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC5zb2NpYWwtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG5cbiAgICAuZmEtZ2l0aHViIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzFjYjk1NDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5idWlsdC1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5idWlsdC1jb250YWluZXIgLnNvY2lhbC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cbi5idWlsdC1jb250YWluZXIgLnNvY2lhbC1jb250ZW50IHAge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5idWlsdC1jb250YWluZXIgLnNvY2lhbC1jb250ZW50IC5mYS1naXRodWIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5idWlsdC1jb250YWluZXIgLnNvY2lhbC1jb250ZW50IC5mYS1naXRodWI6aG92ZXIge1xuICBjb2xvcjogIzFjYjk1NDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuiltWithComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-built-with',
                templateUrl: './built-with.component.html',
                styleUrls: ['./built-with.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/edit-playlist-btn/edit-playlist-btn.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edit-playlist-btn/edit-playlist-btn.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditPlaylistBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlaylistBtnComponent", function() { return EditPlaylistBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/app/components/edit-playlist-btn/utils.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var _store_playlist_preview_actions_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/playlist-preview/actions.type */ "./src/app/store/playlist-preview/actions.type.ts");
/* harmony import */ var _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/my-playlist/my-playlist.service */ "./src/app/services/my-playlist/my-playlist.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");















function EditPlaylistBtnComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "figure", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const play_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", play_r3.images.length > 0 ? play_r3.images[0].url : "assets/images/spotify.png");
} }
function EditPlaylistBtnComponent_div_18_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", log_r5.label, " ");
} }
function EditPlaylistBtnComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditPlaylistBtnComponent_div_18_div_1_span_1_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.FC.name.hasError(log_r5.error));
} }
function EditPlaylistBtnComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditPlaylistBtnComponent_div_18_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.inputErrors.name);
} }
function EditPlaylistBtnComponent_div_23_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", log_r9.label, " ");
} }
function EditPlaylistBtnComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditPlaylistBtnComponent_div_23_div_1_span_1_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.FC.description.hasError(log_r9.error));
} }
function EditPlaylistBtnComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditPlaylistBtnComponent_div_23_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.inputErrors.description);
} }
class EditPlaylistBtnComponent {
    constructor(FB, http) {
        this.FB = FB;
        this.http = http;
        this.inputErrors = _utils__WEBPACK_IMPORTED_MODULE_4__["errors"];
        this.req$ = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        this.toast = Object(_services_index__WEBPACK_IMPORTED_MODULE_6__["Toast"])();
        this.faPen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPen"];
        this.isActive = false;
        this.playlistPreview = (playlistId) => new _store_playlist_preview_actions_type__WEBPACK_IMPORTED_MODULE_8__["PlaylistPreviewActionsType"].FetchPlaylistPreview(playlistId);
    }
    get FC() {
        return this.editForm.controls;
    }
    ngOnInit() {
        this.editForm = this.FB.group({
            name: [
                this.playlist.name,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)],
            ],
            description: [this.playlist.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(25)]],
            public: [true],
        });
    }
    editPlaylist() {
        this.isActive = true;
    }
    savePlaylist(playlist) {
        this.isSubmited = true;
        if (!this.editForm.valid)
            return;
        const form = this.editForm.value;
        const dataObj = form.description !== '' ? form : { name: form.name, public: form.public };
        this.req$.sink = this.http
            .editPlaylistDetails(playlist.id, dataObj)
            .subscribe((res) => {
            this.toast.fire({
                icon: 'success',
                title: 'Success request edit playlist details',
            });
            this.playlistPreview(playlist.id);
        }, (err) => this.toast.fire({
            icon: 'error',
            title: 'Failed request edit playlist details',
        }));
        this.isActive = false;
    }
    ngOnDestroy() {
        this.req$.unsubscribe();
    }
}
EditPlaylistBtnComponent.ɵfac = function EditPlaylistBtnComponent_Factory(t) { return new (t || EditPlaylistBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_9__["MyPlaylistService"])); };
EditPlaylistBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditPlaylistBtnComponent, selectors: [["app-edit-playlist-btn"]], inputs: { playlist: "playlist" }, decls: 36, vars: 9, consts: [[1, "edit-playlist", 3, "click"], [3, "icon"], ["aria-label", "close", 1, "modal-close", "is-large", 3, "click"], [1, "modal-background", 3, "click"], [1, "modal-content"], [1, "modal-content--wrapper"], [1, "container"], [1, "columns"], ["class", "column is-two-fifths", 4, "ngIf"], [1, "column", 3, "formGroup"], [1, "field"], ["for", "name"], [1, "control", "is-small"], ["id", "name", "type", "text", "formControlName", "name", "autocomplete", "off", 1, "input", "is-small"], ["class", "errors", 4, "ngIf"], ["for", "desc"], ["id", "desc", "rows", "3", "formControlName", "description", 1, "is-small", "textarea"], [1, "control", "dis-inl"], [1, "radio"], ["type", "radio", "name", "public", "formControlName", "public", 3, "value"], [1, "edit-buttons"], [1, "spotify-btn", 3, "click"], [1, "spotify-btn", "cancel-btn", 3, "click"], [1, "column", "is-two-fifths"], [1, "image"], ["alt", "", 3, "lazyLoad"], [1, "errors"], [4, "ngFor", "ngForOf"], ["class", "tag is-danger is-light", 4, "ngIf"], [1, "tag", "is-danger", "is-light"]], template: function EditPlaylistBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPlaylistBtnComponent_Template_a_click_1_listener() { return ctx.editPlaylist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " EDIT DETAILS \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPlaylistBtnComponent_Template_button_click_5_listener() { return ctx.isActive = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPlaylistBtnComponent_Template_div_click_6_listener() { return ctx.isActive = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EditPlaylistBtnComponent_div_11_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "PLAYLIST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EditPlaylistBtnComponent_div_18_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "DESCRIPTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, EditPlaylistBtnComponent_div_23_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Private ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPlaylistBtnComponent_Template_a_click_32_listener() { return ctx.savePlaylist(ctx.playlist); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPlaylistBtnComponent_Template_a_click_34_listener() { return ctx.isActive = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faPen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("modal " + (ctx.isActive ? "is-active" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubmited && ctx.FC.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSubmited && ctx.FC.description.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], styles: [".edit-playlist[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 5px 12px;\n  background: #000;\n  border-radius: 15px;\n  color: #1cb954;\n  margin-bottom: 10px;\n  transition: all 0.3s;\n  display: block;\n  min-width: 125px;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n}\n.edit-playlist[_ngcontent-%COMP%]:hover {\n  background-color: #0e1215;\n}\n.modal-content--wrapper[_ngcontent-%COMP%] {\n  padding: 30px;\n  background: #fff;\n  border-radius: 5px;\n}\n.modal-content--wrapper[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Fredoka One\", cursive;\n  line-height: 2em;\n  letter-spacing: 0.05rem;\n  font-size: 0.8em;\n}\n.modal-content--wrapper[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-size: 0.65em;\n}\n.modal-content--wrapper[_ngcontent-%COMP%]   .edit-buttons[_ngcontent-%COMP%] {\n  float: right;\n}\n.modal-content--wrapper[_ngcontent-%COMP%]   .spotify-btn[_ngcontent-%COMP%] {\n  margin: 3px;\n  padding: 7px 15px;\n}\n.modal-content--wrapper[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  background: #425a5a;\n}\n.modal-content--wrapper[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #222a2e;\n}\n.modal-content--wrapper[_ngcontent-%COMP%]   .dis-inl[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0LXBsYXlsaXN0LWJ0bi9lZGl0LXBsYXlsaXN0LWJ0bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXBsYXlsaXN0LWJ0bi9lZGl0LXBsYXlsaXN0LWJ0bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtBQ0RGO0FER0U7RUFDRSx5QkFBQTtBQ0RKO0FES0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FES0k7RUFDRSxtQ0E5QlM7RUErQlQsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDSE47QURLSTtFQUNFLGlCQUFBO0FDSE47QURPRTtFQUNFLFlBQUE7QUNMSjtBRE9FO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDTEo7QURRRTtFQUNFLG1CQUFBO0FDTko7QURRSTtFQUNFLHlCQUFBO0FDTk47QURVRTtFQUNFLHFCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtcGxheWxpc3QtYnRuL2VkaXQtcGxheWxpc3QtYnRuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtZnJlZG9rYTogXCJGcmVkb2thIE9uZVwiLCBjdXJzaXZlO1xuXG4uZWRpdC1wbGF5bGlzdCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICMxY2I5NTQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLXdpZHRoOiAxMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3R0b206IDA7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTIxNTtcbiAgfVxufVxuXG4ubW9kYWwtY29udGVudC0td3JhcHBlciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAuZmllbGQge1xuICAgIGxhYmVsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mcmVkb2thO1xuICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB9XG4gICAgLnRhZyB7XG4gICAgICBmb250LXNpemU6IDAuNjVlbTtcbiAgICB9XG4gIH1cblxuICAuZWRpdC1idXR0b25zIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLnNwb3RpZnktYnRuIHtcbiAgICBtYXJnaW46IDNweDtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgfVxuXG4gIC5jYW5jZWwtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDI1YTVhO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyYTJlO1xuICAgIH1cbiAgfVxuXG4gIC5kaXMtaW5sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cbiIsIi5lZGl0LXBsYXlsaXN0IHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzFjYjk1NDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDEyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvdHRvbTogMDtcbn1cbi5lZGl0LXBsYXlsaXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTIxNTtcbn1cblxuLm1vZGFsLWNvbnRlbnQtLXdyYXBwZXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubW9kYWwtY29udGVudC0td3JhcHBlciAuZmllbGQgbGFiZWwge1xuICBmb250LWZhbWlseTogXCJGcmVkb2thIE9uZVwiLCBjdXJzaXZlO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5tb2RhbC1jb250ZW50LS13cmFwcGVyIC5maWVsZCAudGFnIHtcbiAgZm9udC1zaXplOiAwLjY1ZW07XG59XG4ubW9kYWwtY29udGVudC0td3JhcHBlciAuZWRpdC1idXR0b25zIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLm1vZGFsLWNvbnRlbnQtLXdyYXBwZXIgLnNwb3RpZnktYnRuIHtcbiAgbWFyZ2luOiAzcHg7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xufVxuLm1vZGFsLWNvbnRlbnQtLXdyYXBwZXIgLmNhbmNlbC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjNDI1YTVhO1xufVxuLm1vZGFsLWNvbnRlbnQtLXdyYXBwZXIgLmNhbmNlbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyYTJlO1xufVxuLm1vZGFsLWNvbnRlbnQtLXdyYXBwZXIgLmRpcy1pbmwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_7__["Dispatch"])()
], EditPlaylistBtnComponent.prototype, "playlistPreview", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditPlaylistBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-playlist-btn',
                templateUrl: './edit-playlist-btn.component.html',
                styleUrls: ['./edit-playlist-btn.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_9__["MyPlaylistService"] }]; }, { playlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], playlistPreview: [] }); })();


/***/ }),

/***/ "./src/app/components/edit-playlist-btn/utils.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/edit-playlist-btn/utils.ts ***!
  \*******************************************************/
/*! exports provided: errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
const errors = {
    name: [
        { error: 'required', label: 'this field is required' },
        { error: 'minlength', label: 'min length must 3 characters' },
    ],
    description: [{ error: 'minlength', label: 'min length must 25 characters' }],
};



/***/ }),

/***/ "./src/app/components/figure-image/figure-image.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/figure-image/figure-image.component.ts ***!
  \*******************************************************************/
/*! exports provided: FigureImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigureImageComponent", function() { return FigureImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");



class FigureImageComponent {
    constructor() { }
    ngOnInit() { }
}
FigureImageComponent.ɵfac = function FigureImageComponent_Factory(t) { return new (t || FigureImageComponent)(); };
FigureImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FigureImageComponent, selectors: [["app-figure-image"]], inputs: { image: "image" }, decls: 1, vars: 2, consts: [["defaultImage", "assets/images/blur.jpg", 3, "lazyLoad", "alt"]], template: function FigureImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", ctx.image.url)("alt", ctx.image.alt);
    } }, directives: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__["ɵa"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nimg.ng-lazyloading[_ngcontent-%COMP%] {\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n}\nimg.ng-lazyloaded[_ngcontent-%COMP%] {\n  -webkit-filter: none;\n          filter: none;\n  transition: -webkit-filter 1.5s;\n  transition: filter 1.5s;\n  transition: filter 1.5s, -webkit-filter 1.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvY29tcG9uZW50cy9maWd1cmUtaW1hZ2UvZmlndXJlLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpZ3VyZS1pbWFnZS9maWd1cmUtaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO1VBQUEsaUJBQUE7QUNDSjtBRENFO0VBQ0Usb0JBQUE7VUFBQSxZQUFBO0VBQ0EsK0JBQUE7RUFBQSx1QkFBQTtFQUFBLDRDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpZ3VyZS1pbWFnZS9maWd1cmUtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICB3aWR0aDogMTAwJTtcblxuICAmLm5nLWxhenlsb2FkaW5nIHtcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgfVxuICAmLm5nLWxhenlsb2FkZWQge1xuICAgIGZpbHRlcjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMS41cztcbiAgfVxufVxuIiwiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pbWcubmctbGF6eWxvYWRpbmcge1xuICBmaWx0ZXI6IGJsdXIoM3B4KTtcbn1cbmltZy5uZy1sYXp5bG9hZGVkIHtcbiAgZmlsdGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMS41cztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FigureImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-figure-image',
                templateUrl: './figure-image.component.html',
                styleUrls: ['./figure-image.component.scss'],
            }]
    }], function () { return []; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/follow-btn-playlist/follow-btn-playlist.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/follow-btn-playlist/follow-btn-playlist.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FollowBtnPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowBtnPlaylistComponent", function() { return FollowBtnPlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngxs-reset-plugin */ "./node_modules/ngxs-reset-plugin/__ivy_ngcc__/fesm2015/ngxs-reset-plugin.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _store_my_playlist_actions_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/my-playlist/actions.type */ "./src/app/store/my-playlist/actions.type.ts");
/* harmony import */ var _store_my_playlist_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/my-playlist/state */ "./src/app/store/my-playlist/state.ts");
/* harmony import */ var _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/follow/follow.service */ "./src/app/services/follow/follow.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");














function FollowBtnPlaylistComponent_ng_container_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FollowBtnPlaylistComponent_ng_container_0_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.unFollowUserPlaylist(ctx_r5.playlist); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " DELETE PLAYLIST \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faTrash);
} }
function FollowBtnPlaylistComponent_ng_container_0_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FollowBtnPlaylistComponent_ng_container_0_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.followUserPlaylist(ctx_r7.playlist); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " RESTORE PLAYLIST \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.faTrashRestoreAlt);
} }
function FollowBtnPlaylistComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FollowBtnPlaylistComponent_ng_container_0_a_1_Template, 3, 1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FollowBtnPlaylistComponent_ng_container_0_a_2_Template, 3, 1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isFollowed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isFollowed);
} }
function FollowBtnPlaylistComponent_ng_template_1_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FollowBtnPlaylistComponent_ng_template_1_a_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.unFollowPlaylist(ctx_r11.playlist); })("mouseover", function FollowBtnPlaylistComponent_ng_template_1_a_0_Template_a_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.ifFollowText = "UNFOLLOW"; })("mouseout", function FollowBtnPlaylistComponent_ng_template_1_a_0_Template_a_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.ifFollowText = "FOLLOWING"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r9.ifFollowText, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function FollowBtnPlaylistComponent_ng_template_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FollowBtnPlaylistComponent_ng_template_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.followPlaylist(ctx_r15.playlist); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " FOLLOW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FollowBtnPlaylistComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FollowBtnPlaylistComponent_ng_template_1_a_0_Template, 1, 1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FollowBtnPlaylistComponent_ng_template_1_a_1_Template, 2, 0, "a", 2);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isFollowed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isFollowed);
} }
class FollowBtnPlaylistComponent {
    constructor(follow, store) {
        this.follow = follow;
        this.store = store;
        this.fetchMyPlaylist = (qry = null) => new _store_my_playlist_actions_type__WEBPACK_IMPORTED_MODULE_7__["MyPlaylistActionsType"].FetchPlaylist(qry);
        this.Toast = Object(_services_index__WEBPACK_IMPORTED_MODULE_5__["Toast"])();
        this.swalFire = _services_index__WEBPACK_IMPORTED_MODULE_5__["SwalFire"];
        // Swal = Swal;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrash"];
        this.faTrashRestoreAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashRestoreAlt"];
        this.putRequest$ = new subsink__WEBPACK_IMPORTED_MODULE_2__["SubSink"]();
        this.ifFollowText = 'FOLLOWING';
    }
    ngOnInit() {
        if (this.playlistCollection && this.currentUser) {
            const filter = this.playlistCollection.filter((res) => res.id === this.playlist.id);
            if (filter.length > 0)
                this.isFollowed = true;
        }
    }
    toastCall(stat, msg) {
        this.Toast.fire({ icon: stat == 1 ? 'success' : 'error', title: msg });
    }
    // swalFire(callback, options) {
    //   Swal.fire({
    //     ...options,
    //     imageWidth: 200,
    //     imageHeight: 200,
    //     confirmButtonColor: '#1db954',
    //     cancelButtonColor: '#8e9396',
    //     showCancelButton: true,
    //   }).then(callback);
    // }
    unFollowPlaylist(playlist) {
        const options = {
            title: playlist.name,
            text: 'Are you sure to unfollow playlist',
            imageUrl: playlist.images.length > 0
                ? playlist.images[0].url
                : 'assets/images/spotify.png',
            confirmButtonText: 'Unfollow Playlist',
        };
        this.swalFire((result) => {
            if (result.value) {
                this.putRequest$.sink = this.follow
                    .unFollowPlaylist(playlist.id)
                    .subscribe((res) => {
                    this.toastCall(1, 'Playlist has been unfollowed');
                    this.isFollowed = false;
                    this.store.dispatch(new ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_4__["StateReset"](_store_my_playlist_state__WEBPACK_IMPORTED_MODULE_8__["MyPlaylistState"]));
                    this.fetchMyPlaylist({ limit: 50 });
                }, (err) => this.toastCall(2, 'unfollow request failed!'));
            }
        }, options);
    }
    followPlaylist(playlist) {
        const options = {
            title: playlist.name,
            input: 'radio',
            inputOptions: { '0': 'Public', '1': 'Private' },
            imageUrl: playlist.images.length > 0
                ? playlist.images[0].url
                : 'assets/images/spotify.png',
            confirmButtonText: 'Follow Playlist',
        };
        this.swalFire((result) => {
            if (result.value) {
                this.putRequest$.sink = this.follow
                    .followPlaylist(playlist.id)
                    .subscribe((res) => {
                    this.toastCall(1, 'Playlist has been followed');
                    this.isFollowed = true;
                    this.store.dispatch(new ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_4__["StateReset"](_store_my_playlist_state__WEBPACK_IMPORTED_MODULE_8__["MyPlaylistState"]));
                    this.fetchMyPlaylist({ limit: 50 });
                }, (err) => this.toastCall(2, 'Follow request failed!'));
            }
        }, options);
    }
    unFollowUserPlaylist(playlist) {
        const options = {
            title: playlist.name,
            text: 'Are you sure!! you lost all tracks from this playlist once you leave this page.',
            imageUrl: playlist.images.length > 0
                ? playlist.images[0].url
                : 'assets/images/spotify.png',
            confirmButtonText: 'Delete Playlist',
        };
        this.swalFire((result) => {
            if (result.value && this.isMyPlaylist) {
                this.putRequest$.sink = this.follow
                    .unFollowUserPlaylist(playlist.owner.id, playlist.id)
                    .subscribe((res) => {
                    this.toastCall(1, 'Playlist has been delete');
                    this.isFollowed = false;
                    this.store.dispatch(new ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_4__["StateReset"](_store_my_playlist_state__WEBPACK_IMPORTED_MODULE_8__["MyPlaylistState"]));
                    this.fetchMyPlaylist({ limit: 50 });
                }, (err) => this.toastCall(2, 'Unfollow request failed!'));
            }
        }, options);
    }
    followUserPlaylist(playlist) {
        const options = {
            title: playlist.name,
            input: 'radio',
            inputOptions: { '0': 'Public', '1': 'Private' },
            imageUrl: playlist.images.length > 0
                ? playlist.images[0].url
                : 'assets/images/spotify.png',
            confirmButtonText: 'Restore PLaylist',
        };
        this.swalFire((result) => {
            if (result.value && this.isMyPlaylist) {
                const isPublic = result.value == '0' ? true : false;
                this.putRequest$.sink = this.follow
                    .followUserPlaylist(playlist.owner.id, playlist.id, isPublic)
                    .subscribe((res) => {
                    this.toastCall(1, 'Playlist has been Restored');
                    this.isFollowed = true;
                    this.store.dispatch(new ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_4__["StateReset"](_store_my_playlist_state__WEBPACK_IMPORTED_MODULE_8__["MyPlaylistState"]));
                    this.fetchMyPlaylist({ limit: 50 });
                }, (err) => this.toastCall(2, 'Unfollow request failed!'));
            }
        }, options);
    }
}
FollowBtnPlaylistComponent.ɵfac = function FollowBtnPlaylistComponent_Factory(t) { return new (t || FollowBtnPlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_follow_follow_service__WEBPACK_IMPORTED_MODULE_9__["FollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_10__["Store"])); };
FollowBtnPlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FollowBtnPlaylistComponent, selectors: [["app-follow-btn-playlist"]], inputs: { playlist: "playlist", playlistCollection: "playlistCollection", currentUser: "currentUser", isMyPlaylist: "isMyPlaylist" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["class", "btn-unfollow", 3, "click", 4, "ngIf"], [1, "btn-unfollow", 3, "click"], [3, "icon"], ["class", "btn-unfollow", 3, "innerHTML", "click", "mouseover", "mouseout", 4, "ngIf"], [1, "btn-unfollow", 3, "innerHTML", "click", "mouseover", "mouseout"]], template: function FollowBtnPlaylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FollowBtnPlaylistComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FollowBtnPlaylistComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMyPlaylist)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"]], styles: [".btn-unfollow[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 0.7rem;\n  padding: 5px 12px;\n  background: #0e1215;\n  border-radius: 15px;\n  color: #1cb954;\n  margin-bottom: 10px;\n  transition: all 0.3s;\n  display: block;\n  min-width: 110px;\n  text-align: center;\n}\n.btn-unfollow[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvY29tcG9uZW50cy9mb2xsb3ctYnRuLXBsYXlsaXN0L2ZvbGxvdy1idG4tcGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9sbG93LWJ0bi1wbGF5bGlzdC9mb2xsb3ctYnRuLXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FSYztFQVNkLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FESUU7RUFDRSxzQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb2xsb3ctYnRuLXBsYXlsaXN0L2ZvbGxvdy1idG4tcGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc3BvdGlmeS1jb2xvcjogIzFjYjk1NDtcblxuLmJ0bi11bmZvbGxvdyB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMGUxMjE1O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogJHNwb3RpZnktY29sb3I7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBtaW4td2lkdGg6IDExMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgfVxufVxuIiwiLmJ0bi11bmZvbGxvdyB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMGUxMjE1O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzFjYjk1NDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDExMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuLXVuZm9sbG93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn0iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], FollowBtnPlaylistComponent.prototype, "fetchMyPlaylist", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FollowBtnPlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-follow-btn-playlist',
                templateUrl: './follow-btn-playlist.component.html',
                styleUrls: ['./follow-btn-playlist.component.scss'],
            }]
    }], function () { return [{ type: _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_9__["FollowService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["Store"] }]; }, { fetchMyPlaylist: [], playlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], playlistCollection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isMyPlaylist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/follow-btn/follow-btn.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/follow-btn/follow-btn.component.ts ***!
  \***************************************************************/
/*! exports provided: FollowBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowBtnComponent", function() { return FollowBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_follow_actions_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/follow/actions.type */ "./src/app/store/follow/actions.type.ts");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/follow/follow.service */ "./src/app/services/follow/follow.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





// import Swal from 'sweetalert2';




function FollowBtnComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function FollowBtnComponent_a_1_Template_a_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.$unfollowHover = true; })("mouseout", function FollowBtnComponent_a_1_Template_a_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.$unfollowHover = false; })("click", function FollowBtnComponent_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.unFollowArtist(ctx_r5.artist); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.$unfollowHover ? "UNFOLLOWED" : "FOLLOWING", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function FollowBtnComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FollowBtnComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.followArtist(ctx_r6.artist); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " FOLLOW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FollowBtnComponent {
    constructor(follow) {
        this.follow = follow;
        this.fetchFollowArtists = () => new _store_follow_actions_type__WEBPACK_IMPORTED_MODULE_2__["FollowActionsType"].FetchFollowArtists();
        this.Toast = Object(_services_index__WEBPACK_IMPORTED_MODULE_5__["Toast"])();
        this.swalFire = _services_index__WEBPACK_IMPORTED_MODULE_5__["SwalFire"];
        this.putRequest$ = new subsink__WEBPACK_IMPORTED_MODULE_4__["SubSink"]();
        this.$isFollowed = false;
        this.$unfollowHover = false;
    }
    ngOnDestroy() {
        this.putRequest$.unsubscribe();
    }
    ngOnInit() {
        const fil = this.following.filter((follow) => follow.id === this.artist.id);
        this.$isFollowed = fil.length > 0 ? true : false;
        // console.log('this.$isFollowed', this.$isFollowed);
    }
    toastCall(stat, msg) {
        this.Toast.fire({ icon: stat == 1 ? 'success' : 'error', title: msg });
    }
    // swalFire(callback, options) {
    //   Swal.fire({
    //     ...options,
    //     imageWidth: 200,
    //     imageHeight: 200,
    //     confirmButtonColor: '#1db954',
    //     cancelButtonColor: '#8e9396',
    //     showCancelButton: true,
    //   }).then(callback);
    // }
    followArtist(artist) {
        const options = {
            title: artist.name,
            imageUrl: artist.images[0].url,
            confirmButtonText: 'Confirm Follow',
        };
        this.swalFire((result) => {
            if (result.value) {
                this.putRequest$.sink = this.follow.followArtist(artist.id).subscribe((res) => {
                    this.toastCall(1, 'Artist has been followed');
                    this.fetchFollowArtists();
                    this.$isFollowed = true;
                }, (err) => this.toastCall(2, 'Follow request failed!'));
            }
        }, options);
    }
    unFollowArtist(artist) {
        const options = {
            title: artist.name,
            text: 'Are you sure you want to continue?',
            imageUrl: artist.images[0].url,
            confirmButtonText: 'Unfollow Artist',
        };
        this.swalFire((result) => {
            if (result.value) {
                this.putRequest$.sink = this.follow.unFollowArtist(artist.id).subscribe((res) => {
                    this.toastCall(1, 'Artist has been unfollowed');
                    this.fetchFollowArtists();
                    this.$isFollowed = false;
                }, (err) => this.toastCall(2, 'Follow request failed!'));
            }
        }, options);
    }
}
FollowBtnComponent.ɵfac = function FollowBtnComponent_Factory(t) { return new (t || FollowBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_follow_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"])); };
FollowBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FollowBtnComponent, selectors: [["app-follow-btn"]], inputs: { artist: "artist", following: "following" }, decls: 3, vars: 2, consts: [["class", "spotify-btn", 3, "innerHTML", "mouseover", "mouseout", "click", 4, "ngIf"], ["class", "spotify-btn", 3, "click", 4, "ngIf"], [1, "spotify-btn", 3, "innerHTML", "mouseover", "mouseout", "click"], [1, "spotify-btn", 3, "click"]], template: function FollowBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FollowBtnComponent_a_1_Template, 1, 1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FollowBtnComponent_a_2_Template, 2, 0, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.$isFollowed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.$isFollowed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".spotify-btn[_ngcontent-%COMP%] {\n  min-width: 140px;\n  text-align: center;\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvY29tcG9uZW50cy9mb2xsb3ctYnRuL2ZvbGxvdy1idG4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9sbG93LWJ0bi9mb2xsb3ctYnRuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvbGxvdy1idG4vZm9sbG93LWJ0bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcG90aWZ5LWJ0biB7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4iLCIuc3BvdGlmeS1idG4ge1xuICBtaW4td2lkdGg6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufSJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], FollowBtnComponent.prototype, "fetchFollowArtists", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FollowBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-follow-btn',
                templateUrl: './follow-btn.component.html',
                styleUrls: ['./follow-btn.component.scss'],
            }]
    }], function () { return [{ type: _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"] }]; }, { fetchFollowArtists: [], artist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], following: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/grid-playlist/grid-playlist.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/grid-playlist/grid-playlist.component.ts ***!
  \*********************************************************************/
/*! exports provided: GridPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPlaylistComponent", function() { return GridPlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");







function GridPlaylistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridPlaylistComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const artist_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.previewArtist(artist_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "followers : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "popularity : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artist_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", artist_r1.images[0].url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](artist_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.withComma(artist_r1.followers.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", artist_r1.popularity, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faEye);
} }
class GridPlaylistComponent {
    constructor(route) {
        this.route = route;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEye"];
        this.defaultImage = 'https://www.placecage.com/1000/1000';
        this.image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
    }
    ngOnInit() { }
    withComma(n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    previewArtist(artist) {
        this.route.navigate(['artist', artist.id]);
    }
}
GridPlaylistComponent.ɵfac = function GridPlaylistComponent_Factory(t) { return new (t || GridPlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GridPlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridPlaylistComponent, selectors: [["app-grid-playlist"]], inputs: { artists: "artists" }, decls: 2, vars: 1, consts: [[1, "playlist-collection"], ["class", "playlist-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "playlist-item", 3, "click"], [1, "image"], ["defaultImage", "assets/images/blur.jpg", "alt", "", 3, "lazyLoad"], [1, "playlist-item--content"], [1, "followers"], [1, "popularity"], [1, "floater"], [3, "icon"]], template: function GridPlaylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridPlaylistComponent_div_1_Template, 18, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.artists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC1wbGF5bGlzdC9ncmlkLXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridPlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-playlist',
                templateUrl: './grid-playlist.component.html',
                styleUrls: ['./grid-playlist.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { artists: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/playlist-item/playlist-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/playlist-item/playlist-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: PlaylistItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistItemComponent", function() { return PlaylistItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngxs-reset-plugin */ "./node_modules/ngxs-reset-plugin/__ivy_ngcc__/fesm2015/ngxs-reset-plugin.js");
/* harmony import */ var _store_playlist_preview_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/playlist-preview/state */ "./src/app/store/playlist-preview/state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");










function PlaylistItemComponent_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const $total_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", $total_r3 < 10 ? "0" + $total_r3 : $total_r3, " ");
} }
function PlaylistItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistItemComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const playlist_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.playlistPreview(playlist_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlaylistItemComponent_div_1_span_8_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " TRACKS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", playlist_r1.images.length > 0 ? playlist_r1.images[0].url : "assets/images/spotify.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", playlist_r1.tracks.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faEye);
} }
class PlaylistItemComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEye"];
    }
    ngOnInit() {
        console.log('store', this.store.snapshot());
    }
    playlistPreview(artist) {
        // localStorage.removeItem('selected-my-playlist');
        // localStorage.setItem(
        //   'selected-my-playlist',
        //   JSON.stringify({
        //     artistId: artist.id,
        //     owner: artist.owner,
        //   })
        // );
        this.store.dispatch(new ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_2__["StateReset"](_store_playlist_preview_state__WEBPACK_IMPORTED_MODULE_3__["PlaylistPreviewState"]));
        this.route.navigate(['my-playlist', artist.id]);
    }
}
PlaylistItemComponent.ɵfac = function PlaylistItemComponent_Factory(t) { return new (t || PlaylistItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
PlaylistItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistItemComponent, selectors: [["app-playlist-item"]], inputs: { playlists: "playlists" }, decls: 2, vars: 1, consts: [[1, "playlist-collection"], ["class", "playlist-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "playlist-item", 3, "click"], [1, "image"], ["defaultImage", "assets/images/blur.jpg", "alt", "", 3, "lazyLoad"], [1, "playlist-item--content"], [1, "followers"], [4, "ngIf"], [1, "floater"], [3, "icon"]], template: function PlaylistItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlaylistItemComponent_div_1_Template, 12, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playlists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWxpc3QtaXRlbS9wbGF5bGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlist-item',
                templateUrl: './playlist-item.component.html',
                styleUrls: ['./playlist-item.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, { playlists: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/playlist-track/playlist-track.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/playlist-track/playlist-track.component.ts ***!
  \***********************************************************************/
/*! exports provided: PlaylistTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistTrackComponent", function() { return PlaylistTrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngxs-reset-plugin */ "./node_modules/ngxs-reset-plugin/__ivy_ngcc__/fesm2015/ngxs-reset-plugin.js");
/* harmony import */ var _store_playlist_preview_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/playlist-preview/state */ "./src/app/store/playlist-preview/state.ts");
/* harmony import */ var _store_playlist_preview_actions_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/playlist-preview/actions.type */ "./src/app/store/playlist-preview/actions.type.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/my-playlist/my-playlist.service */ "./src/app/services/my-playlist/my-playlist.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

















function PlaylistTrackComponent_div_1_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const images$_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", images$_r7[images$_r7.length - 1].url);
} }
function PlaylistTrackComponent_div_1_div_1_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistTrackComponent_div_1_div_1_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.removeTrackItem(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r5.faTimes);
} }
function PlaylistTrackComponent_div_1_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artist_r11 = ctx.$implicit;
    const isLast_r12 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", artist_r11.name, "", isLast_r12 ? "" : ", ", " ");
} }
function PlaylistTrackComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "figure", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PlaylistTrackComponent_div_1_div_1_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PlaylistTrackComponent_div_1_div_1_a_6_Template, 3, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistTrackComponent_div_1_div_1_Template_h4_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r3 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.trackPreview(item_r3.track); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PlaylistTrackComponent_div_1_div_1_span_10_Template, 2, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r3.track.external_urls.spotify, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3.track.album.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isMyPlaylist);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.track.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r3.track.artists);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.track.album.name);
} }
function PlaylistTrackComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlaylistTrackComponent_div_1_div_1_Template, 14, 7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.tracks.items, ctx_r0.config));
} }
function PlaylistTrackComponent_div_2_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const images$_r19 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", images$_r19[images$_r19.length - 1].url);
} }
function PlaylistTrackComponent_div_2_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artist_r20 = ctx.$implicit;
    const isLast_r21 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", artist_r20.name, "", isLast_r21 ? "" : ", ", " ");
} }
function PlaylistTrackComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "figure", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PlaylistTrackComponent_div_2_div_1_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistTrackComponent_div_2_div_1_Template_h4_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const track_r16 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.trackPreview(track_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PlaylistTrackComponent_div_2_div_1_span_9_Template, 2, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", track_r16.external_urls.spotify, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r15.faPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", track_r16.album.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](track_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", track_r16.artists);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](track_r16.album.name);
} }
function PlaylistTrackComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlaylistTrackComponent_div_2_div_1_Template, 13, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.tracks);
} }
class PlaylistTrackComponent {
    constructor(route, http, store) {
        this.route = route;
        this.http = http;
        this.store = store;
        this.default = false;
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlay"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"];
        this.toast = Object(_services_index__WEBPACK_IMPORTED_MODULE_4__["Toast"])();
        this.swalFire = _services_index__WEBPACK_IMPORTED_MODULE_4__["SwalFire"];
        this.req$ = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        this.playlistPreview = (playlistId) => new _store_playlist_preview_actions_type__WEBPACK_IMPORTED_MODULE_8__["PlaylistPreviewActionsType"].FetchPlaylistPreview(playlistId);
    }
    ngOnInit() { }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    trackPreview(track) {
        localStorage.removeItem('selected-audio-feature');
        localStorage.setItem('selected-audio-feature', JSON.stringify({
            image: track.album.images[0].url,
            name: track.name,
            artists: track.artists,
            description: track.album.name,
            popularity: track.popularity,
            id: track.id,
            external_urls: track.external_urls,
        }));
        this.route.navigate(['audio-feature', track.id]);
    }
    removeTrackItem(item) {
        const img = item.track.album.images;
        const options = {
            title: item.track.name,
            text: 'Are you sure to remove this item from this playlist',
            imageUrl: img.length > 0 ? img[0].url : 'assets/images/spotify.png',
            confirmButtonText: 'Remove Track',
        };
        this.swalFire((result) => {
            if (result.value) {
                this.req$.sink = this.http
                    .removePlaylistItem(this.playlistId, {
                    tracks: [{ uri: item.track.uri }],
                })
                    .subscribe((res) => {
                    this.toast.fire({
                        icon: 'success',
                        title: 'Item has been remove from this playlist',
                    });
                    this.store.dispatch(new ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_6__["StateReset"](_store_playlist_preview_state__WEBPACK_IMPORTED_MODULE_7__["PlaylistPreviewState"]));
                    this.playlistPreview(this.playlistId);
                }, (err) => {
                    this.toast.fire({
                        icon: 'error',
                        title: 'Failed request remove item ',
                    });
                    console.log(err);
                });
            }
        }, options);
    }
    ngOnDestroy() {
        this.req$.unsubscribe();
    }
}
PlaylistTrackComponent.ɵfac = function PlaylistTrackComponent_Factory(t) { return new (t || PlaylistTrackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_10__["MyPlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Store"])); };
PlaylistTrackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlaylistTrackComponent, selectors: [["app-playlist-track"]], inputs: { tracks: "tracks", config: "config", default: "default", isMyPlaylist: "isMyPlaylist", playlistId: "playlistId" }, decls: 3, vars: 2, consts: [["class", "playlist-tracks", 4, "ngIf"], [1, "playlist-tracks"], ["class", "playlist-tracks--item", 4, "ngFor", "ngForOf"], [1, "playlist-tracks--item"], [1, "image"], ["target", "_blank", 3, "href"], [3, "icon"], ["alt", "", 3, "lazyLoad", 4, "ngIf"], [1, "track-item--content"], ["class", "delete-btn", 3, "click", 4, "ngIf"], [3, "click"], [4, "ngFor", "ngForOf"], ["alt", "", 3, "lazyLoad"], [1, "delete-btn", 3, "click"]], template: function PlaylistTrackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlaylistTrackComponent_div_1_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PlaylistTrackComponent_div_2_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tracks && ctx.config && !ctx.default);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tracks && ctx.default);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaIconComponent"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__["ɵa"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginatePipe"]], styles: [".playlist-tracks--item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  margin-bottom: 10px;\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   figure.image[_ngcontent-%COMP%] {\n  flex-basis: 45px;\n  height: 45px;\n  background: #222;\n  margin-right: 15px;\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   figure.image[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   figure.image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  transition: opacity 0.5s;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%);\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   figure.image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  top: 50%;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   .track-item--content[_ngcontent-%COMP%] {\n  flex-basis: calc(100% - 60px);\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   .track-item--content[_ngcontent-%COMP%]    > a.delete-btn[_ngcontent-%COMP%] {\n  float: right;\n  color: #7a8188;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  border-radius: 15px;\n  transition: all 0.3s;\n  padding: 3px 10px;\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   .track-item--content[_ngcontent-%COMP%]    > a.delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   .track-item--content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1rem;\n  color: #fff;\n  margin-bottom: 5px;\n  font-weight: 600;\n  display: inline-block;\n  cursor: pointer;\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   .track-item--content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   .track-item--content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #7a8188;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdC10cmFjay9wbGF5bGlzdC10cmFjay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdC10cmFjay9wbGF5bGlzdC10cmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRkY7QURJRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREdJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNETjtBRElJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0VBQUE7QUNGTjtBRFFNO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDTlI7QURXRTtFQUNFLDZCQUFBO0FDVEo7QURXSTtFQUNFLFlBQUE7RUFDQSxjQTlDTztFQStDUCxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDVE47QURXTTtFQUNFLHNCQUFBO0FDVFI7QURhSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ1hOO0FEYU07RUFDRSwwQkFBQTtBQ1hSO0FEZUk7RUFDRSxnQkFBQTtFQUNBLGNBMUVPO0VBMkVQLGtCQUFBO0FDYk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYXlsaXN0LXRyYWNrL3BsYXlsaXN0LXRyYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcmstY29sb3I6ICM3YTgxODg7XG4kcHJpbWFyeS1jb2xvcjogI2ZmZjtcblxuLnBsYXlsaXN0LXRyYWNrcy0taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgZmlndXJlLmltYWdlIHtcbiAgICBmbGV4LWJhc2lzOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAmOmhvdmVyIGEge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxODBkZWcsXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgMCUsXG4gICAgICAgIHJnYigwLCAwLCAwKSAxMDAlXG4gICAgICApO1xuXG4gICAgICBmYS1pY29uIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudHJhY2staXRlbS0tY29udGVudCB7XG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC0gNjBweCk7XG5cbiAgICA+IGEuZGVsZXRlLWJ0biB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBjb2xvcjogJGRhcmstY29sb3I7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBwYWRkaW5nOiAzcHggMTBweDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaDQge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIGNvbG9yOiAkZGFyay1jb2xvcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIi5wbGF5bGlzdC10cmFja3MtLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBsYXlsaXN0LXRyYWNrcy0taXRlbSBmaWd1cmUuaW1hZ2Uge1xuICBmbGV4LWJhc2lzOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5wbGF5bGlzdC10cmFja3MtLWl0ZW0gZmlndXJlLmltYWdlOmhvdmVyIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMTtcbn1cbi5wbGF5bGlzdC10cmFja3MtLWl0ZW0gZmlndXJlLmltYWdlIGEge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMCUsIGJsYWNrIDEwMCUpO1xufVxuLnBsYXlsaXN0LXRyYWNrcy0taXRlbSBmaWd1cmUuaW1hZ2UgYSBmYS1pY29uIHtcbiAgdG9wOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5wbGF5bGlzdC10cmFja3MtLWl0ZW0gLnRyYWNrLWl0ZW0tLWNvbnRlbnQge1xuICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSA2MHB4KTtcbn1cbi5wbGF5bGlzdC10cmFja3MtLWl0ZW0gLnRyYWNrLWl0ZW0tLWNvbnRlbnQgPiBhLmRlbGV0ZS1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjN2E4MTg4O1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xufVxuLnBsYXlsaXN0LXRyYWNrcy0taXRlbSAudHJhY2staXRlbS0tY29udGVudCA+IGEuZGVsZXRlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4ucGxheWxpc3QtdHJhY2tzLS1pdGVtIC50cmFjay1pdGVtLS1jb250ZW50IGg0IHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wbGF5bGlzdC10cmFja3MtLWl0ZW0gLnRyYWNrLWl0ZW0tLWNvbnRlbnQgaDQ6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5wbGF5bGlzdC10cmFja3MtLWl0ZW0gLnRyYWNrLWl0ZW0tLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjN2E4MTg4O1xuICBsaW5lLWhlaWdodDogMS4yZW07XG59Il19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_2__["Dispatch"])()
], PlaylistTrackComponent.prototype, "playlistPreview", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlaylistTrackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-playlist-track',
                templateUrl: './playlist-track.component.html',
                styleUrls: ['./playlist-track.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_10__["MyPlaylistService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Store"] }]; }, { tracks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], default: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isMyPlaylist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], playlistId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], playlistPreview: [] }); })();


/***/ }),

/***/ "./src/app/components/recommendation-form/recommendation-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/recommendation-form/recommendation-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RecommendationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationFormComponent", function() { return RecommendationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngxs-reset-plugin */ "./node_modules/ngxs-reset-plugin/__ivy_ngcc__/fesm2015/ngxs-reset-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/app/components/recommendation-form/utils.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _store_my_playlist_actions_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/my-playlist/actions.type */ "./src/app/store/my-playlist/actions.type.ts");
/* harmony import */ var _store_my_playlist_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/my-playlist/selectors */ "./src/app/store/my-playlist/selectors.ts");
/* harmony import */ var _store_my_playlist_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/my-playlist/state */ "./src/app/store/my-playlist/state.ts");
/* harmony import */ var _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/my-playlist/my-playlist.service */ "./src/app/services/my-playlist/my-playlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


















function RecommendationFormComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendationFormComponent_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.showCreateForm(ctx_r3.currentUser, ctx_r3.recommendation); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "SAVE TO SPOTIFY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RecommendationFormComponent_div_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendationFormComponent_div_2_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.openPlaylist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "OPEN PLAYLIST ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RecommendationFormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendationFormComponent_div_2_a_1_Template, 2, 0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isRec_r5 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isRec_r5 && ctx_r1.isRecomExist);
} }
function RecommendationFormComponent_div_3_input_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 26);
} }
function RecommendationFormComponent_div_3_div_13_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", log_r15.label, " ");
} }
function RecommendationFormComponent_div_3_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendationFormComponent_div_3_div_13_div_1_span_1_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.FC.name.hasError(log_r15.error));
} }
function RecommendationFormComponent_div_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendationFormComponent_div_3_div_13_div_1_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.inputErrors.name);
} }
function RecommendationFormComponent_div_3_textarea_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 31);
} }
function RecommendationFormComponent_div_3_div_20_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", log_r19.label, " ");
} }
function RecommendationFormComponent_div_3_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendationFormComponent_div_3_div_20_div_1_span_1_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.FC.description.hasError(log_r19.error));
} }
function RecommendationFormComponent_div_3_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendationFormComponent_div_3_div_20_div_1_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.inputErrors.description);
} }
function RecommendationFormComponent_div_3_a_30_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendationFormComponent_div_3_a_30_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.saveToSpotify(ctx_r22.currentUser.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " save to spotify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RecommendationFormComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendationFormComponent_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.isModalActive = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create a playlist from recommendation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Playlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "(required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RecommendationFormComponent_div_3_input_12_Template, 1, 0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RecommendationFormComponent_div_3_div_13_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RecommendationFormComponent_div_3_textarea_19_Template, 1, 0, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RecommendationFormComponent_div_3_div_20_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Public ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Private ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RecommendationFormComponent_div_3_a_30_Template, 2, 0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendationFormComponent_div_3_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r26.isModalActive = false; return ctx_r26.isSubmited = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendationFormComponent_div_3_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.isModalActive = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]((ctx_r2.isModalActive ? "is-active" : "") + " modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.recomForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.playlist);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isSubmited && ctx_r2.FC.name.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.playlist);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isSubmited && ctx_r2.FC.description.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.currentUser);
} }
class RecommendationFormComponent {
    constructor(FB, http, store, route) {
        this.FB = FB;
        this.http = http;
        this.store = store;
        this.route = route;
        this.inputErrors = _utils__WEBPACK_IMPORTED_MODULE_6__["errors"];
        this.req$ = new subsink__WEBPACK_IMPORTED_MODULE_7__["SubSink"]();
        this.reqPlaylist$ = new subsink__WEBPACK_IMPORTED_MODULE_7__["SubSink"]();
        this.toast = Object(_services_index__WEBPACK_IMPORTED_MODULE_8__["Toast"])();
        this.isRecomCreated = JSON.parse(localStorage.getItem('recommendation'));
        this.fetchMyPlaylist = (qry = null) => new _store_my_playlist_actions_type__WEBPACK_IMPORTED_MODULE_9__["MyPlaylistActionsType"].FetchPlaylist(qry);
    }
    get FC() {
        return this.recomForm.controls;
    }
    ngOnInit() {
        this.recomForm = this.FB.group({
            name: [
                `Recommended Tracks Based On  ${this.playlist.name}`,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)],
            ],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(25)]],
            public: [true],
        });
        this.reqPlaylist$.sink = this.playlist$.subscribe((play) => {
            if (play && this.isRecomCreated) {
                const collect = play.items.filter((item) => item.id === this.isRecomCreated.playlistId);
                if (collect.length > 0) {
                    this.isRecomExist = true;
                }
            }
        });
    }
    showCreateForm(user, recom) {
        if (user && recom) {
            this.uris = recom.tracks.map((track) => track.uri).toString();
            this.isModalActive = true;
        }
    }
    saveToSpotify(userId) {
        this.isSubmited = true;
        if (!this.recomForm.valid)
            return;
        const form = this.recomForm.value;
        const formObj = form.description !== '' ? form : { name: form.name, public: form.public };
        this.req$.sink = this.http.createPlaylist(userId, formObj).subscribe((res) => {
            this.pushCollection(res);
            this.setLocalStorage();
        }, (err) => {
            this.toast.fire({
                icon: 'error',
                title: 'Failed request save recommendation',
            });
            console.log(err);
        });
    }
    setLocalStorage() {
        localStorage.removeItem('recommendation');
        this.store.dispatch(new ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_4__["StateReset"](_store_my_playlist_state__WEBPACK_IMPORTED_MODULE_11__["MyPlaylistState"]));
        this.isModalActive = false;
        this.isSubmited = false;
        localStorage.setItem('recommendation', JSON.stringify({ playlistId: this.playlist.id, isSubmitted: true }));
        setTimeout(() => {
            this.isRecomExist = true;
            this.isRecomCreated = JSON.parse(localStorage.getItem('recommendation'));
        }, 1000);
    }
    pushCollection(res) {
        const recomString = this.recommendation.tracks
            .map((track) => track.uri)
            .toString();
        if (res) {
            this.http.pushTracksToPlaylist(res.id, recomString).subscribe((res) => {
                this.fetchMyPlaylist({ limit: 50 });
                this.toast.fire({
                    icon: 'success',
                    title: 'Playlist has been save to collections',
                });
            }, (err) => {
                this.toast.fire({
                    icon: 'error',
                    title: 'Failed push request recommendation items',
                });
                console.log(err);
            });
        }
    }
    openPlaylist() {
        this.route.navigate(['my-playlist']);
    }
    ngOnDestroy() {
        this.req$.unsubscribe();
        this.reqPlaylist$.unsubscribe();
    }
}
RecommendationFormComponent.ɵfac = function RecommendationFormComponent_Factory(t) { return new (t || RecommendationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_12__["MyPlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"])); };
RecommendationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecommendationFormComponent, selectors: [["app-recommendation-form"]], inputs: { playlist: "playlist", currentUser: "currentUser", recommendation: "recommendation" }, decls: 4, vars: 3, consts: [["class", "spotify-btn recommendation-btn", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "class", 4, "ngIf"], [1, "spotify-btn", "recommendation-btn", 3, "click"], ["class", "spotify-btn recommendation-btn is-open", 3, "click", 4, "ngIf"], [1, "spotify-btn", "recommendation-btn", "is-open", 3, "click"], [1, "modal-background", 3, "click"], [1, "modal-content"], [1, "modal-container", 3, "formGroup"], [1, "field"], ["for", "name"], [1, "required"], [1, "control"], ["class", "input is-small name-input", "type", "text", "id", "name", "formControlName", "name", "autocomplete", "off", 4, "ngIf"], ["class", "errors", 4, "ngIf"], ["for", "desc"], [1, "optional"], ["id", "desc", "class", "textarea is-small desc-input", "formControlName", "description", "rows", "2", 4, "ngIf"], [1, "buttom-inputs"], [1, "control", "dis-inl"], [1, "radio"], ["type", "radio", "name", "public", "formControlName", "public", 3, "value"], [1, "buttons"], ["class", "spotify-btn", 3, "click", 4, "ngIf"], [1, "spotify-btn", "cancel-btn", 3, "click"], ["aria-label", "close", 1, "modal-close", "is-large", 3, "click"], ["type", "text", "id", "name", "formControlName", "name", "autocomplete", "off", 1, "input", "is-small", "name-input"], [1, "errors"], [4, "ngFor", "ngForOf"], ["class", "tag is-danger is-light", 4, "ngIf"], [1, "tag", "is-danger", "is-light"], ["id", "desc", "formControlName", "description", "rows", "2", 1, "textarea", "is-small", "desc-input"], [1, "spotify-btn", 3, "click"]], template: function RecommendationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendationFormComponent_a_1_Template, 2, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecommendationFormComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RecommendationFormComponent_div_3_Template, 34, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recommendation && !ctx.isRecomCreated || ctx.isRecomCreated.playlistId !== ctx.playlist.id && !ctx.isRecomExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRecomCreated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playlist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], styles: [".recommendation-btn[_ngcontent-%COMP%] {\n  float: right;\n  margin: 0;\n}\n.recommendation-btn.is-open[_ngcontent-%COMP%] {\n  background: #151b20;\n  border: 1px solid white;\n}\n.recommendation-btn[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  max-width: 35rem;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n.modal-container[_ngcontent-%COMP%]   .name-input[_ngcontent-%COMP%], .modal-container[_ngcontent-%COMP%]   .desc-input[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.modal-container[_ngcontent-%COMP%]   span.optional[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n}\n.modal-container[_ngcontent-%COMP%]   span.required[_ngcontent-%COMP%] {\n  color: #da554b;\n}\n.modal-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n  line-height: 2rem;\n  font-family: \"Fredoka One\", cursive;\n  margin-bottom: 30px;\n}\n.modal-container[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 800;\n  line-height: 2rem;\n  text-transform: uppercase;\n}\n.modal-container[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-size: 0.65em;\n}\n.modal-container[_ngcontent-%COMP%]   .buttom-inputs[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n}\n.modal-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  float: right;\n  display: block;\n}\n.modal-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .spotify-btn[_ngcontent-%COMP%] {\n  margin: 3px;\n  padding: 7px 15px;\n}\n.modal-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  background: #425a5a;\n}\n.modal-container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #222a2e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvY29tcG9uZW50cy9yZWNvbW1lbmRhdGlvbi1mb3JtL3JlY29tbWVuZGF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVjb21tZW5kYXRpb24tZm9ybS9yZWNvbW1lbmRhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUNBRjtBREVFO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQ0FKO0FER0U7RUFDRSxzQkFBQTtBQ0RKO0FES0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FESUU7O0VBRUUsZ0JBQUE7QUNGSjtBRE1JO0VBQ0UsY0FBQTtBQ0pOO0FETUk7RUFDRSxjQUFBO0FDSk47QURRRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBeENXO0VBeUNYLG1CQUFBO0FDTko7QURVSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDUk47QURVSTtFQUNFLGlCQUFBO0FDUk47QURZRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ1ZKO0FEYUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ1hKO0FEYUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNYTjtBRGNJO0VBQ0UsbUJBQUE7QUNaTjtBRGNNO0VBQ0UseUJBQUE7QUNaUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjb21tZW5kYXRpb24tZm9ybS9yZWNvbW1lbmRhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtZnJlZG9rYTogXCJGcmVkb2thIE9uZVwiLCBjdXJzaXZlO1xuLnJlY29tbWVuZGF0aW9uLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwO1xuXG4gICYuaXMtb3BlbiB7XG4gICAgYmFja2dyb3VuZDogIzE1MWIyMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIH1cbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1heC13aWR0aDogMzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgLm5hbWUtaW5wdXQsXG4gIC5kZXNjLWlucHV0IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgJi5vcHRpb25hbCB7XG4gICAgICBjb2xvcjogI2IzYjNiMztcbiAgICB9XG4gICAgJi5yZXF1aXJlZCB7XG4gICAgICBjb2xvcjogI2RhNTU0YjtcbiAgICB9XG4gIH1cblxuICBoMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZnJlZG9rYTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLmZpZWxkIHtcbiAgICA+IGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgLnRhZyB7XG4gICAgICBmb250LXNpemU6IDAuNjVlbTtcbiAgICB9XG4gIH1cblxuICAuYnV0dG9tLWlucHV0cyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAuc3BvdGlmeS1idG4ge1xuICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICB9XG5cbiAgICAuY2FuY2VsLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDI1YTVhO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmEyZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5yZWNvbW1lbmRhdGlvbi1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMDtcbn1cbi5yZWNvbW1lbmRhdGlvbi1idG4uaXMtb3BlbiB7XG4gIGJhY2tncm91bmQ6ICMxNTFiMjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuLnJlY29tbWVuZGF0aW9uLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXgtd2lkdGg6IDM1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1vZGFsLWNvbnRhaW5lciAubmFtZS1pbnB1dCxcbi5tb2RhbC1jb250YWluZXIgLmRlc2MtaW5wdXQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1vZGFsLWNvbnRhaW5lciBzcGFuLm9wdGlvbmFsIHtcbiAgY29sb3I6ICNiM2IzYjM7XG59XG4ubW9kYWwtY29udGFpbmVyIHNwYW4ucmVxdWlyZWQge1xuICBjb2xvcjogI2RhNTU0Yjtcbn1cbi5tb2RhbC1jb250YWluZXIgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkZyZWRva2EgT25lXCIsIGN1cnNpdmU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ubW9kYWwtY29udGFpbmVyIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuZmllbGQgLnRhZyB7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuYnV0dG9tLWlucHV0cyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1vZGFsLWNvbnRhaW5lciAuYnV0dG9ucyB7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubW9kYWwtY29udGFpbmVyIC5idXR0b25zIC5zcG90aWZ5LWJ0biB7XG4gIG1hcmdpbjogM3B4O1xuICBwYWRkaW5nOiA3cHggMTVweDtcbn1cbi5tb2RhbC1jb250YWluZXIgLmJ1dHRvbnMgLmNhbmNlbC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjNDI1YTVhO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuYnV0dG9ucyAuY2FuY2VsLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjJhMmU7XG59Il19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], RecommendationFormComponent.prototype, "fetchMyPlaylist", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_my_playlist_selectors__WEBPACK_IMPORTED_MODULE_10__["MyPlaylistSelectors"].fetchPlaylist)
], RecommendationFormComponent.prototype, "playlist$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecommendationFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-recommendation-form',
                templateUrl: './recommendation-form.component.html',
                styleUrls: ['./recommendation-form.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_12__["MyPlaylistService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }]; }, { playlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], recommendation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fetchMyPlaylist: [], playlist$: [] }); })();


/***/ }),

/***/ "./src/app/components/recommendation-form/utils.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/recommendation-form/utils.ts ***!
  \*********************************************************/
/*! exports provided: errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
const errors = {
    name: [
        { error: 'required', label: 'this field is required' },
        { error: 'minlength', label: 'min length must 3 characters' },
    ],
    description: [{ error: 'minlength', label: 'min length must 25 characters' }],
};



/***/ }),

/***/ "./src/app/components/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 6, vars: 0, consts: [[1, "spinner-container"], [1, "spotify-loader", "animation-6"], [1, "shape", "shape1"], [1, "shape", "shape2"], [1, "shape", "shape3"], [1, "shape", "shape4"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/token-expiration-modal/token-expiration-modal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/token-expiration-modal/token-expiration-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TokenExpirationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenExpirationModalComponent", function() { return TokenExpirationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_current_user_actions_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/current-user/actions.type */ "./src/app/store/current-user/actions.type.ts");
/* harmony import */ var _store_my_playlist_actions_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/my-playlist/actions.type */ "./src/app/store/my-playlist/actions.type.ts");
/* harmony import */ var _store_follow_actions_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/follow/actions.type */ "./src/app/store/follow/actions.type.ts");
/* harmony import */ var _store_internal_actions_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/internal/actions.type */ "./src/app/store/internal/actions.type.ts");
/* harmony import */ var _store_internal_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/internal/selectors */ "./src/app/store/internal/selectors.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
















function TokenExpirationModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " OOPS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " looks like your API access token expired. click refresh button to generate token ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TokenExpirationModalComponent_div_0_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.emitPageAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Refresh Token");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](stat_r1.tokenExpire ? "is-active modal" : "modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faWarning);
} }
class TokenExpirationModalComponent {
    constructor(auth, store) {
        this.auth = auth;
        this.store = store;
        this.reqAuth$ = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        this.faWarning = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamationTriangle"];
        this.onRefreshToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.setInternal = (params) => new _store_internal_actions_type__WEBPACK_IMPORTED_MODULE_9__["InternalActionsType"].setInternal(params);
        this.fetchCurrentUser = () => new _store_current_user_actions_type__WEBPACK_IMPORTED_MODULE_6__["CurrentUserActionsType"].FetchCurrentUser();
        this.fetchMyPlaylist = (qry) => new _store_my_playlist_actions_type__WEBPACK_IMPORTED_MODULE_7__["MyPlaylistActionsType"].FetchPlaylist(qry);
        this.fetchFollowArtists = () => new _store_follow_actions_type__WEBPACK_IMPORTED_MODULE_8__["FollowActionsType"].FetchFollowArtists();
    }
    ngOnInit() { }
    emitPageAction() {
        const { current_user } = this.store.snapshot();
        this.reqAuth$.sink = this.auth.refreshToken().subscribe((res) => {
            localStorage.removeItem('access_token');
            localStorage.setItem('access_token', res.access_token);
            this.setInternal({ tokenExpire: false });
            this.onRefreshToken.emit();
            if (!current_user) {
                this.fetchCurrentUser();
                this.fetchFollowArtists();
                this.fetchMyPlaylist({
                    limit: 50,
                });
            }
        });
    }
    ngOnDestroy() {
        this.reqAuth$.unsubscribe();
    }
}
TokenExpirationModalComponent.ɵfac = function TokenExpirationModalComponent_Factory(t) { return new (t || TokenExpirationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
TokenExpirationModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TokenExpirationModalComponent, selectors: [["app-token-expiration-modal"]], outputs: { onRefreshToken: "onRefreshToken" }, decls: 2, vars: 3, consts: [[3, "class", 4, "ngIf"], [1, "modal-background"], [1, "modal-content", "expire-notification"], [1, "notification", "is-warning"], [3, "icon"], [1, "button", "is-dark", "refresh-btn", 3, "click"]], template: function TokenExpirationModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TokenExpirationModalComponent_div_0_Template, 13, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.static$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".expire-notification[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.expire-notification[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.expire-notification[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.expire-notification[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvY29tcG9uZW50cy90b2tlbi1leHBpcmF0aW9uLW1vZGFsL3Rva2VuLWV4cGlyYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9rZW4tZXhwaXJhdGlvbi1tb2RhbC90b2tlbi1leHBpcmF0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREVFO0VBQ0Usb0JBQUE7QUNBSjtBRENJO0VBQ0Usc0JBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9rZW4tZXhwaXJhdGlvbi1tb2RhbC90b2tlbi1leHBpcmF0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGlyZS1ub3RpZmljYXRpb24ge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuXG4gIC5yZWZyZXNoLWJ0biB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIH1cbiAgfVxufVxuIiwiLmV4cGlyZS1ub3RpZmljYXRpb24ge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuLmV4cGlyZS1ub3RpZmljYXRpb24gaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5leHBpcmUtbm90aWZpY2F0aW9uIC5yZWZyZXNoLWJ0biB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmV4cGlyZS1ub3RpZmljYXRpb24gLnJlZnJlc2gtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn0iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_internal_selectors__WEBPACK_IMPORTED_MODULE_10__["InternalSelectors"].fetchInternal)
], TokenExpirationModalComponent.prototype, "static$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], TokenExpirationModalComponent.prototype, "setInternal", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], TokenExpirationModalComponent.prototype, "fetchCurrentUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], TokenExpirationModalComponent.prototype, "fetchMyPlaylist", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], TokenExpirationModalComponent.prototype, "fetchFollowArtists", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TokenExpirationModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-token-expiration-modal',
                templateUrl: './token-expiration-modal.component.html',
                styleUrls: ['./token-expiration-modal.component.scss'],
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { onRefreshToken: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], static$: [], setInternal: [], fetchCurrentUser: [], fetchMyPlaylist: [], fetchFollowArtists: [] }); })();


/***/ }),

/***/ "./src/app/components/track-item/track-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/track-item/track-item.component.ts ***!
  \***************************************************************/
/*! exports provided: TrackItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackItemComponent", function() { return TrackItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");








function TrackItemComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artist_r1 = ctx.$implicit;
    const isLast_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", artist_r1.name, "", isLast_r2 ? "" : ", ", " ");
} }
class TrackItemComponent {
    constructor(route) {
        this.route = route;
        this.faEllipsisV = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisV"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"];
        this.msToTime = _services__WEBPACK_IMPORTED_MODULE_2__["msToTime"];
    }
    ngOnInit() { }
    routeToAudioFeature(track) {
        localStorage.removeItem('selected-audio-feature');
        localStorage.setItem('selected-audio-feature', JSON.stringify({
            image: track.album.images[0].url,
            name: track.name,
            artists: track.artists,
            description: track.album.name,
            popularity: track.popularity,
            id: track.id,
            external_urls: track.external_urls,
        }));
        this.route.navigate(['audio-feature', track.id]);
    }
}
TrackItemComponent.ɵfac = function TrackItemComponent_Factory(t) { return new (t || TrackItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TrackItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrackItemComponent, selectors: [["app-track-item"]], inputs: { track: "track" }, decls: 17, vars: 7, consts: [[1, "track-item"], [1, "image"], ["defaultImage", "assets/images/blur.jpg", "alt", "", 3, "lazyLoad"], [1, "track-content"], [3, "click"], [4, "ngFor", "ngForOf"], [1, "track-options"], [1, "float-duration"], [1, "track-buttons"], ["target", "_blank", 1, "track-item--button", 3, "href"], [3, "icon"], [1, "track-item--button", 3, "click"]], template: function TrackItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackItemComponent_Template_a_click_4_listener() { return ctx.routeToAudioFeature(ctx.track); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TrackItemComponent_span_8_Template, 2, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackItemComponent_Template_a_click_15_listener() { return ctx.routeToAudioFeature(ctx.track); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", ctx.track.album.images[ctx.track.album.images.length - 1].url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.track.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.track.artists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.msToTime(ctx.track.duration_ms), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.track.external_urls.spotify, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEllipsisV);
    } }, directives: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhY2staXRlbS90cmFjay1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-track-item',
                templateUrl: './track-item.component.html',
                styleUrls: ['./track-item.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { track: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/interceptors/error-handler.interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/interceptors/error-handler.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/app/interceptors/utils.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngxs-reset-plugin */ "./node_modules/ngxs-reset-plugin/__ivy_ngcc__/fesm2015/ngxs-reset-plugin.js");
/* harmony import */ var _store_internal_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/internal/state */ "./src/app/store/internal/state.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



// import { SubSink } from 'subsink';








class ErrorHandlerInterceptor {
    // reqAuth$ = new SubSink();
    constructor(auth, store, route) {
        this.auth = auth;
        this.store = store;
        this.route = route;
        this.toast = Object(_services__WEBPACK_IMPORTED_MODULE_4__["Toast"])();
    }
    intercept(request, next) {
        // check if https://accounts.spotify.com/api/token request
        const intersect = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interSect"])(request.url, ['token']);
        if (intersect.length > 0) {
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
                this.route.navigate(['login']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }));
        }
        return next.handle(request).pipe(
        // retry on failure
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), 
        // Handle Error
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            this.toast.fire({
                icon: 'error',
                title: 'Token Expire',
                text: 'generate refresh token',
            });
            this.store.dispatch(new ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_5__["StateOverwrite"]([_store_internal_state__WEBPACK_IMPORTED_MODULE_6__["InternalState"], { tokenExpire: true }]));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            // this.refreshToken();
        }));
    }
}
ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
ErrorHandlerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/interceptors/http-headers.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/interceptors/http-headers.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: HttpHeadersInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeadersInterceptor", function() { return HttpHeadersInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/interceptors/utils.ts");



class HttpHeadersInterceptor {
    constructor() { }
    intercept(request, next) {
        // console.log('request', request);
        const intersect = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["interSect"])(request.url, ['token']);
        if (intersect.length > 0)
            return next.handle(request);
        const customReq = request.clone({
            setHeaders: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        });
        return next.handle(customReq);
    }
}
HttpHeadersInterceptor.ɵfac = function HttpHeadersInterceptor_Factory(t) { return new (t || HttpHeadersInterceptor)(); };
HttpHeadersInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpHeadersInterceptor, factory: HttpHeadersInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpHeadersInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/interceptors/index.ts":
/*!***************************************!*\
  !*** ./src/app/interceptors/index.ts ***!
  \***************************************/
/*! exports provided: HttpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorProviders", function() { return HttpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler.interceptor */ "./src/app/interceptors/error-handler.interceptor.ts");
/* harmony import */ var _http_headers_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-headers.interceptor */ "./src/app/interceptors/http-headers.interceptor.ts");



const HttpInterceptorProviders = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlerInterceptor"],
        multi: true,
    },
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _http_headers_interceptor__WEBPACK_IMPORTED_MODULE_2__["HttpHeadersInterceptor"],
        multi: true,
    },
];


/***/ }),

/***/ "./src/app/interceptors/utils.ts":
/*!***************************************!*\
  !*** ./src/app/interceptors/utils.ts ***!
  \***************************************/
/*! exports provided: interSect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interSect", function() { return interSect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const interSect = (reqUrl, splitUrl) => {
    const urlstr = reqUrl.split('?')[0].split('/').filter(Boolean);
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["intersection"])(urlstr, splitUrl);
};


/***/ }),

/***/ "./src/app/pages/artist-preview/artist-preview.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/artist-preview/artist-preview.component.ts ***!
  \******************************************************************/
/*! exports provided: ArtistPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistPreviewComponent", function() { return ArtistPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var _store_related_artists_actions_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/related-artists/actions.type */ "./src/app/store/related-artists/actions.type.ts");
/* harmony import */ var _store_related_artists_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/related-artists/selectors */ "./src/app/store/related-artists/selectors.ts");
/* harmony import */ var _store_artist_preview_actions_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/artist-preview/actions.type */ "./src/app/store/artist-preview/actions.type.ts");
/* harmony import */ var _store_artist_preview_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/artist-preview/selectors */ "./src/app/store/artist-preview/selectors.ts");
/* harmony import */ var _store_artist_top_tracks_actions_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/artist-top-tracks/actions.type */ "./src/app/store/artist-top-tracks/actions.type.ts");
/* harmony import */ var _store_artist_top_tracks_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/artist-top-tracks/selectors */ "./src/app/store/artist-top-tracks/selectors.ts");
/* harmony import */ var _store_follow_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/follow/selectors */ "./src/app/store/follow/selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/token-expiration-modal/token-expiration-modal.component */ "./src/app/components/token-expiration-modal/token-expiration-modal.component.ts");
/* harmony import */ var _components_follow_btn_follow_btn_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/follow-btn/follow-btn.component */ "./src/app/components/follow-btn/follow-btn.component.ts");
/* harmony import */ var _components_playlist_track_playlist_track_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/playlist-track/playlist-track.component */ "./src/app/components/playlist-track/playlist-track.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");


















function ArtistPreviewComponent_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.withComma((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.artistPreview$)) == null ? null : tmp_0_0.followers.total));
} }
function ArtistPreviewComponent_app_follow_btn_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-follow-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, ctx_r1.followArtist$)) == null ? null : tmp_1_0.artists.items;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("artist", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r1.artistPreview$))("following", currVal_1);
} }
function ArtistPreviewComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", genre_r6, " ");
} }
function ArtistPreviewComponent_app_playlist_track_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-playlist-track", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r3.topTracks$)) == null ? null : tmp_0_0.tracks;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tracks", currVal_0)("default", true);
} }
function ArtistPreviewComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArtistPreviewComponent_div_52_Template_h4_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const artist_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.previewArtistCallback(artist_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Popularity : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artist_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", artist_r8.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", artist_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", artist_r8.popularity, "%");
} }
function ArtistPreviewComponent_app_spinner_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
} }
// import { FollowService } from '../../services/follow/follow.service';
class ArtistPreviewComponent {
    constructor(route, activeRoute) {
        this.route = route;
        this.activeRoute = activeRoute;
        this.fetchArtistPreview = (artistId) => new _store_artist_preview_actions_type__WEBPACK_IMPORTED_MODULE_6__["ArtistPreviewActionsType"].FetchArtistPreview(artistId);
        this.fetchRelatedArtists = (artistId) => new _store_related_artists_actions_type__WEBPACK_IMPORTED_MODULE_4__["RelatedArtistActionsType"].FetchRelatedArtist(artistId);
        this.fetchArtistTopTracks = (artistId) => new _store_artist_top_tracks_actions_type__WEBPACK_IMPORTED_MODULE_8__["ArtistTopTracksActionsType"].FetchArtistTopTracks(artistId);
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        const artistId = this.activeRoute.snapshot.paramMap.get('artistId');
        this.fetchArtistPreview(artistId);
        this.fetchRelatedArtists(artistId);
        this.fetchArtistTopTracks(artistId);
    }
    withComma(n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    previewArtistCallback(artistId) {
        this.route.navigate(['artist', artistId]);
        console.log(artistId);
    }
}
ArtistPreviewComponent.ɵfac = function ArtistPreviewComponent_Factory(t) { return new (t || ArtistPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"])); };
ArtistPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArtistPreviewComponent, selectors: [["app-artist-preview"]], decls: 57, vars: 27, consts: [[1, "head-body"], [1, "content-title"], [1, "content-feature"], [1, "content-body"], [1, "artist-feature"], [1, "image"], ["alt", "", 3, "src"], [1, "artist-feature--info"], [1, "title"], [1, "flex-item"], [4, "ngIf"], [3, "artist", "following", 4, "ngIf"], ["class", "gen", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "topTracks-container"], [3, "tracks", "default", 4, "ngIf"], [1, "related-artists"], ["class", "related-artists--item", 4, "ngFor", "ngForOf"], [3, "onRefreshToken"], [3, "artist", "following"], [1, "gen"], [3, "tracks", "default"], [1, "related-artists--item"], [1, "related-artist--content"], [1, "content"], [3, "click"]], template: function ArtistPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ARTIST INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "List Information Of Artist - follower, genres etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "figure", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ArtistPreviewComponent_label_21_Template, 3, 3, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Popularity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Genres");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ArtistPreviewComponent_app_follow_btn_34_Template, 3, 6, "app-follow-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ArtistPreviewComponent_span_38_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Top Tracks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ArtistPreviewComponent_app_playlist_track_46_Template, 2, 4, "app-playlist-track", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Related Artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ArtistPreviewComponent_div_52_Template, 11, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "app-token-expiration-modal", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRefreshToken", function ArtistPreviewComponent_Template_app_token_expiration_modal_onRefreshToken_54_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ArtistPreviewComponent_app_spinner_55_Template, 1, 0, "app-spinner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var tmp_0_0 = null;
        const currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, ctx.artistPreview$)) == null ? null : tmp_0_0.images[0].url;
        var tmp_1_0 = null;
        var tmp_3_0 = null;
        var tmp_5_0 = null;
        const currVal_5 = (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 21, ctx.artistPreview$)) == null ? null : tmp_5_0.genres;
        var tmp_7_0 = null;
        const currVal_7 = (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 23, ctx.relatedArtists$)) == null ? null : tmp_7_0.artists;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", currVal_0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, ctx.artistPreview$)) == null ? null : tmp_1_0.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 13, ctx.artistPreview$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 15, ctx.artistPreview$)) == null ? null : tmp_3_0.popularity, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 17, ctx.artistPreview$) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 19, ctx.followArtist$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", currVal_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.topTracks$);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", currVal_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 25, ctx.relatedArtists$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_13__["TokenExpirationModalComponent"], _components_follow_btn_follow_btn_component__WEBPACK_IMPORTED_MODULE_14__["FollowBtnComponent"], _components_playlist_track_playlist_track_component__WEBPACK_IMPORTED_MODULE_15__["PlaylistTrackComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGlzdC1wcmV2aWV3L2FydGlzdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], ArtistPreviewComponent.prototype, "fetchArtistPreview", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], ArtistPreviewComponent.prototype, "fetchRelatedArtists", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], ArtistPreviewComponent.prototype, "fetchArtistTopTracks", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_artist_preview_selectors__WEBPACK_IMPORTED_MODULE_7__["ArtistPreviewSelectors"].fetchArtistPreview)
], ArtistPreviewComponent.prototype, "artistPreview$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_related_artists_selectors__WEBPACK_IMPORTED_MODULE_5__["RelatedArtistsSelectors"].fetchTopArtists)
], ArtistPreviewComponent.prototype, "relatedArtists$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_artist_top_tracks_selectors__WEBPACK_IMPORTED_MODULE_9__["ArtistTopTracksSelectors"].fetchTopTracks)
], ArtistPreviewComponent.prototype, "topTracks$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_follow_selectors__WEBPACK_IMPORTED_MODULE_10__["FollowSelectors"].fetchFollowArtists)
], ArtistPreviewComponent.prototype, "followArtist$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArtistPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-artist-preview',
                templateUrl: './artist-preview.component.html',
                styleUrls: ['./artist-preview.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }]; }, { fetchArtistPreview: [], fetchRelatedArtists: [], fetchArtistTopTracks: [], artistPreview$: [], relatedArtists$: [], topTracks$: [], followArtist$: [] }); })();


/***/ }),

/***/ "./src/app/pages/audio-feature/audio-feature.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/audio-feature/audio-feature.component.ts ***!
  \****************************************************************/
/*! exports provided: AudioFeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioFeatureComponent", function() { return AudioFeatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var _store_audio_feature_actions_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/audio-feature/actions.type */ "./src/app/store/audio-feature/actions.type.ts");
/* harmony import */ var _store_audio_feature_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/audio-feature/selectors */ "./src/app/store/audio-feature/selectors.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_figure_image_figure_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/figure-image/figure-image.component */ "./src/app/components/figure-image/figure-image.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/token-expiration-modal/token-expiration-modal.component */ "./src/app/components/token-expiration-modal/token-expiration-modal.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");













function AudioFeatureComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artist_r3 = ctx.$implicit;
    const isLast_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", artist_r3.name, "", isLast_r4 ? "" : ", ", " ");
} }
function AudioFeatureComponent_label_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.findBeats((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r1.track$)) == null ? null : tmp_0_0.feature));
} }
function AudioFeatureComponent_app_spinner_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
} }
const _c0 = function (a0) { return { url: a0 }; };
class AudioFeatureComponent {
    constructor(route) {
        this.route = route;
        this.msToTime = _services__WEBPACK_IMPORTED_MODULE_6__["msToTime"];
        this.fetchAudioFeature = (track) => new _store_audio_feature_actions_type__WEBPACK_IMPORTED_MODULE_4__["AudioFeatureActionsType"].FetchAudioFeature(track);
    }
    ngOnInit() {
        const track = JSON.parse(localStorage.getItem('selected-audio-feature'));
        this.fetchAudioFeature(track);
        // this.track$.subscribe((res: AudioFeatureModel) => {
        //   console.log('res', res.image);
        // });
    }
    pitchClass(key) {
        switch (key) {
            case 1:
                return 'C♯, D♭ (also B♯)';
            case 2:
                return 'D (also C𝄪, E♭♭)';
            case 3:
                return 'D♯, E♭ (also F♭♭)';
            case 4:
                return 'E (also D𝄪, F♭)';
            case 5:
                return 'F (also E♯, G♭♭)';
            case 6:
                return 'F♯, G♭ (also E𝄪)';
            case 7:
                return 'G (also F𝄪, A♭♭)';
            case 8:
                return 'G♯, A♭';
            case 9:
                return 'A (also G𝄪, B♭♭)';
            case 10 || false || false:
                return 'A♯, B♭ (also C♭♭)';
            case 11 || false || false:
                return 'B (also A𝄪, C♭)';
            default:
                return 'C (also B♯, D♭♭)';
        }
    }
    findModality(mode) {
        return mode === 1 ? 'Major' : 'minor';
    }
    findBeats(f) {
        if (f) {
            let min = parseFloat((f.duration_ms / 1000 / 60).toFixed(1));
            let temp = parseInt(f.tempo.toFixed());
            return Math.floor(min * temp);
        }
    }
    findBars(f) {
        return Math.floor(this.findBeats(f) / (f === null || f === void 0 ? void 0 : f.time_signature));
    }
}
AudioFeatureComponent.ɵfac = function AudioFeatureComponent_Factory(t) { return new (t || AudioFeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
AudioFeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AudioFeatureComponent, selectors: [["app-audio-feature"]], decls: 97, vars: 42, consts: [[1, "head-body"], [1, "content-title"], [1, "content-feature"], [1, "content-body"], [1, "audio-feature"], [3, "image"], [1, "audio-feature--info"], [1, "title"], [1, "artists"], [4, "ngFor", "ngForOf"], [1, "desc"], ["target", "_blank", 1, "spotify-btn", 3, "href"], [1, "key-feature"], [1, "key-feature--item"], [1, "key-feature--floater"], [1, "key"], [1, "key", "key-note"], ["class", "key", 4, "ngIf"], [3, "onRefreshToken"], [4, "ngIf"]], template: function AudioFeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Audio Feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Get Audio Features for Several Tracks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-figure-image", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AudioFeatureComponent_span_19_Template, 2, 2, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "PLAY ON SPOTIFY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Modality");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Time Signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Tempo(BPM)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Popularity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Bars");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, AudioFeatureComponent_label_79_Template, 3, 3, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Beats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Sections");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Segments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "app-token-expiration-modal", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRefreshToken", function AudioFeatureComponent_Template_app_token_expiration_modal_onRefreshToken_94_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, AudioFeatureComponent_app_spinner_95_Template, 1, 0, "app-spinner", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](96, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var tmp_0_0 = null;
        const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 14, ctx.track$)) == null ? null : tmp_0_0.image);
        var tmp_1_0 = null;
        var tmp_2_0 = null;
        const currVal_2 = (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 18, ctx.track$)) == null ? null : tmp_2_0.artists;
        var tmp_3_0 = null;
        var tmp_4_0 = null;
        const currVal_4 = (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 22, ctx.track$)) == null ? null : tmp_4_0.external_urls.spotify;
        var tmp_5_0 = null;
        var tmp_6_0 = null;
        var tmp_7_0 = null;
        var tmp_8_0 = null;
        var tmp_9_0 = null;
        var tmp_10_0 = null;
        var tmp_11_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", currVal_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 16, ctx.track$)) == null ? null : tmp_1_0.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", currVal_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 20, ctx.track$)) == null ? null : tmp_3_0.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", currVal_4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.msToTime((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 24, ctx.track$)) == null ? null : tmp_5_0.feature.duration_ms));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pitchClass((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 26, ctx.track$)) == null ? null : tmp_6_0.feature.key));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.findModality((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 28, ctx.track$)) == null ? null : tmp_7_0.feature.mode));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 30, ctx.track$)) == null ? null : tmp_8_0.feature.time_signature);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 32, ctx.track$)) == null ? null : tmp_9_0.feature.tempo.toFixed());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 34, ctx.track$)) == null ? null : tmp_10_0.popularity, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.findBars((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](74, 36, ctx.track$)) == null ? null : tmp_11_0.feature));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.track$);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](96, 38, ctx.track$));
    } }, directives: [_components_figure_image_figure_image_component__WEBPACK_IMPORTED_MODULE_8__["FigureImageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_10__["TokenExpirationModalComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".audio-feature[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  gap: 2rem;\n}\n.audio-feature[_ngcontent-%COMP%]   figure.image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: #eee;\n  margin: 0;\n  position: relative;\n}\n.audio-feature[_ngcontent-%COMP%]   figure.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.audio-feature[_ngcontent-%COMP%]   .audio-feature--info[_ngcontent-%COMP%] {\n  color: #7a8188;\n  font-family: \"Roboto\", cursive;\n}\n.audio-feature[_ngcontent-%COMP%]   .audio-feature--info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Fredoka One\", cursive;\n  text-transform: uppercase;\n  color: #fff;\n  margin: 0;\n  font-size: 1.5rem;\n  margin-bottom: 15px;\n}\n.audio-feature[_ngcontent-%COMP%]   .audio-feature--info[_ngcontent-%COMP%]   p.artists[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  font-family: \"Fredoka One\", cursive;\n  letter-spacing: 0.01rem;\n}\n.audio-feature[_ngcontent-%COMP%]   .audio-feature--info[_ngcontent-%COMP%]   p.desc[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n.key-feature[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  margin-top: 50px;\n}\n.key-feature[_ngcontent-%COMP%]   .key-feature--item[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  height: 120px;\n  position: relative;\n  transition: all 0.3s;\n}\n.key-feature[_ngcontent-%COMP%]   .key-feature--item[_ngcontent-%COMP%]:nth-child(even) {\n  background: #13181d;\n}\n.key-feature[_ngcontent-%COMP%]   .key-feature--item[_ngcontent-%COMP%]:hover {\n  box-shadow: 10px 10px 30px -5px rgba(0, 0, 0, 0.64);\n  z-index: 1;\n  transform: scale(1.05);\n}\n.key-feature[_ngcontent-%COMP%]   .key-feature--item[_ngcontent-%COMP%]   .key-feature--floater[_ngcontent-%COMP%] {\n  display: grid;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: #fff;\n  width: 100%;\n}\n.key-feature[_ngcontent-%COMP%]   .key-feature--item[_ngcontent-%COMP%]   .key-feature--floater[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-family: \"Fredoka One\", cursive;\n  font-size: 1.2em;\n  line-height: 2em;\n}\n.key-feature[_ngcontent-%COMP%]   .key-feature--item[_ngcontent-%COMP%]   .key-feature--floater[_ngcontent-%COMP%]   .key-note[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  line-height: 2.5rem;\n}\n.key-feature[_ngcontent-%COMP%]   .key-feature--item[_ngcontent-%COMP%]   .key-feature--floater[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", cursive;\n  font-size: 0.7em;\n  color: #7a8188;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvcGFnZXMvYXVkaW8tZmVhdHVyZS9hdWRpby1mZWF0dXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdWRpby1mZWF0dXJlL2F1ZGlvLWZlYXR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0FDSkY7QURNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNKSjtBREtJO0VBQ0UsV0FBQTtBQ0hOO0FET0U7RUFDRSxjQW5CUztFQW9CVCw4QkF0QlU7QUNpQmQ7QURNSTtFQUNFLG1DQXpCUztFQTBCVCx5QkFBQTtFQUNBLFdBekJVO0VBMEJWLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSk47QURPSTtFQUNFLGdCQUFBO0VBQ0EsbUNBbkNTO0VBb0NULHVCQUFBO0FDTE47QURRSTtFQUNFLGdCQUFBO0FDTk47QURXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1JGO0FEVUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNSSjtBRFVJO0VBQ0UsbUJBQUE7QUNSTjtBRFdJO0VBQ0UsbURBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNUTjtBRFlJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNWTjtBRFlNO0VBQ0UsbUNBOUVPO0VBK0VQLGdCQUFBO0VBQ0EsZ0JBQUE7QUNWUjtBRGFNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1hSO0FEY007RUFDRSw4QkF4Rk07RUF5Rk4sZ0JBQUE7RUFDQSxjQXhGSztBQzRFYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1ZGlvLWZlYXR1cmUvYXVkaW8tZmVhdHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LWZyZWRva2E6IFwiRnJlZG9rYSBPbmVcIiwgY3Vyc2l2ZTtcbiRmb250LXJvYm90bzogXCJSb2JvdG9cIiwgY3Vyc2l2ZTtcbiRwcmltYXJ5LWNvbG9yOiAjZmZmO1xuJGRhcmstY29sb3I6ICM3YTgxODg7XG5cbi5hdWRpby1mZWF0dXJlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gIGdhcDogMnJlbTtcblxuICBmaWd1cmUuaW1hZ2Uge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmF1ZGlvLWZlYXR1cmUtLWluZm8ge1xuICAgIGNvbG9yOiAkZGFyay1jb2xvcjtcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xuICAgIGgyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mcmVkb2thO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICBwLmFydGlzdHMge1xuICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mcmVkb2thO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFyZW07XG4gICAgfVxuXG4gICAgcC5kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgfVxuICB9XG59XG5cbi5rZXktZmVhdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gIC5rZXktZmVhdHVyZS0taXRlbSB7XG4gICAgZmxleC1iYXNpczogMjAlO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgYmFja2dyb3VuZDogIzEzMTgxZDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAzMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjY0KTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cblxuICAgIC5rZXktZmVhdHVyZS0tZmxvYXRlciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5rZXkge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZnJlZG9rYTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAgIH1cblxuICAgICAgLmtleS1ub3RlIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmRlc2Mge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICBjb2xvcjogJGRhcmstY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuYXVkaW8tZmVhdHVyZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICBnYXA6IDJyZW07XG59XG4uYXVkaW8tZmVhdHVyZSBmaWd1cmUuaW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmF1ZGlvLWZlYXR1cmUgZmlndXJlLmltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF1ZGlvLWZlYXR1cmUgLmF1ZGlvLWZlYXR1cmUtLWluZm8ge1xuICBjb2xvcjogIzdhODE4ODtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIGN1cnNpdmU7XG59XG4uYXVkaW8tZmVhdHVyZSAuYXVkaW8tZmVhdHVyZS0taW5mbyBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZWRva2EgT25lXCIsIGN1cnNpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmF1ZGlvLWZlYXR1cmUgLmF1ZGlvLWZlYXR1cmUtLWluZm8gcC5hcnRpc3RzIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC1mYW1pbHk6IFwiRnJlZG9rYSBPbmVcIiwgY3Vyc2l2ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFyZW07XG59XG4uYXVkaW8tZmVhdHVyZSAuYXVkaW8tZmVhdHVyZS0taW5mbyBwLmRlc2Mge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4ua2V5LWZlYXR1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5rZXktZmVhdHVyZSAua2V5LWZlYXR1cmUtLWl0ZW0ge1xuICBmbGV4LWJhc2lzOiAyMCU7XG4gIGhlaWdodDogMTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ua2V5LWZlYXR1cmUgLmtleS1mZWF0dXJlLS1pdGVtOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICMxMzE4MWQ7XG59XG4ua2V5LWZlYXR1cmUgLmtleS1mZWF0dXJlLS1pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDMwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNjQpO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuLmtleS1mZWF0dXJlIC5rZXktZmVhdHVyZS0taXRlbSAua2V5LWZlYXR1cmUtLWZsb2F0ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbn1cbi5rZXktZmVhdHVyZSAua2V5LWZlYXR1cmUtLWl0ZW0gLmtleS1mZWF0dXJlLS1mbG9hdGVyIC5rZXkge1xuICBmb250LWZhbWlseTogXCJGcmVkb2thIE9uZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuLmtleS1mZWF0dXJlIC5rZXktZmVhdHVyZS0taXRlbSAua2V5LWZlYXR1cmUtLWZsb2F0ZXIgLmtleS1ub3RlIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbn1cbi5rZXktZmVhdHVyZSAua2V5LWZlYXR1cmUtLWl0ZW0gLmtleS1mZWF0dXJlLS1mbG9hdGVyIC5kZXNjIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiAjN2E4MTg4O1xufSJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], AudioFeatureComponent.prototype, "fetchAudioFeature", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_audio_feature_selectors__WEBPACK_IMPORTED_MODULE_5__["AudioFeatureSelectors"].fetchAudioFeature)
], AudioFeatureComponent.prototype, "track$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AudioFeatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-audio-feature',
                templateUrl: './audio-feature.component.html',
                styleUrls: ['./audio-feature.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, { fetchAudioFeature: [], track$: [] }); })();


/***/ }),

/***/ "./src/app/pages/callback/callback.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/callback/callback.component.ts ***!
  \******************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class CallbackComponent {
    constructor(auth, activeRoute, router) {
        this.auth = auth;
        this.activeRoute = activeRoute;
        this.router = router;
        this.request$ = new subsink__WEBPACK_IMPORTED_MODULE_1__["SubSink"]();
    }
    ngOnInit() {
        this.auth.setCallbackTimes();
        const storeState = localStorage.getItem('state');
        this.activeRoute.queryParams.pipe().subscribe((res) => {
            if (res.state === null || res.state !== storeState) {
                console.log('state_mismatch');
                this.router.navigate(['login']);
            }
            else {
                localStorage.removeItem('state');
                this.request$.sink = this.auth.generateToken(res.code).subscribe((res) => {
                    localStorage.setItem('access_token', res.access_token);
                    localStorage.setItem('refresh_token', res.refresh_token);
                    localStorage.setItem('scope', res.scope);
                    localStorage.setItem('expires_in', res.expires_in);
                    localStorage.setItem('token_type', res.token_type);
                    if (this.auth.isAuthenticated()) {
                        // this.router.navigate(['/']);
                        this.initializerStates();
                    }
                }, (err) => {
                    console.log('generateToken-error', err);
                });
            }
        });
    }
    initializerStates() {
        const times = localStorage.getItem('callback_times');
        if (times !== null && parseInt(times) > 3) {
            localStorage.removeItem('access_token');
            this.router.navigate(['/login']);
        }
        this.router.navigate(['/']);
    }
    ngOnDestroy() {
        this.request$.unsubscribe();
    }
}
CallbackComponent.ɵfac = function CallbackComponent_Factory(t) { return new (t || CallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CallbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallbackComponent, selectors: [["app-callback"]], decls: 4, vars: 0, consts: [[1, "login-container"], [1, "center-login"]], template: function CallbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Authenticating Please Wait...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-callback',
                templateUrl: './callback.component.html',
                styleUrls: ['./callback.component.scss'],
            }]
    }], function () { return [{ type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");



class LoginComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
    authUser() {
        this.auth.authenticateUser();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 6, vars: 0, consts: [[1, "login-container"], [1, "center-login"], [1, "spotify-btn", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Authenticate Spotify Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_4_listener() { return ctx.authUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Authenticate User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/main/main-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/main/main-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../top-tracks/top-tracks.component */ "./src/app/pages/top-tracks/top-tracks.component.ts");
/* harmony import */ var _audio_feature_audio_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audio-feature/audio-feature.component */ "./src/app/pages/audio-feature/audio-feature.component.ts");
/* harmony import */ var _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../top-artists/top-artists.component */ "./src/app/pages/top-artists/top-artists.component.ts");
/* harmony import */ var _artist_preview_artist_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../artist-preview/artist-preview.component */ "./src/app/pages/artist-preview/artist-preview.component.ts");
/* harmony import */ var _my_playlist_my_playlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../my-playlist/my-playlist.component */ "./src/app/pages/my-playlist/my-playlist.component.ts");
/* harmony import */ var _playlist_preview_playlist_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../playlist-preview/playlist-preview.component */ "./src/app/pages/playlist-preview/playlist-preview.component.ts");
/* harmony import */ var _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../recommendation/recommendation.component */ "./src/app/pages/recommendation/recommendation.component.ts");


// import { MainComponent } from './main.component';
// import { IndexComponent } from '../index/index.component';









const routes = [
    // { path: '', component: TopTracksComponent },
    { path: '', component: _my_playlist_my_playlist_component__WEBPACK_IMPORTED_MODULE_6__["MyPlaylistComponent"] },
    { path: 'my-playlist/:playlistId', component: _playlist_preview_playlist_preview_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistPreviewComponent"] },
    { path: 'top-tracks', component: _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_2__["TopTracksComponent"] },
    { path: 'audio-feature/:trackId', component: _audio_feature_audio_feature_component__WEBPACK_IMPORTED_MODULE_3__["AudioFeatureComponent"] },
    { path: 'top-artists', component: _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_4__["TopArtistsComponent"] },
    { path: 'artist/:artistId', component: _artist_preview_artist_preview_component__WEBPACK_IMPORTED_MODULE_5__["ArtistPreviewComponent"] },
    {
        path: 'my-playlist/:playlistId/recommendation',
        component: _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_8__["RecommendationComponent"],
    },
];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_current_user_actions_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/current-user/actions.type */ "./src/app/store/current-user/actions.type.ts");
/* harmony import */ var _store_current_user_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/current-user/selectors */ "./src/app/store/current-user/selectors.ts");
/* harmony import */ var _store_my_playlist_actions_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/my-playlist/actions.type */ "./src/app/store/my-playlist/actions.type.ts");
/* harmony import */ var _store_my_playlist_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/my-playlist/selectors */ "./src/app/store/my-playlist/selectors.ts");
/* harmony import */ var _store_follow_actions_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/follow/actions.type */ "./src/app/store/follow/actions.type.ts");
/* harmony import */ var _store_follow_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/follow/selectors */ "./src/app/store/follow/selectors.ts");
/* harmony import */ var _store_internal_actions_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/internal/actions.type */ "./src/app/store/internal/actions.type.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_built_with_built_with_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/built-with/built-with.component */ "./src/app/components/built-with/built-with.component.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");



















function MainComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const img_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", img_r8[0].url);
} }
function MainComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18);
} }
function MainComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folTotal_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](folTotal_r9 < 10 ? "0" + folTotal_r9 : folTotal_r9);
} }
function MainComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "00");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artTotal_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](artTotal_r10 < 0 ? "0" + artTotal_r10 : artTotal_r10);
} }
function MainComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "00");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playTotal_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](playTotal_r11 < 10 ? "0" + playTotal_r11 : playTotal_r11);
} }
function MainComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "00");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function () { return ["/top-tracks"]; };
const _c3 = function () { return ["/top-artists"]; };
class MainComponent {
    constructor() {
        this.faMicrophoneAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrophoneAlt"];
        this.faMusic = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMusic"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlay"];
        this.userReq$ = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        this.fetchCurrentUser = () => new _store_current_user_actions_type__WEBPACK_IMPORTED_MODULE_6__["CurrentUserActionsType"].FetchCurrentUser();
        this.fetchMyPlaylist = (qry) => new _store_my_playlist_actions_type__WEBPACK_IMPORTED_MODULE_8__["MyPlaylistActionsType"].FetchPlaylist(qry);
        this.fetchFollowArtists = () => new _store_follow_actions_type__WEBPACK_IMPORTED_MODULE_10__["FollowActionsType"].FetchFollowArtists();
        this.setInternal = (params) => new _store_internal_actions_type__WEBPACK_IMPORTED_MODULE_12__["InternalActionsType"].setInternal(params);
    }
    ngOnInit() {
        localStorage.removeItem('callback_times');
        this.fetchCurrentUser();
        this.userReq$.sink = this.user$.subscribe((res) => {
            if (res) {
                this.setInternal({ tokenExpire: false });
                this.fetchFollowArtists();
                this.fetchMyPlaylist({
                    limit: 50,
                });
            }
        });
    }
    ngOnDestroy() {
        this.userReq$.unsubscribe();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 52, vars: 42, consts: [[1, "main-container"], [1, "aside-content"], [1, "fixed-container"], [1, "profile-section"], [1, "image"], ["defaultImage", "assets/images/blur.jpg", "alt", "", "class", "is-rounded", 3, "lazyLoad", 4, "ngIf"], ["lazyLoad", "assets/images/spotify-240.png", "alt", "", 4, "ngIf"], [1, "profile-label"], [1, "profile-numbers"], [1, "item-count"], ["class", "count", 4, "ngIf"], [4, "ngIf"], [1, "nav-section"], ["routerLinkActive", "is-active", 1, "list-item", 3, "routerLink", "routerLinkActiveOptions"], [3, "icon"], [1, "body-content"], [1, "floater-body--content"], ["defaultImage", "assets/images/blur.jpg", "alt", "", 1, "is-rounded", 3, "lazyLoad"], ["lazyLoad", "assets/images/spotify-240.png", "alt", ""], [1, "count"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MainComponent_img_5_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MainComponent_img_7_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MainComponent_span_17_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MainComponent_span_19_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MainComponent_span_24_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, MainComponent_span_26_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MainComponent_span_31_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, MainComponent_span_33_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "MY PLAYLIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "TOP TRACKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "TOP ARTIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "app-built-with");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_0_0 = null;
        const currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 18, ctx.user$)) == null ? null : tmp_0_0.images;
        var tmp_2_0 = null;
        var tmp_3_0 = null;
        const currVal_3 = (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 24, ctx.user$)) == null ? null : tmp_3_0.followers.total;
        var tmp_5_0 = null;
        const currVal_5 = (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 28, ctx.artists$)) == null ? null : tmp_5_0.artists.total;
        var tmp_7_0 = null;
        const currVal_7 = (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 32, ctx.playlist$)) == null ? null : tmp_7_0.total;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 20, ctx.user$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 22, ctx.user$)) == null ? null : tmp_2_0.display_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 26, ctx.user$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 30, ctx.artists$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 34, ctx.playlist$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](37, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faPlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faMusic);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faMicrophoneAlt);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconComponent"], _components_built_with_built_with_component__WEBPACK_IMPORTED_MODULE_16__["BuiltWithComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_17__["ɵa"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".main-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 75rem;\n  min-height: 100vh;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 350px 1fr;\n}\n\n.background-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  position: absolute;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  z-index: -1;\n}\n\n.aside-background[_ngcontent-%COMP%], .aside-content[_ngcontent-%COMP%] {\n  background: #000;\n  padding: 0 50px;\n}\n\n.content-background[_ngcontent-%COMP%], .body-content[_ngcontent-%COMP%] {\n  background: #151a1e;\n  padding: 50px;\n  position: relative;\n  z-index: 1;\n}\n\n.content-background[_ngcontent-%COMP%]   .floater-body--content[_ngcontent-%COMP%], .body-content[_ngcontent-%COMP%]   .floater-body--content[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-position: bottom 0 right 50%;\n  background-size: cover;\n  z-index: -1;\n}\n\n.profile-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 50px auto;\n}\n\n.profile-section[_ngcontent-%COMP%]   figure.image[_ngcontent-%COMP%] {\n  height: 100px;\n  background: #eee;\n  width: 100px;\n  margin: 0 auto;\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n}\n\n.profile-section[_ngcontent-%COMP%]   figure.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.profile-section[_ngcontent-%COMP%]   .profile-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Fredoka One\";\n  color: #fefefe;\n  font-size: 1.5rem;\n  margin: 20px auto;\n}\n\n.profile-section[_ngcontent-%COMP%]   .profile-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  padding: 20px 0;\n}\n\n.profile-section[_ngcontent-%COMP%]   .profile-numbers[_ngcontent-%COMP%]   .item-count[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  text-align: center;\n  font-family: \"Fredoka One\";\n  color: #fefefe;\n  font-weight: 300;\n  display: flex;\n  justify-content: space-between;\n  line-height: 2rem;\n}\n\n.nav-section[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.nav-section[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  font-family: \"Fredoka One\";\n  border-bottom: 1px solid #13191f;\n  color: #fefefe;\n  cursor: pointer;\n}\n\n.nav-section[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nav-section[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n\n.nav-section[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover {\n  color: #1cb954;\n}\n\n.nav-section[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.nav-section[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: -15px;\n}\n\n.nav-section[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.nav-section[_ngcontent-%COMP%]   .list-item.is-active[_ngcontent-%COMP%] {\n  color: #1cb954;\n}\n\n.fixed-container[_ngcontent-%COMP%] {\n  position: fixed;\n  left: calc(0px + ((100% - 75em) / 2));\n  width: 350px;\n  height: 100vh;\n}\n\n.fixed-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUNKRjs7QURPQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDSkY7O0FET0E7O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0FDSkY7O0FETUE7O0VBRUUsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSEY7O0FES0U7O0VBQ0Usa0JBQUE7RUFXQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNaSjs7QURnQkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDYkY7O0FEZUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2JKOztBRGVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQ2JOOztBRGtCSTtFQUNFLDBCQW5GYTtFQW9GYixjQWxGUTtFQW1GUixpQkFBQTtFQUNBLGlCQUFBO0FDaEJOOztBRG9CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDbEJKOztBRG9CSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFuR2E7RUFvR2IsY0FsR1E7RUFtR1IsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ2xCTjs7QUR1QkE7RUFFRSxjQUFBO0FDckJGOztBRHVCRTtFQUNFLGVBQUE7RUFDQSwwQkFuSGU7RUFvSGYsZ0NBQUE7RUFDQSxjQW5IVTtFQW9IVixlQUFBO0FDckJKOztBRHVCSTtFQUNFLGFBQUE7QUNyQk47O0FEdUJJO0VBQ0Usb0JBQUE7QUNyQk47O0FEd0JJO0VBQ0UsY0E3SFU7QUN1R2hCOztBRHVCTTtFQUNFLHFCQUFBO0FDckJSOztBRHVCTTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNyQlI7O0FEeUJJO0VBQ0UsYUFBQTtBQ3ZCTjs7QUQwQkk7RUFDRSxjQTVJVTtBQ29IaEI7O0FENkJBO0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUMxQkY7O0FENEJFO0VBQ0UsZUFBQTtBQzFCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LWZyZWRva2Etb25lOiBcIkZyZWRva2EgT25lXCI7XG4kZm9udC1pbmRpZS1mbG93ZXI6IFwiSW5kaWUgRmxvd2VyXCI7XG4kYXNpZGUtY29sb3I6ICNmZWZlZmU7XG4kc3BvdGlmeS1jb2xvcjogIzFjYjk1NDtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzVyZW07XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNTBweCAxZnI7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5hc2lkZS1iYWNrZ3JvdW5kLFxuLmFzaWRlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMDAwOyAvLyAjMjIyOTJkXG4gIHBhZGRpbmc6IDAgNTBweDtcbn1cbi5jb250ZW50LWJhY2tncm91bmQsXG4uYm9keS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzE1MWExZTtcbiAgcGFkZGluZzogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuXG4gIC5mbG9hdGVyLWJvZHktLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgLy8gICAgIDExOGRlZyxcbiAgICAvLyAgICAgcmdiYSgyMSwgMjYsIDMwLCAwLjMpIDAlLFxuICAgIC8vICAgICByZ2JhKDIxLCAyNiwgMzAsIDAuNSkgMTElLFxuICAgIC8vICAgICByZ2JhKDIxLCAyNiwgMzAsIDAuOSkgMjMlLFxuICAgIC8vICAgICAjMTUxYTFlIDM5JSxcbiAgICAvLyAgICAgIzE1MWExZSA1OSUsXG4gICAgLy8gICAgICMxNTFhMWUgMTAwJVxuICAgIC8vICAgKSxcbiAgICAvLyAgIHVybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zNjk1NDc2L3BleGVscy1waG90by0zNjk1NDc2LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjApO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gMCByaWdodCA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxufVxuXG4ucHJvZmlsZS1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUwcHggYXV0bztcblxuICBmaWd1cmUuaW1hZ2Uge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG4gIH1cblxuICAucHJvZmlsZS1sYWJlbCB7XG4gICAgaDIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZyZWRva2Etb25lO1xuICAgICAgY29sb3I6ICRhc2lkZS1jb2xvcjtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLnByb2ZpbGUtbnVtYmVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcblxuICAgIC5pdGVtLWNvdW50IHtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZnJlZG9rYS1vbmU7XG4gICAgICBjb2xvcjogJGFzaWRlLWNvbG9yO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICB9XG4gIH1cbn1cblxuLm5hdi1zZWN0aW9uIHtcbiAgLy8gbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgLmxpc3QtaXRlbSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mcmVkb2thLW9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzEzMTkxZjtcbiAgICBjb2xvcjogJGFzaWRlLWNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGZhLWljb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkc3BvdGlmeS1jb2xvcjtcbiAgICAgIGZhLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkc3BvdGlmeS1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuLmZpeGVkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogY2FsYygwcHggKyAoKDEwMCUgLSA3NWVtKSAvIDIpKTtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gID4gZGl2IHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gIH1cbn1cbiIsIi5tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDc1cmVtO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMWZyO1xufVxuXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYXNpZGUtYmFja2dyb3VuZCxcbi5hc2lkZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgcGFkZGluZzogMCA1MHB4O1xufVxuXG4uY29udGVudC1iYWNrZ3JvdW5kLFxuLmJvZHktY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMxNTFhMWU7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5jb250ZW50LWJhY2tncm91bmQgLmZsb2F0ZXItYm9keS0tY29udGVudCxcbi5ib2R5LWNvbnRlbnQgLmZsb2F0ZXItYm9keS0tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gMCByaWdodCA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucHJvZmlsZS1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cbi5wcm9maWxlLXNlY3Rpb24gZmlndXJlLmltYWdlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZmlsZS1zZWN0aW9uIGZpZ3VyZS5pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5wcm9maWxlLXNlY3Rpb24gLnByb2ZpbGUtbGFiZWwgaDIge1xuICBmb250LWZhbWlseTogXCJGcmVkb2thIE9uZVwiO1xuICBjb2xvcjogI2ZlZmVmZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLnByb2ZpbGUtc2VjdGlvbiAucHJvZmlsZS1udW1iZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5wcm9maWxlLXNlY3Rpb24gLnByb2ZpbGUtbnVtYmVycyAuaXRlbS1jb3VudCB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiRnJlZG9rYSBPbmVcIjtcbiAgY29sb3I6ICNmZWZlZmU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbi5uYXYtc2VjdGlvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm5hdi1zZWN0aW9uIC5saXN0LWl0ZW0ge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZWRva2EgT25lXCI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTMxOTFmO1xuICBjb2xvcjogI2ZlZmVmZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdi1zZWN0aW9uIC5saXN0LWl0ZW0gZmEtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubmF2LXNlY3Rpb24gLmxpc3QtaXRlbSBzcGFuIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ubmF2LXNlY3Rpb24gLmxpc3QtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjMWNiOTU0O1xufVxuLm5hdi1zZWN0aW9uIC5saXN0LWl0ZW06aG92ZXIgZmEtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5uYXYtc2VjdGlvbiAubGlzdC1pdGVtOmhvdmVyIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbn1cbi5uYXYtc2VjdGlvbiAubGlzdC1pdGVtOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uYXYtc2VjdGlvbiAubGlzdC1pdGVtLmlzLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMWNiOTU0O1xufVxuXG4uZml4ZWQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiBjYWxjKDBweCArICgoMTAwJSAtIDc1ZW0pIC8gMikpO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uZml4ZWQtY29udGFpbmVyID4gZGl2IHtcbiAgcGFkZGluZzogMCA1MHB4O1xufSJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], MainComponent.prototype, "fetchCurrentUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], MainComponent.prototype, "fetchMyPlaylist", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], MainComponent.prototype, "fetchFollowArtists", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], MainComponent.prototype, "setInternal", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_current_user_selectors__WEBPACK_IMPORTED_MODULE_7__["CurrentUserSelectors"].fetchCurrentUser)
], MainComponent.prototype, "user$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_my_playlist_selectors__WEBPACK_IMPORTED_MODULE_9__["MyPlaylistSelectors"].fetchPlaylist)
], MainComponent.prototype, "playlist$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_follow_selectors__WEBPACK_IMPORTED_MODULE_11__["FollowSelectors"].fetchFollowArtists)
], MainComponent.prototype, "artists$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
            }]
    }], function () { return []; }, { fetchCurrentUser: [], fetchMyPlaylist: [], fetchFollowArtists: [], setInternal: [], user$: [], playlist$: [], artists$: [] }); })();


/***/ }),

/***/ "./src/app/pages/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/pages/main/main-routing.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../top-tracks/top-tracks.component */ "./src/app/pages/top-tracks/top-tracks.component.ts");
/* harmony import */ var _audio_feature_audio_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../audio-feature/audio-feature.component */ "./src/app/pages/audio-feature/audio-feature.component.ts");
/* harmony import */ var _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../top-artists/top-artists.component */ "./src/app/pages/top-artists/top-artists.component.ts");
/* harmony import */ var _artist_preview_artist_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../artist-preview/artist-preview.component */ "./src/app/pages/artist-preview/artist-preview.component.ts");
/* harmony import */ var _my_playlist_my_playlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../my-playlist/my-playlist.component */ "./src/app/pages/my-playlist/my-playlist.component.ts");
/* harmony import */ var _playlist_preview_playlist_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../playlist-preview/playlist-preview.component */ "./src/app/pages/playlist-preview/playlist-preview.component.ts");
/* harmony import */ var _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../recommendation/recommendation.component */ "./src/app/pages/recommendation/recommendation.component.ts");













// import { LazyLoadImageModule } from 'ng-lazyload-image';
class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_5__["TopTracksComponent"],
        _audio_feature_audio_feature_component__WEBPACK_IMPORTED_MODULE_6__["AudioFeatureComponent"],
        _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_7__["TopArtistsComponent"],
        _artist_preview_artist_preview_component__WEBPACK_IMPORTED_MODULE_8__["ArtistPreviewComponent"],
        _my_playlist_my_playlist_component__WEBPACK_IMPORTED_MODULE_9__["MyPlaylistComponent"],
        _playlist_preview_playlist_preview_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistPreviewComponent"],
        _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_11__["RecommendationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_5__["TopTracksComponent"],
                    _audio_feature_audio_feature_component__WEBPACK_IMPORTED_MODULE_6__["AudioFeatureComponent"],
                    _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_7__["TopArtistsComponent"],
                    _artist_preview_artist_preview_component__WEBPACK_IMPORTED_MODULE_8__["ArtistPreviewComponent"],
                    _my_playlist_my_playlist_component__WEBPACK_IMPORTED_MODULE_9__["MyPlaylistComponent"],
                    _playlist_preview_playlist_preview_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistPreviewComponent"],
                    _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_11__["RecommendationComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/my-playlist/my-playlist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/my-playlist/my-playlist.component.ts ***!
  \************************************************************/
/*! exports provided: MyPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPlaylistComponent", function() { return MyPlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var _store_my_playlist_actions_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/my-playlist/actions.type */ "./src/app/store/my-playlist/actions.type.ts");
/* harmony import */ var _store_my_playlist_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/my-playlist/selectors */ "./src/app/store/my-playlist/selectors.ts");
/* harmony import */ var _components_playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/playlist-item/playlist-item.component */ "./src/app/components/playlist-item/playlist-item.component.ts");
/* harmony import */ var _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/token-expiration-modal/token-expiration-modal.component */ "./src/app/components/token-expiration-modal/token-expiration-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");











function MyPlaylistComponent_app_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
} }
class MyPlaylistComponent {
    constructor() {
        this.fetchMyPlaylist = (qry = null) => new _store_my_playlist_actions_type__WEBPACK_IMPORTED_MODULE_4__["MyPlaylistActionsType"].FetchPlaylist(qry);
    }
    ngOnInit() {
        this.fetchMyPlaylist({
            limit: 50,
        });
    }
}
MyPlaylistComponent.ɵfac = function MyPlaylistComponent_Factory(t) { return new (t || MyPlaylistComponent)(); };
MyPlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyPlaylistComponent, selectors: [["app-my-playlist"]], decls: 14, vars: 6, consts: [[1, "head-body"], [1, "content-title"], [1, "content-feature"], [1, "content-body"], [3, "playlists"], [3, "onRefreshToken"], [4, "ngIf"]], template: function MyPlaylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MY PLAYLIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "List of Active Playlists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-playlist-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-token-expiration-modal", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRefreshToken", function MyPlaylistComponent_Template_app_token_expiration_modal_onRefreshToken_11_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MyPlaylistComponent_app_spinner_12_Template, 1, 0, "app-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var tmp_0_0 = null;
        const currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 2, ctx.playlist$)) == null ? null : tmp_0_0.items;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("playlists", currVal_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 4, ctx.playlist$));
    } }, directives: [_components_playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistItemComponent"], _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_7__["TokenExpirationModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".content-body[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvcGFnZXMvbXktcGxheWxpc3QvbXktcGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL215LXBsYXlsaXN0L215LXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXBsYXlsaXN0L215LXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYm9keSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4iLCIuY29udGVudC1ib2R5IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn0iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], MyPlaylistComponent.prototype, "fetchMyPlaylist", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_my_playlist_selectors__WEBPACK_IMPORTED_MODULE_5__["MyPlaylistSelectors"].fetchPlaylist)
], MyPlaylistComponent.prototype, "playlist$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyPlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-my-playlist',
                templateUrl: './my-playlist.component.html',
                styleUrls: ['./my-playlist.component.scss'],
            }]
    }], function () { return []; }, { fetchMyPlaylist: [], playlist$: [] }); })();


/***/ }),

/***/ "./src/app/pages/playlist-preview/playlist-preview.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/playlist-preview/playlist-preview.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlaylistPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPreviewComponent", function() { return PlaylistPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngxs-reset-plugin */ "./node_modules/ngxs-reset-plugin/__ivy_ngcc__/fesm2015/ngxs-reset-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_playlist_preview_actions_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/playlist-preview/actions.type */ "./src/app/store/playlist-preview/actions.type.ts");
/* harmony import */ var _store_playlist_preview_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/playlist-preview/selectors */ "./src/app/store/playlist-preview/selectors.ts");
/* harmony import */ var _store_my_playlist_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/my-playlist/selectors */ "./src/app/store/my-playlist/selectors.ts");
/* harmony import */ var _store_current_user_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/current-user/selectors */ "./src/app/store/current-user/selectors.ts");
/* harmony import */ var _store_recommendation_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/recommendation/state */ "./src/app/store/recommendation/state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/token-expiration-modal/token-expiration-modal.component */ "./src/app/components/token-expiration-modal/token-expiration-modal.component.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _components_edit_playlist_btn_edit_playlist_btn_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/edit-playlist-btn/edit-playlist-btn.component */ "./src/app/components/edit-playlist-btn/edit-playlist-btn.component.ts");
/* harmony import */ var _components_follow_btn_playlist_follow_btn_playlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/follow-btn-playlist/follow-btn-playlist.component */ "./src/app/components/follow-btn-playlist/follow-btn-playlist.component.ts");
/* harmony import */ var _components_playlist_track_playlist_track_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/playlist-track/playlist-track.component */ "./src/app/components/playlist-track/playlist-track.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");








// import { TopTrackItemModel } from '../../store/top-tracks/model';














function PlaylistPreviewComponent_div_10_div_3_app_edit_playlist_btn_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-edit-playlist-btn", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("playlist", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r9.playlist$));
} }
function PlaylistPreviewComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlaylistPreviewComponent_div_10_div_3_app_edit_playlist_btn_1_Template, 2, 3, "app-edit-playlist-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r6.playlist$));
} }
function PlaylistPreviewComponent_div_10_app_follow_btn_playlist_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-follow-btn-playlist", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, ctx_r7.myPlaylist$)) == null ? null : tmp_1_0.items;
    var tmp_3_0 = null;
    const currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 10, ctx_r7.playlist$).owner.id === ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, ctx_r7.currentUser$)) == null ? null : tmp_3_0.id) ? true : false;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("playlist", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, ctx_r7.playlist$))("playlistCollection", currVal_1)("currentUser", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, ctx_r7.currentUser$))("isMyPlaylist", currVal_3);
} }
function PlaylistPreviewComponent_div_10_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlaylistPreviewComponent_div_10_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const playlistId_r10 = ctx.ngIf; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.getRecommendation(playlistId_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "get recommendation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PlaylistPreviewComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "figure", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlaylistPreviewComponent_div_10_div_3_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PlaylistPreviewComponent_div_10_app_follow_btn_playlist_7_Template, 6, 14, "app-follow-btn-playlist", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PlaylistPreviewComponent_div_10_a_16_Template, 2, 0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const play_r5 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", play_r5.images.length > 0 ? play_r5.images[0].url : "assets/images/spotify.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, ctx_r0.playlist$).owner.id === _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, ctx_r0.currentUser$).id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 10, ctx_r0.playlist$) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 12, ctx_r0.myPlaylist$) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 14, ctx_r0.currentUser$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 16, ctx_r0.playlist$).name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 18, ctx_r0.playlist$).description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 20, ctx_r0.playlist$).id);
} }
function PlaylistPreviewComponent_h2_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r1.playlist$).tracks.items.length, " Tracks ");
} }
function PlaylistPreviewComponent_app_playlist_track_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-playlist-track", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const play_r13 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var tmp_2_0 = null;
    const currVal_2 = play_r13.owner.id === ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, ctx_r2.currentUser$)) == null ? null : tmp_2_0.id) ? true : false;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tracks", play_r13.tracks)("config", ctx_r2.config)("isMyPlaylist", currVal_2)("playlistId", play_r13.id);
} }
function PlaylistPreviewComponent_pagination_controls_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pagination-controls", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function PlaylistPreviewComponent_pagination_controls_18_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxSize", 5);
} }
function PlaylistPreviewComponent_app_spinner_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
} }
class PlaylistPreviewComponent {
    constructor(activeRoute, route, store) {
        this.activeRoute = activeRoute;
        this.route = route;
        this.store = store;
        this.playlistPreview = (playlistId) => new _store_playlist_preview_actions_type__WEBPACK_IMPORTED_MODULE_6__["PlaylistPreviewActionsType"].FetchPlaylistPreview(playlistId);
        this.req$ = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        this.isEditBtn = false;
    }
    ngOnInit() {
        const playlistId = this.activeRoute.snapshot.params.playlistId;
        this.playlistPreview(playlistId);
        this.req$.sink = this.playlist$.subscribe((playlist) => {
            if (playlist) {
                this.config = {
                    itemsPerPage: 20,
                    currentPage: 1,
                    totalItems: playlist.tracks.items.length,
                };
            }
        });
        this.store.dispatch(new ngxs_reset_plugin__WEBPACK_IMPORTED_MODULE_3__["StateReset"](_store_recommendation_state__WEBPACK_IMPORTED_MODULE_10__["RecommendationState"]));
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    closeEditButton(e) {
        this.isEditBtn = false;
    }
    getRecommendation(playlistId) {
        localStorage.removeItem('recommendation');
        this.route.navigate(['my-playlist', playlistId, 'recommendation']);
    }
    ngOnDestroy() {
        this.req$.unsubscribe();
    }
}
PlaylistPreviewComponent.ɵfac = function PlaylistPreviewComponent_Factory(t) { return new (t || PlaylistPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
PlaylistPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlaylistPreviewComponent, selectors: [["app-playlist-preview"]], decls: 22, vars: 13, consts: [[1, "head-body"], [1, "content-title"], [1, "content-feature"], [1, "content-body"], ["class", "track-preview--header", 4, "ngIf"], [1, "divider"], [4, "ngIf"], [3, "tracks", "config", "isMyPlaylist", "playlistId", 4, "ngIf"], ["class", "custom-pagination", 3, "maxSize", "pageChange", 4, "ngIf"], [3, "onRefreshToken"], [1, "track-preview--header"], [1, "image"], ["alt", "", 3, "lazyLoad"], ["class", "edit-button--wrapper", 4, "ngIf"], [1, "preview-header--content"], [3, "playlist", "playlistCollection", "currentUser", "isMyPlaylist", 4, "ngIf"], [3, "innerHTML"], ["class", "spotify-btn", 3, "click", 4, "ngIf"], [1, "edit-button--wrapper"], [3, "playlist", 4, "ngIf"], [3, "playlist"], [3, "playlist", "playlistCollection", "currentUser", "isMyPlaylist"], [1, "spotify-btn", 3, "click"], [3, "tracks", "config", "isMyPlaylist", "playlistId"], [1, "custom-pagination", 3, "maxSize", "pageChange"]], template: function PlaylistPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "PLAYLIST INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Playlist Information - tracks, feature etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PlaylistPreviewComponent_div_10_Template, 18, 22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PlaylistPreviewComponent_h2_13_Template, 3, 3, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PlaylistPreviewComponent_app_playlist_track_16_Template, 2, 6, "app-playlist-track", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PlaylistPreviewComponent_pagination_controls_18_Template, 1, 1, "pagination-controls", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "app-token-expiration-modal", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRefreshToken", function PlaylistPreviewComponent_Template_app_token_expiration_modal_onRefreshToken_19_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PlaylistPreviewComponent_app_spinner_20_Template, 1, 0, "app-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, ctx.playlist$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 7, ctx.playlist$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 9, ctx.playlist$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.config && ctx.config.totalItems > 20 ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 11, ctx.playlist$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_13__["TokenExpirationModalComponent"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__["ɵa"], _components_edit_playlist_btn_edit_playlist_btn_component__WEBPACK_IMPORTED_MODULE_15__["EditPlaylistBtnComponent"], _components_follow_btn_playlist_follow_btn_playlist_component__WEBPACK_IMPORTED_MODULE_16__["FollowBtnPlaylistComponent"], _components_playlist_track_playlist_track_component__WEBPACK_IMPORTED_MODULE_17__["PlaylistTrackComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["PaginationControlsComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_19__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".track-preview--header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  padding-top: 20px;\n}\n.track-preview--header[_ngcontent-%COMP%]   figure.image[_ngcontent-%COMP%] {\n  flex-basis: 150px;\n  width: 150px;\n  height: 150px;\n  background: #222;\n  margin-right: 20px;\n  position: relative;\n}\n.track-preview--header[_ngcontent-%COMP%]   figure.image[_ngcontent-%COMP%]:hover   .edit-button--wrapper[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n}\n.track-preview--header[_ngcontent-%COMP%]   .preview-header--content[_ngcontent-%COMP%] {\n  flex-basis: calc(100% - 170px);\n  position: relative;\n}\n.track-preview--header[_ngcontent-%COMP%]   .preview-header--content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-family: \"Fredoka One\", cursive;\n  color: #fff;\n  line-height: 1.5rem;\n  margin-bottom: 10px;\n}\n.track-preview--header[_ngcontent-%COMP%]   .preview-header--content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a8188;\n}\n.track-preview--header[_ngcontent-%COMP%]   .edit-button--wrapper[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  transition: opacity 0.5s;\n  background: linear-gradient(180deg, rgba(34, 42, 46, 0.2) 0%, black 100%);\n}\n.track-preview--header[_ngcontent-%COMP%]   .edit-button--wrapper[_ngcontent-%COMP%]   .edit-playlist[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 5px 12px;\n  background: #000;\n  border-radius: 15px;\n  color: #1cb954;\n  margin-bottom: 10px;\n  transition: all 0.3s;\n  display: block;\n  min-width: 110px;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n}\n.track-preview--header[_ngcontent-%COMP%]   .edit-button--wrapper[_ngcontent-%COMP%]   .edit-playlist[_ngcontent-%COMP%]:hover {\n  background-color: #0e1215;\n}\n.aside-tracks[_ngcontent-%COMP%] {\n  min-width: 450px;\n}\n.playlist-tracks--item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  margin-bottom: 10px;\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   figure.image[_ngcontent-%COMP%] {\n  flex-basis: 45px;\n  height: 45px;\n  background: #222;\n  margin-right: 15px;\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   .track-item--content[_ngcontent-%COMP%] {\n  flex-basis: calc(100% - 60px);\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   .track-item--content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1rem;\n  color: #fff;\n  margin-bottom: 5px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   .track-item--content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.playlist-tracks--item[_ngcontent-%COMP%]   .track-item--content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #7a8188;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFucGFnYWR1YW4vUHJvamVjdHMvZHVtbWllLXByb2ovc3BvdGlmeS1wcm9maWxlL3NyYy9hcHAvcGFnZXMvcGxheWxpc3QtcHJldmlldy9wbGF5bGlzdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbGF5bGlzdC1wcmV2aWV3L3BsYXlsaXN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0xGO0FET0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRTTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FDTlI7QURXRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRFdJO0VBQ0UsaUJBQUE7RUFDQSxtQ0FqQ1M7RUFrQ1QsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNUTjtBRFlJO0VBQ0UsY0FyQ087QUMyQmI7QURjRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSx3QkFBQTtFQUNBLHlFQUFBO0FDWko7QURrQkk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7QUNoQk47QURrQk07RUFDRSx5QkFBQTtBQ2hCUjtBRHNCQTtFQUNFLGdCQUFBO0FDbkJGO0FEcUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNsQkY7QURvQkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbEJKO0FEcUJFO0VBQ0UsNkJBQUE7QUNuQko7QURxQkk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbkJOO0FEb0JNO0VBQ0UsMEJBQUE7QUNsQlI7QURzQkk7RUFDRSxnQkFBQTtFQUNBLGNBOUdPO0VBK0dQLGtCQUFBO0FDcEJOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWxpc3QtcHJldmlldy9wbGF5bGlzdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtZnJlZG9rYTogXCJGcmVkb2thIE9uZVwiLCBjdXJzaXZlO1xuJGZvbnQtcm9ib3RvOiBcIlJvYm90b1wiLCBjdXJzaXZlO1xuJHByaW1hcnktY29sb3I6ICNmZmY7XG4kZGFyay1jb2xvcjogIzdhODE4ODtcbiRzcG90aWZ5LWNvbG9yOiAjMWNiOTU0O1xuXG4udHJhY2stcHJldmlldy0taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgZmlndXJlLmltYWdlIHtcbiAgICBmbGV4LWJhc2lzOiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5lZGl0LWJ1dHRvbi0td3JhcHBlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wcmV2aWV3LWhlYWRlci0tY29udGVudCB7XG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC0gMTcwcHgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZyZWRva2E7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6ICRkYXJrLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5lZGl0LWJ1dHRvbi0td3JhcHBlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICByZ2JhKDM0LCA0MiwgNDYsIDAuMikgMCUsXG4gICAgICByZ2IoMCwgMCwgMCkgMTAwJVxuICAgICk7XG5cbiAgICAuZWRpdC1wbGF5bGlzdCB7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBjb2xvcjogIzFjYjk1NDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIGJvdHRvbTogMDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTEyMTU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hc2lkZS10cmFja3Mge1xuICBtaW4td2lkdGg6IDQ1MHB4O1xufVxuLnBsYXlsaXN0LXRyYWNrcy0taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgZmlndXJlLmltYWdlIHtcbiAgICBmbGV4LWJhc2lzOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuXG4gIC50cmFjay1pdGVtLS1jb250ZW50IHtcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSA2MHB4KTtcblxuICAgIGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgY29sb3I6ICRkYXJrLWNvbG9yO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgIH1cbiAgfVxufVxuIiwiLnRyYWNrLXByZXZpZXctLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnRyYWNrLXByZXZpZXctLWhlYWRlciBmaWd1cmUuaW1hZ2Uge1xuICBmbGV4LWJhc2lzOiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50cmFjay1wcmV2aWV3LS1oZWFkZXIgZmlndXJlLmltYWdlOmhvdmVyIC5lZGl0LWJ1dHRvbi0td3JhcHBlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRyYWNrLXByZXZpZXctLWhlYWRlciAucHJldmlldy1oZWFkZXItLWNvbnRlbnQge1xuICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSAxNzBweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50cmFjay1wcmV2aWV3LS1oZWFkZXIgLnByZXZpZXctaGVhZGVyLS1jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkZyZWRva2EgT25lXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnRyYWNrLXByZXZpZXctLWhlYWRlciAucHJldmlldy1oZWFkZXItLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiAjN2E4MTg4O1xufVxuLnRyYWNrLXByZXZpZXctLWhlYWRlciAuZWRpdC1idXR0b24tLXdyYXBwZXIge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDM0LCA0MiwgNDYsIDAuMikgMCUsIGJsYWNrIDEwMCUpO1xufVxuLnRyYWNrLXByZXZpZXctLWhlYWRlciAuZWRpdC1idXR0b24tLXdyYXBwZXIgLmVkaXQtcGxheWxpc3Qge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjMWNiOTU0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm90dG9tOiAwO1xufVxuLnRyYWNrLXByZXZpZXctLWhlYWRlciAuZWRpdC1idXR0b24tLXdyYXBwZXIgLmVkaXQtcGxheWxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMjE1O1xufVxuXG4uYXNpZGUtdHJhY2tzIHtcbiAgbWluLXdpZHRoOiA0NTBweDtcbn1cblxuLnBsYXlsaXN0LXRyYWNrcy0taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucGxheWxpc3QtdHJhY2tzLS1pdGVtIGZpZ3VyZS5pbWFnZSB7XG4gIGZsZXgtYmFzaXM6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnBsYXlsaXN0LXRyYWNrcy0taXRlbSAudHJhY2staXRlbS0tY29udGVudCB7XG4gIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAtIDYwcHgpO1xufVxuLnBsYXlsaXN0LXRyYWNrcy0taXRlbSAudHJhY2staXRlbS0tY29udGVudCBoNCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlsaXN0LXRyYWNrcy0taXRlbSAudHJhY2staXRlbS0tY29udGVudCBoNDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnBsYXlsaXN0LXRyYWNrcy0taXRlbSAudHJhY2staXRlbS0tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICM3YTgxODg7XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbn0iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_2__["Dispatch"])()
], PlaylistPreviewComponent.prototype, "playlistPreview", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_playlist_preview_selectors__WEBPACK_IMPORTED_MODULE_7__["PlaylistPreviewSelectors"].fetchPlaylistPreview)
], PlaylistPreviewComponent.prototype, "playlist$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_my_playlist_selectors__WEBPACK_IMPORTED_MODULE_8__["MyPlaylistSelectors"].fetchPlaylist)
], PlaylistPreviewComponent.prototype, "myPlaylist$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_current_user_selectors__WEBPACK_IMPORTED_MODULE_9__["CurrentUserSelectors"].fetchCurrentUser)
], PlaylistPreviewComponent.prototype, "currentUser$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlaylistPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-playlist-preview',
                templateUrl: './playlist-preview.component.html',
                styleUrls: ['./playlist-preview.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { playlistPreview: [], playlist$: [], myPlaylist$: [], currentUser$: [] }); })();


/***/ }),

/***/ "./src/app/pages/recommendation/recommendation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/recommendation/recommendation.component.ts ***!
  \******************************************************************/
/*! exports provided: RecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationComponent", function() { return RecommendationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _store_playlist_preview_actions_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/playlist-preview/actions.type */ "./src/app/store/playlist-preview/actions.type.ts");
/* harmony import */ var _store_playlist_preview_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/playlist-preview/selectors */ "./src/app/store/playlist-preview/selectors.ts");
/* harmony import */ var _store_recommendation_actions_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/recommendation/actions.type */ "./src/app/store/recommendation/actions.type.ts");
/* harmony import */ var _store_recommendation_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/recommendation/selectors */ "./src/app/store/recommendation/selectors.ts");
/* harmony import */ var _store_current_user_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/current-user/selectors */ "./src/app/store/current-user/selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/token-expiration-modal/token-expiration-modal.component */ "./src/app/components/token-expiration-modal/token-expiration-modal.component.ts");
/* harmony import */ var _components_recommendation_form_recommendation_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/recommendation-form/recommendation-form.component */ "./src/app/components/recommendation-form/recommendation-form.component.ts");
/* harmony import */ var _components_playlist_track_playlist_track_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/playlist-track/playlist-track.component */ "./src/app/components/playlist-track/playlist-track.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");






// import { MyPlaylistService } from '../../services/my-playlist/my-playlist.service';












function RecommendationComponent_app_recommendation_form_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-recommendation-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("playlist", ctx_r0.playlist)("currentUser", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx_r0.currentUser$))("recommendation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, ctx_r0.recommendation$));
} }
function RecommendationComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Recommended Tracks Based On ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r1.playlist$).name, " ");
} }
function RecommendationComponent_app_playlist_track_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-playlist-track", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tracks", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r2.recommendation$).tracks)("default", true);
} }
function RecommendationComponent_app_spinner_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
} }
class RecommendationComponent {
    constructor(activeRoute // private http: MyPlaylistService
    ) {
        this.activeRoute = activeRoute;
        this.playlistPreview = (playlistId) => new _store_playlist_preview_actions_type__WEBPACK_IMPORTED_MODULE_6__["PlaylistPreviewActionsType"].FetchPlaylistPreview(playlistId);
        this.recommendation = (params) => new _store_recommendation_actions_type__WEBPACK_IMPORTED_MODULE_8__["RecommendationActionsType"].FetchRecommendation(params);
        this.req$ = new subsink__WEBPACK_IMPORTED_MODULE_4__["SubSink"]();
        this.toast = Object(_services_index__WEBPACK_IMPORTED_MODULE_5__["Toast"])();
    }
    ngOnInit() {
        const playlistId = this.activeRoute.snapshot.params.playlistId;
        this.playlistPreview(playlistId);
        this.req$.sink = this.playlist$.subscribe((res) => {
            if (res) {
                this.playlist = res;
                const trackIds = res.tracks.items.slice(0, 5).map((i) => i.track.id);
                this.getRecommendation(trackIds);
            }
        }, (error) => {
            console.log('playlist is null');
            this.toast.fire({ icon: 'error', title: 'Playlist Preview is null' });
        });
    }
    getRecommendation(trackIds) {
        this.recommendation({
            limit: 20,
            seed_tracks: trackIds.toString(),
        });
    }
    ngOnDestroy() {
        this.req$.unsubscribe();
    }
}
RecommendationComponent.ɵfac = function RecommendationComponent_Factory(t) { return new (t || RecommendationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"])); };
RecommendationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecommendationComponent, selectors: [["app-recommendation"]], decls: 19, vars: 14, consts: [[1, "head-body"], [1, "content-title"], [3, "playlist", "currentUser", "recommendation", 4, "ngIf"], [4, "ngIf"], [1, "content-feature"], [1, "content-body"], [1, "recommendation-body"], [3, "tracks", "default", 4, "ngIf"], [3, "onRefreshToken"], [3, "playlist", "currentUser", "recommendation"], [3, "tracks", "default"]], template: function RecommendationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RecommendationComponent_app_recommendation_form_3_Template, 3, 7, "app-recommendation-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "TRACKS RECOMMENDATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RecommendationComponent_p_8_Template, 3, 3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RecommendationComponent_app_playlist_track_14_Template, 2, 4, "app-playlist-track", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-token-expiration-modal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRefreshToken", function RecommendationComponent_Template_app_token_expiration_modal_onRefreshToken_16_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RecommendationComponent_app_spinner_17_Template, 1, 0, "app-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playlist && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx.recommendation$) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, ctx.currentUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, ctx.playlist$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 10, ctx.recommendation$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 12, ctx.recommendation$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_13__["TokenExpirationModalComponent"], _components_recommendation_form_recommendation_form_component__WEBPACK_IMPORTED_MODULE_14__["RecommendationFormComponent"], _components_playlist_track_playlist_track_component__WEBPACK_IMPORTED_MODULE_15__["PlaylistTrackComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY29tbWVuZGF0aW9uL3JlY29tbWVuZGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_2__["Dispatch"])()
], RecommendationComponent.prototype, "playlistPreview", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_2__["Dispatch"])()
], RecommendationComponent.prototype, "recommendation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_store_playlist_preview_selectors__WEBPACK_IMPORTED_MODULE_7__["PlaylistPreviewSelectors"].fetchPlaylistPreview)
], RecommendationComponent.prototype, "playlist$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_store_recommendation_selectors__WEBPACK_IMPORTED_MODULE_9__["RecommendationSelectors"].fetchRecommendation)
], RecommendationComponent.prototype, "recommendation$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_store_current_user_selectors__WEBPACK_IMPORTED_MODULE_10__["CurrentUserSelectors"].fetchCurrentUser)
], RecommendationComponent.prototype, "currentUser$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecommendationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-recommendation',
                templateUrl: './recommendation.component.html',
                styleUrls: ['./recommendation.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }]; }, { playlistPreview: [], recommendation: [], playlist$: [], recommendation$: [], currentUser$: [] }); })();


/***/ }),

/***/ "./src/app/pages/top-artists/top-artists-util.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/top-artists/top-artists-util.ts ***!
  \*******************************************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
const tabs = [
    { label: 'All Time', timeRange: 'long_term', status: 'is-active' },
    { label: 'Last 6 Months', timeRange: 'medium_term', status: '' },
    { label: 'Last 4 Weeks', timeRange: 'short_term', status: '' },
];


/***/ }),

/***/ "./src/app/pages/top-artists/top-artists.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/top-artists/top-artists.component.ts ***!
  \************************************************************/
/*! exports provided: TopArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopArtistsComponent", function() { return TopArtistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var _store_top_artists_actions_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/top-artists/actions.type */ "./src/app/store/top-artists/actions.type.ts");
/* harmony import */ var _store_top_artists_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/top-artists/selectors */ "./src/app/store/top-artists/selectors.ts");
/* harmony import */ var _top_artists_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-artists-util */ "./src/app/pages/top-artists/top-artists-util.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_grid_playlist_grid_playlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/grid-playlist/grid-playlist.component */ "./src/app/components/grid-playlist/grid-playlist.component.ts");
/* harmony import */ var _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/token-expiration-modal/token-expiration-modal.component */ "./src/app/components/token-expiration-modal/token-expiration-modal.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");













function TopArtistsComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopArtistsComponent_li_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const range_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.timeRange(range_r2.timeRange); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const range_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](range_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](range_r2.label);
} }
function TopArtistsComponent_app_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
} }
class TopArtistsComponent {
    constructor(store) {
        this.store = store;
        this.$tabs = _top_artists_util__WEBPACK_IMPORTED_MODULE_6__["tabs"];
        this.fetchTopArtists = (qry = null) => new _store_top_artists_actions_type__WEBPACK_IMPORTED_MODULE_4__["TopArtistsActionsType"].FetchTopArtists(qry);
    }
    ngOnInit() {
        const { top_artists } = this.store.snapshot();
        if (top_artists === null) {
            const local = JSON.parse(localStorage.getItem('top-artists'));
            if (!local || local.time_range === 'undefined') {
                this.fetchTopArtists({ limit: 20, time_range: 'long_term' });
                this.setActiveTab('long_term');
            }
            else {
                this.fetchTopArtists({ limit: 20, time_range: local.time_range });
                this.setActiveTab(local.time_range);
            }
        }
    }
    timeRange(time_range) {
        this.fetchTopArtists({ limit: 20, time_range });
        this.setActiveTab(time_range);
    }
    setActiveTab(time_range) {
        this.$tabs.map((tab) => {
            tab.status = tab.timeRange === time_range ? 'is-active' : '';
            return tab;
        });
    }
}
TopArtistsComponent.ɵfac = function TopArtistsComponent_Factory(t) { return new (t || TopArtistsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
TopArtistsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopArtistsComponent, selectors: [["app-top-artists"]], decls: 17, vars: 7, consts: [[1, "head-body"], [1, "content-title"], [1, "content-feature"], [1, "content-body", "artist-content--body"], [1, "tabs", "is-right"], [3, "class", 4, "ngFor", "ngForOf"], [3, "artists"], [3, "onRefreshToken"], [4, "ngIf"], [3, "click"]], template: function TopArtistsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "TOP ARTIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Collection Of Your Top Artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TopArtistsComponent_li_11_Template, 3, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-grid-playlist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "app-token-expiration-modal", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRefreshToken", function TopArtistsComponent_Template_app_token_expiration_modal_onRefreshToken_14_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TopArtistsComponent_app_spinner_15_Template, 1, 0, "app-spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var tmp_1_0 = null;
        const currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 3, ctx.topArtists$)) == null ? null : tmp_1_0.items;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.$tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("artists", currVal_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 5, ctx.topArtists$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_grid_playlist_grid_playlist_component__WEBPACK_IMPORTED_MODULE_8__["GridPlaylistComponent"], _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_9__["TokenExpirationModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvcC1hcnRpc3RzL3RvcC1hcnRpc3RzLmNvbXBvbmVudC5zY3NzIn0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], TopArtistsComponent.prototype, "fetchTopArtists", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_top_artists_selectors__WEBPACK_IMPORTED_MODULE_5__["TopArtistsSelectors"].fetchTopArtists)
], TopArtistsComponent.prototype, "topArtists$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TopArtistsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-top-artists',
                templateUrl: './top-artists.component.html',
                styleUrls: ['./top-artists.component.scss'],
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { fetchTopArtists: [], topArtists$: [] }); })();


/***/ }),

/***/ "./src/app/pages/top-tracks/top-tracks-util.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/top-tracks/top-tracks-util.ts ***!
  \*****************************************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
const tabs = [
    { label: 'All Time', timeRange: 'long_term', status: 'is-active' },
    { label: 'Last 6 Months', timeRange: 'medium_term', status: '' },
    { label: 'Last 4 Weeks', timeRange: 'short_term', status: '' },
];


/***/ }),

/***/ "./src/app/pages/top-tracks/top-tracks.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/top-tracks/top-tracks.component.ts ***!
  \**********************************************************/
/*! exports provided: TopTracksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTracksComponent", function() { return TopTracksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs-labs/dispatch-decorator */ "./node_modules/@ngxs-labs/dispatch-decorator/__ivy_ngcc__/fesm2015/ngxs-labs-dispatch.js");
/* harmony import */ var _store_top_tracks_actions_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/top-tracks/actions.type */ "./src/app/store/top-tracks/actions.type.ts");
/* harmony import */ var _store_top_tracks_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/top-tracks/selectors */ "./src/app/store/top-tracks/selectors.ts");
/* harmony import */ var _top_tracks_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-tracks-util */ "./src/app/pages/top-tracks/top-tracks-util.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/token-expiration-modal/token-expiration-modal.component */ "./src/app/components/token-expiration-modal/token-expiration-modal.component.ts");
/* harmony import */ var _components_track_item_track_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/track-item/track-item.component */ "./src/app/components/track-item/track-item.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");













function TopTracksComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopTracksComponent_li_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const range_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.timeRange(range_r3.timeRange); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const range_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](range_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](range_r3.label);
} }
function TopTracksComponent_app_track_item_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-track-item", 10);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("track", item_r6);
} }
function TopTracksComponent_app_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
} }
class TopTracksComponent {
    constructor(store) {
        this.store = store;
        this.$tabs = _top_tracks_util__WEBPACK_IMPORTED_MODULE_6__["tabs"];
        this.fetchTopTracks = (qry = null) => new _store_top_tracks_actions_type__WEBPACK_IMPORTED_MODULE_4__["TopTracksActionsType"].FetchTopTracks(qry);
    }
    ngOnInit() {
        const { top_tracks } = this.store.snapshot();
        if (top_tracks === null) {
            const local = JSON.parse(localStorage.getItem('top-tracks'));
            if (!local || local.time_range === 'undefined') {
                this.fetchTopTracks({ limit: 20, time_range: 'long_term' });
                this.setActiveTab('long_term');
            }
            else {
                this.fetchTopTracks({ limit: 20, time_range: local.time_range });
                this.setActiveTab(local.time_range);
            }
        }
    }
    timeRange(time_range) {
        this.fetchTopTracks({ limit: 20, time_range });
        this.setActiveTab(time_range);
    }
    setActiveTab(time_range) {
        this.$tabs.map((tab) => {
            tab.status = tab.timeRange === time_range ? 'is-active' : '';
            return tab;
        });
    }
}
TopTracksComponent.ɵfac = function TopTracksComponent_Factory(t) { return new (t || TopTracksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
TopTracksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopTracksComponent, selectors: [["app-top-tracks"]], decls: 17, vars: 7, consts: [[1, "head-body"], [1, "content-title"], [1, "content-feature"], [1, "content-body"], [1, "tabs", "is-right"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "app-track-item", 3, "track", 4, "ngFor", "ngForOf"], [3, "onRefreshToken"], [4, "ngIf"], [3, "click"], [1, "app-track-item", 3, "track"]], template: function TopTracksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "TOP TRACKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Collection Of Your Most Played Tracks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TopTracksComponent_li_11_Template, 3, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TopTracksComponent_app_track_item_12_Template, 1, 1, "app-track-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "app-token-expiration-modal", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRefreshToken", function TopTracksComponent_Template_app_token_expiration_modal_onRefreshToken_14_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TopTracksComponent_app_spinner_15_Template, 1, 0, "app-spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var tmp_1_0 = null;
        const currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 3, ctx.topTracks$)) == null ? null : tmp_1_0.items;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.$tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", currVal_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 5, ctx.topTracks$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_8__["TokenExpirationModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_track_item_track_item_component__WEBPACK_IMPORTED_MODULE_9__["TrackItemComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvcC10cmFja3MvdG9wLXRyYWNrcy5jb21wb25lbnQuc2NzcyJ9 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_dispatch_decorator__WEBPACK_IMPORTED_MODULE_3__["Dispatch"])()
], TopTracksComponent.prototype, "fetchTopTracks", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_top_tracks_selectors__WEBPACK_IMPORTED_MODULE_5__["TopTracksSelectors"].fetchTopTracks)
], TopTracksComponent.prototype, "topTracks$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TopTracksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-top-tracks',
                templateUrl: './top-tracks.component.html',
                styleUrls: ['./top-tracks.component.scss'],
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { fetchTopTracks: [], topTracks$: [] }); })();


/***/ }),

/***/ "./src/app/services/artist-preview/artist-preview.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/artist-preview/artist-preview.service.ts ***!
  \*******************************************************************/
/*! exports provided: ArtistPreviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistPreviewService", function() { return ArtistPreviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ArtistPreviewService {
    constructor(http) {
        this.http = http;
    }
    fetchArtistPreview(artistId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}artists/${artistId}`
        // { ...httpOptions }
        );
    }
}
ArtistPreviewService.ɵfac = function ArtistPreviewService_Factory(t) { return new (t || ArtistPreviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ArtistPreviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArtistPreviewService, factory: ArtistPreviewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtistPreviewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/artist-top-tracks/artist-top-tracks.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/artist-top-tracks/artist-top-tracks.service.ts ***!
  \*************************************************************************/
/*! exports provided: ArtistTopTracksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistTopTracksService", function() { return ArtistTopTracksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ArtistTopTracksService {
    constructor(http) {
        this.http = http;
    }
    fetchTopTracks(artistId) {
        const country = localStorage.getItem('country');
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}artists/${artistId}/top-tracks?country=${country}`
        // { ...httpOptions }
        );
    }
}
ArtistTopTracksService.ɵfac = function ArtistTopTracksService_Factory(t) { return new (t || ArtistTopTracksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ArtistTopTracksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArtistTopTracksService, factory: ArtistTopTracksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtistTopTracksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/audio-feature/audio-feature.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/audio-feature/audio-feature.service.ts ***!
  \*****************************************************************/
/*! exports provided: AudioFeatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioFeatureService", function() { return AudioFeatureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AudioFeatureService {
    constructor(http) {
        this.http = http;
    }
    fetchAudioFeature(trackId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}audio-features/${trackId}`
        // { ...httpOptions }
        );
    }
}
AudioFeatureService.ɵfac = function AudioFeatureService_Factory(t) { return new (t || AudioFeatureService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AudioFeatureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AudioFeatureService, factory: AudioFeatureService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioFeatureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/follow/follow.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/follow/follow.service.ts ***!
  \***************************************************/
/*! exports provided: FollowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowService", function() { return FollowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class FollowService {
    constructor(http) {
        this.http = http;
    }
    fetchFollowArtists(queryParams = null) {
        const $queryString = Object(_index__WEBPACK_IMPORTED_MODULE_2__["setQueryParams"])(queryParams);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}me/following?type=artist&${$queryString}`
        // { ...httpOptions }
        );
    }
    fetchFollowTracks(queryParams = null) {
        const $queryString = Object(_index__WEBPACK_IMPORTED_MODULE_2__["setQueryParams"])(queryParams);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}me/following?type=tracks&${$queryString}`
        // { ...httpOptions }
        );
    }
    followArtist(artistId) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}me/following?type=artist&ids=${artistId}`, {}
        // { ...httpOptions }
        );
    }
    unFollowArtist(artistId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}me/following?type=artist&ids=${artistId}`
        // { ...httpOptions }
        );
    }
    // default
    followPlaylist(playlistId) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}playlists/${playlistId}/followers`, {}
        // { ...httpOptions }
        );
    }
    unFollowPlaylist(playlistId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}playlists/${playlistId}/followers`
        // { ...httpOptions }
        );
    }
    // active user
    unFollowUserPlaylist(userId, playlistId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}users/${userId}/playlists/${playlistId}/followers`
        // { ...httpOptions }
        );
    }
    followUserPlaylist(userId, playlistId, isPublic = false) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}users/${userId}/playlists/${playlistId}/followers`, { publid: isPublic }
        // { ...httpOptions }
        );
    }
}
FollowService.ɵfac = function FollowService_Factory(t) { return new (t || FollowService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
FollowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FollowService, factory: FollowService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FollowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: httpOptions, setQueryParams, msToTime, Toast, SwalFire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQueryParams", function() { return setQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToTime", function() { return msToTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalFire", function() { return SwalFire; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

const httpOptions = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
};
const setQueryParams = (queryParams = null) => {
    const $query = [];
    if (queryParams !== null) {
        for (const [key, value] of Object.entries(queryParams)) {
            $query.push(`${key}=${value}`.replace(/,/g, '__'));
        }
        // if (queryParams.limit) $query.push(`limit=${queryParams.limit}`);
        // if (queryParams.offset) $query.push(`offset=${queryParams.offset}`);
        // if (queryParams.time_range)
        // $query.push(`time_range=${queryParams.time_range}`);
    }
    return $query.toString().replace(/,/g, '&').replace(/__/g, ',');
};
const msToTime = (s) => {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;
    // return hrs + ':' + mins + ':' + secs + '.' + ms;
    return (mins < 10 ? '0' + mins : mins) + ':' + secs;
};
const Toast = () => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.stopTimer);
        toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.resumeTimer);
    },
});
const SwalFire = (callback, options) => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(Object.assign(Object.assign({}, options), { imageWidth: 200, imageHeight: 200, confirmButtonColor: '#1db954', cancelButtonColor: '#222a2e', showCancelButton: true })).then(callback);
};


/***/ }),

/***/ "./src/app/services/my-playlist/my-playlist.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/my-playlist/my-playlist.service.ts ***!
  \*************************************************************/
/*! exports provided: MyPlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPlaylistService", function() { return MyPlaylistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var axios_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios-observable */ "./node_modules/axios-observable/dist/index.js");
/* harmony import */ var axios_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios_observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class MyPlaylistService {
    constructor(http) {
        this.http = http;
        this.axios = axios_observable__WEBPACK_IMPORTED_MODULE_1___default.a;
    }
    fetchPlaylist(queryParams = null) {
        const $queryString = Object(_index__WEBPACK_IMPORTED_MODULE_3__["setQueryParams"])(queryParams);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].spotify_api}me/playlists?${$queryString}`
        // { ...httpOptions }
        );
    }
    fetchPreviewPlaylist(playlistId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].spotify_api}playlists/${playlistId}`
        // { ...httpOptions }
        );
    }
    editPlaylistDetails(playlistId, reqBody) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].spotify_api}playlists/${playlistId}`, reqBody
        // { ...httpOptions }
        );
    }
    getRecommendation(queryParams) {
        const $queryString = Object(_index__WEBPACK_IMPORTED_MODULE_3__["setQueryParams"])(queryParams);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].spotify_api}recommendations?${$queryString}`
        // { ...httpOptions }
        );
    }
    createPlaylist(userId, params) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].spotify_api}users/${userId}/playlists`, params
        // { ...httpOptions }
        );
    }
    pushTracksToPlaylist(playlistId, uris) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].spotify_api}playlists/${playlistId}/tracks?uris=${uris}`, {}
        // { ...httpOptions }
        );
    }
    removePlaylistItem(playlistId, tracks) {
        return this.axios.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].spotify_api}playlists/${playlistId}/tracks`, Object.assign(Object.assign({}, _index__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]), { data: tracks }));
    }
}
MyPlaylistService.ɵfac = function MyPlaylistService_Factory(t) { return new (t || MyPlaylistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MyPlaylistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyPlaylistService, factory: MyPlaylistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyPlaylistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/related-artists/related-artists.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/related-artists/related-artists.service.ts ***!
  \*********************************************************************/
/*! exports provided: RelatedArtistsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedArtistsService", function() { return RelatedArtistsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class RelatedArtistsService {
    constructor(http) {
        this.http = http;
    }
    fetchRelatedArtists(artistId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}artists/${artistId}/related-artists`
        // { ...httpOptions }
        );
    }
}
RelatedArtistsService.ɵfac = function RelatedArtistsService_Factory(t) { return new (t || RelatedArtistsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RelatedArtistsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RelatedArtistsService, factory: RelatedArtistsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatedArtistsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/top-artists/top-artists.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/top-artists/top-artists.service.ts ***!
  \*************************************************************/
/*! exports provided: TopArtistsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopArtistsService", function() { return TopArtistsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class TopArtistsService {
    constructor(http) {
        this.http = http;
    }
    fetchTopArtists(queryParams = null) {
        const $queryString = Object(_index__WEBPACK_IMPORTED_MODULE_2__["setQueryParams"])(queryParams);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}me/top/artists?${$queryString}`
        // { ...httpOptions }
        );
    }
}
TopArtistsService.ɵfac = function TopArtistsService_Factory(t) { return new (t || TopArtistsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TopArtistsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TopArtistsService, factory: TopArtistsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopArtistsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/top-tracks/top-tracks.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/top-tracks/top-tracks.service.ts ***!
  \***********************************************************/
/*! exports provided: TopTracksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTracksService", function() { return TopTracksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class TopTracksService {
    constructor(http) {
        this.http = http;
    }
    fetchTopTracks(queryParams = null) {
        const $queryString = Object(_index__WEBPACK_IMPORTED_MODULE_2__["setQueryParams"])(queryParams);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].spotify_api}me/top/tracks?${$queryString}`
        // { ...httpOptions }
        );
    }
}
TopTracksService.ɵfac = function TopTracksService_Factory(t) { return new (t || TopTracksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TopTracksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TopTracksService, factory: TopTracksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopTracksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _interceptors_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/index */ "./src/app/interceptors/index.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/callback/callback.component */ "./src/app/pages/callback/callback.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _components_track_item_track_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/track-item/track-item.component */ "./src/app/components/track-item/track-item.component.ts");
/* harmony import */ var _components_grid_playlist_grid_playlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/grid-playlist/grid-playlist.component */ "./src/app/components/grid-playlist/grid-playlist.component.ts");
/* harmony import */ var _components_playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/playlist-item/playlist-item.component */ "./src/app/components/playlist-item/playlist-item.component.ts");
/* harmony import */ var _components_figure_image_figure_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/figure-image/figure-image.component */ "./src/app/components/figure-image/figure-image.component.ts");
/* harmony import */ var _components_follow_btn_follow_btn_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/follow-btn/follow-btn.component */ "./src/app/components/follow-btn/follow-btn.component.ts");
/* harmony import */ var _components_playlist_track_playlist_track_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/playlist-track/playlist-track.component */ "./src/app/components/playlist-track/playlist-track.component.ts");
/* harmony import */ var _components_follow_btn_playlist_follow_btn_playlist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/follow-btn-playlist/follow-btn-playlist.component */ "./src/app/components/follow-btn-playlist/follow-btn-playlist.component.ts");
/* harmony import */ var _components_edit_playlist_btn_edit_playlist_btn_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-playlist-btn/edit-playlist-btn.component */ "./src/app/components/edit-playlist-btn/edit-playlist-btn.component.ts");
/* harmony import */ var _components_recommendation_form_recommendation_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/recommendation-form/recommendation-form.component */ "./src/app/components/recommendation-form/recommendation-form.component.ts");
/* harmony import */ var _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/token-expiration-modal/token-expiration-modal.component */ "./src/app/components/token-expiration-modal/token-expiration-modal.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
/* harmony import */ var _components_built_with_built_with_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/built-with/built-with.component */ "./src/app/components/built-with/built-with.component.ts");
























class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_interceptors_index__WEBPACK_IMPORTED_MODULE_7__["HttpInterceptorProviders"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pages_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
        // AudioFeatureComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_9__["CallbackComponent"],
        _components_track_item_track_item_component__WEBPACK_IMPORTED_MODULE_11__["TrackItemComponent"],
        _components_grid_playlist_grid_playlist_component__WEBPACK_IMPORTED_MODULE_12__["GridPlaylistComponent"],
        _components_playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_13__["PlaylistItemComponent"],
        _components_figure_image_figure_image_component__WEBPACK_IMPORTED_MODULE_14__["FigureImageComponent"],
        _components_follow_btn_follow_btn_component__WEBPACK_IMPORTED_MODULE_15__["FollowBtnComponent"],
        _components_playlist_track_playlist_track_component__WEBPACK_IMPORTED_MODULE_16__["PlaylistTrackComponent"],
        _components_follow_btn_playlist_follow_btn_playlist_component__WEBPACK_IMPORTED_MODULE_17__["FollowBtnPlaylistComponent"],
        _components_edit_playlist_btn_edit_playlist_btn_component__WEBPACK_IMPORTED_MODULE_18__["EditPlaylistBtnComponent"],
        _components_recommendation_form_recommendation_form_component__WEBPACK_IMPORTED_MODULE_19__["RecommendationFormComponent"],
        _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_20__["TokenExpirationModalComponent"],
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__["SpinnerComponent"],
        _components_built_with_built_with_component__WEBPACK_IMPORTED_MODULE_22__["BuiltWithComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]], exports: [_components_track_item_track_item_component__WEBPACK_IMPORTED_MODULE_11__["TrackItemComponent"],
        _components_grid_playlist_grid_playlist_component__WEBPACK_IMPORTED_MODULE_12__["GridPlaylistComponent"],
        _components_playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_13__["PlaylistItemComponent"],
        _components_figure_image_figure_image_component__WEBPACK_IMPORTED_MODULE_14__["FigureImageComponent"],
        _components_follow_btn_follow_btn_component__WEBPACK_IMPORTED_MODULE_15__["FollowBtnComponent"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
        _components_playlist_track_playlist_track_component__WEBPACK_IMPORTED_MODULE_16__["PlaylistTrackComponent"],
        _components_follow_btn_playlist_follow_btn_playlist_component__WEBPACK_IMPORTED_MODULE_17__["FollowBtnPlaylistComponent"],
        _components_edit_playlist_btn_edit_playlist_btn_component__WEBPACK_IMPORTED_MODULE_18__["EditPlaylistBtnComponent"],
        _components_recommendation_form_recommendation_form_component__WEBPACK_IMPORTED_MODULE_19__["RecommendationFormComponent"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
        _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_20__["TokenExpirationModalComponent"],
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__["SpinnerComponent"],
        _components_built_with_built_with_component__WEBPACK_IMPORTED_MODULE_22__["BuiltWithComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                    // AudioFeatureComponent,
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_9__["CallbackComponent"],
                    _components_track_item_track_item_component__WEBPACK_IMPORTED_MODULE_11__["TrackItemComponent"],
                    _components_grid_playlist_grid_playlist_component__WEBPACK_IMPORTED_MODULE_12__["GridPlaylistComponent"],
                    _components_playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_13__["PlaylistItemComponent"],
                    _components_figure_image_figure_image_component__WEBPACK_IMPORTED_MODULE_14__["FigureImageComponent"],
                    _components_follow_btn_follow_btn_component__WEBPACK_IMPORTED_MODULE_15__["FollowBtnComponent"],
                    _components_playlist_track_playlist_track_component__WEBPACK_IMPORTED_MODULE_16__["PlaylistTrackComponent"],
                    _components_follow_btn_playlist_follow_btn_playlist_component__WEBPACK_IMPORTED_MODULE_17__["FollowBtnPlaylistComponent"],
                    _components_edit_playlist_btn_edit_playlist_btn_component__WEBPACK_IMPORTED_MODULE_18__["EditPlaylistBtnComponent"],
                    _components_recommendation_form_recommendation_form_component__WEBPACK_IMPORTED_MODULE_19__["RecommendationFormComponent"],
                    _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_20__["TokenExpirationModalComponent"],
                    _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__["SpinnerComponent"],
                    _components_built_with_built_with_component__WEBPACK_IMPORTED_MODULE_22__["BuiltWithComponent"],
                ],
                exports: [
                    _components_track_item_track_item_component__WEBPACK_IMPORTED_MODULE_11__["TrackItemComponent"],
                    _components_grid_playlist_grid_playlist_component__WEBPACK_IMPORTED_MODULE_12__["GridPlaylistComponent"],
                    _components_playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_13__["PlaylistItemComponent"],
                    _components_figure_image_figure_image_component__WEBPACK_IMPORTED_MODULE_14__["FigureImageComponent"],
                    _components_follow_btn_follow_btn_component__WEBPACK_IMPORTED_MODULE_15__["FollowBtnComponent"],
                    ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
                    _components_playlist_track_playlist_track_component__WEBPACK_IMPORTED_MODULE_16__["PlaylistTrackComponent"],
                    _components_follow_btn_playlist_follow_btn_playlist_component__WEBPACK_IMPORTED_MODULE_17__["FollowBtnPlaylistComponent"],
                    _components_edit_playlist_btn_edit_playlist_btn_component__WEBPACK_IMPORTED_MODULE_18__["EditPlaylistBtnComponent"],
                    _components_recommendation_form_recommendation_form_component__WEBPACK_IMPORTED_MODULE_19__["RecommendationFormComponent"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                    _components_token_expiration_modal_token_expiration_modal_component__WEBPACK_IMPORTED_MODULE_20__["TokenExpirationModalComponent"],
                    _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__["SpinnerComponent"],
                    _components_built_with_built_with_component__WEBPACK_IMPORTED_MODULE_22__["BuiltWithComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ],
                providers: [_interceptors_index__WEBPACK_IMPORTED_MODULE_7__["HttpInterceptorProviders"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/store/artist-preview/actions.type.ts":
/*!******************************************************!*\
  !*** ./src/app/store/artist-preview/actions.type.ts ***!
  \******************************************************/
/*! exports provided: ArtistPreviewActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistPreviewActionsType", function() { return ArtistPreviewActionsType; });
var ArtistPreviewActionsType;
(function (ArtistPreviewActionsType) {
    class FetchArtistPreview {
        constructor(artistId) {
            this.artistId = artistId;
        }
    }
    FetchArtistPreview.type = '[artist-preview] fetch list';
    ArtistPreviewActionsType.FetchArtistPreview = FetchArtistPreview;
})(ArtistPreviewActionsType || (ArtistPreviewActionsType = {}));


/***/ }),

/***/ "./src/app/store/artist-preview/selectors.ts":
/*!***************************************************!*\
  !*** ./src/app/store/artist-preview/selectors.ts ***!
  \***************************************************/
/*! exports provided: ArtistPreviewSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistPreviewSelectors", function() { return ArtistPreviewSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/artist-preview/state.ts");



class ArtistPreviewSelectors {
    static fetchArtistPreview(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_state__WEBPACK_IMPORTED_MODULE_2__["ArtistPreviewState"]])
], ArtistPreviewSelectors, "fetchArtistPreview", null);


/***/ }),

/***/ "./src/app/store/artist-preview/state.ts":
/*!***********************************************!*\
  !*** ./src/app/store/artist-preview/state.ts ***!
  \***********************************************/
/*! exports provided: ArtistPreviewState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistPreviewState", function() { return ArtistPreviewState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/artist-preview/actions.type.ts");
/* harmony import */ var _services_artist_preview_artist_preview_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/artist-preview/artist-preview.service */ "./src/app/services/artist-preview/artist-preview.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");









let ArtistPreviewState = class ArtistPreviewState {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
    }
    fetchArtistPreview({ getState, patchState }, { artistId }) {
        return this.service.fetchArtistPreview(artistId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
            patchState(result);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.log('top-tracks', error);
            // this.auth.authenticateUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
ArtistPreviewState.ɵfac = function ArtistPreviewState_Factory(t) { return new (t || ArtistPreviewState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_artist_preview_artist_preview_service__WEBPACK_IMPORTED_MODULE_6__["ArtistPreviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
ArtistPreviewState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArtistPreviewState, factory: ArtistPreviewState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_5__["ArtistPreviewActionsType"].FetchArtistPreview)
], ArtistPreviewState.prototype, "fetchArtistPreview", null);
ArtistPreviewState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'artist_preview',
        defaults: null,
    })
], ArtistPreviewState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArtistPreviewState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_artist_preview_artist_preview_service__WEBPACK_IMPORTED_MODULE_6__["ArtistPreviewService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, { fetchArtistPreview: [] }); })();


/***/ }),

/***/ "./src/app/store/artist-top-tracks/actions.type.ts":
/*!*********************************************************!*\
  !*** ./src/app/store/artist-top-tracks/actions.type.ts ***!
  \*********************************************************/
/*! exports provided: ArtistTopTracksActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistTopTracksActionsType", function() { return ArtistTopTracksActionsType; });
var ArtistTopTracksActionsType;
(function (ArtistTopTracksActionsType) {
    class FetchArtistTopTracks {
        constructor(artistId) {
            this.artistId = artistId;
        }
    }
    FetchArtistTopTracks.type = '[artist-top-tracks] fetch tracks';
    ArtistTopTracksActionsType.FetchArtistTopTracks = FetchArtistTopTracks;
})(ArtistTopTracksActionsType || (ArtistTopTracksActionsType = {}));


/***/ }),

/***/ "./src/app/store/artist-top-tracks/selectors.ts":
/*!******************************************************!*\
  !*** ./src/app/store/artist-top-tracks/selectors.ts ***!
  \******************************************************/
/*! exports provided: ArtistTopTracksSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistTopTracksSelectors", function() { return ArtistTopTracksSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/artist-top-tracks/state.ts");



class ArtistTopTracksSelectors {
    static fetchTopTracks(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_state__WEBPACK_IMPORTED_MODULE_2__["ArtistTopTracksState"]])
], ArtistTopTracksSelectors, "fetchTopTracks", null);


/***/ }),

/***/ "./src/app/store/artist-top-tracks/state.ts":
/*!**************************************************!*\
  !*** ./src/app/store/artist-top-tracks/state.ts ***!
  \**************************************************/
/*! exports provided: ArtistTopTracksState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistTopTracksState", function() { return ArtistTopTracksState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/artist-top-tracks/actions.type.ts");
/* harmony import */ var _services_artist_top_tracks_artist_top_tracks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/artist-top-tracks/artist-top-tracks.service */ "./src/app/services/artist-top-tracks/artist-top-tracks.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");









let ArtistTopTracksState = class ArtistTopTracksState {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
    }
    fetchTopTracks({ getState, patchState }, { artistId }) {
        return this.service.fetchTopTracks(artistId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
            patchState(result);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.log('top-tracks', error);
            // this.auth.authenticateUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
ArtistTopTracksState.ɵfac = function ArtistTopTracksState_Factory(t) { return new (t || ArtistTopTracksState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_artist_top_tracks_artist_top_tracks_service__WEBPACK_IMPORTED_MODULE_6__["ArtistTopTracksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
ArtistTopTracksState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArtistTopTracksState, factory: ArtistTopTracksState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_5__["ArtistTopTracksActionsType"].FetchArtistTopTracks)
], ArtistTopTracksState.prototype, "fetchTopTracks", null);
ArtistTopTracksState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'artist_top_tracks',
        defaults: null,
    })
], ArtistTopTracksState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArtistTopTracksState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_artist_top_tracks_artist_top_tracks_service__WEBPACK_IMPORTED_MODULE_6__["ArtistTopTracksService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, { fetchTopTracks: [] }); })();


/***/ }),

/***/ "./src/app/store/audio-feature/actions.type.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/audio-feature/actions.type.ts ***!
  \*****************************************************/
/*! exports provided: AudioFeatureActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioFeatureActionsType", function() { return AudioFeatureActionsType; });
var AudioFeatureActionsType;
(function (AudioFeatureActionsType) {
    class FetchAudioFeature {
        constructor(track) {
            this.track = track;
        }
    }
    FetchAudioFeature.type = '[audio-feature]';
    AudioFeatureActionsType.FetchAudioFeature = FetchAudioFeature;
})(AudioFeatureActionsType || (AudioFeatureActionsType = {}));


/***/ }),

/***/ "./src/app/store/audio-feature/selectors.ts":
/*!**************************************************!*\
  !*** ./src/app/store/audio-feature/selectors.ts ***!
  \**************************************************/
/*! exports provided: AudioFeatureSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioFeatureSelectors", function() { return AudioFeatureSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/audio-feature/state.ts");



class AudioFeatureSelectors {
    static fetchAudioFeature(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_state__WEBPACK_IMPORTED_MODULE_2__["AudioFeatureState"]])
], AudioFeatureSelectors, "fetchAudioFeature", null);


/***/ }),

/***/ "./src/app/store/audio-feature/state.ts":
/*!**********************************************!*\
  !*** ./src/app/store/audio-feature/state.ts ***!
  \**********************************************/
/*! exports provided: AudioFeatureState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioFeatureState", function() { return AudioFeatureState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/audio-feature/actions.type.ts");
/* harmony import */ var _services_audio_feature_audio_feature_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/audio-feature/audio-feature.service */ "./src/app/services/audio-feature/audio-feature.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");









let AudioFeatureState = class AudioFeatureState {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
    }
    fetchAudioFeature({ getState, patchState }, { track }) {
        return this.service.fetchAudioFeature(track.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
            patchState(Object.assign(Object.assign({}, track), { feature: result }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.log('current-user', error);
            // this.auth.authenticateUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
AudioFeatureState.ɵfac = function AudioFeatureState_Factory(t) { return new (t || AudioFeatureState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_audio_feature_audio_feature_service__WEBPACK_IMPORTED_MODULE_6__["AudioFeatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
AudioFeatureState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AudioFeatureState, factory: AudioFeatureState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_5__["AudioFeatureActionsType"].FetchAudioFeature)
], AudioFeatureState.prototype, "fetchAudioFeature", null);
AudioFeatureState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'audio_feature',
        defaults: null,
    })
], AudioFeatureState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AudioFeatureState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_audio_feature_audio_feature_service__WEBPACK_IMPORTED_MODULE_6__["AudioFeatureService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, { fetchAudioFeature: [] }); })();


/***/ }),

/***/ "./src/app/store/current-user/actions.type.ts":
/*!****************************************************!*\
  !*** ./src/app/store/current-user/actions.type.ts ***!
  \****************************************************/
/*! exports provided: CurrentUserActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserActionsType", function() { return CurrentUserActionsType; });
var CurrentUserActionsType;
(function (CurrentUserActionsType) {
    class FetchCurrentUser {
    }
    FetchCurrentUser.type = "[current-user] fetch current";
    CurrentUserActionsType.FetchCurrentUser = FetchCurrentUser;
})(CurrentUserActionsType || (CurrentUserActionsType = {}));


/***/ }),

/***/ "./src/app/store/current-user/selectors.ts":
/*!*************************************************!*\
  !*** ./src/app/store/current-user/selectors.ts ***!
  \*************************************************/
/*! exports provided: CurrentUserSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserSelectors", function() { return CurrentUserSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/current-user/state.ts");



class CurrentUserSelectors {
    static fetchCurrentUser(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_state__WEBPACK_IMPORTED_MODULE_2__["CurrentUserState"]])
], CurrentUserSelectors, "fetchCurrentUser", null);


/***/ }),

/***/ "./src/app/store/current-user/state.ts":
/*!*********************************************!*\
  !*** ./src/app/store/current-user/state.ts ***!
  \*********************************************/
/*! exports provided: CurrentUserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserState", function() { return CurrentUserState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/current-user/actions.type.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");








let CurrentUserState = class CurrentUserState {
    constructor(auth) {
        this.auth = auth;
    }
    fetchCurrentUser({ getState, patchState }) {
        const state$ = getState();
        if (state$ == null) {
            return this.auth.fetchCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
                localStorage.setItem('country', result.country);
                patchState(result);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                console.log('current-user', error);
                // this.auth.authenticateUser();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        }
    }
};
CurrentUserState.ɵfac = function CurrentUserState_Factory(t) { return new (t || CurrentUserState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
CurrentUserState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CurrentUserState, factory: CurrentUserState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_5__["CurrentUserActionsType"].FetchCurrentUser)
], CurrentUserState.prototype, "fetchCurrentUser", null);
CurrentUserState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'current_user',
        defaults: null,
    })
], CurrentUserState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CurrentUserState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, { fetchCurrentUser: [] }); })();


/***/ }),

/***/ "./src/app/store/follow/actions.type.ts":
/*!**********************************************!*\
  !*** ./src/app/store/follow/actions.type.ts ***!
  \**********************************************/
/*! exports provided: FollowActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowActionsType", function() { return FollowActionsType; });
var FollowActionsType;
(function (FollowActionsType) {
    class FetchFollowArtists {
        constructor(queryParams = null) {
            this.queryParams = queryParams;
        }
    }
    FetchFollowArtists.type = '[follow-artists] fetch collection';
    FollowActionsType.FetchFollowArtists = FetchFollowArtists;
    class FetchFollowTracks {
        constructor(queryParams = null) {
            this.queryParams = queryParams;
        }
    }
    FetchFollowTracks.type = '[follow-tracks] fetch collection';
    FollowActionsType.FetchFollowTracks = FetchFollowTracks;
})(FollowActionsType || (FollowActionsType = {}));


/***/ }),

/***/ "./src/app/store/follow/artists-state.ts":
/*!***********************************************!*\
  !*** ./src/app/store/follow/artists-state.ts ***!
  \***********************************************/
/*! exports provided: FollowArtistsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowArtistsState", function() { return FollowArtistsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/follow/actions.type.ts");
/* harmony import */ var _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/follow/follow.service */ "./src/app/services/follow/follow.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");









let FollowArtistsState = class FollowArtistsState {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
    }
    fetchFollowArtists({ getState, patchState }, { queryParams }) {
        const state$ = getState();
        if (state$ == null) {
            return this.service.fetchFollowArtists(queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
                patchState(result);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                console.log('top-tracks', error);
                // this.auth.authenticateUser();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        }
    }
};
FollowArtistsState.ɵfac = function FollowArtistsState_Factory(t) { return new (t || FollowArtistsState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_follow_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
FollowArtistsState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FollowArtistsState, factory: FollowArtistsState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_5__["FollowActionsType"].FetchFollowArtists)
], FollowArtistsState.prototype, "fetchFollowArtists", null);
FollowArtistsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'follow_artists',
        defaults: null,
    })
], FollowArtistsState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FollowArtistsState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, { fetchFollowArtists: [] }); })();


/***/ }),

/***/ "./src/app/store/follow/selectors.ts":
/*!*******************************************!*\
  !*** ./src/app/store/follow/selectors.ts ***!
  \*******************************************/
/*! exports provided: FollowSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowSelectors", function() { return FollowSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _artists_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artists-state */ "./src/app/store/follow/artists-state.ts");



class FollowSelectors {
    static fetchFollowArtists(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_artists_state__WEBPACK_IMPORTED_MODULE_2__["FollowArtistsState"]])
], FollowSelectors, "fetchFollowArtists", null);


/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var _current_user_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-user/state */ "./src/app/store/current-user/state.ts");
/* harmony import */ var _top_tracks_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-tracks/state */ "./src/app/store/top-tracks/state.ts");
/* harmony import */ var _audio_feature_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio-feature/state */ "./src/app/store/audio-feature/state.ts");
/* harmony import */ var _top_artists_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-artists/state */ "./src/app/store/top-artists/state.ts");
/* harmony import */ var _related_artists_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./related-artists/state */ "./src/app/store/related-artists/state.ts");
/* harmony import */ var _artist_preview_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artist-preview/state */ "./src/app/store/artist-preview/state.ts");
/* harmony import */ var _artist_top_tracks_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artist-top-tracks/state */ "./src/app/store/artist-top-tracks/state.ts");
/* harmony import */ var _my_playlist_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-playlist/state */ "./src/app/store/my-playlist/state.ts");
/* harmony import */ var _follow_artists_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./follow/artists-state */ "./src/app/store/follow/artists-state.ts");
/* harmony import */ var _playlist_preview_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./playlist-preview/state */ "./src/app/store/playlist-preview/state.ts");
/* harmony import */ var _recommendation_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recommendation/state */ "./src/app/store/recommendation/state.ts");
/* harmony import */ var _internal_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./internal/state */ "./src/app/store/internal/state.ts");












const Store = [
    _current_user_state__WEBPACK_IMPORTED_MODULE_0__["CurrentUserState"],
    _top_tracks_state__WEBPACK_IMPORTED_MODULE_1__["TopTracksState"],
    _audio_feature_state__WEBPACK_IMPORTED_MODULE_2__["AudioFeatureState"],
    _top_artists_state__WEBPACK_IMPORTED_MODULE_3__["TopArtistsState"],
    _related_artists_state__WEBPACK_IMPORTED_MODULE_4__["RelatedArtistsState"],
    _artist_preview_state__WEBPACK_IMPORTED_MODULE_5__["ArtistPreviewState"],
    _artist_top_tracks_state__WEBPACK_IMPORTED_MODULE_6__["ArtistTopTracksState"],
    _my_playlist_state__WEBPACK_IMPORTED_MODULE_7__["MyPlaylistState"],
    _follow_artists_state__WEBPACK_IMPORTED_MODULE_8__["FollowArtistsState"],
    _playlist_preview_state__WEBPACK_IMPORTED_MODULE_9__["PlaylistPreviewState"],
    _recommendation_state__WEBPACK_IMPORTED_MODULE_10__["RecommendationState"],
    _internal_state__WEBPACK_IMPORTED_MODULE_11__["InternalState"],
];


/***/ }),

/***/ "./src/app/store/internal/actions.type.ts":
/*!************************************************!*\
  !*** ./src/app/store/internal/actions.type.ts ***!
  \************************************************/
/*! exports provided: InternalActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalActionsType", function() { return InternalActionsType; });
var InternalActionsType;
(function (InternalActionsType) {
    class setInternal {
        constructor(params) {
            this.params = params;
        }
    }
    setInternal.type = '[internal-action] set collection';
    InternalActionsType.setInternal = setInternal;
})(InternalActionsType || (InternalActionsType = {}));


/***/ }),

/***/ "./src/app/store/internal/selectors.ts":
/*!*********************************************!*\
  !*** ./src/app/store/internal/selectors.ts ***!
  \*********************************************/
/*! exports provided: InternalSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalSelectors", function() { return InternalSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/internal/state.ts");



class InternalSelectors {
    static fetchInternal(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_state__WEBPACK_IMPORTED_MODULE_2__["InternalState"]])
], InternalSelectors, "fetchInternal", null);


/***/ }),

/***/ "./src/app/store/internal/state.ts":
/*!*****************************************!*\
  !*** ./src/app/store/internal/state.ts ***!
  \*****************************************/
/*! exports provided: InternalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalState", function() { return InternalState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/internal/actions.type.ts");



// import { throwError } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';


// import { AuthService } from '../../auth/auth.service';
let InternalState = class InternalState {
    constructor() { }
    setInternal({ getState, patchState }, { params }) {
        const state$ = getState();
        patchState(Object.assign(Object.assign({}, state$), params));
    }
};
InternalState.ɵfac = function InternalState_Factory(t) { return new (t || InternalState)(); };
InternalState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InternalState, factory: InternalState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_3__["InternalActionsType"].setInternal)
], InternalState.prototype, "setInternal", null);
InternalState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'internal',
        defaults: null,
    })
], InternalState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InternalState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, { setInternal: [] }); })();


/***/ }),

/***/ "./src/app/store/my-playlist/actions.type.ts":
/*!***************************************************!*\
  !*** ./src/app/store/my-playlist/actions.type.ts ***!
  \***************************************************/
/*! exports provided: MyPlaylistActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPlaylistActionsType", function() { return MyPlaylistActionsType; });
var MyPlaylistActionsType;
(function (MyPlaylistActionsType) {
    class FetchPlaylist {
        constructor(queryParams = null) {
            this.queryParams = queryParams;
        }
    }
    FetchPlaylist.type = '[my-playlist] fetch collection';
    MyPlaylistActionsType.FetchPlaylist = FetchPlaylist;
})(MyPlaylistActionsType || (MyPlaylistActionsType = {}));


/***/ }),

/***/ "./src/app/store/my-playlist/selectors.ts":
/*!************************************************!*\
  !*** ./src/app/store/my-playlist/selectors.ts ***!
  \************************************************/
/*! exports provided: MyPlaylistSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPlaylistSelectors", function() { return MyPlaylistSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/my-playlist/state.ts");



class MyPlaylistSelectors {
    static fetchPlaylist(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_state__WEBPACK_IMPORTED_MODULE_2__["MyPlaylistState"]])
], MyPlaylistSelectors, "fetchPlaylist", null);


/***/ }),

/***/ "./src/app/store/my-playlist/state.ts":
/*!********************************************!*\
  !*** ./src/app/store/my-playlist/state.ts ***!
  \********************************************/
/*! exports provided: MyPlaylistState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPlaylistState", function() { return MyPlaylistState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/my-playlist/actions.type.ts");
/* harmony import */ var _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/my-playlist/my-playlist.service */ "./src/app/services/my-playlist/my-playlist.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");









let MyPlaylistState = class MyPlaylistState {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
    }
    fetchPlaylist({ getState, patchState }, { queryParams }) {
        const state$ = getState();
        if (state$ == null) {
            return this.service.fetchPlaylist(queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
                patchState(result);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                console.log('top-tracks', error);
                // this.auth.authenticateUser();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        }
    }
};
MyPlaylistState.ɵfac = function MyPlaylistState_Factory(t) { return new (t || MyPlaylistState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_6__["MyPlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
MyPlaylistState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MyPlaylistState, factory: MyPlaylistState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_5__["MyPlaylistActionsType"].FetchPlaylist)
], MyPlaylistState.prototype, "fetchPlaylist", null);
MyPlaylistState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'my_playlist',
        defaults: null,
    })
], MyPlaylistState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyPlaylistState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_6__["MyPlaylistService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, { fetchPlaylist: [] }); })();


/***/ }),

/***/ "./src/app/store/playlist-preview/actions.type.ts":
/*!********************************************************!*\
  !*** ./src/app/store/playlist-preview/actions.type.ts ***!
  \********************************************************/
/*! exports provided: PlaylistPreviewActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPreviewActionsType", function() { return PlaylistPreviewActionsType; });
var PlaylistPreviewActionsType;
(function (PlaylistPreviewActionsType) {
    class FetchPlaylistPreview {
        constructor(playlistId) {
            this.playlistId = playlistId;
        }
    }
    FetchPlaylistPreview.type = '[playlist-preview] preview';
    PlaylistPreviewActionsType.FetchPlaylistPreview = FetchPlaylistPreview;
})(PlaylistPreviewActionsType || (PlaylistPreviewActionsType = {}));


/***/ }),

/***/ "./src/app/store/playlist-preview/selectors.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/playlist-preview/selectors.ts ***!
  \*****************************************************/
/*! exports provided: PlaylistPreviewSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPreviewSelectors", function() { return PlaylistPreviewSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/playlist-preview/state.ts");



class PlaylistPreviewSelectors {
    static fetchPlaylistPreview(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_state__WEBPACK_IMPORTED_MODULE_2__["PlaylistPreviewState"]])
], PlaylistPreviewSelectors, "fetchPlaylistPreview", null);


/***/ }),

/***/ "./src/app/store/playlist-preview/state.ts":
/*!*************************************************!*\
  !*** ./src/app/store/playlist-preview/state.ts ***!
  \*************************************************/
/*! exports provided: PlaylistPreviewState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPreviewState", function() { return PlaylistPreviewState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/playlist-preview/actions.type.ts");
/* harmony import */ var _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/my-playlist/my-playlist.service */ "./src/app/services/my-playlist/my-playlist.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");









let PlaylistPreviewState = class PlaylistPreviewState {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
    }
    fetchPlaylistPreview({ getState, patchState }, { playlistId }) {
        const state$ = getState();
        if (state$ == null) {
            return this.service.fetchPreviewPlaylist(playlistId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
                patchState(result);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                console.log('playlist-preview', error);
                // this.auth.authenticateUser();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        }
    }
};
PlaylistPreviewState.ɵfac = function PlaylistPreviewState_Factory(t) { return new (t || PlaylistPreviewState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_6__["MyPlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
PlaylistPreviewState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlaylistPreviewState, factory: PlaylistPreviewState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_5__["PlaylistPreviewActionsType"].FetchPlaylistPreview)
], PlaylistPreviewState.prototype, "fetchPlaylistPreview", null);
PlaylistPreviewState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'playlist_preview',
        defaults: null,
    })
], PlaylistPreviewState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlaylistPreviewState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_6__["MyPlaylistService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, { fetchPlaylistPreview: [] }); })();


/***/ }),

/***/ "./src/app/store/recommendation/actions.type.ts":
/*!******************************************************!*\
  !*** ./src/app/store/recommendation/actions.type.ts ***!
  \******************************************************/
/*! exports provided: RecommendationActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationActionsType", function() { return RecommendationActionsType; });
var RecommendationActionsType;
(function (RecommendationActionsType) {
    class FetchRecommendation {
        constructor(queryParams) {
            this.queryParams = queryParams;
        }
    }
    FetchRecommendation.type = '[playlist-recommendation] fetch list';
    RecommendationActionsType.FetchRecommendation = FetchRecommendation;
})(RecommendationActionsType || (RecommendationActionsType = {}));


/***/ }),

/***/ "./src/app/store/recommendation/selectors.ts":
/*!***************************************************!*\
  !*** ./src/app/store/recommendation/selectors.ts ***!
  \***************************************************/
/*! exports provided: RecommendationSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationSelectors", function() { return RecommendationSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/recommendation/state.ts");



class RecommendationSelectors {
    static fetchRecommendation(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_state__WEBPACK_IMPORTED_MODULE_2__["RecommendationState"]])
], RecommendationSelectors, "fetchRecommendation", null);


/***/ }),

/***/ "./src/app/store/recommendation/state.ts":
/*!***********************************************!*\
  !*** ./src/app/store/recommendation/state.ts ***!
  \***********************************************/
/*! exports provided: RecommendationState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationState", function() { return RecommendationState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/recommendation/actions.type.ts");
/* harmony import */ var _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/my-playlist/my-playlist.service */ "./src/app/services/my-playlist/my-playlist.service.ts");








let RecommendationState = class RecommendationState {
    constructor(service) {
        this.service = service;
    }
    fetchRecommendation({ getState, patchState }, { queryParams }) {
        const state$ = getState();
        if (state$ == null) {
            return this.service.getRecommendation(queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
                patchState(result);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                console.log('get-recommendation', error);
                // this.auth.authenticateUser();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        }
    }
};
RecommendationState.ɵfac = function RecommendationState_Factory(t) { return new (t || RecommendationState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_6__["MyPlaylistService"])); };
RecommendationState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RecommendationState, factory: RecommendationState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_5__["RecommendationActionsType"].FetchRecommendation)
], RecommendationState.prototype, "fetchRecommendation", null);
RecommendationState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'recommendation',
        defaults: null,
    })
], RecommendationState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecommendationState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_my_playlist_my_playlist_service__WEBPACK_IMPORTED_MODULE_6__["MyPlaylistService"] }]; }, { fetchRecommendation: [] }); })();


/***/ }),

/***/ "./src/app/store/related-artists/actions.type.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/related-artists/actions.type.ts ***!
  \*******************************************************/
/*! exports provided: RelatedArtistActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedArtistActionsType", function() { return RelatedArtistActionsType; });
var RelatedArtistActionsType;
(function (RelatedArtistActionsType) {
    class FetchRelatedArtist {
        constructor(artistId) {
            this.artistId = artistId;
        }
    }
    FetchRelatedArtist.type = '[related-artists] fetch list';
    RelatedArtistActionsType.FetchRelatedArtist = FetchRelatedArtist;
})(RelatedArtistActionsType || (RelatedArtistActionsType = {}));


/***/ }),

/***/ "./src/app/store/related-artists/selectors.ts":
/*!****************************************************!*\
  !*** ./src/app/store/related-artists/selectors.ts ***!
  \****************************************************/
/*! exports provided: RelatedArtistsSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedArtistsSelectors", function() { return RelatedArtistsSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/related-artists/state.ts");



class RelatedArtistsSelectors {
    static fetchTopArtists(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_state__WEBPACK_IMPORTED_MODULE_2__["RelatedArtistsState"]])
], RelatedArtistsSelectors, "fetchTopArtists", null);


/***/ }),

/***/ "./src/app/store/related-artists/state.ts":
/*!************************************************!*\
  !*** ./src/app/store/related-artists/state.ts ***!
  \************************************************/
/*! exports provided: RelatedArtistsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedArtistsState", function() { return RelatedArtistsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/related-artists/actions.type.ts");
/* harmony import */ var _services_related_artists_related_artists_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/related-artists/related-artists.service */ "./src/app/services/related-artists/related-artists.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");









let RelatedArtistsState = class RelatedArtistsState {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
    }
    fetchRelatedArtists({ getState, patchState }, { artistId }) {
        return this.service.fetchRelatedArtists(artistId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
            patchState(result);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.log('top-tracks', error);
            // this.auth.authenticateUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
RelatedArtistsState.ɵfac = function RelatedArtistsState_Factory(t) { return new (t || RelatedArtistsState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_related_artists_related_artists_service__WEBPACK_IMPORTED_MODULE_6__["RelatedArtistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
RelatedArtistsState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RelatedArtistsState, factory: RelatedArtistsState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_5__["RelatedArtistActionsType"].FetchRelatedArtist)
], RelatedArtistsState.prototype, "fetchRelatedArtists", null);
RelatedArtistsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'related_artists',
        defaults: null,
    })
], RelatedArtistsState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RelatedArtistsState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_related_artists_related_artists_service__WEBPACK_IMPORTED_MODULE_6__["RelatedArtistsService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, { fetchRelatedArtists: [] }); })();


/***/ }),

/***/ "./src/app/store/top-artists/actions.type.ts":
/*!***************************************************!*\
  !*** ./src/app/store/top-artists/actions.type.ts ***!
  \***************************************************/
/*! exports provided: TopArtistsActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopArtistsActionsType", function() { return TopArtistsActionsType; });
var TopArtistsActionsType;
(function (TopArtistsActionsType) {
    class FetchTopArtists {
        constructor(queryParams = null) {
            this.queryParams = queryParams;
        }
    }
    FetchTopArtists.type = '[top-artists] fetch list';
    TopArtistsActionsType.FetchTopArtists = FetchTopArtists;
})(TopArtistsActionsType || (TopArtistsActionsType = {}));


/***/ }),

/***/ "./src/app/store/top-artists/selectors.ts":
/*!************************************************!*\
  !*** ./src/app/store/top-artists/selectors.ts ***!
  \************************************************/
/*! exports provided: TopArtistsSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopArtistsSelectors", function() { return TopArtistsSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/top-artists/state.ts");



class TopArtistsSelectors {
    static fetchTopArtists(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_state__WEBPACK_IMPORTED_MODULE_2__["TopArtistsState"]])
], TopArtistsSelectors, "fetchTopArtists", null);


/***/ }),

/***/ "./src/app/store/top-artists/state.ts":
/*!********************************************!*\
  !*** ./src/app/store/top-artists/state.ts ***!
  \********************************************/
/*! exports provided: TopArtistsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopArtistsState", function() { return TopArtistsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/top-artists/actions.type.ts");
/* harmony import */ var _services_top_artists_top_artists_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/top-artists/top-artists.service */ "./src/app/services/top-artists/top-artists.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");









let TopArtistsState = class TopArtistsState {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
    }
    fetchTopArtists({ getState, patchState }, { queryParams }) {
        const state$ = getState();
        const tp = JSON.parse(localStorage.getItem('top-artists'));
        if (state$ == null ||
            tp.time_range === 'undefined' ||
            tp.time_range !== (queryParams === null || queryParams === void 0 ? void 0 : queryParams.time_range)) {
            return this.service.fetchTopArtists(queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
                patchState(result);
                localStorage.setItem('top-artists', JSON.stringify({ time_range: queryParams === null || queryParams === void 0 ? void 0 : queryParams.time_range }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                console.log('top-tracks', error);
                // this.auth.authenticateUser();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        }
    }
};
TopArtistsState.ɵfac = function TopArtistsState_Factory(t) { return new (t || TopArtistsState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_top_artists_top_artists_service__WEBPACK_IMPORTED_MODULE_6__["TopArtistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
TopArtistsState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TopArtistsState, factory: TopArtistsState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_5__["TopArtistsActionsType"].FetchTopArtists)
], TopArtistsState.prototype, "fetchTopArtists", null);
TopArtistsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'top_artists',
        defaults: null,
    })
], TopArtistsState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TopArtistsState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_top_artists_top_artists_service__WEBPACK_IMPORTED_MODULE_6__["TopArtistsService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, { fetchTopArtists: [] }); })();


/***/ }),

/***/ "./src/app/store/top-tracks/actions.type.ts":
/*!**************************************************!*\
  !*** ./src/app/store/top-tracks/actions.type.ts ***!
  \**************************************************/
/*! exports provided: TopTracksActionsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTracksActionsType", function() { return TopTracksActionsType; });
var TopTracksActionsType;
(function (TopTracksActionsType) {
    class FetchTopTracks {
        constructor(queryParams = null) {
            this.queryParams = queryParams;
        }
    }
    FetchTopTracks.type = '[top-tracks] fetch list';
    TopTracksActionsType.FetchTopTracks = FetchTopTracks;
})(TopTracksActionsType || (TopTracksActionsType = {}));


/***/ }),

/***/ "./src/app/store/top-tracks/selectors.ts":
/*!***********************************************!*\
  !*** ./src/app/store/top-tracks/selectors.ts ***!
  \***********************************************/
/*! exports provided: TopTracksSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTracksSelectors", function() { return TopTracksSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/top-tracks/state.ts");



class TopTracksSelectors {
    static fetchTopTracks(state) {
        return state;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_state__WEBPACK_IMPORTED_MODULE_2__["TopTracksState"]])
], TopTracksSelectors, "fetchTopTracks", null);


/***/ }),

/***/ "./src/app/store/top-tracks/state.ts":
/*!*******************************************!*\
  !*** ./src/app/store/top-tracks/state.ts ***!
  \*******************************************/
/*! exports provided: TopTracksState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTracksState", function() { return TopTracksState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.type */ "./src/app/store/top-tracks/actions.type.ts");
/* harmony import */ var _services_top_tracks_top_tracks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/top-tracks/top-tracks.service */ "./src/app/services/top-tracks/top-tracks.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");









let TopTracksState = class TopTracksState {
    constructor(service, auth) {
        this.service = service;
        this.auth = auth;
    }
    fetchTopTracks({ getState, patchState }, { queryParams }) {
        const state$ = getState();
        const tp = JSON.parse(localStorage.getItem('top-tracks'));
        if (state$ == null ||
            tp.time_range === 'undefined' ||
            tp.time_range !== (queryParams === null || queryParams === void 0 ? void 0 : queryParams.time_range)) {
            return this.service.fetchTopTracks(queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
                patchState(result);
                localStorage.setItem('top-tracks', JSON.stringify({ time_range: queryParams === null || queryParams === void 0 ? void 0 : queryParams.time_range }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                console.log('top-tracks', error);
                // this.auth.authenticateUser();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        }
    }
};
TopTracksState.ɵfac = function TopTracksState_Factory(t) { return new (t || TopTracksState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_top_tracks_top_tracks_service__WEBPACK_IMPORTED_MODULE_6__["TopTracksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
TopTracksState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TopTracksState, factory: TopTracksState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_type__WEBPACK_IMPORTED_MODULE_5__["TopTracksActionsType"].FetchTopTracks)
], TopTracksState.prototype, "fetchTopTracks", null);
TopTracksState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'top_tracks',
        defaults: null,
    })
], TopTracksState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TopTracksState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_top_tracks_top_tracks_service__WEBPACK_IMPORTED_MODULE_6__["TopTracksService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, { fetchTopTracks: [] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    client_id: 'befabd15af504b89ada330c754977416',
    client_secret: 'e5cc8b81b2ab4732b6c3f7fef4eb0787',
    redirect_uri: 'http://localhost:4200/callback',
    spotify_api: 'https://api.spotify.com/v1/',
    spotify_api_token: 'https://accounts.spotify.com/api/token',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanpagaduan/Projects/dummie-proj/spotify-profile/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map