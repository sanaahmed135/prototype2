export default class Column {
    key: string;
    name : string;
    editable? : boolean;
    sortable? :boolean;
    editor? :JSX.Element;
    formatter? : any;
    delete? : JSX.Element;


    constructor(_key: string , _name : string,_sortable? : boolean,
         _editable? : boolean,_editor? : JSX.Element ,_formatter? : any,
        _delete? :JSX.Element) {
        this.key = _key;
        this.name = _name;
        this.sortable = _sortable;
        this.editable = _editable;
        this.editor = _editor;
        this.formatter = _formatter;
        this.delete=_delete;
    }
}