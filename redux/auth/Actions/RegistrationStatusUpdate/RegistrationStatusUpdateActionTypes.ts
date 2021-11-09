export const PATCH_REGISTRATION_INIT = "PATCH_REGISTRATION_INIT";
export const PATCH_REGISTRATION_SUCCESS = "PATCH_REGISTRATION_SUCCESS";
export const PATCH_REGISTRATION_FAIL = "PATCH_REGISTRATION_FAIL";

export interface UserMetadata {
  is_completed: boolean;
  company_name: string;
  company_number: number;
  company_address: string;
  company_postcode: string;
  default_currency: string;
  company_logo: string;
}

export interface User {
  user_metadata: UserMetadata;
}

interface Init {
  type: typeof PATCH_REGISTRATION_INIT;
}
interface Fail {
  type: typeof PATCH_REGISTRATION_FAIL;
}
interface Success {
  type: typeof PATCH_REGISTRATION_SUCCESS;
  payload: User;
}

export type RegistrationStatusPatchDispatchTypes = Init | Fail | Success;
