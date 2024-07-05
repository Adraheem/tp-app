import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
}

function TBody({className, children, ...props}: IProps) {
  return (
    <tbody className={`table_c__body ${className}`} {...props}>
    {children}
    </tbody>
  );
}

export default TBody;
