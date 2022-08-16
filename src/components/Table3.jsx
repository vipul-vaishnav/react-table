import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { v4 as uuidv4 } from 'uuid';
import ChevronDown from './../assets/ChevronDown';
import ChevronUp from './../assets/ChevronUp';
import { Link } from 'react-router-dom';

const Table3 = ({ employees, query }) => {
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell
              sx={{ display: 'flex' }}
              align="right"
              className="items-center cursor-pointer"
              onClick={sortByFirstName}
            >
              First Name {sort === 'asc' ? <ChevronDown /> : <ChevronUp />}
            </TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Date Of Birth</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Date Of Joining</TableCell>
            <TableCell
              sx={{ display: 'flex' }}
              align="right"
              className="items-center cursor-pointer"
              onClick={handleClick}
            >
              Salary {sort === 'asc' ? <ChevronDown /> : <ChevronUp />}
            </TableCell>
            <TableCell align="right">Designation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterByQuery(employees, query).map((employee, idx) => (
            <TableRow key={uuidv4()} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell align="right">{employee.id}</TableCell>
              <TableCell align="right">
                <Link
                  to={`/employee/${employee.first_name.toLowerCase()}`}
                  className="underline hover:text-blue-500 hover:font-bold"
                >
                  {employee.first_name}
                </Link>
              </TableCell>
              <TableCell align="right">{employee.last_name}</TableCell>
              <TableCell align="right">{employee.date_of_birth}</TableCell>
              <TableCell align="right">{employee.address}</TableCell>
              <TableCell align="right">{employee.date_of_joining}</TableCell>
              <TableCell align="right">{employee.salary}</TableCell>
              <TableCell align="right">{employee.designation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Table3;
