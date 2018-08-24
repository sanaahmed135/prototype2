"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var auswahl_1 = require("../app/MMT/auswahl");
var overview_1 = require("../app/MMT/overview");
var MMT = (function (_super) {
    __extends(MMT, _super);
    function MMT(props) {
        var _this = _super.call(this, props) || this;
        _this.selectedProject = "";
        _this.state = { value: "" };
        _this.onClickEvent = _this.onClickEvent.bind(_this);
        _this.callback = _this.callback.bind(_this);
        return _this;
    }
    MMT.prototype.render = function () {
        var arr = ["Proj 1", "Proj 2", "Proj 3"];
        return (React.createElement("div", null,
            React.createElement(auswahl_1.default, { collection: arr, onAuswahl: this.callback }),
            React.createElement("br", null),
            React.createElement("div", null, this.state.value),
            React.createElement(overview_1.default, null)));
    };
    MMT.prototype.callback = function (selectedProject) {
        this.selectedProject = selectedProject;
        this.setState({ value: this.selectedProject });
    };
    MMT.prototype.onClickEvent = function (e) {
        alert(this.selectedProject);
    };
    return MMT;
}(React.Component));
exports.default = MMT;
//# sourceMappingURL=app.js.map