// import { Button } from 'antd';
import { memo } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@chakra-ui/react';

const BaseButton = props => {
  const { text = '', onClick, isDisabled = false, type = 'primary', loading = false, icon, ...rest } = props;

  return (
    <Button type={type} isLoading={loading} onClick={onClick} isDisabled={isDisabled} {...rest}>
      <Text>{text}</Text>
      {icon}
    </Button>
  );
};

export default memo(BaseButton);

BaseButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
  loading: PropTypes.bool,
  icon: PropTypes.node,
};
