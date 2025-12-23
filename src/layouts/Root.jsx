/** @format */
// Header + Footer (global)

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default RootLayout;
