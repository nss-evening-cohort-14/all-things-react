import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <div>
      { user
        ? <h1>Hello, {user.fullName}</h1>
        : <h1>Hello, World!</h1>
      }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
