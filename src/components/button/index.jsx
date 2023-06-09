// import { Button } from 'antd';
import { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react'

const BaseButton = props => {
  const { text = '', onClick, isDisabled = false, type = 'primary', loading = false, icon,   } = props;

  return (
    <Button type={type} isLoading={loading} onClick={onClick} isDisabled={isDisabled} rightIcon={icon}>
      {text}
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
  icon: PropTypes.node
};
