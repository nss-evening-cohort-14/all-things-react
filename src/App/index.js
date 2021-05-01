import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { getStudents } from '../helpers/data/studentData';
import Routes from '../helpers/Routes';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  return (
    <>
      <NavBar />
      <Routes
        students={students}
        setStudents={setStudents}
      />
    </>
  );
}

export default App;
