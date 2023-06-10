import { Suspense, lazy, useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Grid, GridItem, Spinner } from '@chakra-ui/react';

const BaseHeader = lazy(() => import('layout/header'));
const BaseSidebar = lazy(() => import('layout/sidebar'));

const BaseLayOut = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  return (
    <Grid
      templateAreas={`"nav header"
    "nav main"
    "nav footer"`}
      gridTemplateRows={'60px 1fr 30px'}
      gridTemplateColumns={collapsed ? '50px 1fr' : '220px 1fr'}
      gap="1"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="blue.950" area={'nav'}>
        <Suspense fallback={<Spinner />}>
          <BaseSidebar collapsed={collapsed} />
        </Suspense>
      </GridItem>
      <GridItem bg="white" area={'header'}>
        <Suspense fallback={<Spinner />}>
          <BaseHeader handleCollapsed={handleCollapsed} collapsed={collapsed} />
        </Suspense>
      </GridItem>
      <GridItem px="xs" pt="2xl" area={'main'} bg="gray.50">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default BaseLayOut;
