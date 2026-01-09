/** @format */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './routes/router';
import MetadataProvider from './utils/MetaDataProvider';
import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MetadataProvider>
      <RouterProvider router={router} />
    </MetadataProvider>
  </StrictMode>
);
