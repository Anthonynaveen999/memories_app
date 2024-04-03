import * as api from '../api';

export const signup = (formData,navigate) => async (dispatch) => {
    try {
        
        navigate('/');
    } catch (error) {
        console.log(error.message);
    }
}
export const signin = (formData,navigate) => async (dispatch) => {
    try {
        
        navigate('/');
    } catch (error) {
        console.log(error.message);
    }
}