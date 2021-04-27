import React, { useEffect, useState } from 'react';
import StudentCard from '../components/StudentCard';
import { getStudents } from '../helpers/data/studentData';
import StudentForm from '../components/StudentForm';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  return (
    <>
      <StudentForm
        formTitle='Add Student'
        setStudents={setStudents}
      />
      <hr/>
      <div className="card-container">
        {students.map((studentInfo) => (
          <StudentCard
            key={studentInfo.firebaseKey}
            setStudents={setStudents}
            {...studentInfo}
            // firebaseKey={studentInfo.firebaseKey}
            // name={studentInfo.name}
            // teacher={studentInfo.teacher}
            // grade={Number(studentInfo.grade)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
