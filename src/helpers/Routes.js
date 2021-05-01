import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddStudent from '../views/AddStudent';
import Home from '../views/Home';
import Students from '../views/Students';
import SingleStudent from '../views/SingleStudent';

export default function Routes({ user, students, setStudents }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user}/>} />
        <Route
          exact
          path='/students'
          component={() => <Students students={students} setStudents={setStudents} />}
        />
        <Route path='/student/:id' component={SingleStudent} />
        <Route
          path='/add-student'
          component={() => <AddStudent setStudents={setStudents} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired,
  user: PropTypes.any
};
