import {
  FETCH_REGISTRATION_FAIL,
  FETCH_REGISTRATION_INIT,
  FETCH_REGISTRATION_SUCCESS,
  RegistrationStatusDispatchTypes,
} from "../Actions/RegistrationStatus/RegistrationStatusActionTypes";

export interface DefaultState {
  loading: boolean;
  error?: boolean;
  isRegistered?: boolean;
}

const initState: DefaultState = {
  loading: false,
};

const registrationStatusReducer = (
  state: DefaultState = initState,
  action: RegistrationStatusDispatchTypes
): DefaultState => {
  switch (action.type) {
    case FETCH_REGISTRATION_INIT: {
      return {
        loading: true,
      };
    }
    case FETCH_REGISTRATION_SUCCESS: {
      return {
        loading: false,
        isRegistered: action.payload,
      };
    }
    case FETCH_REGISTRATION_FAIL: {
      return {
        loading: false,
        error: true,
      };
    }
    default:
      return { ...state };
  }
};

export default registrationStatusReducer;
