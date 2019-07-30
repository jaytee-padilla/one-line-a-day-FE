import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import './App.css';

// components
import Login from './components/Login';
import SignUp from './components/SignUp';
import JournalEntries from './components/JournalEntries';

function App() {
	return (
    <div className="App">
			<Route exact path="/" render={props => <Login {...props} />} />
			<Route exact path="/signup" render={props => <SignUp {...props} />} />
			<PrivateRoute path="/home" component={JournalEntries} />
    </div>
  );
}

export default withRouter(App);

