export default class Row {
    id: number;
    task : string;
    complete? : number;

	constructor(_id: number , _title : string,_complete? : number) {
        this.id = _id;
        this.task = _title;
        this.complete = _complete;
    }
}