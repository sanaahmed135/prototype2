import * as React from "react";
import ReactGrid from "react-data-grid";
import Column from "./models/Column";
import Row from "./models/Row";
import { IOverviewProps } from "./Interfaces/IOverview";
import Task from "./models/task";
import { parse } from "path";
import update from "immutability-helper";
import { Editors,Toolbar} from "react-data-grid-addons";
import {Button} from "react-bootstrap";
const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors;
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-data-grid/react-data-grid-tests.tsx
    interface IMyState {
        rows: Array<Row> ;
        originalRows : Array<Row>;
        startDate : any;
        selectedIndexes : Array<number>;
    }

    // export class PercentCompleteFormatter extends React.Component {
    //     static propTypes = {
    //     value: PropTypes.number.isRequired
    //     };
    //     public render(): any {
    //     const percentComplete : any = this.props.value + "%";
    //     return (
    //         <div className="progress" style={{marginTop: "20px"}}>
    //         <div className="progress-bar" role="progressbar" aria-valuenow="60"
    //         aria-valuemin="0" aria-valuemax="100" style={{width: percentComplete}}>
    //             {percentComplete}
    //         </div>
    //         </div>);
    //     }
    // }

    export default class Overview extends React.Component<IOverviewProps, IMyState> {
        private columns: Array<Column> = new Array<Column>();
        private mydate : any = new Date();

        constructor(props: any, context: any) {
            super(props, context);
            this.createColumns = this.createColumns.bind(this);
            this.handleDeleteRow = this.handleDeleteRow.bind(this);

            this.createColumns();
            this.getRows=this.getRows.bind(this);
            this.handleChange = this.handleChange.bind(this);
            // private rows : Array<ReactDataGrid.Row> = new Array<ReactDataGrid.Row>();
            let originalRows : ReactGrid.Row[]= this.getRows(this.props.tasks);
            this.state = { rows: this.getRows(this.props.tasks),
                            originalRows : originalRows,
                            startDate : new Date(),
                            selectedIndexes : Array<number>
                        };
    }

    render(): any {

        return(
            <div>
            <ReactGrid
                // cellEdit={this.cellEdit}
                enableCellSelect={true}
                columns={this.columns}
                rowGetter={this.getRowbyIndex}
                rowsCount={this.state.rows.length}
                minHeight={400}
                minColumnWidth={10}
                onGridSort={this.handleGridSort}
                toolbar={<Toolbar onAddRow={this.handleAddRow}/>}
                // toolbar={
                //     <GroupedColumnsPanel groupBy={this.props.groupBy}
                //     onColumnGroupAdded={this.handleAddRow}
                //     onColumnGroupDeleted={this.handleDeleteRow}/>
                // }
                onGridRowsUpdated={this.handleGridRowsUpdated}
                rowSelection={{
                    showCheckbox: true,
                    enableShiftSelect: true,
                    onRowsSelected: this.onRowsSelected,
                    onRowsDeselected: this.onRowsDeselected,
                    selectBy: {
                      indexes: this.state.selectedIndexes
                    }
                  }}
                // onDelEvent={this.rowDel.bind(this)}
                />
                 <button onClick={ this.handleDeleteRow}>Delete Tasks</button>
            </div>
            );
    }

    onRowsSelected = (rows : Array<Row>) => {
        let rowIndexes : Array<number> = rows.map(r => r.rowIdx);
        this.setState({selectedIndexes: this.state.selectedIndexes.concat(rowIndexes)});
        console.log(rows);
      }

      onRowsDeselected = (rows : Array<Row>) => {
        let rowIndexes : Array<number> = rows.map(r => r.rowIdx);
        this.setState({selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1 )});
      }


    public componentWillReceiveProps (newProps : IOverviewProps): void {
        this.setState({ rows : this.getRows(newProps.tasks) });
    }

    public getRowbyIndex = (index: number): Row => {
        return this.state.rows[index];
    }

    col:ReactGrid.Column[];

    createColumns(): ReactGrid.Column[] {

        let type:Array<string> = ["","Evaluation", "Prototype", "Initial-Batch",
        "Serial-Release","Project Specific", "Stipulation"];
        let status:Array<string>  = ["","Active", "Closed", "Removed"];
        let linkedTask : Array<string> = ["","40 | Release 1.0 Prototype" , "100 | EoP" ,
         "145 | v1.2 Stipulation" , "173 | Release 1.3 Prototype" , "189 | Initial-Batch",
          "203 | Release 1.3 Serial Release" , "226 | Release 1.4 Prototype"];

        this.columns= [
          {
            key: "task",
            name: "Name",
            editable: true,
            resizable: true
          },
          {
            key: "type",
            name: "Type",
            editor: <DropDownEditor options={type}/>,
            editable: true,
            resizable: true
          },
          {
            key: "status",
            name: "Status",
            editor: <DropDownEditor options={status}/>,
            editable: true,
            resizable: true
          },
          {
            key: "linkedTask",
            name: "Linked Task",
            editor: <DropDownEditor options={linkedTask}/>,
            editable: true,
            resizable: true,
          },
          {
            key: "rDate",
            name: "Date",
            formatter: DateTimeFormatter,
            editable: true,
            resizable: true
          }
        //   {
        //     key: "delete",
        //     name: "Delete",
        //     formatter: DateTimeFormatter,
        //     editable: true,
        //     resizable: true
        //   }
        ];

    }

    // public createColumns(): void {

    //     let type:Array<string> = ["","Evaluation", "Prototype", "Initial-Batch",
    //     "Serial-Release","Project Specific", "Stipulation"];
    //     let status:Array<string>  = ["","Active", "Closed", "Removed"];
    //     let linkedTask : Array<string> = ["","40 | Release 1.0 Prototype" , "100 | EoP" ,
    //      "145 | v1.2 Stipulation" , "173 | Release 1.3 Prototype" , "189 | Initial-Batch",
    //       "203 | Release 1.3 Serial Release" , "226 | Release 1.4 Prototype"];
    //     // this.columns.push(new Column("id", "ID"));
    //     this.columns.push(new Column("task", "Name",true,true,true));
    //     this.columns.push(new Column("type", "Type",true,true,true,<DropDownEditor options={type}/>));
    //     this.columns.push(new Column("status", "Status",true,true,true,<DropDownEditor options={status}/>));
    //     this.columns.push(new Column("linkedTask", "Linked Task",true,true,true,<DropDownEditor options={linkedTask}/>));
    //     this.columns.push(new Column("rDate", "Date",true,true,true,undefined,DateTimeFormatter));
    //     // this.columns.push(new Column("delete","Delete",undefined,undefined,undefined,
    //     // <Button type="button" bsStyle="danger" bsSize="xsmall" title="Delete"
    //     //  onClick={this.handleDeleteRow.bind(this)}>x</Button>));
    // }

    public handleChange(date : any): void {
        this.setState({
            startDate: date
        });
    }

    public getRows(tasks : Array<Task>): Array<Row>  {
        let rows: ReactGrid.Row[] = new ReactGrid.Row[]();

        for (let id: number = 0; id < tasks.length; id++) {

             let type:string = ["Evaluation", "Prototype", "Initial-Batch",
             "Serial-Release","Project Specific", "Stipulation"][Math.floor((Math.random() * 5) + 1)];
            let status:string = ["Active", "Closed", "Removed"][Math.floor((Math.random() * 2) + 1)];
            let date :Date = this.randomDate(new Date(2012, 0, 1), new Date());
             let linkedTask : string = ["40 | Release 1.0 Prototype" , "100 | EoP" ,
            "145 | v1.2 Stipulation" , "173 | Release 1.3 Prototype" , "189 | Initial-Batch"
             , "203 | Release 1.3 Serial Release" , "226 | Release 1.4 Prototype"][Math.floor((Math.random() * 6) + 1)];
            let task : Task  = tasks[id];
            let rDate : string =  "10.10.2018";

            const row: Row = new Row(task.name ,rDate , type , status ,linkedTask );

            rows.push(row);

        }
        return rows;
    }

    public randomDate(start : Date, end : Date): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    public handleGridRowsUpdated = (e : ReactGrid.GridRowsUpdatedEvent ): void => {
        let rows :ReactGrid.Row[] = this.state.rows.slice();
        for (let i : number = e.fromRow; i <= e.toRow; i++) {
          let rowToUpdate : Row = rows[i] as Row;
          let updatedRow : Row = update(rowToUpdate, {$merge: e.updated});
          rows[i]= updatedRow;
        }

        this.setState({ rows : rows });

      }

      handleAddRow = (newRowIndex : any) => {
        let type:string = ["","Evaluation", "Prototype", "Initial-Batch",
        "Serial-Release","Project Specific", "Stipulation"][0];
       let status:string = ["","Active", "Closed", "Removed"][0];
       let date :Date = this.randomDate(new Date(2012, 0, 1), new Date());
        let linkedTask : string = ["","40 | Release 1.0 Prototype" , "100 | EoP" ,
       "145 | v1.2 Stipulation" , "173 | Release 1.3 Prototype" , "189 | Initial-Batch"
        , "203 | Release 1.3 Serial Release" , "226 | Release 1.4 Prototype"][0];
       let rDate : string =  "10.10.2018";
        const newRow: ReactGrid.Row = new ReactGrid.Row("" ,rDate , type , status ,linkedTask );
        let rows : ReactGrid.Row[] = this.state.rows.slice();
        rows = update(rows, {$push : [newRow]});
        this.setState({ rows });
      }

      handleDeleteRow=():any => {

        for (let RowIndex of this.state.selectedIndexes) {
            this.state.rows.splice(RowIndex, 1);
         }

        this.setState({ rows : this.state.rows ,selectedIndexes: new Array<number>() });
      }

      handleGridSort = (sortColumn : string, sortDirection : string): any => {
        const comparer : any = (a :any, b:any) => {
          if (sortDirection === "ASC") {
            return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
          } else if (sortDirection === "DESC") {
            return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
          }
        };

        const rows :ReactGrid.Row[] = sortDirection === "NONE" ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);
        this.setState({ rows });
      }
}



interface IDateTimeProp {
    value : moment.Moment;
}

interface IDateTimeState {
    startDate : any;
}

class DateTimeFormatter extends React.Component<IDateTimeProp,IDateTimeState> {
    constructor(props : IDateTimeProp) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        console.log(this.props.value);
        this.state = {startDate : moment(new Date(this.props.value),"MM/DD/YYYY")};
    }

    public handleChange(date : any): void {
        console.log(date);

    }

    render(): any {
      return (
          <DatePicker selected= {this.state.startDate} onChange={this.handleChange} />
      );
    }
}