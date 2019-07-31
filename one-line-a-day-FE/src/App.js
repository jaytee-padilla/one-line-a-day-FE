import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import './App.scss';

// components
import Login from './components/Login';
import SignUp from './components/SignUp';
import JournalEntries from './components/JournalEntries';
import PostList from './components/Post/PostList';
import SelectedPost from './components/Post/SelectedPost';
import CreatePost from './components/JulieTestDataFolder/CreatePost';


function App() {
	return (
    <div className="App">
			<Route exact path="/" render={props => <Login {...props} />} />
			<Route exact path="/signup" render={props => <SignUp {...props} />} />
			<Route exact path="/postlist" render={props => <PostList {...props} />} />
			<Route exact path="/:id" render={props => <SelectedPost {...props} />} />
			<Route exact path="/createpost" component={CreatePost} />
			<PrivateRoute path="/home" component={JournalEntries} />
    </div>
  );
}

export default withRouter(App);

