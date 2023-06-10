import { memo, useEffect } from 'react';
import { createStandaloneToast } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const { ToastContainer, toast } = createStandaloneToast();

const BaseToast = ({ type, message }) => {
  useEffect(() => {
    if (type.includes('success')) {
      toast({
        description: message,
        status: 'success',
        isClosable: true,
        position: 'top',
      });
    }
    if (type.includes('error')) {
      toast({
        description: message,
        status: 'error',
        isClosable: true,
        position: 'top',
      });
    }
  }, [alert]);
  return <ToastContainer />;
};

export default memo(BaseToast);

BaseToast.propTypes = {
  text: PropTypes.string,
  message: PropTypes.string,
};
