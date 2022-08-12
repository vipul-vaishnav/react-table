import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TableRow from './TableRow';

const Table2 = ({ employees }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-zebra">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Address</th>
            <th>Date Of Joining</th>
            <th>Salary</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return <TableRow key={uuidv4()} employee={employee} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
