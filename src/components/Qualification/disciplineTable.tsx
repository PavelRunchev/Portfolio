import React from 'react';
import './disciplineTable.scss';

import tuGabData from '../../services/qualification-tu-gab-data';
import TableModel from './table-model';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function DisciplineTable() {
    const numberSymbol: String = '\u2116';
    return (
        <div className='table-container my-5'>
            <MDBTable striped hover>
                <MDBTableHead dark>
                    <tr className='table-grid'>
                        <th scope='col'>{numberSymbol}</th>
                        <th scope='col'>Discipline</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Grade</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {tuGabData.map((el, i) => <TableModel key={i} data={{...{index: i + 1}, ...el}}/>)}
                </MDBTableBody>
            </MDBTable>
        </div>
    
    );
}