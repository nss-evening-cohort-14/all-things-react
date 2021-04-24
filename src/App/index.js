import React, { useState, useEffect } from 'react';
import StudentForm from '../StudentForm';
import StudentCard from '../components/StudentCard';
import { getStudents } from '../helpers/data/studentData';
import './App.scss';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  return (
    <div className='App'>
      <StudentForm formTitle='Form Name' />
      <hr />
      {students.map((student) => (
        <StudentCard
          key={student.firebaseKey}
          name={student.name}
          teacher={student.teacher}
          grade={Number(student.grade)}
          handleClick={() => console.warn('Clicked!')}
        />
      ))}
    </div>
  );
}

export default App;
