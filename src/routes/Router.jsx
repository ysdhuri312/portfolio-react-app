/** @format */

import { createBrowserRouter } from 'react-router';
import { Suspense, lazy } from 'react';
import Root from '../layouts/Root';
import Landing from '../pages/Landing';

const BlogList = lazy(() => import('../pages/BlogList'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const Photos = lazy(() => import('../pages/Photos'));
const NotFound = lazy(() => import('../components/NotFound'));
const Loading = lazy(() => import('../components/Loading'));

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
        path: '/blogs',
        element: <BlogList />,
      },
      {
        path: 'blog/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <BlogPost />
          </Suspense>
        ),
      },
      {
        path: '/photos',
        element: <Photos />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
