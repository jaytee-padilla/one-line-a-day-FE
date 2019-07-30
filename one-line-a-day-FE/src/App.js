import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

// components
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
	return (
    <div className="App">
			<Route exact path="/" component={Login} />
			<Route exact path="/signup" component={SignUp} />
    </div>
  );
}

export default withRouter(App);
