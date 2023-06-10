import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Grid, GridItem, useDisclosure, Spinner } from '@chakra-ui/react';

const BaseHeader = lazy(() => import('layout/header'));
const BaseSidebar = lazy(() => import('layout/sidebar'));

const BaseLayOut = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      templateAreas={`"nav header"
    "nav main"
    "nav footer"`}
      gridTemplateRows={'60px 1fr 30px'}
      gridTemplateColumns={'220px 1fr'}
      gap="1"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="blue.950" area={'nav'}>
        <Suspense fallback={<Spinner />}>
          <BaseSidebar isOpen={isOpen} onClose={onClose} />
        </Suspense>
      </GridItem>
      <GridItem bg="white" area={'header'}>
        <Suspense fallback={<Spinner />}>
          <BaseHeader setCollapsed={onOpen} collapsed={isOpen} />
        </Suspense>
      </GridItem>
      <GridItem px="xs" pt="2xl" area={'main'} bg="gray.50">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default BaseLayOut;
