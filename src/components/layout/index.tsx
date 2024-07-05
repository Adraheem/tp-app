import React, {HTMLAttributes} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./header";

interface IProps extends HTMLAttributes<HTMLDivElement> {
}

function Layout({children, className, ...props}: IProps) {
  return (
    <div className={`w-full block ${className}`} {...props}>
      <Header/>

      <main className="w-full">
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;
