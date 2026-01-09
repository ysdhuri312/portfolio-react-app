/** @format */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import MetadataProvider from './utils/MetadataProvider';
import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;
import router from './routes/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MetadataProvider>
      <RouterProvider router={router} />
    </MetadataProvider>
  </StrictMode>
);
