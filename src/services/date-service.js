export class DateService {
	static getStartDate(startDate = null) {
		if (startDate) {
			return this.getStringFormatedDate(startDate);
		}

		let internalStartDate = new Date(Date.now());
		internalStartDate.setFullYear(internalStartDate.getFullYear() - 1);

		return this.getStringFormatedDate(internalStartDate);
	}

	static getEndDate(endDate = null) {
		if (endDate) {
			return this.getStringFormatedDate(endDate);
		}

		return this.getStringFormatedDate(new Date(Date.now()));
	}

	static getStringFormatedDate(date) {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();

		return `'${year}-${month}-${day}'`;
	}
}