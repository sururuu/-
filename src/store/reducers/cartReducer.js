const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.length >= 3) {
        alert('장바구니는 최대 3개까지 담을 수 있습니다.')
        return [...state]
      }
      else {
        return [...state,action.payload];
      }
    case "DELETE_ITEM":
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state;
  }
}

export default cartReducer;