import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import SermoonPage from './pages/Sermons/Sermons';
import Layout from './components/Layout/layout';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route path="/" component={SermoonPage} exact />
				</Layout>
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
