import React from 'react';
import { FetchDataService } from '../services/fetch-data-service';

// TODO
//- Export functionality
//- Accept dates
export class FetchDataButton extends React.Component {	
	fetchDataService;
	
	constructor(props) {
		super(props);
		this.fetchDataService = new FetchDataService();
	}
	
	onFetchData() {
		this.fetchDataService.fetchAllData();
	}
	
	render() {
		return (
			<button onClick={this.onFetchData.bind(this)}>
				Fetch Data
			</button>
		);
	}
}