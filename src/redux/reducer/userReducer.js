import { FETCH_USER_LOGIN_SUCESS } from '../action/userAction';
import {  DECREMENT } from '../action/counterAction';
const INITIAL_STATE = {
   account:{
    access_token:'',
    refresh_token:'',
    username:'',
    image:'',
    role:''
   },
  isAuthenticated: false 
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCESS:
            console.log('check action',action)
            return {
                ...state, account:{
                    access_token:action?.payload?.Data?.access_token,
                    refresh_token:action?.payload?.Data?.refresh_token,
                    username:action?.payload?.Data?.username,
                    image:action?.payload?.Data?.image,
                    role:action?.payload?.Data?.role
                },
                isAuthenticated: true 
            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;