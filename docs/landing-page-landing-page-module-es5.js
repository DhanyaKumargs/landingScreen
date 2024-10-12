function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page-landing-page-module"], {
  /***/
  "./src/app/landing-page/home/home.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/landing-page/home/home.component.ts ***!
    \*****************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function _src_app_landingPage_home_homeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_ng_container_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_ng_container_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r3.logo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.content);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.companyLogo = ["data:image/png;base64,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", "data:image/png;base64,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", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAs-4OCh7qSe_gKUVxt3QFs9JS2h0VBs9qpg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYs8owJQokYqXTWRIL4QF7FaeEIgkF6nXGQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7RSkCR0dDTa2lQe0RbFSjcFH7E-zDUHFNA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwGYmjhovX0tjJeU6ssEfBPdQQvGuw1N64Q&s"];
        this.temp = [{
          logo: 'fa-solid fa-people-group',
          description: 'MemberShip Organisation',
          content: 'our embership management software provides'
        }, {
          logo: 'fa-solid fa-buildings',
          description: 'Natinal Association',
          content: 'our embership management software provides'
        }, {
          logo: 'fa-solid fa-group-arrows-rotate',
          description: 'MemberShip Organisation',
          content: 'our embership management software provides'
        }];
      }

      return _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 35,
      vars: 2,
      consts: [["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide", "mx-auto", 2, "max-width", "800px"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpMR-9z3bcnk2YiZ0YA_NCY9X_eiFOOglxg&s", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScZbSd-TTJVQFTAWqBFJhhcLbRGr5z3eSGw&s", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "...", "alt", "Third slide", 1, "d-block", "w-100"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "container", "mt-3"], [1, "text-center"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "text-center", "mt-5", "row"], [1, "col-4"], [1, "text-center", "row"], [1, "col-4", "text-secondary"], [1, "row", "ml-3"], [1, "col-md-2", "text-center"], ["alt", "Company Logo", 1, "img-size", 3, "src"], [1, "col-md-4", "text-center"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Our Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "We have been working with some Fortune 500+ clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_ng_container_23_Template, 3, 1, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Manage your entire comunity in a single system");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Who is next suitable for ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_ng_container_34_Template, 8, 5, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyLogo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.temp);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".img-size[_ngcontent-%COMP%]{\n    height: 30px;\n    width: 30px;\n}\n\n.img-size2[_ngcontent-%COMP%]{\n    height: 40px;\n    width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXNpemV7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuXG4uaW1nLXNpemUye1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/landing-page-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/landing-page/landing-page-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: LandingPageRoutingModule */

  /***/
  function _src_app_landingPage_landingPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function () {
      return LandingPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");

    var routes = [{
      path: '',
      component: _landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]
    }];

    var LandingPageRoutingModule =
    /*#__PURE__*/
    _createClass(function LandingPageRoutingModule() {
      _classCallCheck(this, LandingPageRoutingModule);
    });

    LandingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LandingPageRoutingModule
    });
    LandingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LandingPageRoutingModule_Factory(t) {
        return new (t || LandingPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/landing-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.ts ***!
    \********************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function _src_app_landingPage_landingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/landing-page/home/home.component.ts");

    var LandingPageComponent =
    /*#__PURE__*/
    function () {
      function LandingPageComponent() {
        _classCallCheck(this, LandingPageComponent);
      }

      return _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
      return new (t || LandingPageComponent)();
    };

    LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingPageComponent,
      selectors: [["app-landing-page"]],
      decls: 31,
      vars: 0,
      consts: [[1, "row", "padding-left-5"], [1, "col-md-12"], [1, "navbar"], [1, "nav-list"], [1, "paddin-right-200"], ["src", "data:image/jpeg;base64,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", "alt", "Nexcent", 1, "image-height"], [1, "nav-item"], ["routerLink", "/"], ["routerLink", "/services"], ["routerLink", "/about"], ["routerLink", "/contact"], [1, "col", "padding-left-3"], [1, "button-background"], [1, "btn", "btn-success"]],
      template: function LandingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Feature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "testimonial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "FAQ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
      styles: [".image-height[_ngcontent-%COMP%]{\n    height: 40px;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    padding: 10px;             \n  }\n\n  .nav-list[_ngcontent-%COMP%] {\n    list-style-type: none;     \n    display: flex;             \n    margin: 0;                 \n    padding: 0;                \n  }\n\n  .nav-item[_ngcontent-%COMP%] {\n    margin-right: 20px; \n    margin-top: 10px;       \n  }\n\n  .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;     \n  }\n\n  .image-height[_ngcontent-%COMP%] {\n    max-height: 100px; \n    width: auto;       \n  }\n\n  .paddin-right-200[_ngcontent-%COMP%]{\n    padding-right: 200px;\n  }\n\n  .button-background[_ngcontent-%COMP%]{\n    border: white;\n    height: 35px;\n    background-color: white;\n  }\n\n  .signup-button-background[_ngcontent-%COMP%]{\n    border: white;\n    border-radius: 10px;\n    height: 35px;\n    background-color: rgb(64, 224, 64);\n  }\n\n  .padding-left-5[_ngcontent-%COMP%]{\n      padding-left: 500px;\n  }\n\n  .padding-left-3[_ngcontent-%COMP%]{\n    padding-left: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhLGNBQWMsOEJBQThCO0VBQzNEOztFQUVBO0lBQ0UscUJBQXFCLE1BQU0seUJBQXlCO0lBQ3BELGFBQWEsY0FBYyxzQ0FBc0M7SUFDakUsU0FBUyxrQkFBa0IsMEJBQTBCO0lBQ3JELFVBQVUsaUJBQWlCLDJCQUEyQjtFQUN4RDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsUUFBUSx3QkFBd0I7RUFDbEQ7O0VBRUE7SUFDRSxxQkFBcUIsTUFBTSxxQkFBcUI7RUFDbEQ7O0VBRUE7SUFDRSxpQkFBaUIsRUFBRSxtQ0FBbUM7SUFDdEQsV0FBVyxRQUFRLDBCQUEwQjtFQUMvQzs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFJQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0NBQWtDO0VBQ3BDOztFQUVBO01BQ0ksbUJBQW1CO0VBQ3ZCOztFQUVBO0lBQ0UsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgLmltYWdlLWhlaWdodHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cblxuICAubmF2YmFyIHtcbiAgICBwYWRkaW5nOiAxMHB4OyAgICAgICAgICAgICAvKiBQYWRkaW5nIGFyb3VuZCB0aGUgbmF2YmFyICovXG4gIH1cbiAgXG4gIC5uYXYtbGlzdCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyAgICAgLyogUmVtb3ZlIGJ1bGxldCBwb2ludHMgKi9cbiAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgICAgICAvKiBVc2UgZmxleGJveCBmb3IgaG9yaXpvbnRhbCBsYXlvdXQgKi9cbiAgICBtYXJnaW46IDA7ICAgICAgICAgICAgICAgICAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbiAgICBwYWRkaW5nOiAwOyAgICAgICAgICAgICAgICAvKiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nICovXG4gIH1cbiAgXG4gIC5uYXYtaXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyBcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyAgICAgICAvKiBTcGFjZSBiZXR3ZWVuIGl0ZW1zICovXG4gIH1cbiAgXG4gIC5uYXYtaXRlbSBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICAgICAvKiBSZW1vdmUgdW5kZXJsaW5lICovXG4gIH1cbiAgXG4gIC5pbWFnZS1oZWlnaHQge1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4OyAvKiBTZXQgYSBtYXggaGVpZ2h0IGZvciB0aGUgaW1hZ2UgKi9cbiAgICB3aWR0aDogYXV0bzsgICAgICAgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXG4gIH1cblxuICAucGFkZGluLXJpZ2h0LTIwMHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcbiAgfVxuXG5cblxuICAuYnV0dG9uLWJhY2tncm91bmR7XG4gICAgYm9yZGVyOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAuc2lnbnVwLWJ1dHRvbi1iYWNrZ3JvdW5ke1xuICAgIGJvcmRlcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCAyMjQsIDY0KTtcbiAgfVxuICBcbiAgLnBhZGRpbmctbGVmdC01e1xuICAgICAgcGFkZGluZy1sZWZ0OiA1MDBweDtcbiAgfVxuXG4gIC5wYWRkaW5nLWxlZnQtM3tcbiAgICBwYWRkaW5nLWxlZnQ6IDMwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing-page',
          templateUrl: './landing-page.component.html',
          styleUrls: ['./landing-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/landing-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/landing-page/landing-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: LandingPageModule */

  /***/
  function _src_app_landingPage_landingPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () {
      return LandingPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./landing-page-routing.module */
    "./src/app/landing-page/landing-page-routing.module.ts");
    /* harmony import */


    var _landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/landing-page/home/home.component.ts");

    var LandingPageModule =
    /*#__PURE__*/
    _createClass(function LandingPageModule() {
      _classCallCheck(this, LandingPageModule);
    });

    LandingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LandingPageModule
    });
    LandingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LandingPageModule_Factory(t) {
        return new (t || LandingPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingPageModule, {
        declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingPageRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=landing-page-landing-page-module-es5.js.map