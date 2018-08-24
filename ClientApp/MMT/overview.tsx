import * as React from "react";
import ReactGrid from "react-data-grid";
import Column from "./classes/Column";
import Row from "./classes/Row";
import Auswahl from "./auswahl";

export default class Overview extends React.Component<any, IMyState> {
    private columns: Array<Column> = new Array<Column> ();

    constructor(props: any, context: any) {
        super(props, context);
        this.createColumns();
        console.log(this.props.projects);
        this.getRows=this.getRows.bind(this);
        // Setting the Row property of State.  All properties of the state must haveto be set
        this.state = { rows: this.getRows(5)};
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
        for (let i: number = 1; i < numberOfRows; i++) {
            // const complete: number = Math.min(100, Math.round(Math.random() * 110));
            // create the row object and add it to the array
            const row: Row = new Row(i, this.props.projects[i]);
            rows.push(row);
        }
        return rows;
    }
}

interface IMyState {
    rows: Array<Row> ;
}



