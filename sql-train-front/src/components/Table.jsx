import TableRow from "./TableRow";

const Table = function (props) {
    let heading = props.heading;
    let body = props.body;

    return (
        <table>
            <thead>
            <tr>
                {heading.map((head, headID) => <th key={headID}>{head}</th>)}
            </tr>
            </thead>
            <tbody>
            {body.map((rowContent, rowID) => <TableRow rowContent={rowContent} key={rowID}/>)}
            </tbody>
        </table>
    );
}

export default Table;