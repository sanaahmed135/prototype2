export default class Column {
    key: string;
    name : string;
    editable :boolean;
    width? : number = 50;
    complete? : number;

	constructor(_key: string , _name : string) {
        this.key = _key;
        this.name = _name;
        this.editable = true;
        this.width = 200;
    }
}