import React from 'react';
import PropTypes from 'prop-types';
import StudentForm from '../components/StudentForm';

function AddStudent({ setStudents }) {
  return (
    <div>
      <StudentForm
        formTitle='Add Student'
        setStudents={setStudents}
      />
    </div>
  );
}

AddStudent.propTypes = {
  setStudents: PropTypes.func.isRequired
};

export default AddStudent;
