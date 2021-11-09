export const FETCH_REGISTRATION_INIT = 'FETCH_REGISTRATION_INIT';
export const FETCH_REGISTRATION_SUCCESS = 'FETCH_REGISTRATION_SUCCESS';
export const FETCH_REGISTRATION_FAIL = 'FETCH_REGISTRATION_FAIL';

interface Init {
  type: typeof FETCH_REGISTRATION_INIT;
}
interface Fail {
  type: typeof FETCH_REGISTRATION_FAIL;
}
interface Success {
  type: typeof FETCH_REGISTRATION_SUCCESS;
  payload: boolean;
}

export type RegistrationStatusDispatchTypes = Init | Fail | Success;
