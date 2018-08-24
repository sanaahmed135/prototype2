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
var Auswahl = (function (_super) {
    __extends(Auswahl, _super);
    function Auswahl(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelection = _this.onSelection.bind(_this);
        return _this;
    }
    Auswahl.prototype.render = function () {
        return (React.createElement("select", { onChange: this.onSelection }, this.props.collection.map(function (value, index) {
            return (React.createElement("option", { key: index }, value));
        })));
    };
    Auswahl.prototype.onSelection = function (e) {
        this.props.onAuswahl(e.target.value);
    };
    return Auswahl;
}(React.Component));
exports.default = Auswahl;
//# sourceMappingURL=auswahl.js.map