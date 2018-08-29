import * as React from "react";
import ReactGrid from "react-data-grid";
import Column from "./models/Column";
import Row from "./models/Row";
import { IOverviewProps } from "./Interfaces/IOverview";
import Task from "./models/task";
import { parse } from "path";
import update from "immutability-helper";
import { Editors} from "react-data-grid-addons";
const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors;
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

interface IMyState {
    rows: Array<Row> ;
    originalRows : Array<Row>;
    startDate : any;
}

export default class Overview extends React.Component<IOverviewProps, IMyState> {
    private columns: Array<Column> = new Array<Column> ();
   // private rows : Array<Row> = new Array<Row>();
    private mydate : any = new Date();

    constructor(props: any, context: any) {
        super(props, context);

        this.createColumns = this.createColumns.bind(this);
        this.createColumns();
        this.getRows=this.getRows.bind(this);
        this.handleChange = this.handleChange.bind(this);
        let originalRows : Array<Row>= this.getRows(this.props.tasks);

//        let rows : Array<Row> = originalRows.slice(0);

        this.state = { rows: this.getRows(this.props.tasks),
                        originalRows : originalRows,
                        startDate : new Date()
                     };
    }

    render(): any {

        return(
            <div>
            <ReactGrid
                enableCellSelect={true}
                columns={this.columns}
                rowGetter={this.getRowbyIndex}
                rowsCount={this.state.rows.length}
                minHeight={500}
                onGridSort={this.handleGridSort}
                onGridRowsUpdated={this.handleGridRowsUpdated}
                />
            </div>
            );
    }

    public componentWillReceiveProps (newProps : IOverviewProps): void {
        this.setState({ rows : this.getRows(newProps.tasks) });
    }

    public getRowbyIndex = (index: number): Row => {
        return this.state.rows[index];
    }

    public createColumns(): void {

        let type:Array<string> = ["Evaluation", "Prototype", "Initial-Batch", "Serial-Release","Project Specific", "Stipulation"];
        let status:Array<string>  = ["Active", "Closed", "Removed"];
        // tslint:disable-next-line:max-line-length
        let linkedTask : Array<string> = ["40 | Release 1.0 Prototype" , "100 | EoP" , "145 | v1.2 Stipulation" , "173 | Release 1.3 Prototype" , "189 | Initial-Batch",  "203 | Release 1.3 Serial Release" , "226 | Release 1.4 Prototype"];
        // this.columns.push(new Column("id", "ID"));
        this.columns.push(new Column("task", "Name",true,true));
        this.columns.push(new Column("rDate", "Date",true,true,undefined,DateTimeFormatter));

        this.columns.push(new Column("type", "Type",true,true,<DropDownEditor options={type}/>));
        this.columns.push(new Column("status", "Status",true,true,<DropDownEditor options={status}/>));
        this.columns.push(new Column("linkedTask", "Linked Task",true,true,<DropDownEditor options={linkedTask}/>));

    }

    public handleChange(date : any): void {
       console.log(date);
        this.setState({
            startDate: date
        });
    }
    public getRows(tasks : Array<Task>): Array<Row>  {
        let rows: Array<Row>  = new Array<Row> ();

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
        let rows :Array<Row> = this.state.rows.slice();

        for (let i : number = e.fromRow; i <= e.toRow; i++) {
          let rowToUpdate : Row = rows[i];
          let updatedRow : Row = update(rowToUpdate, {$merge: e.updated});
          rows[i]= updatedRow;
        }

        this.setState({ rows : rows });
      }
      handleGridSort = (sortColumn : string, sortDirection : string): any => {
        const comparer : any = (a :any, b:any) => {
          if (sortDirection === "ASC") {
            return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
          } else if (sortDirection === "DESC") {
            return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
          }
        };

        const rows :Array<Row> = sortDirection === "NONE" ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

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

        // this.setState({
        //   startDate: date
        // });
    }

    render(): any {
      return (<DatePicker selected={this.state.startDate} onChange={this.handleChange} />
      );
    }
}

