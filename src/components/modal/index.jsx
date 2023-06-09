import PropTypes from 'prop-types';
import BaseButton from 'components/button';

import { Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody } from '@chakra-ui/react';

const BaseModal = props => {
  const {
    isModalOpen,
    isLoading,
    handleCancel,
    handleSubmit,
    children,
    title = '',
    okText,
    danger = false,
    isDisabled = false,
  } = props;

  return (
    <Modal
      title={title}
      isOpen={isModalOpen}
      onOk={handleSubmit}
      onCancel={handleCancel}
      okText={okText}
      confirmLoading={isLoading}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <BaseButton key="back" type="default" onClick={handleCancel} text="Cancel" />
          {okText && (
            <BaseButton
              key="submit"
              type="primary"
              text={okText}
              danger={danger}
              loading={isLoading}
              onClick={handleSubmit}
              isDisabled={isDisabled}
            />
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;

BaseModal.propTypes = {
  isModalOpen: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  okText: PropTypes.string,
  danger: PropTypes.bool,
  isDisabled: PropTypes.bool,
};
