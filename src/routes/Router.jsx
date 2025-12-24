/** @format */

import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Landing from '../pages/Landing';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Photos from '../pages/Photos';
import NotFound from '../components/NotFound';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Landing />,
        index: true,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:slug',
        element: <BlogPost />,
      },
      {
        path: '/photos',
        element: <Photos />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
