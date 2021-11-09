import axios from 'axios';
import {Dispatch} from 'redux';
import {
  RegistrationStatusDispatchTypes,
  FETCH_REGISTRATION_INIT,
  FETCH_REGISTRATION_FAIL,
  FETCH_REGISTRATION_SUCCESS,
} from './RegistrationStatusActionTypes';

export const getRegistrationStatus =
  () => async (dispatch: Dispatch<RegistrationStatusDispatchTypes>) => {
    try {
      dispatch({
        type: FETCH_REGISTRATION_INIT,
      });

      const isComplete = (await axios.get('/api/registration')).data;

      dispatch({
        type: FETCH_REGISTRATION_SUCCESS,
        payload: isComplete,
      });
    } catch (error) {
      dispatch({
        type: FETCH_REGISTRATION_FAIL,
      });
    }
  };

export const getRegistrationStatu = () => {};
