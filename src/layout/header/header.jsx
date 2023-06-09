import { Flex, Box, Avatar, Text } from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';

const BaseHeader = () => {
  return (
    <Box>
      <Flex justify="space-between" gutter={[0, 20]}>
        <Box>
          <Flex align="center">
            <Avatar icon={<FiUser />} />
            <Text>user name</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default BaseHeader;
