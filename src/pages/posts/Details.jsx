import { useEffect, useCallback, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPostItem, updatePostItem } from './store/slice';
import BaseMessage from 'components/message';
import PageHeading from './components/page-heading';
import { Spinner, Flex } from '@chakra-ui/react';

const Form = lazy(() => import('./components/form'));

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { postItem, isLoading } = useSelector(state => state.postsReducer);
  const {
    alert: { type },
  } = useSelector(state => state.uiReducer);

  useEffect(() => {
    if (!postItem) {
      dispatch(fetchPostItem({ id }));
    }
  }, [postItem]);

  useEffect(() => {
    if (type === 'success') {
      navigate(-1);
    }
  }, [type]);

  const handleSubmit = useCallback(
    values => {
      dispatch(updatePostItem({ id, values }));
    },
    [dispatch]
  );
  if (isLoading) {
    return (
      <Flex align={'middle'} justify="center">
        <Spinner />
      </Flex>
    );
  }
  return (
    <Flex direction="column" bg="white" px="sm" py="xl">
      <PageHeading title="Post Details" hasBack={true} />
      <Suspense fallback={<Spinner />}>
        <Form postItem={postItem} handleSubmit={handleSubmit} />
      </Suspense>
      {type ? <BaseMessage /> : null}
    </Flex>
  );
};

export default PostDetails;
