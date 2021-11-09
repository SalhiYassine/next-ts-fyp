import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import registrationStatusReducer from "./auth/Reducers/RegistrationStatusReducer";
import registrationUpateReducer from "./auth/Reducers/RegistrationPatchReducer";
import authenticationStatusReducer from "./auth/Reducers/AuthenticationStatusReducer";

const rootReducer = combineReducers({
  registrationStatus: registrationStatusReducer,
  authenticationStatus: authenticationStatusReducer,
  registrationPatch: registrationUpateReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
