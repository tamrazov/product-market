import { combineReducers } from 'redux'

function reducerFetchProducts (
  state = { 
    products: [] 
  }, 
  action
) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return Object.assign({}, state, {
        products: action.payload
      })
    default:
      return state;
  }
};

function reducerAddDeleteToCart (
  state = {
    productsIn: []
  },
  action
) {
  switch (action.type) {
    case 'ADD_TOCART':
      return {
        ...state,
        productsIn: [
          ...state.productsIn,
          action.payload
        ]
      }
    case 'DELETE_TOCART':
      console.log(action.payload)
      return {
        ...state,
        productsIn: state.productsIn.filter( (el,index) => index !== action.payload)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducerFetchProducts,
  reducerAddDeleteToCart
})

export default rootReducer;
