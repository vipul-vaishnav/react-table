import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './../components/Loader';
import Table from '../components/Table';
import Table2 from './../components/Table2';

const Home = () => {
  const [value, setValue] = useState([]);
  const [view, setView] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${process.env.REACT_APP_EMPLOYEES_DATA_BASE_URL}employees`);

        if (res.status === 200) {
          setLoading(false);
          setValue(() => {
            return [...res.data];
          });
        }
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (value.length === 0) {
    return (
      <h1 className="grid min-h-screen text-5xl font-extrabold text-teal-500 bg-gray-900 place-content-center">
        No Records Found
      </h1>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => {
          setView((prev) => !prev);
        }}
        className="absolute btn glass top-5 right-5"
      >
        {view && <span>View 1</span>}
        {!view && <span>View 2</span>}
      </button>
      <h1 className="py-8 text-3xl font-extrabold tracking-wider text-center text-teal-500 uppercase bg-zinc-800 sm:py-10">
        Employees
      </h1>
      {!view && <Table employees={value} />}
      {view && <Table2 employees={value} />}

      {/* {value.length > 0 &&
        value.map((el) => {
          return (
            <b key={el.id}>
              {el.first_name}
              <br />
            </b>
          );
        })} */}
    </div>
  );
};

export default Home;
