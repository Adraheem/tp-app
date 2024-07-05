import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
}

function Table({className, children, ...props}: IProps) {
  return (
    <div className="table_c">
      <table className="table_c__main" {...props}>
        {children}
      </table>
    </div>

  );
}

export default Table;
