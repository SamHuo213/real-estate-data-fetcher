import React from 'react';
import { FetchDataButton } from './fetch-data-button';

export class App extends React.Component {
	render() {
		return (
			<div>
				<div>
					Real Estate Data Fetcher!
				</div>
				<FetchDataButton></FetchDataButton>
			</div>
		);
	}
}

export default App;
