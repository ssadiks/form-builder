"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var box_confirm_service_1 = require('../box-confirm/box-confirm.service');
var BoxConfirmComponent = (function () {
    function BoxConfirmComponent(boxConfirmService) {
        var _this = this;
        this.boxConfirmService = boxConfirmService;
        this.notify = new core_1.EventEmitter();
        this.subscription = this.boxConfirmService.displayBox$.subscribe(function (inpout) { _this.displayBox = inpout; });
    }
    //ngOnInit(): void {
    //  this.displayBox = this.boxConfirmService.getDisplay();
    //}
    BoxConfirmComponent.prototype.setDisplayBox = function (newValue) {
        this.displayBox = newValue;
        console.log(this.displayBox);
        this.subscription = this.boxConfirmService.displayBox$.subscribe(this.displayBox);
    };
    BoxConfirmComponent.prototype.cancel = function () {
        this.setDisplayBox(false);
        this.notify.emit(false);
    };
    BoxConfirmComponent.prototype.agree = function () {
        this.setDisplayBox(false);
        this.notify.emit(true);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BoxConfirmComponent.prototype, "inpout", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BoxConfirmComponent.prototype, "notify", void 0);
    BoxConfirmComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'box-confirm',
            templateUrl: 'box-confirm.html'
        }), 
        __metadata('design:paramtypes', [box_confirm_service_1.BoxConfirmService])
    ], BoxConfirmComponent);
    return BoxConfirmComponent;
}());
exports.BoxConfirmComponent = BoxConfirmComponent;
//# sourceMappingURL=box-confirm.component.js.map