import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { Link } from "react-router-dom";
import { COLUMNS } from "./Columns";

import {
  TableTag,
  TheadTag,
  ThTag,
  TdTag,
  TableBottomDiv,
  TableCustomButton,
  TableCustomButtonAdd,
  TableCustomButtonDelete,
  NumericButtons,
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
    pageOptions,
    state,
    prepareRow,
  } = tableInstance;

  const { pageIndex } = state;

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
          <Link to="/addResource">
            <TableCustomButtonAdd>Add</TableCustomButtonAdd>
          </Link>
          <TableCustomButtonDelete>Delete</TableCustomButtonDelete>
        </div>
        <div>
          <TableCustomButton onClick={() => previousPage()}>
            {"<"}
          </TableCustomButton>
          <NumericButtons>{pageIndex + 1}</NumericButtons>
          <NumericButtons>{pageIndex + 2}</NumericButtons>
          <NumericButtons>---</NumericButtons>
          <NumericButtons>{pageOptions.length - pageIndex - 2}</NumericButtons>
          <NumericButtons>{pageOptions.length - pageIndex - 1}</NumericButtons>
          <TableCustomButton onClick={() => nextPage()}>
            {">"}
          </TableCustomButton>
        </div>
      </TableBottomDiv>
    </>
  );
};

export default ReactTable;
