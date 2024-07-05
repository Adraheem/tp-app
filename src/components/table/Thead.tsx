import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
}

function Thead({className, children, ...props}: IProps) {
  return (
    <thead
      className={`table_c__head ${className}`} {...props}>
    <tr>
      {children}
    </tr>
    </thead>
  );
}

export default Thead;
