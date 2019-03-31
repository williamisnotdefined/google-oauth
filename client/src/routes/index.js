import React from 'react';
import { Switch, Route /* , Redirect  */ } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

// import { deleteToken } from '../services/auth';

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const UserList = () => (
	<div>UserList</div>
);

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<PrivateRoute exact path="/user-list" component={UserList} />
		<Route component={NotFound} />
	</Switch>
);

export default Routes;
