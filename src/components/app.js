import React from 'react';
import { FetchDataButton } from './fetch-data-button';

export class App extends React.Component {
	render() {
		return (
			<div>
				<div>
					Hello World!
				</div>
				<FetchDataButton></FetchDataButton>
			</div>
		);
	}
}