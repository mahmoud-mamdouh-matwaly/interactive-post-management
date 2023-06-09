import { useMemo } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';
import getStore from 'store';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from 'theme';
function App() {
  const store = useMemo(() => {
    return getStore();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <StoreProvider store={store}>
        <RouterProvider router={router} />
      </StoreProvider>
    </ChakraProvider>
  );
}

export default App;
