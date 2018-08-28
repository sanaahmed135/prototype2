import * as React from "react";
import ReactGrid from "react-data-grid";
import Column from "./models/Column";
import Row from "./models/Row";
import { IOverviewProps } from "./Interfaces/IOverview";
import Task from "./models/task";
import { parse } from "path";

export default class Overview extends React.Component<IOverviewProps, IMyState> {

    private columns: Array<Column> = new Array<Column> ();

    constructor(props: any, context: any) {
        super(props, context);
        this.createColumns();
        this.getRows=this.getRows.bind(this);
        this.state = { rows: this.getRows(this.props.tasks)};
    }

    render(): any {

        return(
            <div>
            <ReactGrid
                columns={this.columns}
                rowGetter={this.getRowbyIndex}
                rowsCount={this.state.rows.length}
                minHeight={500}/>
            </div>
            );
    }

    componentWillReceiveProps (newProps : IOverviewProps): void {
        // console.log("recieved props called overview.tsx " );
        // console.log( newProps.tasks);
        this.setState({ rows : this.getRows(newProps.tasks) });
    }

    public getRowbyIndex = (index: number): Row => {
        return this.state.rows[index];
    }

    public createColumns(): void {
        // this.columns.push(new Column("id", "ID"));
        this.columns.push(new Column("task", "Name"));
        this.columns.push(new Column("rDate", "Date"));
        this.columns.push(new Column("type", "Type"));
        this.columns.push(new Column("status", "Status"));
        this.columns.push(new Column("linkedTask", "Linked Task"));

    }

    public getRows(tasks : Array<Task>): Array<Row>  {
        const rows: Array<Row>  = new Array<Row> ();
        for (let id: number = 0; id < tasks.length; id++) {

             let type:string = ["Evaluation", "Prototype", "Initial-Batch",
             "Serial-Release","Project Specific", "Stipulation"][Math.floor((Math.random() * 5) + 1)];
            let status:string = ["Active", "Closed", "Removed"][Math.floor((Math.random() * 2) + 1)];
            let date :Date = this.randomDate(new Date(2012, 0, 1), new Date());
             let linkedTask : string = ["40 | Release 1.0 Prototype" , "100 | EoP" ,
            "145 | v1.2 Stipulation" , "173 | Release 1.3 Prototype" , "189 | Initial-Batch"
             , "203 | Release 1.3 Serial Release" , "226 | Release 1.4 Prototype"][Math.floor((Math.random() * 6) + 1)];
            let task : Task  = tasks[id];
            let rDate : string = new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit"
              }).format(date);
            const row: Row = new Row(task.name ,rDate , type , status ,linkedTask );

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
