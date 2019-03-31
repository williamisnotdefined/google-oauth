import { getToken } from "../../services/auth";
const INITIAL_STATE = {
	userName: null,
	photo: null,
	token: getToken()
};

export const Types = {
	SET_USER: 'user/SET_USER'
};

export const Creators = {
	setUser: user => ({ type: Types.SET_USER, user }),
};

export default (state = INITIAL_STATE, { type, payload }) => {

	switch (type) {

		case Types.SET_USER:
			return {
				...state,
				...payload
			}

		default:
			return state;

	}

};