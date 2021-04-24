import React from 'react';
import firebase from 'firebase/app';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import StudentForm from '../StudentForm';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div className='App'>
      <StudentForm />
    </div>
  );
}

export default App;
