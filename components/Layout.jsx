import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-row">
      <Nav />
      <div className="md:flex md:flex-col md:min-h-screen md:w-[calc(100vh - 60px)] md:overflow-y-scroll ">
        {children}
        <Footer />
      </div>
    </div>
  );
}
