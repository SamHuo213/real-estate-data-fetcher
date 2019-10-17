export class DateService {
	static getStartDate(startDate = null) {
		if (startDate) {
			return this.getStringFormatedDate(startDate);
		}

		let internalStartDate = new Date(Date.now());

		let desiredMonth = internalStartDate.getMonth() - 3;
		if (desiredMonth < 0) {
			desiredMonth = 12 + desiredMonth;
			internalStartDate.setFullYear(internalStartDate.getFullYear() - 1);
		}

		internalStartDate.setMonth(desiredMonth);

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