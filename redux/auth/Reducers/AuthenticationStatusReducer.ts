import {
  RegistrationStatusDispatchTypes,
  FETCH_AUTHENTICATION_STATUS_INIT,
  FETCH_AUTHENTICATION_STATUS_FAIL,
  FETCH_AUTHENTICATION_STATUS_SUCCESS,
} from "../Actions/AuthenticationStatus/AuthenticationStatusActionTypes";

export interface DefaultState {
  loading: boolean;
  error?: boolean;
  isLoggedIn?: boolean;
}

const initState: DefaultState = {
  loading: false,
};

const authenticationStatusReducer = (
  state: DefaultState = initState,
  action: RegistrationStatusDispatchTypes
): DefaultState => {
  switch (action.type) {
    case FETCH_AUTHENTICATION_STATUS_INIT: {
      return {
        loading: true,
      };
    }
    case FETCH_AUTHENTICATION_STATUS_SUCCESS: {
      return {
        loading: false,
        isLoggedIn: action.payload,
      };
    }
    case FETCH_AUTHENTICATION_STATUS_FAIL: {
      return {
        loading: false,
        error: true,
      };
    }
    default:
      return { ...state };
  }
};

export default authenticationStatusReducer;
