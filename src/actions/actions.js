export const SHOW_LOGIN_REGISTER = 'SHOW_LOGIN_REGISTER'
export const showLoginRegister = (show) => ({
	type: SHOW_LOGIN_REGISTER,
	clicked: show,

})

export const TOGGLE_LOGIN_REGISTER = 'TOGGLE_LOGIN_REGISTER'
export const toggleLoginRegister = (form) => ({
	type: TOGGLE_LOGIN_REGISTER,
	form: form,
})


