import axios from "axios";
import { Dispatch } from "redux";
import {
  RegistrationStatusDispatchTypes,
  FETCH_AUTHENTICATION_STATUS_INIT,
  FETCH_AUTHENTICATION_STATUS_FAIL,
  FETCH_AUTHENTICATION_STATUS_SUCCESS,
} from "./AuthenticationStatusActionTypes";

const getAuthStatus =
  () => async (dispatch: Dispatch<RegistrationStatusDispatchTypes>) => {
    try {
      dispatch({
        type: FETCH_AUTHENTICATION_STATUS_INIT,
      });

      const isComplete = (await axios.get("/api/authenticated")).data;

      dispatch({
        type: FETCH_AUTHENTICATION_STATUS_SUCCESS,
        payload: true,
      });
    } catch (error) {
      dispatch({
        type: FETCH_AUTHENTICATION_STATUS_FAIL,
      });
    }
  };

export default getAuthStatus;
