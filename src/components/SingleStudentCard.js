import React from 'react';
import PropTypes from 'prop-types';

export default function SingleStudentCard({ children, student }) {
  return (
    <div>
      <h1>Student: {student.name }</h1>
        {children}
      <footer>This is the footer</footer>
    </div>
  );
}

SingleStudentCard.propTypes = {
  children: PropTypes.any,
  student: PropTypes.object
};
