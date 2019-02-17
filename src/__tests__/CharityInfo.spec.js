import * as React from 'react';
import { shallow } from 'enzyme';
import CharityInfo from '../CharityInfo'
import "../setupTests"

describe('Charity info component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	it('should mount correctly', () => {
		shallow(<CharityInfo match={{params: {id: 1}}} />);
	})
	it('should display a text if no info is available', () => {
		let wrapper = shallow(<CharityInfo match={{params: {id: 1}}}/>);
		expect(wrapper.find('p').exists()).toBe(true);
	})
	it('should display a charity if available', () => {
		let wrapper = shallow(<CharityInfo match={{params: {id: 1}}}/>);
		wrapper.setState({charityInfo: 
			{ id: 1, 
				name: 'Test charity 1',
				impactStatementWhat: 'We live to test',
				impactStatementWhy: 'To avoid regressions',
				dateAddedToJustGiving: '17-02-2019',
				countryCode: 'GB',
				currencyCode: 'GBP',
				emailAddress: 'test@tester.com',
				logoAbsoluteUrl: 'http://www.mockcharity.com/img1.jpg',
				description: 'Test description'
			}
		});
		expect(wrapper.find('h2').contains('We live to test')).toBe(true);
		expect(wrapper.find('h3').contains('To avoid regressions')).toBe(true);
		expect(wrapper.find('img').prop('src')).toEqual('http://www.mockcharity.com/img1.jpg');
	})
	it('should display charity donations if available', () => {
		let wrapper = shallow(<CharityInfo match={{params: {id: 1}}}/>);
		wrapper.setState({donations: 
			[{ id: 1, 
				donorDisplayName: 'Test donor 1',
				currencyCode: 'GBP',
				message: 'A test donation',
				donationDate: '17-02-2019',
				imageUrl: 'http://www.mockcharity.com/img2.jpg',
			}]
		});
		expect(wrapper.find('.charity-info__donation--col').children()).toHaveLength(5);
		expect(wrapper.find('img').filterWhere((item) => {
			return item.prop('src') === 'http://www.mockcharity.com/img2.jpg';
		})).toHaveLength(1);
	})
});