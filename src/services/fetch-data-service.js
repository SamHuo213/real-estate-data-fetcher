import { gReceiver_ } from './util-service';
import { querySQL } from '../resource'; // Not in Source control
import { DateService } from './date-service';
import { RegionService } from './region-service';

export class FetchDataService {
	pageSize = 5000;
	orderBy = ' ORDER BY entryDate DESC';
	delayTime = 1000;

	async fetchAllData(startDate = null, endDate = null) {
		const internalStartDate = DateService.getStartDate(startDate);
		const internalEndDate = DateService.getEndDate(endDate);
		let rows = [];

		for (const value of Object.values(RegionService.regionsMap)) {
			const salesResponse = await this.fetchData(
				internalStartDate,
				internalEndDate,
				RegionService.getFormatedRegionString(value),
				'sold'
			);
			rows = rows.concat(salesResponse.rows);

			// Too not overload the server not in my control
			await this.delay(this.delayTime);

			const inventoryResponse = await this.fetchData(
				internalStartDate,
				internalEndDate,
				RegionService.getFormatedRegionString(value),
				'active'
			);
			rows = rows.concat(inventoryResponse.rows);

			// Too not overload the server not in my control
			await this.delay(this.delayTime);

			const expiredResponse = await this.fetchData(
				internalStartDate,
				internalEndDate,
				RegionService.getFormatedRegionString(value),
				'expired'
			);
			rows = rows.concat(expiredResponse.rows);

			// Too not overload the server not in my control
			await this.delay(this.delayTime);
		}

		return rows;
	}

	async fetchData(startDate, endDate, regions, soldEnum) {
		let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
		let httpResponse = await fetch(querySQL, {
			method: 'POST',
			headers: headers,
			body: this.getParams(startDate, endDate, regions, soldEnum)
		});

		return httpResponse.json();
	}

	getParams(startDate, endDate, regions, soldEnum) {
		const args = this.getArgs(startDate, endDate, regions, soldEnum);

		let searchQuery = 'SELECT * FROM *** WHERE ' + args.join(' AND ') + this.orderBy;
		searchQuery += ' LIMIT ' + this.pageSize + ' OFFSET ' + 0;

		let params = 'sql=' + encodeURIComponent(searchQuery);
		params += '&sold=' + this.getSoldFlag(soldEnum);
		params += '&s=' + gReceiver_(searchQuery);

		return params;
	}

	getSoldFlag(soldEnum) {
		if (soldEnum === 'sold') {
			return '1';
		} else if (soldEnum === 'expired') {
			return 'expired';
		}

		return '';
	}

	getArgs(startDate, endDate, regions, soldEnum) {
		let args = [];
		if (soldEnum === 'sold' || soldEnum === 'expired') {
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