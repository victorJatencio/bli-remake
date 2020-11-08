export const initialState = {
  collapsed: false
}

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_SIDEMENU':
      return {
        ...state,
        collapsed: action.collapsed
      }
    default:
      return state;
  }
}

export default reducer;