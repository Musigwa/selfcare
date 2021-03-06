import 'antd/lib/style/index.less' // antd core styles
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
// import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
// mocking api
import 'services/axios/fakeApi'
import './components/kit/vendors/antd/themes/dark.less' // dark theme antd components
import './components/kit/vendors/antd/themes/default.less' // default theme antd components
import './global.scss' // app & third-party component styles
import Localization from './localization'
import reducers from './redux/reducers'
import sagas from './redux/sagas'
import Router from './router'
import * as serviceWorker from './serviceWorker'

// middlewared
const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)
const middlewares = [sagaMiddleware, routeMiddleware]
// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger)
// }
const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)))
sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <Localization>
      <Router history={history} />
    </Localization>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
export { store, history }
