import React from 'react';
import { FetchDataService } from '../services/fetch-data-service';
import { DataConverterService } from '../services/data-converter-service';
import { FileSaverService } from '../services/file-saver-service';

// TODO
//- Export functionality
//- Accept dates
export class FetchDataButton extends React.Component {	
	fetchDataService;
	
	constructor(props) {
		super(props);
		this.fetchDataService = new FetchDataService();
	}
	
	async onFetchData() {
		const response = await this.fetchDataService.fetchAllData();
		const convertedResponse = DataConverterService.convertToTsv(response);
		FileSaverService.saveData(convertedResponse);
	}
	
	render() {
		return (
			<button onClick={this.onFetchData.bind(this)}>
				Fetch Data
			</button>
		);
	}
}

export default FetchDataButton;
