import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/layout'; // Header + Footer
import SermoonsPage from './pages/Sermons/Sermons';
import SermoonByIDPage from './pages/SermonByID/SermonByID';
import FilterByAuthorPage from './pages/FilterByAutor/FilterByAutor';
import FilterByBook from './pages/FilterByBook/FilterByBook';
import FilterByTopic from './pages/FilterByTopic/FilterByTopic';
import FilterBySeries from './pages/FilterBySeries/FilterBySeries';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route>
					<Layout>
						<Route path="/" component={SermoonsPage} exact />
						<Route path="/sermoons/:id" component={SermoonByIDPage} exact />
						<Route path="/book" component={FilterByBook} exact />
						<Route path="/topic" component={FilterByTopic} exact />
						<Route path="/series" component={FilterBySeries} exact />
						<Route path="/author" component={FilterByAuthorPage} exact />
					</Layout>
				</Route>
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
