import React, {HTMLAttributes} from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
}

function Card({children, className, ...props}: IProps) {
  return (
    <div
      className={`w-full bg-white drop-shadow-sm border border-zinc-300 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardBody({children, className, ...props}: IProps) {
  return (
    <div className={`w-full p-5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Card;
