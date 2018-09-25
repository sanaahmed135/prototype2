export default class Column {
    key: string;
    name : string;
    // formatter: any;
    editable? : boolean;
    sortable? :boolean;
    editor? :JSX.Element;
    formatter? : any;
    delete? : JSX.Element;
    resizable?:boolean;
    width?:number;

    constructor(_key: string , _name : string,_resizable? : boolean,_sortable? : boolean,
         _editable? : boolean,_editor? : JSX.Element ,_formatter? : any,
        _delete? :JSX.Element,_width? : number) {
        this.key = _key;
        this.name = _name;
        this.sortable = _sortable;
        this.editable = _editable;
        this.editor = _editor;
        this.formatter = _formatter;
        this.delete=_delete;
        this.resizable=_resizable;
    }
}