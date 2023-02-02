import { CssBaseline, ThemeProvider } from '@mui/material';
import { App } from 'app/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'state/configureStore';
import { theme } from 'theme';
import './index.css';
import reportWebVitals from './reportWebVitals';

if (process.env.REACT_APP_ENABLE_MOCKS === 'true') {
  const { worker } = require('mocks/browser');
  worker.start({
    onUnhandledRequest: 'bypass'
  });
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
