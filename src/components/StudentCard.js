import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const StudentCard = ({
  name,
  grade,
  teacher,
  handleClick
}) => (
  <Card body>
<<<<<<< HEAD
    <CardTitle tag="h5">{name}</CardTitle>
    <CardText>Grade: {grade}</CardText>
    <CardText>Teacher: {teacher}</CardText>
    <Button onClick={handleClick}>Print Student</Button>
=======
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Grade: {grade}</CardText>
      <CardText>Teacher: {teacher}</CardText>
      {handleClick ? <Button onClick={handleClick}>Print Student</Button> : ''}
>>>>>>> 7245a86b59dac7507c6791802ae0cb72715dfd54
  </Card>
);

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
<<<<<<< HEAD
  grade: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
=======
  teacher: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
>>>>>>> 7245a86b59dac7507c6791802ae0cb72715dfd54
  handleClick: PropTypes.func
};

export default StudentCard;
