import React from 'react';
import Sidebar from "./sidebar/sidebar";
import NavBar from "./sidebar/navbar";

function RootLayout({ children }) {
  return (
    <div className="flex overflow-hidden" >
      <Sidebar />
      <main className="max-w-full max-h-[100vh] flex-1 mx-auto overflow-auto bg-white">
        {/* <div className='fixed w-[100%]'>
          <div className='flex justify-end w-[calc(100%-16rem)]'><NavBar /></div>
        
        </div> */}
        <div className=''>
        <div className='flex sticky top-0 justify-end w-100 z-[999]'><NavBar /></div>

        {children}</div></main>
    </div>



    
  );
}

export default RootLayout;