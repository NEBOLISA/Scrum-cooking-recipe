export const initialState = {
  popularFood: null,
};
const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "SET_POPULAR_FOOD":
      return {
        ...state,
        popularFood: action.popularFood,
      };

    default:
      return state;
  }
};
export default reducer;
