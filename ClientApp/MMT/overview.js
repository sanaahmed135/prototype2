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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_data_grid_1 = __importDefault(require("react-data-grid"));
var Column_1 = __importDefault(require("./classes/Column"));
var Row_1 = __importDefault(require("./classes/Row"));
var Overview = /** @class */ (function (_super) {
    __extends(Overview, _super);
    function Overview(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.columns = new Array();
        _this.getRowbyIndex = function (index) {
            return _this.state.rows[index];
        };
        _this.createColumns();
        // Setting the Row property of State.  All properties of the state must haveto be set
        _this.state = { rows: _this.getRows(10), updatedText: "" };
        return _this;
    }
    Overview.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null,
                " Updated Title :  ",
                this.state.updatedText),
            React.createElement(react_data_grid_1.default, { enableCellSelect: true, columns: this.columns, rowGetter: this.getRowbyIndex, rowsCount: this.state.rows.length, minHeight: 500 })));
    };
    Overview.prototype.createColumns = function () {
        this.columns.push(new Column_1.default("id", "ID"));
        this.columns.push(new Column_1.default("task", "Title"));
        this.columns.push(new Column_1.default("complete", "Complete"));
    };
    Overview.prototype.getRows = function (numberOfRows) {
        var rows = new Array();
        for (var i = 1; i < numberOfRows; i++) {
            var complete = Math.min(100, Math.round(Math.random() * 110));
            // create the row object and add it to the array
            var row = new Row_1.default(i, "Title " + i, complete);
            rows.push(row);
        }
        return rows;
    };
    return Overview;
}(React.Component));
exports.default = Overview;
