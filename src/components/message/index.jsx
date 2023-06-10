import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createStandaloneToast } from '@chakra-ui/react';
const { ToastContainer, toast } = createStandaloneToast();

const BaseMessage = () => {
  const {
    alert: { type, message: text },
  } = useSelector(state => state.uiReducer);

  useEffect(() => {
    if (type === 'success') {
      toast({
        description: text,
        status: 'success',
        isClosable: true,
        position: 'top',
      });
    }
    if (type === 'error' || type === 'networkError') {
      toast({
        description: text,
        status: 'error',
        isClosable: true,
        position: 'top',
      });
    }
  }, [alert]);
  return <ToastContainer />;
};

export default BaseMessage;
