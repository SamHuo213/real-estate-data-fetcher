import { FetchDataService } from './fetch-data-service';
import { RegionService } from './region-service';


// TODO
// Check the API calls is as expected
// Check response handling is correct
describe('FetchDataService', () => {
	let fetchDataService;
	
	beforeEach(() => {
		fetch.resetMocks()
		fetchDataService = new FetchDataService();

		RegionService.regionsMap = {
			mapsc: [
				'Sunshine Coast'
			],
			mapsq: [
				'Squamish', 'Whistler', 'Pemberton'
			]
		};
	});
	
	describe('fetchAllData', () => {
		it('should pass', async () => {
			fetch.mockResponse(JSON.stringify({
				errors: [],
				rows: []
			}));
			fetchDataService.delayTime = 1;
			
			const response = await fetchDataService.fetchAllData(); 
		
			expect(response)
				.toBeDefined();
		});
	});
});