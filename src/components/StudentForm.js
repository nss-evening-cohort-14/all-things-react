import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addStudent } from '../helpers/data/studentData';

const StudentForm = ({ formTitle, setStudents }) => {
  const [student, setStudent] = useState({
    name: '',
    teacher: '',
    grade: 0,
  });

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'grade' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add a student to firebase
    addStudent(student).then((studentArray) => setStudents(studentArray));
  };

  return (
    <div className='student-form'>
      <Form id='addStudentForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            name='name'
            id='name'
            value={student.name}
            type='text'
            placeholder='Enter a Student Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="teacher">Teacher:</Label>
          <Input
            name='teacher'
            id='teacher'
            value={student.teacher}
            type='text'
            placeholder='Enter a Teacher Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="grade">Grade:</Label>
          <Input
            name='grade'
            id='grade'
            value={student.grade}
            type='number'
            placeholder='Enter a Grade'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func
};

export default StudentForm;
