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
var ImportMilestones = /** @class */ (function (_super) {
    __extends(ImportMilestones, _super);
    function ImportMilestones(props) {
        var _this = _super.call(this, props) || this;
        _this.onImport = _this.onImport.bind(_this);
        return _this;
    }
    ImportMilestones.prototype.render = function () {
        return (React.createElement("button", { onClick: this.onImport },
            this.props.milestones,
            ") }"));
    };
    ImportMilestones.prototype.onImport = function (e) {
        var myValue;
        myValue = "Sana";
    };
    return ImportMilestones;
}(React.Component));
exports.default = ImportMilestones;
