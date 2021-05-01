import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSingleStudent } from '../helpers/data/studentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleStudent(id)
      .then(setStudent);
  }, []);
  return (
    <div>
      { student.name }
    </div>
  );
}

SingleStudent.propTypes = {
  id: PropTypes.string
};
