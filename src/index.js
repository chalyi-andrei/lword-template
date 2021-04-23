import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/layout'; // Header + Footer
import SermoonPage from './pages/Sermons/Sermons';
import FilterByAuthorPage from './pages/FilterByAutor/FilterByAutor';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route>
					<Layout>
						<Route path="/" component={SermoonPage} exact />
						<Route path="/by-author" component={FilterByAuthorPage} exact />
					</Layout>
				</Route>
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
