"use strict";
(self["webpackChunkngx_progress_overlay_ws"] = self["webpackChunkngx_progress_overlay_ws"] || []).push([["main"],{

/***/ 9393:
/*!*********************************************************************************!*\
  !*** ./projects/ngx-progress-overlay/src/lib/ngx-progress-overlay.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxProgressOverlayComponent: () => (/* binding */ NgxProgressOverlayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_progress_overlay_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-progress-overlay.service */ 7715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



const _c0 = function (a0) {
  return {
    backgroundColor: a0
  };
};
const _c1 = function (a0) {
  return {
    fill: a0
  };
};
function NgxProgressOverlayComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "circle", 4)(4, "circle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "g", 6)(6, "text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "text", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx_r0.overlayColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("stroke-width", ctx_r0.donutWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("stroke", ctx_r0.progressColor)("stroke-width", ctx_r0.donutWidth)("stroke-dasharray", ctx_r0.progressFormatted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx_r0.valueColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.progressValue, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx_r0.textColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.progressText, " ");
  }
}
class NgxProgressOverlayComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.progressColor = '#c2185b';
    this.progressValue = 0;
    this.progressText = '';
    this.displayToggle = false;
    this.progressFormatted = '0 100';
    this.valueColor = 'white';
    this.textColor = 'white';
    this.donutWidth = 1;
    this.overlayColor = 'rgba(0,0,0,0.8)';
  }
  ngOnInit() {
    // Subscribe for toggle display
    this.dataService.display$.subscribe(d => {
      this.displayToggle = d;
    });
    // Subscribe for value changes
    this.dataService.value$.subscribe(v => {
      if (v < 0) {
        this.progressValue = 0;
      } else if (v > 100) {
        this.progressValue = 100;
      } else {
        this.progressValue = v;
      }
      let remainingValue = 100 - this.progressValue;
      this.progressFormatted = this.progressValue.toString() + ' ' + remainingValue.toString();
    });
    // Subscribe for text changes
    this.dataService.text$.subscribe(t => {
      this.progressText = t;
    });
    // Subscribe for color changes
    this.dataService.color$.subscribe(c => {
      if (c != undefined && c != '') {
        this.progressColor = c;
      }
    });
    // Subscribe for value color changes
    this.dataService.valueColor$.subscribe(c => {
      if (c != undefined && c != '') {
        this.valueColor = c;
      }
    });
    // Subscribe for text color changes
    this.dataService.textColor$.subscribe(c => {
      if (c != undefined && c != '') {
        this.textColor = c;
      }
    });
    // Subscribe for donut width changes
    this.dataService.donutWidth$.subscribe(w => {
      if (w != undefined && w > 0) {
        this.donutWidth = w;
      }
    });
    // Subscribe for overlay color changes
    this.dataService.overlayColor$.subscribe(c => {
      if (c != undefined && c != '') {
        this.overlayColor = c;
      }
    });
  }
  static #_ = this.ɵfac = function NgxProgressOverlayComponent_Factory(t) {
    return new (t || NgxProgressOverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_progress_overlay_service__WEBPACK_IMPORTED_MODULE_0__.NgxProgressOverlayService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NgxProgressOverlayComponent,
    selectors: [["ngx-progress-overlay"]],
    decls: 1,
    vars: 1,
    consts: [["class", "progress-overlay", 3, "ngStyle", 4, "ngIf"], [1, "progress-overlay", 3, "ngStyle"], [1, "progress-overlay-content"], ["width", "100%", "height", "100%", "viewBox", "0 0 42 42", 1, "donut"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "stroke", "#eeeeee", 1, "donut-ring"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "stroke-dashoffset", "25", 1, "donut-segment"], [1, "progress-content-text"], ["x", "50%", "y", "50%", 1, "progress-content-number", 3, "ngStyle"], ["x", "50%", "y", "50%", 1, "progress-content-label", 3, "ngStyle"]],
    template: function NgxProgressOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgxProgressOverlayComponent_div_0_Template, 10, 15, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayToggle == true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
    styles: [".progress-overlay[_ngcontent-%COMP%]{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0; \n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 9999;\n    cursor: pointer;\n}\n\n.progress-overlay-content[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    text-align: center;\n    transform: translate(-50%,-50%);\n    -ms-transform: translate(-50%,-50%);\n    transition: ease 1s;\n}\n\n.progress-content-text[_ngcontent-%COMP%] {\n    transform: translateY(0.25em);\n}\n\n.progress-content-number[_ngcontent-%COMP%] {\n    font-size: 0.5em;\n    line-height: 1;\n    text-anchor: middle;\n    transform: translateY(-0.25em);\n}\n\n.progress-content-label[_ngcontent-%COMP%] {\n    font-size: 0.15em;\n    text-anchor: middle;\n    transform: translateY(0.7em);\n}\n\n.donut-segment[_ngcontent-%COMP%] {\n    transition: .5s;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25neC1wcm9ncmVzcy1vdmVybGF5L3NyYy9saWIvbmd4LXByb2dyZXNzLW92ZXJsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUlJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBSW5CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFJbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy1vdmVybGF5e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwOyBcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2dyZXNzLW92ZXJsYXktY29udGVudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHRyYW5zaXRpb246IGVhc2UgMXM7XG59XG5cbi5wcm9ncmVzcy1jb250ZW50LXRleHQge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMjVlbSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjI1ZW0pO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMjVlbSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMjVlbSk7XG59XG5cbi5wcm9ncmVzcy1jb250ZW50LW51bWJlciB7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xufVxuXG4ucHJvZ3Jlc3MtY29udGVudC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjE1ZW07XG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjdlbSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjdlbSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC43ZW0pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjdlbSk7XG59XG5cbi5kb251dC1zZWdtZW50IHtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 5508:
/*!******************************************************************************!*\
  !*** ./projects/ngx-progress-overlay/src/lib/ngx-progress-overlay.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxProgressOverlayModule: () => (/* binding */ NgxProgressOverlayModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ngx_progress_overlay_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-progress-overlay.component */ 9393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class NgxProgressOverlayModule {
  static #_ = this.ɵfac = function NgxProgressOverlayModule_Factory(t) {
    return new (t || NgxProgressOverlayModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NgxProgressOverlayModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxProgressOverlayModule, {
    declarations: [_ngx_progress_overlay_component__WEBPACK_IMPORTED_MODULE_0__.NgxProgressOverlayComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_ngx_progress_overlay_component__WEBPACK_IMPORTED_MODULE_0__.NgxProgressOverlayComponent]
  });
})();

/***/ }),

/***/ 7715:
/*!*******************************************************************************!*\
  !*** ./projects/ngx-progress-overlay/src/lib/ngx-progress-overlay.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxProgressOverlayService: () => (/* binding */ NgxProgressOverlayService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class NgxProgressOverlayService {
  constructor() {
    // Property subjects
    this.displaySource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.valueSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.textSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.colorSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.valueColorSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.textColorSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.donutWidthSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.overlayColorSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    // Corresponding observables
    this.display$ = this.displaySource.asObservable();
    this.value$ = this.valueSource.asObservable();
    this.text$ = this.textSource.asObservable();
    this.color$ = this.colorSource.asObservable();
    this.valueColor$ = this.valueColorSource.asObservable();
    this.textColor$ = this.textColorSource.asObservable();
    this.donutWidth$ = this.donutWidthSource.asObservable();
    this.overlayColor$ = this.overlayColorSource.asObservable();
  }
  // Show progress bar
  show(text, color, valueColor, textColor, donutWidth, overlayColor) {
    this.valueSource.next(0);
    this.textSource.next(text);
    this.colorSource.next(color);
    this.valueColorSource.next(valueColor);
    this.textColorSource.next(textColor);
    this.donutWidthSource.next(donutWidth);
    this.overlayColorSource.next(overlayColor);
    this.displaySource.next(true);
  }
  // Hide progress bar
  hide() {
    this.displaySource.next(false);
  }
  // Set progress bar value
  setProgress(value) {
    this.valueSource.next(value);
  }
  static #_ = this.ɵfac = function NgxProgressOverlayService_Factory(t) {
    return new (t || NgxProgressOverlayService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NgxProgressOverlayService,
    factory: NgxProgressOverlayService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _projects_ngx_progress_overlay_src_lib_ngx_progress_overlay_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projects/ngx-progress-overlay/src/lib/ngx-progress-overlay.service */ 7715);
/* harmony import */ var _projects_ngx_progress_overlay_src_lib_ngx_progress_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/ngx-progress-overlay/src/lib/ngx-progress-overlay.component */ 9393);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 7728);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8497);







class AppComponent {
  constructor(progressService) {
    this.progressService = progressService;
    this.title = 'ngx-progress-overlay-ws';
    this.code = {
      installation: '',
      usage: ''
    };
  }
  ngOnInit() {
    this.code = {
      installation: 'npm i ngx-progress-overlay',
      usage: {
        step1: `import { NgxProgressOverlayModule } from 'ngx-progress-overlay';

@NgModule({
    imports: [
        NgxProgressOverlayModule
    ]
})
        
export class AppModule { }`,
        step2: `import { NgxProgressOverlayService } from 'ngx-progress-overlay';

class AppComponent implements OnInit {
          
    constructor(private progressOverlay: NgxProgressOverlayService) { }
        
    ngOnInit() {
    
        // Shows progress bar (Params : overlay text, progress bar color, progress value color, overlay text color, donut width)
        this.progressOverlay.show('text','#c2185b','white','lightslategray',1,'rgba(0,0,0,0.8)');
    
        // Set progress value
        this.progressOverlay.setProgress(50);
    
        // Hides progress bar
        this.progressOverlay.hide();
    
    }
    
}`,
        step3: `<ngx-progress-overlay></ngx-progress-overlay>`
      }
    };
  }
  test() {
    this.progressService.show('Sit back & relax!', '#c2185b', 'white', 'lightslategray', 1, 'rgba(0,0,0,0.8)');
    setTimeout(() => {
      this.progressService.setProgress(10);
    }, 1000);
    setTimeout(() => {
      this.progressService.setProgress(20);
    }, 2000);
    setTimeout(() => {
      this.progressService.setProgress(30);
    }, 3000);
    setTimeout(() => {
      this.progressService.setProgress(40);
    }, 4000);
    setTimeout(() => {
      this.progressService.setProgress(50);
    }, 5000);
    setTimeout(() => {
      this.progressService.setProgress(60);
    }, 6000);
    setTimeout(() => {
      this.progressService.setProgress(70);
    }, 7000);
    setTimeout(() => {
      this.progressService.setProgress(80);
    }, 8000);
    setTimeout(() => {
      this.progressService.setProgress(90);
    }, 9000);
    setTimeout(() => {
      this.progressService.setProgress(100);
    }, 10000);
    setTimeout(() => {
      this.progressService.hide();
    }, 11000);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_projects_ngx_progress_overlay_src_lib_ngx_progress_overlay_service__WEBPACK_IMPORTED_MODULE_0__.NgxProgressOverlayService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 52,
    vars: 4,
    consts: [["color", "primary", 2, "position", "sticky", "top", "0", "z-index", "999"], [2, "display", "flex", "flex-grow", "1"], [1, "container"], [1, "align-center"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "code"], [1, "text-secondary"], ["matTooltip", "Github", "target", "_blank", "href", "https://github.com/monkeyscript/ngx-progress-overlay"], ["mat-icon-button", "", "color", "primary"], [1, "fa", "fa-github"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ngx-Progress-Overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br")(5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " A simple donut progress bar with full screen overlay. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3)(10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() {
          return ctx.test();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Start Loader ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br")(13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card")(17, "pre", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br")(20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Import `NgxProgressOverlayModule` in the root module (`AppModule`) : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-card")(27, "pre", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Add `NgxProgressOverlayService` service in your component : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-card")(34, "pre", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Finally, use NgxProgressOverlayComponent in your template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-card")(41, "pre", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br")(44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 3)(46, "a", 7)(47, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "br")(50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "ngx-progress-overlay");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.code.installation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.code.usage.step1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.code.usage.step2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.code.usage.step3);
      }
    },
    dependencies: [_projects_ngx_progress_overlay_src_lib_ngx_progress_overlay_component__WEBPACK_IMPORTED_MODULE_1__.NgxProgressOverlayComponent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _projects_ngx_progress_overlay_src_lib_ngx_progress_overlay_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projects/ngx-progress-overlay/src/lib/ngx-progress-overlay.module */ 5508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ 9099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _projects_ngx_progress_overlay_src_lib_ngx_progress_overlay_module__WEBPACK_IMPORTED_MODULE_0__.NgxProgressOverlayModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _projects_ngx_progress_overlay_src_lib_ngx_progress_overlay_module__WEBPACK_IMPORTED_MODULE_0__.NgxProgressOverlayModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]
  });
})();

/***/ }),

/***/ 9099:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 7728);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);





class MaterialModule {
  static #_ = this.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltipModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltipModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltipModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule],
    exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltipModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule]
  });
})();

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map