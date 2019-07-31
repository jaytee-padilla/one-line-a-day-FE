import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import './App.scss';

// components
import Login from './components/Login';
import SignUp from './components/SignUp';
import JournalEntries from './components/JournalEntries';
import Post from './components/Post/Post';
import List from './components/JulieTestDataFolder/List'
import SelectedPostCard from './components/JulieTestDataFolder/SelectedPostCard'

function App() {
	return (
    <div className="App">
			<Route exact path="/" render={props => <Login {...props} />} />
			<Route exact path="/signup" render={props => <SignUp {...props} />} />
			<Route exact path="/list" render={props => <List {...props} />} />
			<Route exact path="/post/:id" render={props => <SelectedPostCard {...props} />} />
			<PrivateRoute path="/home" component={JournalEntries} />
    </div>
  );
}

export default withRouter(App);

