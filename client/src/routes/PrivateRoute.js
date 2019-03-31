import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken } from '../services/auth';

const PrivateRoute = ({ component: Component, ...props }) => {
	const c = !!getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />;
	return <Route {...props} component={c} />
};

export default PrivateRoute;
