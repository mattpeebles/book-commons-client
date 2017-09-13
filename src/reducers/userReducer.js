import {

} from '../actions/userActions'


const initialState = {
	loading : false,
	error: null
}

export default (state, action) => {
	state = state || initialState;

	return state;
}