import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Image, Grid, Segment, Message } from 'semantic-ui-react';
import logo from '../assets/OLAD_logo.png';

export default function Login() {
	return (
		<Grid textAlign="center" verticalAlign="middle" style={{height: "100vh"}}>
			<Grid.Column style={{maxWidth: 500}}>
				<Image centered src={logo} alt="Logo" style={{width: "300px"}} />

				<Form>
					<Segment>
						<Form.Input fluid type="email" placeholder="Email" icon="user" iconPosition="left" required />
						<Form.Input fluid type="password" placeholder="Password" icon="lock" iconPosition="left" required />

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