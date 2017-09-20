import React from 'react'
import {shallow} from 'enzyme'
import {NavDropdown} from './NavDropdown'


const mockLogout = {
    type: 'LOGOUT'
};
jest.mock('../../actions/auth', () => Object.assign({},
    require.requireActual('../../actions/auth'),
    {
        logout: jest.fn().mockImplementation(() => {
            return mockLogout;
        })
    }
));


describe('<NavDropdown />', () => {
	it('Should render without crashing', () => {
		shallow(<NavDropdown wishlists={[]} title="Wishlists"/>)
	})

	it('should render logout appropriately', () => {
		const router = {location: '/'}
		const dispatch = jest.fn()
		const links = ['Signed in']
		const wrapper = shallow(<NavDropdown title='Signed in' links={['Change Email', 'Change Password', 'Logout']} dispatch={dispatch}/>)

		wrapper.find('#logout').simulate('click')
		
		expect(dispatch).toHaveBeenCalledWith(mockLogout)
	})
})