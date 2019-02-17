import * as React from 'react';
import { shallow } from 'enzyme';
import AllCharities from '../AllCharities'
import "../setupTests"

describe('All charities component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	it('should mount correctly', () => {
			shallow(<AllCharities />)
	})
	it('should display a charity list', () => {
		let wrapper = shallow(<AllCharities />);
		wrapper.setState({charities: [
			{ id: 1, img: 'http://www.mockcharity.com/img1.jpg' , name: 'Test charity 1'},
			{ id: 2, img: 'http://www.mockcharity.com/img2.jpg', name: 'Test charity 2'}
		]});
		let list = wrapper.find('li');
		expect(list).toHaveLength(2);
	})
	it('should display a text if no charities are available', () => {
		let wrapper = shallow(<AllCharities />);
		let p = wrapper.find('p');
		expect(p.exists()).toBe(true);
	})
});