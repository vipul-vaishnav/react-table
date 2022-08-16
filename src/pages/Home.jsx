import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './../components/Loader';
import Table from '../components/Table';
import Table2 from './../components/Table2';
import Header from '../components/Header';
import Table3 from './../components/Table3';

const Home = () => {
  const [value, setValue] = useState([]);
  const [view, setView] = useState('view1');
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

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
          setView((prev) => {
            if (prev === 'view1') {
              return 'view2';
            } else if (prev === 'view2') {
              return 'view3';
            } else if (prev === 'view3') {
              return 'view1';
            }
          });
        }}
        className="absolute btn glass top-5 right-5"
      >
        {view === 'view1' && <span>View 1</span>}
        {view === 'view2' && <span>View 2</span>}
        {view === 'view3' && <span>View 3</span>}
      </button>
      <h1 className="py-8 text-3xl font-extrabold tracking-wider text-center text-teal-500 uppercase bg-zinc-800 sm:py-10">
        Employees
      </h1>
      <Header query={query} setQuery={setQuery} />
      {view === 'view1' && <Table employees={value} query={query} />}
      {view === 'view2' && <Table2 employees={value} query={query} />}
      {view === 'view3' && <Table3 employees={value} query={query} />}
    </div>
  );
};

export default Home;
