import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 1000
});

export default class generalApiRequestService {
    getCharityInfo (charityId) {
      return instance.get(`/charity/${charityId}`);
    }
    getCharityDonations (charityId) {
      return instance.get(`/details/${charityId}/donations/`);
    }
    getAllCharities () {
      return instance.get(`/charities`);
    }
}