export default class Row {
    id: number;
    task : string;
    date : Date;
    type : string;
    status : string;
    linkedTask : string;

	constructor(_id: number , _task : string,_date : Date,_type: string,_status : string, _linkedTask : string) {
        this.id = _id;
        this.task = _task;
        this.date = _date;
        this.type = _type;
        this.status = _status;
        this.linkedTask = _linkedTask;
    }
}