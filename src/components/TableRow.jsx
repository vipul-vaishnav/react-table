import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ employee, idx }) => {
  const { id, first_name, last_name, date_of_birth, address, date_of_joining, salary, designation } = employee;
  return (
    <tr>
      <th>{idx}</th>
      <th>{id}</th>
      <td>
        <Link to={`/employee/${first_name.toLowerCase()}`} className="underline hover:text-blue-500 hover:font-bold">
          {first_name}
        </Link>
      </td>
      <td>{last_name}</td>
      <td>{date_of_birth}</td>
      <td>{address}</td>
      <td>{date_of_joining}</td>
      <td>{salary}</td>
      <td>{designation}</td>
    </tr>
  );
};

export default TableRow;
