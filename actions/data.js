
export const updateCart = (data) => {
  return (dispatch) => {
    dispatch({type: 'UPDATE_CART', data});
  }
}