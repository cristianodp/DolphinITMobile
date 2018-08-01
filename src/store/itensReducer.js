import {GetItens,PutItem} from "../http/DorphinAPI";

const FETCH_ITENS_START = 'itens/FETCH_START';
const FETCH_ITENS_END = 'itens/FETCH_END';
const ADD_ITEM_START = 'itens/ADD_START';
const ADD_ITEM_END = 'itens/ADD_END';


export const loadItens = q => async dispatch => {
  
  dispatch({ type: FETCH_ITENS_START });
  const res = await GetItens(q);
  const itens = await res.json();
  dispatch({ type: FETCH_ITENS_END, itens });
};

export const addItem = item => async dispatch => {

  dispatch({ type: ADD_ITEM_START });
  const  newItem = await PutItem(item);
  dispatch({ type: ADD_ITEM_END, newItem });
  
};

const initialState = {
    loading: false,
    itens: [],
    newItem: null
  };
  
  export default function customersReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_ITENS_START:
        return { ...state, loading: true };
      case FETCH_ITENS_END:
        return { ...state, loading: false, itens: action.itens };
      case ADD_ITEM_START:
        return { ...state, loading: true, newItem: null };
      case ADD_ITEM_END:
        return { ...state, loading: false, newItem: action.newItem };
    }
  
    return state;
  }
  