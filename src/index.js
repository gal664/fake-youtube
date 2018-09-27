import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from "./reducers/index";
import { BrowserRouter } from 'react-router-dom'
const store = createStore(rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
      <Provider store={store}>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </Provider>
      , document.getElementById('root'));
registerServiceWorker();
