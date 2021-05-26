import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import { App } from './components/app';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <div>
                <h1>Search for Packages:</h1>
               <App />
            </div>
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
