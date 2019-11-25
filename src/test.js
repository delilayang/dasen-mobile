"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var inversify_1 = require("inversify");
var vue_inversify_decorator_1 = require("vue-inversify-decorator");
var vue_1 = require("vue");
var vue_class_component_1 = require("vue-class-component");
var Ninja = /** @class */ (function () {
    function Ninja() {
    }
    Ninja.prototype.fight = function () {
        return 'cut!';
    };
    Ninja = __decorate([
        inversify_1.injectable()
    ], Ninja);
    return Ninja;
}());
var container = new inversify_1.Container();
container.bind(Ninja).toSelf();
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        vue_inversify_decorator_1.Inject()
    ], Child.prototype, "ninja");
    Child = __decorate([
        vue_class_component_1["default"]({
            template: "\n    <p>{{ ninja.fight() }}</p>\n"
        })
    ], Child);
    return Child;
}(vue_1["default"]));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App = __decorate([
        vue_class_component_1["default"]({
            components: {
                Child: Child
            },
            template: "\n    <child></child>\n"
        }),
        vue_inversify_decorator_1.Provide(container)
    ], App);
    return App;
}(vue_1["default"]));
var vm = new App().$mount();
//assert(vm.$el.textContent === 'cut!')
