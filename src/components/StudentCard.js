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
    <CardTitle tag="h5">{name}</CardTitle>
    <CardText>Grade: {grade}</CardText>
    <CardText>Teacher: {teacher}</CardText>
    <Button onClick={handleClick}>Print Student</Button>
  </Card>
);

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default StudentCard;
