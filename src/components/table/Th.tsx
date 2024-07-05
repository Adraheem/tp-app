import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> {
}

function Th({className, children, ...props}: IProps) {
  return (
    <th scope="col" className={`table_c__head__th ${className}`} {...props}>
      {children}
    </th>
  );
}

export default Th;
