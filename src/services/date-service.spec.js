import { DateService } from './date-service';

describe('DateService', () => {
	describe('getStartDate', () => {
		it('should return YYYY-mm-dd where date is 3 months back', () => {
			const dateNow = new Date('2019-05-25 14:00:00 GMT-02:00');
			Date.now = jest.fn(() => dateNow);
			const expectedDateString = `'${dateNow.getFullYear()}-${dateNow.getMonth()-3+1}-${dateNow.getDate()}'`;
			
			const dateString = DateService.getStartDate();

			expect(dateString)
				.toBe(expectedDateString);
		});

		it('should return 2018-12-25', () => {
			const dateNow = new Date('2019-03-25 14:00:00 GMT-02:00');
			Date.now = jest.fn(() => dateNow);
			const expectedDateString = `'2018-12-25'`;
			
			const dateString = DateService.getStartDate();

			expect(dateString)
				.toBe(expectedDateString);
		});

		it('should return 2018-11-25', () => {
			const dateNow = new Date('2019-02-25 14:00:00 GMT-02:00');
			Date.now = jest.fn(() => dateNow);
			const expectedDateString = `'2018-11-25'`;
			
			const dateString = DateService.getStartDate();

			expect(dateString)
				.toBe(expectedDateString);
		});

		it('should return 2018-10-25', () => {
			const dateNow = new Date('2019-01-25 14:00:00 GMT-02:00');
			Date.now = jest.fn(() => dateNow);
			const expectedDateString = `'2018-10-25'`;
			
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