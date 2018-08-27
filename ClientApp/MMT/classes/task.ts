export default class Task {
    id : string;
    name : string;
    projectId : string;

    constructor(_id : string , _name : string , _projectId : string) {
        this.id = _id;
        this.name = _name;
        this.projectId = _projectId;

    }
}
