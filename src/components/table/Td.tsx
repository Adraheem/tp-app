import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> {
}

function Td({className, children, ...props}: IProps) {
  return (
    <td scope="row" className={`table_c__td ${className}`} {...props}>
      {children}
    </td>
  );
}

export default Td;
