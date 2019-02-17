import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../App'
import "../setupTests"

describe('App component', () => {
	it('should mount correctly', () => {
		shallow(<App />);
	})
});