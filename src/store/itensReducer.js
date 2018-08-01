import {GetCustomers,PutCustomers} from "../http/DorphinAPI";

const FETCH_CUSTOMERS_START = 'customers/FETCH_CUSTOMERS_START';
const FETCH_CUSTOMERS_END = 'customers/FETCH_CUSTOMERS_END';
const ADD_CUSTOMERS_START = 'customers/ADD_CUSTOMER_START';
const ADD_CUSTOMERS_END = 'customers/ADD_CUSTOMER_END';


export const loadCustomers = q => async dispatch => {
  
  dispatch({ type: FETCH_CUSTOMERS_START });
  const res = await GetCustomers(q);
  const customers = await res.json();
  console.log(customers)
  dispatch({ type: FETCH_CUSTOMERS_END, customers });
};

export const addCustomer = customer => async dispatch => {
  dispatch({ type: FETCH_CUSTOMERS_START });
  const  newCustomer = await PutCustomers(customer);
  dispatch({ type: FETCH_CUSTOMERS_END, newCustomer });
  await loadCustomers(null);
};

const initialState = {
    loading: false,
    customers: [],
    newCustomer: null
  };
  
  export default function customersReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_CUSTOMERS_START:
        return { ...state, loading: true };
      case FETCH_CUSTOMERS_END:
        return { ...state, loading: false, customers: action.customers };
      case ADD_CUSTOMERS_START:
        return { ...state, loading: true, newCustomer: null };
      case ADD_CUSTOMERS_END:
        return { ...state, loading: false, newCustomer: action.newCustomer };
    }
  
    return state;
  }
  