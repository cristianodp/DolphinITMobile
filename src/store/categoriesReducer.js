import {GetCategories} from "../http/DorphinAPI";

const FETCH_START = 'categories/FETCH_START';
const FETCH_END = 'categories/FETCH_END';

export const loadCategories = (q) => async dispatch => {

  dispatch({ type: FETCH_START });
  const res = await GetCategories(q);
  const categories = await res.json();
  dispatch({ type: FETCH_END, categories });
};



const initialState = {
    loading: false,
    categories: [],
  };
  
  export default function customersReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_START:
        return { ...state, loading: true };
      case FETCH_END:
        return { ...state, loading: false, categories: action.categories };
      
    }
  
    return state;
  }
  