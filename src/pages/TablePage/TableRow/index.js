import { useState } from 'react';
import TableCell from './TableCell';

const TableRow = ({ member }) => {

    const [isActiveRow, setIsActiveRow] = useState(false);

    const toggleRow = () => {
        setIsActiveRow(!isActiveRow);
    };

    const getTableTds = () => {
        return Object.values(member).map((value, i) => {
            if (Array.isArray(value)) {
                value = value.join(', ')
            }
            return <TableCell key={i} value={value} />
        })
    };

    const tableTds = getTableTds();

    const classRow = isActiveRow ? 'active-row' : 'row';

    return (
        <tr className={classRow}>
            <td><input type='checkbox' className='row-checkbox' onClick={() => toggleRow()}></input></td>
            {tableTds}
        </tr>

    );
}

export default TableRow;