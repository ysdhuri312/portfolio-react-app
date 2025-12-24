/** @format */
// Header + Footer (global)

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className='relative'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default RootLayout;
