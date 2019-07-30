import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Image, Grid, Segment, Message } from 'semantic-ui-react';
import axios from 'axios';
import logo from '../assets/OLAD_logo.png';

export default function Login(props) {
	const [loginCreds, setCreds] = useState({
		email: "",
		password: ""
	});

	const submitHandler = event => {
		event.preventDefault();

		axios.post("https://one-line-daily.herokuapp.com/api/auth/login", loginCreds)
		.then(response => {
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('user_id', response.data.user.id);
			props.history.push("/protectedpage");
		})
		.catch(error => console.log(error))
	};

	const changeHandler = event => {
		setCreds({...loginCreds, [event.target.name]: event.target.value})
	};

	return (
		<Grid textAlign="center" verticalAlign="middle" style={{height: "100vh"}}>
			<Grid.Column style={{maxWidth: 500}}>
				<Image centered src={logo} alt="Logo" style={{width: "300px"}} />

				<Form onSubmit={submitHandler}>
					<Segment>
						<Form.Input fluid type="email" placeholder="Email" icon="user" iconPosition="left" name="email" value={loginCreds.email} onChange={changeHandler} required />
						<Form.Input fluid type="password" placeholder="Password" icon="lock" iconPosition="left" name="password" value={loginCreds.password} onChange={changeHandler} required />

						<Form.Button fluid content="Login" size="large" />
					</Segment>
				</Form>

				<Message>
					Don't have an account? <Link to="/signup">Sign Up</Link>
				</Message>
			</Grid.Column>
		</Grid>
	)
};