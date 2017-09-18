import React from 'react'
import {shallow} from 'enzyme'

const mockShowLoginRegister = {
    type: 'SHOW_LOGIN_REGISTER',
    display: true
};
jest.mock('../../actions/userActions', () => Object.assign({},
    require.requireActual('../../actions/userActions'),
    {
        showLoginRegister: jest.fn().mockImplementation(() => {
            return mockShowLoginRegister;
        })
    }
));

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



import {NavLinks} from './NavLinks'

describe('<NavLinks />', () => {
	it('Should render without crashing', () => {
		const router = {location: '/'}
		const links = ['Login', 'Register']
		shallow(<NavLinks router={router} links={links}/>)
	})

	it('should render all links', () => {
		const links = ['Login', 'Register']
		const router = {location: '/'}
		const wrapper = shallow(<NavLinks router={router} links={links}/>)
		expect(wrapper.find('ul').children().length).toEqual(links.length)
	})

	it('should render href appropriately', () => {
		const router = {location: '/'}
		const links = ['Login', 'Register']
		const wrapper = shallow(<NavLinks router={router} links={links}/>)
		wrapper.find('a').nodes.forEach((node, index) => {
			expect(node.props.href).toEqual(`/${links[index].toLowerCase()}`)
		})
	})

	it('should render Login/Register appropriately', () => {
		const router = {location: '/'}
		const dispatch = jest.fn()
		const links = ['Login/Register']
		const wrapper = shallow(<NavLinks links={links} router={router} dispatch={dispatch}/>)

		wrapper.find('#Login/Register').children().simulate('click')
		expect(dispatch).toHaveBeenCalledWith(mockShowLoginRegister)
	})

	it('should render Logout appropriately', () => {
		const router = {location: '/'}
		const dispatch = jest.fn()
		const links = ['Logout']
		const wrapper = shallow(<NavLinks links={links} router={router} dispatch={dispatch}/>)

		wrapper.find('#Logout').children().simulate('click')
		expect(dispatch).toHaveBeenCalledWith(mockLogout)	
	})
})