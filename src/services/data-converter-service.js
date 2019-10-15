export class DataConverterService {
	static convertToTsv(rows) {
		return rows
			.map(x => {
				return x.join('\t') + '\n';
			});
	}
}