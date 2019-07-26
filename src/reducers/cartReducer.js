const initialState = {
  cartList: []
};

function CartReducer(state=initialState, action) {
  
  let updatedList = state.cartList;
  switch(action.type){
    case 'ADD':
      if(updatedList[action.payload.id] === undefined){
        updatedList[action.payload.id] = action.payload
        updatedList[action.payload.id].count =1;
      }else {
        updatedList[action.payload.id].count +=1;
      }
      //updatedList[action.payload.id] = action.payload;
      return {
        ...state, 
        cartList: updatedList
      }
    case 'REMOVE':
        delete(updatedList[action.payload]);
      return {
        ...state, 
        cartList: updatedList
      }
    default:
      return state;
  }
}

export default CartReducer;