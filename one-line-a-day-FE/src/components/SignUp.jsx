import React from 'react';
import { Form, Image, Grid, Segment } from 'semantic-ui-react';
import logo from '../assets/OLAD_logo.png';

export default function SignUp() {
	return (
		<div>
			<Grid textAlign="center" verticalAlign="middle" style={{height: "100vh"}}>
				<Grid.Column style={{maxWidth: 500}}>
					<Image centered src={logo} alt="Logo" style={{width: "300px"}} />

					<Form>
						<Segment>
							<Form.Input fluid type="text" placeholder="First Name" required />
							<Form.Input fluid type="text" placeholder="Last Name" required />
							<Form.Input fluid type="text" placeholder="Username" required />
							<Form.Input fluid type="email" placeholder="Email" required />
							<Form.Input fluid type="password" placeholder="Password" required />

							<Form.Button fluid content="Sign Up" size="large" />
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
		</div>
	)
}
