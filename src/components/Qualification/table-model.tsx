import React from 'react';

export default function TableModel(props: any): React.JSX.Element {

    return (
        <tr className='table-grid'>
            <th scope='row'>{props.data.index}</th>
            <td>{props.data.discipline}</td>
            <td>{props.data.description}</td>
            <td>{props.data.grade}</td>
        </tr>
    )
}