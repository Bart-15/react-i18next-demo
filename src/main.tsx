import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Provider from '@/providers/Providers';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
