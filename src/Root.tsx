import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import GlobalStyles from './theme/global.styles';
import theme from './theme';
import Layout from './routes/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <div>Home</div>
      },
      {
        path: '*',
        element: <div>Error 404</div>
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
