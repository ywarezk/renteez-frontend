import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'
import thunk from 'redux-thunk'
//import api from '../middleware/api'
import IndexReducer from '../reducers/IndexReducer'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ routes, createHistory })
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(IndexReducer, initialState)
}
