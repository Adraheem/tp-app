import React, {HTMLAttributes} from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
}

function Container({children, className, ...props}: IProps) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Container;
