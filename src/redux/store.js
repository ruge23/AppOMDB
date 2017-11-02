import { createStore, compose } from 'redux';

// Importo los reducers
import favorite from './reducers/favorite';





// plugin de development
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

// creo el store
const store = createStore(enhancers);  

export default store;
