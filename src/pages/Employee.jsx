import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './../components/Loader';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

const Employee = () => {
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${process.env.REACT_APP_EMPLOYEES_DATA_BASE_URL}${name === 'jenifer' ? 'jeniffer' : name}`
        );

        if (res.status === 200) {
          setLoading(false);
          setValue(() => {
            return { ...res.data[0] };
          });
        }
      } catch (error) {
        setLoading(false);
        setError({ code: error.response.status, message: error.response.data.error });
      }
    };

    getData();
  }, [name]);

  const { first_name, last_name, date_of_birth, address, date_of_joining, salary, designation } = value;

  const { code, message } = error;

  if (loading) {
    return <Loader />;
  }

  if (code === 400) {
    console.log(message);
    return <Navigate to="*" />;
  }

  return (
    <div className="relative">
      <h1 className="py-8 text-3xl font-extrabold tracking-wider text-center text-teal-500 uppercase bg-zinc-800 sm:py-10">
        Employee: {first_name}
      </h1>
      <button onClick={() => navigate('/')} className="absolute btn glass top-5 right-5">
        Back
      </button>
      <div className="overflow-x-auto">
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{first_name}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{last_name}</td>
            </tr>
            <tr>
              <th>Date Of Birth</th>
              <td>{date_of_birth}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{address}</td>
            </tr>
            <tr>
              <th>Date Of Joining</th>
              <td>{date_of_joining}</td>
            </tr>
            <tr>
              <th>Salary</th>
              <td>{salary}</td>
            </tr>
            <tr>
              <th>Designation</th>
              <td>{designation}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
