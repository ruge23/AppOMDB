//incrementar likes
export function incrementFav(index) {
  return {
    type: 'INCREMENT_FAV',
    index,
  }
}
