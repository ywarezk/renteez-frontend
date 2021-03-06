import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import DevTools from '../containers/DevTools'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'
import thunk from 'redux-thunk'
//import api from '../middleware/api'
import createLogger from 'redux-logger'
import { IndexReducer } from '../reducers/IndexReducer';

const finalCreateStore = compose(
  applyMiddleware(thunk/*, api*/),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(IndexReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/IndexReducer', () => {
      const nextRootReducer = require('../reducers/IndexReducer');
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
