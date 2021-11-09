export const FETCH_AUTHENTICATION_STATUS_INIT =
  'FETCH_AUTHENTICATION_STATUS_INIT';
export const FETCH_AUTHENTICATION_STATUS_SUCCESS =
  'FETCH_AUTHENTICATION_STATUS_SUCCESS';
export const FETCH_AUTHENTICATION_STATUS_FAIL =
  'FETCH_AUTHENTICATION_STATUS_FAIL';

interface Init {
  type: typeof FETCH_AUTHENTICATION_STATUS_INIT;
}
interface Fail {
  type: typeof FETCH_AUTHENTICATION_STATUS_FAIL;
}
interface Success {
  type: typeof FETCH_AUTHENTICATION_STATUS_SUCCESS;
  payload: boolean;
}

export type RegistrationStatusDispatchTypes = Init | Fail | Success;
