import { createStore /* , applyMiddleware */, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import ducks from './ducks';
// import sagas from './sagas';

// const sagaMiddleware = createSagaMiddleware();
const devTools = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

const store = createStore(
	ducks
	/*, applyMiddleware(sagaMiddleware) */,
	compose(
		devTools
	)
);

// sagaMiddleware.run(sagas);

export default store;