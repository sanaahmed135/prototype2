import * as React from "react";
import ReactGrid from "react-data-grid";
import Column from "./classes/Column";
import Row from "./classes/Row";
import Auswahl from "./auswahl";
import { IOverviewProps } from "./Interfaces/IOverview";

export default class Overview extends React.Component<IOverviewProps, IMyState> {

    private columns: Array<Column> = new Array<Column> ();

    constructor(props: any, context: any) {
        super(props, context);
        this.createColumns();
        console.log(this.props.tasks);
        this.getRows=this.getRows.bind(this);
        this.state = { rows: this.getRows(4)};
    }

    render() {
        return (
            <div>
                <ReactGrid
                    enableCellSelect={true}
                    columns={this.columns}
                    rowGetter={this.getRowbyIndex}
                    rowsCount={this.state.rows.length}
                    minHeight={500}
                />
            </div>);
    }

    public getRowbyIndex = (index: number): Row => {
        return this.state.rows[index];
    }

    public createColumns(): void {
        this.columns.push(new Column("id", "ID"));
        this.columns.push(new Column("project", "Project"));
        // this.columns.push(new Column("complete", "Complete"));
    }

    public getRows(numberOfRows: number): Array<Row>  {
        const rows: Array<Row>  = new Array<Row> ();
        for (let i: number = 0; i < numberOfRows; i++) {
            // const complete: number = Math.min(100, Math.round(Math.random() * 110));
            // create the row object and add it to the array
            let type:string = ["Evaluation", "Prototype", "Initial-Batch",
            "Serial-Release","Project Specific", "Stipulation"][Math.floor((Math.random() * 3) + 1)];
            let status:string = ["Active", "Closed", "Removed"][Math.floor((Math.random() * 3) + 1)];
            let rDate :Date = this.randomDate(new Date(2012, 0, 1), new Date());
            let linkedTask : string = ["40 | Release 1.0 Prototype" , "100 | EoP" ,
             "145 | v1.2 Stipulation" , "173 | Release 1.3 Prototype" , "189 | Initial-Batch"
             , "203 | Release 1.3 Serial Release" , "226 | Release 1.4 Prototype"][Math.floor((Math.random() * 3) + 1)];
            let task :string = this.props.tasks[i].toString();
            const row: Row = new Row( i , task , rDate , type , status , linkedTask );
            rows.push(row);
        }
        return rows;
    }
    public randomDate(start : Date, end : Date): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
}

interface IMyState {
    rows: Array<Row> ;
}



