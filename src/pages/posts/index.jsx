import React, { useEffect, Suspense, lazy, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  fetchPosts,
  setPostItem,
  // setCurrentPage,
  setSearchTerm,
  deletePostItem,
  resetDeleteStatus,
} from './store/slice';

import { Text, Flex, Spinner, Grid, GridItem } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';

import BaseButton from 'components/button';
import BaseMessage from 'components/message';
import BaseModal from 'components/modal';

const Form = lazy(() => import('pages/posts/components/form'));
const PageHeading = lazy(() => import('pages/posts/components/page-heading'));

const PostsPage = () => {
  const navigate = useNavigate();
  const {
    data,
    isLoading,
    // currentPage,
    searchTerm,
    deleteStatus,
  } = useSelector(state => state.postsReducer);
  const {
    alert: { type },
  } = useSelector(state => state.uiReducer);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState({ isOpen: false, id: null, item: null });

  const handleClickEdit = useCallback(item => {
    dispatch(setPostItem(item));
    navigate(`/interactive-post-management/post-details/${item.id}`);
  }, []);

  const handleDelete = useCallback(item => {
    setShowModal(prev => {
      return {
        ...prev,
        isOpen: !prev.isOpen,
        id: item?.id,
      };
    });
  }, []);

  const handleClickView = useCallback(item => {
    setShowModal(prev => {
      return {
        isOpen: !prev.isOpen,
        id: item?.id,
        item: item,
      };
    });
  }, []);

  useEffect(() => {
    if (!data?.length) {
      dispatch(fetchPosts());
    }
  }, [data]);

  const handleChangeSearch = useCallback(
    event => {
      dispatch(setSearchTerm(event.target.value));
    },
    [dispatch]
  );

  const handleSubmitDeletePost = () => {
    dispatch(deletePostItem({ id: showModal.id }));
  };

  const handleCancel = () => {
    setShowModal({
      isOpen: false,
      id: null,
      item: null,
    });
  };

  useEffect(() => {
    if (deleteStatus === 'success') {
      handleCancel();
      dispatch(resetDeleteStatus());
    }
  }, [deleteStatus]);

  const filteredPosts = useMemo(() => {
    return data.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, data]);

  return (
    <Flex direction="column" bg="white" px="sm" py="xl">
      <Suspense fallback={<Spinner />}>
        <PageHeading title="Posts" hasSearch={true} handleChangeSearch={handleChangeSearch} />
      </Suspense>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>Title</GridItem>
        <GridItem>Description</GridItem>
        <GridItem>Actions</GridItem>
        {filteredPosts.map(post => {
          return (
            <React.Fragment key={post.id}>
              <GridItem>
                <Text>{post.title}</Text>
              </GridItem>
              <GridItem>
                <Text>{post.body}</Text>
              </GridItem>
              <GridItem>
                <Flex>
                  <BaseButton
                    className="btn"
                    type="text"
                    icon={<ViewIcon />}
                    onClick={() => handleClickView(post)}
                    p="0"
                    bg="transparent"
                    m="0"
                    _hover={{
                      bg: 'gray.700',
                      color: 'white',
                    }}
                  />
                  <BaseButton
                    className="btn"
                    type="text"
                    icon={<EditIcon />}
                    onClick={() => handleClickEdit(post)}
                    p="0"
                    bg="transparent"
                    color="blue.500"
                    _hover={{
                      bg: 'blue.500',
                      color: 'white',
                    }}
                  />
                  <BaseButton
                    className="btn"
                    type="text"
                    icon={<DeleteIcon />}
                    danger
                    onClick={() => handleDelete(post)}
                    bg="transparent"
                    p="0"
                    color="red.500"
                    _hover={{
                      bg: 'red.500',
                      color: 'white',
                    }}
                  />
                </Flex>
              </GridItem>
            </React.Fragment>
          );
        })}
      </Grid>

      {type ? <BaseMessage /> : null}
      <ModalsContainer
        handleCancel={handleCancel}
        handleSubmit={handleSubmitDeletePost}
        showModal={showModal}
        isLoading={isLoading}
        danger={true}
      />
    </Flex>
  );
};

export default PostsPage;

function ModalsContainer(props) {
  const { handleCancel, handleSubmit, showModal, isLoading } = props;

  return (
    <>
      <BaseModal
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        isModalOpen={showModal.isOpen && !showModal.item}
        okText="Delete"
        isLoading={isLoading}
        danger={true}
      >
        <Text>Are you sure, you want to delete this post?</Text>
      </BaseModal>

      <BaseModal
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        isModalOpen={showModal.isOpen && !!showModal.item}
        isLoading={isLoading}
      >
        <Suspense fallback={<Spinner />}>
          <Form postItem={showModal?.item} isView={true} />
        </Suspense>
      </BaseModal>
    </>
  );
}

ModalsContainer.propTypes = {
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
  showModal: PropTypes.shape({
    isOpen: PropTypes.bool,
    item: PropTypes.object,
    id: PropTypes.number,
  }),
  isLoading: PropTypes.bool,
};
