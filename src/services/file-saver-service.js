import { saveAs } from 'file-saver';

export class FileSaverService {
	static saveData(rows) {
		const blob = new Blob(rows, { type: 'text/plain' });
		saveAs(blob, FileSaverService.getFileName());
	}

	static getFileName() {
		const now = new Date(Date.now());
		return `${now.getFullYear()}-${FileSaverService.getMonth(now)}-${FileSaverService.getDay(now)}.txt`;
	}

	static getMonth(date) {
		const month = date.getMonth() + 1;
		let monthString = month;

		if (month < 10) {
			monthString = `0${month}`;
		}

		return monthString;
	}

	static getDay(date) {
		const day = date.getDate();
		let dayString = day;

		if (day < 10) {
			dayString = `0${day}`;
		}

		return dayString;
	}
}