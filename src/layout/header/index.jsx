import { Flex, Avatar, Text } from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';

const BaseHeader = () => {
  return (
    <Flex justify="space-between" p="sm">
      <Flex align="center" justify={'end'} gap="xs" w="100%">
        <Avatar icon={<FiUser />} size="sm" />
        <Text>User Name</Text>
      </Flex>
    </Flex>
  );
};

export default BaseHeader;
