import * as React from "react";
import Auswahl from "./auswahl";
import OverView from "./overview";
import Project from "./classes/project";
import Task from "./classes/task";

 interface IState {
  tasks : Array<Task>;
 }

export default class MMT extends React.Component<any,IState> {
    public selectedProject : Project ;
    public projList : Array<Project>;
    public tasks : Array<Task>;

    constructor(props : any) {
        super(props);
        this.projList = this.getProjects();
        this.selectedProject = this.projList[0];
        this.tasks = this.getTasks();
        this.state= {tasks :  this.tasks.filter((t)=> t.projectId === this.selectedProject.id) };

        this.onClickEvent = this.onClickEvent.bind(this);
        this.callback = this.callback.bind(this);
    }

    public render():any {
        return (
            <div>
                <Auswahl collection = {this.projList} onAuswahl={this.callback}/>
                <br/>
                {/* <button onClick={this.onClickEvent}> Show Me Selected Project</button> */}
                {/* <div>{this.state.value}</div> */}
                  <OverView tasks={this.state.tasks}/>
            </div>
        );
    }
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

        return collection;
    }

    private callback(selectedProjectId : string): void {
        // let selectedProject : Project = this.projList.find(x => x.id === selectedProjectId);
       console.log(selectedProjectId);
        let tasksForSelectedProject : Array<Task> = this.tasks.filter((t)=> t.projectId === selectedProjectId);
        console.log(tasksForSelectedProject);
        this.setState({tasks : tasksForSelectedProject});
      }
  
      private onClickEvent( e: any): void {
          alert(e.selectedProject);
      }
  
}
