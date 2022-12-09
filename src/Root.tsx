import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import GlobalStyles from './theme/global.styles';
import theme from './theme';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
]);

const Root = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default Root;
