import { Dispatch } from "react";
import axios from "axios";
import {
  PATCH_REGISTRATION_FAIL,
  PATCH_REGISTRATION_INIT,
  PATCH_REGISTRATION_SUCCESS,
  RegistrationStatusPatchDispatchTypes,
  User,
  UserMetadata,
} from "./RegistrationStatusUpdateActionTypes";
import {
  FETCH_REGISTRATION_SUCCESS,
  RegistrationStatusDispatchTypes,
} from "../RegistrationStatus/RegistrationStatusActionTypes";

const patchRegistrationStatus =
  (formData: UserMetadata) =>
  async (
    dispatch: Dispatch<
      RegistrationStatusPatchDispatchTypes | RegistrationStatusDispatchTypes
    >
  ) => {
    try {
      dispatch({
        type: PATCH_REGISTRATION_INIT,
      });
      const user: User = await (
        await axios.post("/api/registration", { ...formData })
      ).data;
      dispatch({
        type: PATCH_REGISTRATION_SUCCESS,
        payload: user,
      });
      dispatch({
        type: FETCH_REGISTRATION_SUCCESS,
        payload: true,
      });
    } catch (error) {
      dispatch({
        type: PATCH_REGISTRATION_FAIL,
      });
    }
  };

export default patchRegistrationStatus;
