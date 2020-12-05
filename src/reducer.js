export const initialState = {
  collapsed: false,
  expandWidgets: false,
  check: {
    competitiveModels: true,
    recentlyViewed: true,
    favorites: true,
    twitter: true,
    softwareEd: true,
    news: true,
    latestAwards: true,
    recentlyPublished: true,
    all: true,
  }
}

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_SIDEMENU':
      return {
        ...state,
        collapsed: action.collapsed
      }
    case 'SET_TABMENU':
      return {
        ...state,
        expandWidgets: action.expandWidgets
      }
    case 'SET_CHECK':
      return {
        ...state,
        check: action.check
      }
    default:
      return state;
  }
}

export default reducer;