import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const Layout = (): JSX.Element => (
  <>
    <Header />
    <main
      className="main"
    >
      <Outlet />
    </main>
    <footer>Footer</footer>
  </>
);

export default Layout;
