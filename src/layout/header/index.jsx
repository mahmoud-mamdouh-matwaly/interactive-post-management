import { memo } from 'react';
import { Flex, Avatar, Text } from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import BaseButton from 'components/button';

const BaseHeader = ({ collapsed, handleCollapsed }) => {
  return (
    <Flex justify="space-between" p="sm">
      <BaseButton
        type="text"
        icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        onClick={handleCollapsed}
        p="0"
        bg="transparent"
        color="blue.500"
        _hover={{
          bg: 'blue.500',
          color: 'white',
        }}
      />
      <Flex align="center" justify={'end'} gap="xs" w="100%">
        <Avatar icon={<FiUser />} size="sm" />
        <Text>User Name</Text>
      </Flex>
    </Flex>
  );
};

export default memo(BaseHeader);
