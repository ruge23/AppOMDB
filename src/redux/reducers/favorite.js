function favorite(state=[], action){
  switch (action.type) {
    case 'INCREMENT_FAV':
      const i = action.index;
      return[
        ...state.slice(0,i),
        {...state[i], fav: state[i].likes +1},
        ...state.slice(i+1),
      ]
    default:
      return state
  }
}

export default favorite;
