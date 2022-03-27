import TableCell from './TableCell';

const TableRow = ({ member }) => {

    const getTableTds = () => {
        return Object.values(member).map((value, i) => {
            if (Array.isArray(value)) {
                value = value.join(', ')
            }
            return <TableCell key={i} value={value} />
        })
    }

    const tableTds = getTableTds()

    return (
        <tr>
            {tableTds}
        </tr>

    );
}

export default TableRow;