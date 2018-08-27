import * as React from "react";
import { IAuswahlProps } from "./Interfaces/IAuswahl";


export default class Auswahl extends React.Component<IAuswahlProps,{}> {

    constructor(props : IAuswahlProps) {
        super(props);
        this.onSelection = this.onSelection.bind(this);

    }

    public render(): React.ReactElement<IAuswahlProps> {
        return (
            <select onChange={this.onSelection} >
               {/* {this.props.collection.map(this.options)} */}
               {
                   this.props.collection.map((project,index)=> {
                        return (<option value={project.id} label={project.name}></option>);
                   })
               }
            </select>
        );
    }

    private onSelection(e : React.ChangeEvent<HTMLSelectElement>): void {
        // console.log(e.target.label);
        // console.log(e.target.options[e.target.selectedIndex].label);
        this.props.onAuswahl(e.target.options[e.target.selectedIndex].value);
    }
}