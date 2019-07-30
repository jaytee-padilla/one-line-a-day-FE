import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import './App.css';

// components
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProtectedPage from './components/ProtectedPage';

function App() {
	return (
    <div className="App">
			<Route exact path="/" render={props => <Login {...props} />} />
			<Route exact path="/signup" render={props => <SignUp {...props} />} />
			<PrivateRoute path="/protectedpage" component={ProtectedPage} />
    </div>
  );
}

export default withRouter(App);

