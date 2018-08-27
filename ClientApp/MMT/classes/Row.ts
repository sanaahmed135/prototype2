import Task from "./task";

export default class Row {
    id: number;
    task : string;
    rdate : Date;
    type : string;
    status : string;
    linkedTask : string;


     constructor(_id: number , _task : string,_rdate : Date,_type: string,_status : string, _linkedTask : string) {
        this.id = _id;
        this.task = _task;
        this.rdate = _rdate;
        this.type = _type;
        this.status = _status;
        this.linkedTask = _linkedTask;
    }
}