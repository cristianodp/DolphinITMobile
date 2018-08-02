import { GetItens, 
  PutItem, 
  GetItensExpired, 
  GetItensExpiredCount,
  GetItensNormal, 
  GetItensNormalCount,
  GetItensWarning, 
  GetItensWarningCount } from "../http/DorphinAPI";

const FETCH_ITENS_START = 'itens/FETCH_START';
const FETCH_ITENS_END = 'itens/FETCH_END';
const ADD_ITEM_START = 'itens/ADD_START';
const ADD_ITEM_END = 'itens/ADD_END';

const FETCH_ITENS_EXPIRED = 'itens/FETCH_EXP';
const FETCH_ITENS_EXPIRED_COUNT = 'itens/FETCH_EXP_COUNT';

const FETCH_ITENS_NORMAL = 'itens/FETCH_NORMAL';
const FETCH_ITENS_NORMAL_COUNT = 'itens/FETCH_NORMAL_COUNT';

const FETCH_ITENS_WARINIG = 'itens/FETCH_WARNING';
const FETCH_ITENS_WARINIG_COUNT = 'itens/FETCH_WARNING_COUNT';


export const loadItens = q => async dispatch => {

  dispatch({ type: FETCH_ITENS_START });
  const res = await GetItens(q);
  const itens = await res.json();
  dispatch({ type: FETCH_ITENS_END, itens });
};

export const addItem = item => async dispatch => {

  dispatch({ type: ADD_ITEM_START });
  const newItem = await PutItem(item);
  dispatch({ type: ADD_ITEM_END, newItem });

};

export const loadItensNormal = () => async dispatch => {
  const res = await GetItensNormal();
  const itensNormal = await res.json();
  dispatch({ type: FETCH_ITENS_NORMAL, itensNormal });
};

export const loadItensExpired = () => async dispatch => {
  const res = await GetItensExpired();
  const itensExpired = await res.json();
  dispatch({ type: FETCH_ITENS_EXPIRED, itensExpired });
};

export const loadItensWarning = () => async dispatch => {
  const res = await GetItensWarning();
  const itensWarning = await res.json();

  dispatch({ type: FETCH_ITENS_WARINIG, itensWarning });
};

export const loadItensNormalCount = () => async dispatch => {
  const res = await GetItensNormalCount();
  const itensNormalCount = await res.json();
  dispatch({ type: FETCH_ITENS_NORMAL_COUNT, itensNormalCount });
};

export const loadItensExpiredCount = () => async dispatch => {

  const res = await GetItensExpiredCount();
  const itensExpiredCount = await res.json();

  dispatch({ type: FETCH_ITENS_EXPIRED_COUNT, itensExpiredCount });
};

export const loadItensWarningCount = () => async dispatch => {
  const res = await GetItensWarningCount();
  const itensWarningCount = await res.json();
  dispatch({ type: FETCH_ITENS_WARINIG_COUNT, itensWarningCount });
};

const initialState = {
  loading: false,
  itens: [],
  newItem: null,
  itensNormal: null,
  itensNormalCount: 0,
  itensWarning: null,
  itensWarningCount: 0,
  itensExpired: null,
  itensExpiredCount: 0,

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
    case FETCH_ITENS_EXPIRED:
      return { ...state, loading: false, itensExpired: action.itensExpired };
    case FETCH_ITENS_EXPIRED_COUNT:
      return { ...state, loading: false, itensExpiredCount: action.itensExpiredCount };
    case FETCH_ITENS_NORMAL:
      return { ...state, loading: false, itensNormal: action.itensNormal };
    case FETCH_ITENS_NORMAL_COUNT:
      return { ...state, loading: false, itensNormalCount: action.itensNormalCount };
    case FETCH_ITENS_WARINIG:
      return { ...state, loading: false, itensWarning: action.itensWarning };
    case FETCH_ITENS_WARINIG_COUNT:
      return { ...state, loading: false, itensWarningCount: action.itensWarningCount };

  }

  return state;
}
