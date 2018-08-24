import * as React from "react";
import Auswahl from "./auswahl";
import OverView from "./overview";

 interface IState {
    value : string;
 }
export default class MMT extends React.Component<any,IState> {
    public selectedProject : string ;

    constructor(props : any) {
        super(props);
        this.selectedProject= "";
        this.state= {value : "" };
        this.onClickEvent = this.onClickEvent.bind(this);
        this.callback = this.callback.bind(this);
    }

    public render():any {
        const arr : string[]= ["Proj 1","Proj 2", "Proj 3","Proj 4"];
        return (
            <div>
                <Auswahl collection = {arr} onAuswahl={this.callback}/>
                <br/>
                {/* <button onClick={this.onClickEvent}> Show Me Selected Project</button> */}
                {/* <div>{this.state.value}</div> */}
                <OverView projects={arr}/>
            </div>
        );
    }

    private callback(selectedProject : string): void {
        this.selectedProject = selectedProject;
        this.setState({value : this.selectedProject});
    }

    private onClickEvent( e: any): void {
        alert(this.selectedProject);
    }
}