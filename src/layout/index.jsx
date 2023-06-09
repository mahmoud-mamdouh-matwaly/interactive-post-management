import BaseSidebar from './sidebar';
import BaseHeader from './header/header';
import { Outlet } from 'react-router-dom';
import { Grid, GridItem, useDisclosure } from '@chakra-ui/react';

const BaseLayOut = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      templateAreas={`"nav header"
    "nav main"
    "nav footer"`}
      gridTemplateRows={'60px 1fr 30px'}
      gridTemplateColumns={'250px 1fr'}
       gap="1"
      fontWeight="bold">
      <GridItem pl="2" bg="gray.100" area={'nav'}>
        <BaseSidebar isOpen={isOpen} onClose={onClose} />
      </GridItem>
      <GridItem pl="2" bg="white.300" area={'header'}>
        <BaseHeader setCollapsed={onOpen} collapsed={isOpen} />
      </GridItem>
      <GridItem pl="2" area={'main'}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default BaseLayOut;
