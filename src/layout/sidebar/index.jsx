import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const LinkItems = [{ name: 'Posts', icon: FiHome, path: '/interactive-post-management' }];

export default function Sidebar() {
  return (
    <Box minH="100vh">
      <Box>
        <Box>
          <SidebarContent />
        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = () => {
  return (
    <Box borderRight="1px" borderRightColor="gray.300" w="100%" h="100vh">
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.name} path={link.path} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, path }) => {
  return (
    <NavLink to={path}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NavLink>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  path: PropTypes.string,
};
