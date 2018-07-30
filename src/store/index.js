import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import customersReducer from './customersReducer';
//import {composeWithDevTools} from 'remote-redux-devtools';

const rootReducer = combineReducers({
  customers: customersReducer,
});

//const composeEnhancers = composeWithDevTools({ realtime: true, port: 8081 });

//const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
