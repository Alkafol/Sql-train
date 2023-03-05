const TableRow = function (props) {
    let row = props.rowContent;

    return (
        <tr>
            {row.map((val, rowID) => <td  key={rowID}>{val}</td>)}
        </tr>
    )
}

export default TableRow;