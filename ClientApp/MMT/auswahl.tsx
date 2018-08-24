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
                   this.props.collection.map((value,index)=> {
                        return (<option key={index}>{value}</option>);
                   })
               }
            </select>
        );
    }

    // private options(value : string, key : number): JSX.Element {
    //      return (<option key={key}>{value}</option>);
    // }

    private onSelection(e : React.ChangeEvent<HTMLSelectElement>) : void {
        this.props.onAuswahl(e.target.value);
    }
}