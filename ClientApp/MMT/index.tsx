import * as React from "react";
import Auswahl from "./auswahl";
import OverView from "./overview";
import Project from "./models/project";
import Task from "./models/task";

 interface IState {
  tasks : Array<Task>;
 }

export default class MMT extends React.Component<any,IState> {
    public projList : Array<Project>;
    public tasks : Array<Task>;

    constructor(props : any) {
        super(props);
        this.projList = this.getProjects();
        this.tasks = this.getTasks();
        this.state = {tasks : this.filterTaskByProjectId("1")} ;

        // this.onClickEvent = this.onClickEvent.bind(this);
        this.callback = this.callback.bind(this);
    }

    public render(): any {
        return (
            <div>
                <Auswahl collection = {this.projList} onAuswahl={this.callback}/>
                <button >Import all unlinked Milestones from Project Plan</button>
                <button >SAVE CHANGES</button>
                {/* <link>Milestone History</link> */}
                <br/>
                {/* <div>{this.state.value}</div> */}
                  {/* <OverView tasks={this.state.tasks} onRowDel={this.handleRowDel.bind(this)}/> */}
                  <OverView tasks={this.state.tasks}/>
                  {/* <button onClick={this.onClickEvent}>Add Tasks</button> */}

            </div>
        );
    }
    // handleRowDel(rowId : number): void {
    //     var index : number = this.state.rows.indexOf(rowId);
    //     this.state.rowId.splice(index, 1);
    //     this.setState({rows});
    //   }
    private getProjects(): Array<Project> {
        let collection : Array<Project> = new Array<Project>();
        collection.push(new Project("1","Proj1"));
        collection.push(new Project("2","Proj2"));
        collection.push(new Project("3","Proj3"));
        collection.push(new Project("4","Proj4"));
        collection.push(new Project("5","Proj5"));

        return collection;
    }

    private getTasks(): Array<Task> {
        let collection : Array<Task> = new Array<Task>();
        collection.push(new Task("1","GO/MO: Project Initiation","1"));
        collection.push(new Task("2","Confirmation","1"));
        collection.push(new Task("3","Release 1.0 Prototype","1"));
        collection.push(new Task("4","Release 1.1 Initial-Batch","2"));
        collection.push(new Task("5","Release 1.1 Prototype","2"));
        collection.push(new Task("6","Release 1.0 Serial-Release","2"));
        collection.push(new Task("7","Release 1.2 Serial-Release","3"));
        collection.push(new Task("8","Release 1.3 Prototype","3"));
        collection.push(new Task("9","Release 1.2 Confirmation","3"));
        collection.push(new Task("10","Release 1.2 Prototype","4"));
        collection.push(new Task("11","Release 1.0 Confirmation","4"));
        collection.push(new Task("12","Confirmation","5"));
        collection.push(new Task("13","Release 1.4 Prototype","5"));
        collection.push(new Task("14","Release 1.4 Initial-Batch","5"));
        return collection;
    }

    private callback(selectedProjectId : string): void {
        this.setState({tasks : this.filterTaskByProjectId(selectedProjectId)});
    }

    private filterTaskByProjectId(projectId: string): Array<Task> {

        return this.tasks.filter((t)=> t.projectId === projectId);
    }

    private onClickEvent( e: any): void {
        alert(e.selectedProject);
    }
}
