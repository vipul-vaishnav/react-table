import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TableRow from './TableRow';
import ChevronDown from './../assets/ChevronDown';
import ChevronUp from './../assets/ChevronUp';

const Table = ({ employees, query }) => {
  const keys = [
    'first_name',
    'last_name',
    'id',
    'date_of_birth',
    'address',
    'date_of_joining',
    'salary',
    'designation',
  ];
  const filterByQuery = (data, query) => {
    return data.filter((employee) => {
      return keys.some((key) => employee[key].toString().toLowerCase().includes(query.toLowerCase()));
    });
  };

  // SORTING
  const [sort, setSort] = useState('asc');

  const handleClick = () => {
    employees.sort((a, b) => {
      const salaryA = +a.salary.split(',').join('');
      const salaryB = +b.salary.split(',').join('');

      console.log(salaryA, salaryB);

      sort === 'asc' ? setSort('desc') : setSort('asc');
      if (salaryA < salaryB) {
        return sort === 'asc' ? -1 : 1;
      }
      if (salaryA > salaryB) {
        return sort === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  const sortByFirstName = () => {
    employees.sort((a, b) => {
      const nameA = a.first_name.toLowerCase();
      const nameB = b.first_name.toLowerCase();

      sort === 'asc' ? setSort('desc') : setSort('asc');
      if (nameA < nameB) {
        return sort === 'asc' ? -1 : 1;
      }
      if (nameA > nameB) {
        return sort === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-compact">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th onClick={sortByFirstName} className="flex items-center gap-2 cursor-pointer">
              First Name {sort === 'asc' ? <ChevronDown /> : <ChevronUp />}
            </th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Address</th>
            <th>Date Of Joining</th>
            <th onClick={handleClick} className="flex items-center gap-2 cursor-pointer">
              Salary {sort === 'asc' ? <ChevronDown /> : <ChevronUp />}
            </th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {filterByQuery(employees, query).map((employee, idx) => {
            return <TableRow key={uuidv4()} employee={employee} idx={idx + 1} />;
          })}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Address</th>
            <th>Date Of Joining</th>
            <th>Salary</th>
            <th>Designation</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
