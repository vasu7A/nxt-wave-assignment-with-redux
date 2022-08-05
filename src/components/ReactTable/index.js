import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";

import { COLUMNS } from "./Columns";

import {
  TableTag,
  TheadTag,
  ThTag,
  TdTag,
  TableBottomDiv,
  TableCustomButton,
} from "./styledComponent";

const ReactTable = (props) => {
  let { resourceItems } = props;
  if (resourceItems === undefined) {
    resourceItems = [];
  }
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => resourceItems, [resourceItems[0]]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 6 },
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,

    prepareRow,
  } = tableInstance;

  return (
    <>
      <TableTag {...getTableProps()}>
        <TheadTag>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <ThTag {...column.getHeaderProps()}>
                  {column.render("Header")}
                </ThTag>
              ))}
            </tr>
          ))}
        </TheadTag>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TdTag {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TdTag>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TableTag>
      <TableBottomDiv>
        <div>
          <button>Add</button>
          <button>Del</button>
        </div>
        <div>
          <TableCustomButton onClick={() => previousPage()}>
            Previous
          </TableCustomButton>
          <TableCustomButton onClick={() => nextPage()}>Next</TableCustomButton>
        </div>
      </TableBottomDiv>
    </>
  );
};

export default ReactTable;
