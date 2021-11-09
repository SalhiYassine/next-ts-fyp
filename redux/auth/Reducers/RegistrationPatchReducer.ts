import {
  PATCH_REGISTRATION_FAIL,
  PATCH_REGISTRATION_INIT,
  PATCH_REGISTRATION_SUCCESS,
  RegistrationStatusPatchDispatchTypes,
  User,
} from "../Actions/RegistrationStatusUpdate/RegistrationStatusUpdateActionTypes";

export interface DefaultState {
  loading: boolean;
  error?: boolean;
  user?: User;
}

const initState: DefaultState = {
  loading: false,
};

const registrationStatusReducer = (
  state: DefaultState = initState,
  action: RegistrationStatusPatchDispatchTypes
): DefaultState => {
  switch (action.type) {
    case PATCH_REGISTRATION_INIT: {
      return {
        loading: true,
      };
    }
    case PATCH_REGISTRATION_SUCCESS: {
      return {
        loading: false,
        user: action.payload,
      };
    }
    case PATCH_REGISTRATION_FAIL: {
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
