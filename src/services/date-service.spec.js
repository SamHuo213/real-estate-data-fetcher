import { DateService } from './date-service';

describe('DateService', () => {
	describe('getStartDate', () => {
		it('should return YYYY-mm-dd where year is one year ago', () => {
			const dateNow = new Date(Date.now());
			const expectedDateString = `'${dateNow.getFullYear()-1}-${dateNow.getMonth()+1}-${dateNow.getDate()}'`;
			
			const dateString = DateService.getStartDate();

			expect(dateString)
				.toBe(expectedDateString);
		});

		it('should return YYYY-mm-dd where string matches input', () => {
			const date = new Date(Date.now());
			date.setFullYear(date.getFullYear()-2);
			const expectedDateString = `'${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}'`;
			
			const dateString = DateService.getStartDate(date);

			expect(dateString)
				.toBe(expectedDateString);
		});
	});

	describe('getEndDate', () => {
		it('should return YYYY-mm-dd where year is now', () => {
			const dateNow = new Date(Date.now());
			const expectedDateString = `'${dateNow.getFullYear()}-${dateNow.getMonth()+1}-${dateNow.getDate()}'`;
			
			const dateString = DateService.getEndDate();

			expect(dateString)
				.toBe(expectedDateString);
		});

		it('should return YYYY-mm-dd where string matches input', () => {
			const date = new Date(Date.now());
			date.setFullYear(date.getFullYear()-2);
			const expectedDateString = `'${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}'`;
			
			const dateString = DateService.getEndDate(date);

			expect(dateString)
				.toBe(expectedDateString);
		});
	});
});