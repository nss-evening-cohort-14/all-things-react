<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import StudentForm from '../StudentForm';
import StudentCard from '../components/StudentCard';
import { getStudents } from '../helpers/data/studentData';
=======
import React, { useEffect, useState } from 'react';
import StudentCard from '../components/StudentCard';
import { getStudents } from '../helpers/data/studentData';
import StudentForm from '../StudentForm';
>>>>>>> 7245a86b59dac7507c6791802ae0cb72715dfd54
import './App.scss';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  return (
    <div className='App'>
      <StudentForm formTitle='Form Title'/>
      <hr/>
      {students.map((studentInfo) => (
        <StudentCard
          key={studentInfo.firebaseKey}
          name={studentInfo.name}
          teacher={studentInfo.teacher}
          grade={Number(studentInfo.grade)}
          handleClick={() => console.warn(`${studentInfo.name}'s teacher is ${studentInfo.teacher}`)}
        />
      ))}
    </div>
  );
}

export default App;
