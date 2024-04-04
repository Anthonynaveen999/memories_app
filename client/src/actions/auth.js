import * as api from '../api';
import {AUTH} from '../constants/actionTypes';

export const signup = (formData,navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({type:AUTH, data});
        navigate('/');
    } catch (error) {
        console.log(error.message);
    }
}
export const signin = (formData,navigate) => async (dispatch) => {
        try {
        const { data } = await api.signIn(formData);
        dispatch({type:AUTH, data});
        navigate('/');
    } catch (error) {
        console.log(error.message);
    }
}