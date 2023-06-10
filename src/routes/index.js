import { Flex, Spinner } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const PostsPage = lazy(() => import('pages/posts'));
const PostDetailsPage = lazy(() => import('pages/posts/Details'));
const BaseLayOut = lazy(() => import('layout'));

export const router = createBrowserRouter([
  {
    path: 'interactive-post-management',
    parent: true,
    element: (
      <Suspense
        fallback={
          <Flex align={'middle'} justify="center">
            <Spinner />
          </Flex>
        }
      >
        <BaseLayOut />
      </Suspense>
    ),
    children: [
      {
        path: '/interactive-post-management',
        element: (
          <Suspense
            fallback={
              <Flex align={'middle'} justify="center">
                <Spinner />
              </Flex>
            }
          >
            <PostsPage />
          </Suspense>
        ),
      },
      {
        path: '/interactive-post-management/post-details/:id',
        element: (
          <Suspense
            fallback={
              <Flex align={'middle'} justify="center">
                <Spinner />
              </Flex>
            }
          >
            <PostDetailsPage />
          </Suspense>
        ),
      },
    ],
  },
]);
