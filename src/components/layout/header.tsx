import React from 'react';
import {Link} from "react-router-dom";
import images from "../../asssets/images";

interface IProps {
}

function Header(props: IProps) {
  return (
    <header className="bg-[#232f3e] text-white">
      <nav className="w-full max-w-[1240px] px-5 flex items-stretch gap-5">
        <div className="min-h-10">
          <Link to="/" className="flex items-center h-full p-5">
            <img src={images.aws} alt="Logo" className="h-8 w-auto"/>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
