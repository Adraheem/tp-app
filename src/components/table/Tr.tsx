import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
}

function Tr({className, children, ...props}: IProps) {
  return (
    <tr className={`table_c__body__tr ${className}`} {...props}>
      {children}
    </tr>
  );
}

export default Tr;
