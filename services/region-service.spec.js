import { RegionService } from './region-service';

describe('RegionService', () => {
	describe('getFormatedRegionString', () => {
		it('should return comma separated region string', () => {
			const burnabyRegions = RegionService.regionsMap.mapby;
			const regionString = RegionService.getFormatedRegionString(burnabyRegions);

			expect(regionString)
				.toBe(`'Burnaby East','Burnaby North','Burnaby South'`);
		});
	});
});