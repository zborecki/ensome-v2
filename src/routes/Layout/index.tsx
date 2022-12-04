import { Outlet } from 'react-router-dom';

const Layout = (): JSX.Element => (
  <>
    <header>Header</header>
    <main
      className="main"
    >
      <Outlet />
    </main>
    <footer>Footer</footer>
  </>
);

export default Layout;
