import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import { GlobalStyle } from "./styles/global";
// import Header from './components/Header';

import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>
);

export default App;


ReactDOM.render(<App />, document.getElementById('root'));