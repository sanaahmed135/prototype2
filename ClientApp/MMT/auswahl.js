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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Auswahl = /** @class */ (function (_super) {
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
    // private options(value : string, key : number): JSX.Element {
    //      return (<option key={key}>{value}</option>);
    // }
    Auswahl.prototype.onSelection = function (e) {
        this.props.onAuswahl(e.target.value);
    };
    return Auswahl;
}(React.Component));
exports.default = Auswahl;
