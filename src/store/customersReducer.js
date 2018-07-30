import {GetCustomers} from "../http/DorphinAPI";

const FETCH_CUSTOMERS_START = 'customers/FETCH_CUSTOMERS_START';
const FETCH_CUSTOMERS_END = 'customers/FETCH_CUSTOMERS_END';


export const loadCustomers = q => async dispatch => {
  dispatch({ type: FETCH_CUSTOMERS_START });
  const res = await GetCustomers(q);
  const customers = await res.json();
  dispatch({ type: FETCH_CUSTOMERS_END, customers });
};

const initialState = {
    loading: false,
    customers: [],
  };
  
  export default function customersReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_CUSTOMERS_START:
        return { ...state, loading: true };
      case FETCH_CUSTOMERS_END:
        return { ...state, loading: false, customers: action.customers };
      case 'VALUE_CHANGED':
        return { ...state, loading: false, customers:  action.payload }
    }
  
    return state;
  }
  