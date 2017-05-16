import React from 'react';
require('../../scss/style.scss');
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';

const App = () => (
  <div>
      <h2>Username list:</h2>
      <UserList />
      <hr/>
      <h2>User Details:</h2>
      <UserDetails/>
  </div>
);

export default App;