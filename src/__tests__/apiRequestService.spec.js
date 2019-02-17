describe('request service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should issue a request for charity info', () => {
    let apiRequestService = require('../services/apiRequestService');
    apiRequestService.getCharityInfo = jest.fn();
    apiRequestService.getCharityInfo();
    expect(apiRequestService.getCharityInfo).toHaveBeenCalled();
  })
  it('should issue a request for charity donations', () => {
    let apiRequestService = require('../services/apiRequestService');
    apiRequestService.getCharityDonations = jest.fn();
    apiRequestService.getCharityDonations();
    expect(apiRequestService.getCharityDonations).toHaveBeenCalled();
  })
  it('should issue a request to get all charities', () => {
    let apiRequestService = require('../services/apiRequestService');
    apiRequestService.getAllCharities = jest.fn();
    apiRequestService.getAllCharities();
    expect(apiRequestService.getAllCharities).toHaveBeenCalled();
  })
});