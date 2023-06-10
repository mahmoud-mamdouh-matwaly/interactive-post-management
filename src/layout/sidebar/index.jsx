import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const LinkItems = [{ name: 'Posts', icon: FiHome, path: '/interactive-post-management' }];

const Sidebar = ({ collapsed }) => {
  return (
    <Box minH="100vh">
      <Box>
        <SidebarContent collapsed={collapsed} />
      </Box>
    </Box>
  );
};
export default Sidebar;

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
};

const SidebarContent = ({ collapsed }) => {
  return (
    <Box borderRight="1px" borderRightColor="gray.300" w="100%" h="100vh">
      <Flex h="20" alignItems="center" mx={collapsed ? 'ms' : 'xl'} justifyContent="space-between">
        <Text fontSize={collapsed ? 'sm' : 'xl'} color="white" fontWeight="bold">
          Logo
        </Text>
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.name} path={link.path} icon={link.icon} collapsed={collapsed}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

SidebarContent.propTypes = {
  collapsed: PropTypes.bool,
};

const NavItem = ({ icon, children, path, collapsed }) => {
  return (
    <NavLink to={path}>
      <Flex
        align="center"
        p={collapsed ? 'ms' : 'md'}
        mx={collapsed ? 'auto' : 'md'}
        w={collapsed ? '16px' : 'initial'}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color="white"
        _hover={{
          bg: 'blue.500',
          color: 'white',
        }}
      >
        {icon && (
          <Icon
            mr={collapsed ? '0' : 'md'}
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {!collapsed && children}
      </Flex>
    </NavLink>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.func,
  path: PropTypes.string,
  collapsed: PropTypes.bool,
};
