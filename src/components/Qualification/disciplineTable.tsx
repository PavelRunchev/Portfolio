import React from 'react';
import './disciplineTable.scss';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function DisciplineTable() {
    const numberSign = '\u2116';
  return (
    <div className='table-container my-5'>
        <MDBTable striped hover>
            <MDBTableHead dark>
                <tr className='table-grid'>
                    <th scope='col'>{numberSign}</th>
                    <th scope='col'>Discipline</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Grade</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr className='table-grid'>
                    <th scope='row'>1</th>
                    <td>Introduction to Programming</td>
                    <td>C++</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>2</th>
                    <td>OOP</td>
                    <td>C# (.NET) Inheritance, Abstraction, Encapsulation, Polymorphism, Generics</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>3</th>
                    <td>Computer Graphic</td>
                    <td>Raster and Vector Graphics</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>4</th>
                    <td>CPU Architectures</td>
                    <td>RISC and CISC architecture, instruction-level parallelism</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>5</th>
                    <td>Computer Graphic</td>
                    <td>Raster and Vector Graphics</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>6</th>
                    <td>Programming in Internet Environment</td>
                    <td>Java, JavaScript, HTML5, CSS3</td>
                    <td>5</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>7</th>
                    <td>Operation Systems</td>
                    <td>Unix</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>8</th>
                    <td>Date Base</td>
                    <td>Relational database, MySQL (MyISAM, Memory, InnoDB, Archive)</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>9</th>
                    <td>Discrete Structures</td>
                    <td>Relations, Trees, Graphs</td>
                    <td>5</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>10</th>
                    <td>Algorithms and data structures</td>
                    <td>C++ programming - List, Stack, Queue, Deque, search and sort algorithms</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>11</th>
                    <td>Information Systems</td>
                    <td>research, design, modeling, testing in information systems</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>12</th>
                    <td>Design of program interfaces</td>
                    <td>React JS</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>13</th>
                    <td>Computer Organization</td>
                    <td>CPU, Motherboard, RAM, HDD, CD, Cache RAM, Virtual RAM</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>14</th>
                    <td>Design to software projects</td>
                    <td>C# programming, Structure design, Cohesion, Coupling, Creational, Structural and Behavioral Patterns</td>
                    <td>6</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>15</th>
                    <td>NoSQL</td>
                    <td>MongoDB - query with Java and NodeJS</td>
                    <td>5</td>
                </tr>
                <tr className='table-grid'>
                    <th scope='row'>16</th>
                    <td>Computer and Network Security</td>
                    <td>Attack, Vulnerability, Threat, Cryptography, VPN, Wireless, Mail and Web security</td>
                    <td>6</td>
                </tr>
            </MDBTableBody>
        </MDBTable>
    </div>
  
  );
}