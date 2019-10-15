import { gReceiver_ } from './util-service';
import { querySQL } from '../resource'; // Not in Source control
import { DateService } from './date-service';
import { RegionService } from './region-service';

export class FetchDataService {
	pageSize = 10000;
	orderBy = ' ORDER BY entryDate DESC';
	delayTime = 1000;

	async fetchAllData(startDate = null, endDate = null) {
		const internalStartDate = DateService.getStartDate(startDate);
		const internalEndDate = DateService.getEndDate(endDate);
		let rows = [];

		for(const value of Object.values(RegionService.regionsMap)) {
			const salesResponse = await this.fetchData(
				internalStartDate,
				internalEndDate,
				RegionService.getFormatedRegionString(value),
				true
			);
			rows = rows.concat(salesResponse.rows);

			// Too not overload the server not in my control
			await this.delay(this.delayTime);

			const inventoryResponse = await this.fetchData(
				internalStartDate,
				internalEndDate,
				RegionService.getFormatedRegionString(value),
				false
			);
			rows = rows.concat(inventoryResponse.rows);

			// Too not overload the server not in my control
			await this.delay(this.delayTime);
		}

		return rows;
	}

	async fetchData(startDate, endDate, regions, soldFlag) {
		let headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		let httpResponse = await fetch(querySQL, {
			method: 'POST',
			headers: headers,
			body: this.getParams(startDate, endDate, regions, soldFlag)
		});
		
		return httpResponse.json();
	}

	getParams(startDate, endDate, regions, soldFlag) {
		const args = this.getArgs(startDate, endDate, regions, soldFlag);

		let searchQuery  = 'SELECT * FROM *** WHERE ' + args.join(' AND ') + this.orderBy;
		searchQuery += ' LIMIT ' + this.pageSize + ' OFFSET ' + 0;
	
		let params  = 'sql=' + encodeURIComponent(searchQuery);
		params += '&sold=' + (soldFlag ? '1' : '');
		params += '&s=' + gReceiver_(searchQuery);

		return params;
	}

	getArgs(startDate, endDate, regions, soldFlag) {
		let args = [];
		if (soldFlag) {
			args = args.concat([
				`entryDate >= ${startDate}`,
				`entryDate <= ${endDate}`
			]);
		}
		
		return args
			.concat([
				`regionName IN (${regions})`
			]);
	}

	delay(milliseconds) {
		return new Promise(resolve => setTimeout(resolve, milliseconds));
	}
}