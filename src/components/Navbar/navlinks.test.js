import React from 'react'
import {shallow} from 'enzyme'

const mockShowLoginRegister = {
    type: 'SHOW_LOGIN_REGISTER',
    display: true
};
jest.mock('../../actions/auth', () => Object.assign({},
    require.requireActual('../../actions/auth'),
    {
        showLoginRegister: jest.fn().mockImplementation(() => {
            return mockShowLoginRegister;
        })
    }
));


import {NavLinks} from './NavLinks'

describe('<NavLinks />', () => {
	it('Should render without crashing', () => {
		const router = {location: '/'}
		const links = ['Login', 'Register']
		shallow(<NavLinks router={router} navLinks={links}/>)
	})

	it('should render all links', () => {
		const links = ['Login', 'Register']
		const router = {location: '/'}
		const wrapper = shallow(<NavLinks router={router} navLinks={links}/>)
		expect(wrapper.find('ul').children().length).toEqual(links.length)
	})

	it('should render href appropriately', () => {
		const router = {location: '/'}
		const links = ['Login', 'Register']
		const wrapper = shallow(<NavLinks router={router} navLinks={links}/>)
		wrapper.find('a').nodes.forEach((node, index) => {
			expect(node.props.href).toEqual(`/${links[index].toLowerCase()}`)
		})
	})

	it('should render Login/Register appropriately', () => {
		const router = {location: '/'}
		const dispatch = jest.fn()
		const links = ['Login/Register']
		const wrapper = shallow(<NavLinks navLinks={links} router={router} dispatch={dispatch}/>)

		wrapper.find('#Login/Register').children().simulate('click')
		expect(dispatch).toHaveBeenCalledWith(mockShowLoginRegister)
	})

	it('should render Signed in appropriately', () => {
		const router = {location: '/'}
		const dispatch = jest.fn()
		const links = ['Signed in']
		const wrapper = shallow(<NavLinks navLinks={links} router={router} user={{"email": "kanye@west.com"}} dispatch={dispatch}/>)

		expect(wrapper.find('#signedIn-Dropdown').node.props.title).toEqual('Signed in as kanye')
		//children().simulate('click')
		//expect(dispatch).toHaveBeenCalledWith(mockLogout)	
	})
})