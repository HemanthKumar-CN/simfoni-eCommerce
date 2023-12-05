import {
  Store,
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AppReducer } from "./reducer";

const rootReducer = combineReducers({
  app: AppReducer,
});

const persistConfig = {
  key: "persist-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: Store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunk),
);

const persistor = persistStore(store);
export { persistor };
