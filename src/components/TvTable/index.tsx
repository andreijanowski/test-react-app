import React from 'react';
import moment from "moment";
import clsx from "clsx";
import { Table } from "../Table";
import { TypeColorMap } from "../../config/constant";

export interface TvTableProps {
  data: any[];
  sort: any;
  onChangeSort: any;
}

const TvTable: React.FC<TvTableProps> = ({
  data,
  sort,
  onChangeSort,
}) => {
  const columns = [
    {
      label: 'Name',
      value: 'name',
      sort: sort.name > 0 ? 'asc' : 'desc',
      className: 'bg-purple-500 text-white',
      render: (text: string, row: any) => (
        <div className="">
          <div className="mb-2 text-xl font-semibold">{text}</div>
          <div className="flex space-x-2">
            {
              row.types.map((type: string, index: number) => (
                <div
                  key={index}
                  className={clsx("py-1 px-6 rounded-full text-white capitalize flex items-center leading-1", TypeColorMap[type])}
                >
                  {type}
                </div>
              ))
            }
          </div>
        </div>
      )
    },
    {
      label: 'Season',
      value: 'season',
      className: 'bg-purple-500 text-white',
      render: (text: string) => <div className="text-sm text-black-500">{text}</div>
    },
    {
      label: 'Network',
      value: 'network',
      className: 'bg-purple-500 text-white',
      render: (networks: string[]) => (
        <div>
          { networks.join(', ')}
        </div>
      )
    },
    {
      label: 'Premiere',
      value: 'premiere',
      className: 'bg-purple-500 text-white',
      sort: sort.premiere > 0 ? 'asc' : 'desc',
      render: (date: string) => (
        <div>
          {moment(date).format('DD.MM.YYYY')}
        </div>
      )
    },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      className="w-full mb-6"
      onChangeSort={onChangeSort}
    />
  )
};

export default TvTable;