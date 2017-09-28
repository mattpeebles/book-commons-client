import React from 'react'
import {shallow} from 'enzyme'

import {ChangeUserSettings} from './ChangeUserSettingsPage'


describe('ChangeUserSettings', () => {
	it('should render ChangeUserSettings without crashing', () => {
		shallow(<ChangeUserSettings router={{'location': {'pathname': 'settings/user'}}}/>)
	})
})