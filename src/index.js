import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/style.css';
import './style/reset.css';
import './style/responsive.css';
import { setupStore } from './redux/store'
import { Provider } from 'react-redux';

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
