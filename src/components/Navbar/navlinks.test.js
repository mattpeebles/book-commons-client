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
jest.mock('../../actions/userActions', () => Object.assign({},
    require.requireActual('../../actions/userActions'),
    {
        logout: jest.fn().mockImplementation(() => {
            return mockLogout;
        })
    }
));



import {NavLinks} from './NavLinks'


describe('<NavLinks />', () => {
	it('Should render without crashing', () => {
		const links = ['Login', 'Register']
		shallow(<NavLinks links={links}/>)
	})

	it('should render all links', () => {
		const links = ['Login', 'Register']
		const wrapper = shallow(<NavLinks links={links}/>)
		expect(wrapper.find('ul').children().length).toEqual(links.length)
	})

	it('should render href appropriately', () => {
		const links = ['Login', 'Register']
		const wrapper = shallow(<NavLinks links={links}/>)
		wrapper.find('a').nodes.forEach((node, index) => {
			expect(node.props.href).toEqual(`/${links[index].toLowerCase()}`)
		})
	})

	it('should render Login/Register appropriately', () => {
		const dispatch = jest.fn()
		const links = ['Login/Register']
		const wrapper = shallow(<NavLinks links={links} dispatch={dispatch}/>)

		wrapper.find('#Login/Register').children().simulate('click')
		expect(dispatch).toHaveBeenCalledWith(mockShowLoginRegister)
	})

	it('should render Logout appropriately', () => {
		const dispatch = jest.fn()
		const links = ['Logout']
		const wrapper = shallow(<NavLinks links={links} dispatch={dispatch}/>)

		wrapper.find('#Logout').children().simulate('click')
		expect(dispatch).toHaveBeenCalledWith(mockLogout)	
	})
})