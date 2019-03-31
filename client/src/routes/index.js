import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import { deleteToken } from '../services/auth';

// import Home from '../pages/home';
// import NotFound from '../pages/notFound';

export default () => (
	<Switch>
		<Route exact path="/" component={<div>home</div>} />
		<PrivateRoute exact path="/user-list" component={<div>UserList</div>} />

		<PrivateRoute
			exact
			path="/logout"
			component={props => {
				deleteToken();
				return (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				);
			}}
		/>

		{/* <Route component={NotFound} /> */}
	</Switch>
);
