/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const handleHamburger = (isMobile: boolean): React.CSSProperties => ({
  display: isMobile ? 'none' : 'block'
});

const Layout = (): JSX.Element => {
  const [isOpened, setOpened] = useState(false);

  return (
    <>
      <Header
        isOpened={isOpened}
        onClick={() => setOpened((state) => !state)}
      />
      <main
        className="main"
        style={handleHamburger(isOpened)}
      >
        <Outlet />
      </main>
      <footer
        className="footer"
        style={handleHamburger(isOpened)}
      >
        Footer
      </footer>
    </>
  );
};

export default Layout;
