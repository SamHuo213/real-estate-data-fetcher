import { saveAs } from 'file-saver';

export class FileSaverService {
	static saveData(rows) {
		const blob = new Blob(rows, { type: 'text/plain' });
		saveAs(blob, FileSaverService.getFileName());
	}

	static getFileName() {
		const now = new Date(Date.now());
		return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}.txt`;
	}
}