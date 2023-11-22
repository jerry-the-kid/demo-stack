import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { SWRDevTools } from 'swr-devtools';
import { rootStore, Provider } from '@/stores/Root';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SWRDevTools>
    <React.StrictMode>
      <Provider value={rootStore}>
        <App />
      </Provider>
    </React.StrictMode>
  </SWRDevTools>
);
