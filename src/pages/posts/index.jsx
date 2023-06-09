import React, { useEffect, Suspense, useCallback, useMemo, useState } from 'react';
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
import BaseButton from 'components/button';
import BaseMessage from 'components/message';
import PageHeading from './components/page-heading';
import BaseModal from 'components/modal';
import Form from './components/form';
import { Text, Flex, Spinner, Grid, GridItem } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';

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
    navigate(`/posts-management/post-details/${item.id}`);
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
    <Flex direction="column" bg={'white'}>
      <PageHeading title="Posts" hasSearch={true} handleChangeSearch={handleChangeSearch} />
      <Suspense fallback={<Spinner />}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>Title</GridItem>
          <GridItem>Description</GridItem>
          <GridItem>Actions</GridItem>
          {filteredPosts.map(post => {
            return (
              <React.Fragment key={post.id}>
                <GridItem w="100%">
                  <Text>{post.title}</Text>
                </GridItem>
                <GridItem w="100%">
                  <Text>{post.body}</Text>
                </GridItem>
                <GridItem w="100%">
                  <Flex>
                    <BaseButton className="btn" type="text" icon={<ViewIcon />} onClick={() => handleClickView(post)} />
                    <BaseButton className="btn" type="text" icon={<EditIcon />} onClick={() => handleClickEdit(post)} />
                    <BaseButton
                      className="btn"
                      type="text"
                      icon={<DeleteIcon />}
                      danger
                      onClick={() => handleDelete(post)}
                    />
                  </Flex>
                </GridItem>
              </React.Fragment>
            );
          })}
        </Grid>
      </Suspense>
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
        danger={true}>
        <Text>Are you sure, you want to delete this post?</Text>
      </BaseModal>

      <BaseModal
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        isModalOpen={showModal.isOpen && !!showModal.item}
        isLoading={isLoading}>
        <Form postItem={showModal?.item} isView={true} />
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
