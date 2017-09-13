import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import myReduce from './reducers'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker'

let store
if(window.__REDUX_DEVTOOLS_EXTENSION__){
  store = createStore(myReduce,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}else {
  store = createStore(myReduce)
}

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
