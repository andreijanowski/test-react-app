import React from "react";
import Icon from "../Icon";

interface Column {
  label: string;
  value: string;
  className?: string;
  sort?: string;
  render: any,
}

export interface TableProps {
  columns: Column[];
  data: any[];
  className?: string;
  onChangeSort?: any;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  className,
  onChangeSort
}: TableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className={className}>
        <thead>
          <tr className="border-b">
            {
              columns.map((column) => (
                <th key={column.value} className={`text-left p-3 text-black-400 text-sm min-w-20 pr-4 ${column.className}`}>
                  <div className="relative">
                    {column.label}

                    {
                      column.sort && (
                        <div
                          className="flex flex-col space-y-1 absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                          onClick={() => onChangeSort(column.value)}
                        >
                          <Icon icon={column.sort === 'asc' ? 'arrowUp' : 'arrowDown'} className="w-4" />
                        </div>
                      )
                    }
                  </div>
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.length ? data.map((row, index) => (
              <tr key={index} className="border-b">
                {
                  columns.map((column) => (
                    <td key={column.value} className="text-left p-3">
                      {column.render(row[column.value], row)}
                    </td>
                  ))
                }
              </tr>
            )) : (
              <tr>
                <td
                  colSpan={columns.length}
                >
                  <div className="flex min-h-40 justify-center items-center text-lg">
                    No Data
                  </div>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};
