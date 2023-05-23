import React, { useState } from 'react';
import { useTable, Column, TableState } from 'react-table';

import './DataTable.scss';

interface DataTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

const DataTable = <T extends object>({ columns, data }: DataTableProps<T>) => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
      initialState: { pageIndex: 0 } as TableState<T>,
    });

  const pageCount = Math.ceil(rows.length / pageSize);

  const handleClickPrevious = () => {
    setPageIndex((prevPageIndex) => prevPageIndex - 1);
  };

  const handleClickNext = () => {
    setPageIndex((prevPageIndex) => prevPageIndex + 1);
  };

  const paginatedRows = rows.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  return (
    <div className="data-table">
      <table className="data-table__table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="data-table__th" {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="data-table__body" {...getTableBodyProps()}>
          {paginatedRows.map((row) => {
            prepareRow(row);
            return (
              <tr className="data-table__row" {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td className="data-table__td" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <button onClick={handleClickPrevious} disabled={pageIndex === 0}>
          Previous
        </button>
        <div>
          Page {pageIndex + 1} of {pageCount}
        </div>
        <button
          onClick={handleClickNext}
          disabled={pageIndex === pageCount - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
