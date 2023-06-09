import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, AlertIcon, useDisclosure } from '@chakra-ui/react';

const BaseMessage = () => {
  const {
    alert: { type, message: text },
  } = useSelector(state => state.uiReducer);

  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });

  useEffect(() => {
    if (type) {
      onOpen();
    } else {
      onClose();
    }
  }, [alert]);

  return (
    isOpen && (
      <>
        {type === 'error' ||
          (type === 'networkError' && (
            <Alert status="error">
              <AlertIcon />
              {text}
            </Alert>
          ))}
        {type === 'success' && (
          <Alert status="success">
            <AlertIcon />
            {text}
          </Alert>
        )}
      </>
    )
  );
};

export default BaseMessage;
