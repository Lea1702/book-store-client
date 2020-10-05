import {applyMiddleware, createStore} from "redux";
import { routerMiddleware } from 'connected-react-router/immutable'
import createReducer from '../Store/reducers';
import {composeWithDevTools} from "redux-devtools-extension";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();
const reducers = createReducer(history);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
)));
export default store;