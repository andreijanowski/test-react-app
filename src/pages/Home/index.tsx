import React, { useMemo, useState } from 'react';
import moment from 'moment';
import { SearchInput } from "../../components/SearchInput";
import Select from "../../components/Select";
import Pagination from "../../components/Pagination";
import TvTable from "../../components/TvTable";
import { pageSizeOptions, typeOptions, yearOptions } from "../../config/constant";
import data from '../../data/data.json';

const HomePage = () => {
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [sort, setSort] = useState({
    name: 1,
    premiere: 1
  });

  const onChangeSort = (name: string) => {
    setSort((prev: any) => ({
      ...prev,
      [name]: prev[name] * -1,
    }))
  };

  const filteredData = useMemo(() => {
    let calculatedData = [...data];

    if (searchTerm) {
      calculatedData = calculatedData.filter((item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
    }

    if (type) {
      calculatedData = calculatedData.filter((item) => item.types.includes(type));
    }

    if (year) {
      calculatedData = calculatedData.filter((item) => moment(item.premiere).format('yyyy') === year);
    }

    calculatedData = calculatedData.sort((a, b) => {
      if (a.name.localeCompare(b.name) !== 0) {
        return sort.name * a.name.localeCompare(b.name);
      }
      return sort.premiere * (moment(a.premiere).isAfter(b.premiere) ? 1 : -1);
    });

    return calculatedData;
  }, [searchTerm, type, year, sort]);

  const tableData = useMemo(() => filteredData.slice(pageSize * (page -1), pageSize * page), [page, pageSize, filteredData]);

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8">
      <div className="flex space-x-4 mb-6">
        <SearchInput
          className="w-60"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Select
          className="w-60"
          placeholder="Genre"
          options={typeOptions}
          value={type}
          onChange={setType}
        />
        <Select
          className="w-60"
          placeholder="Premiere Year"
          options={yearOptions}
          value={year}
          onChange={setYear}
        />
      </div>
      <div>
        <TvTable
          data={tableData}
          sort={sort}
          onChangeSort={onChangeSort}
        />
      </div>
      <div className="flex justify-center space-x-8">
        <Pagination
          totalCount={filteredData.length}
          pageSize={pageSize}
          curPage={page}
          onChange={setPage}
        />
        <Select
          options={pageSizeOptions}
          value={pageSize}
          onChange={setPageSize}
        />
      </div>
    </div>
  )
};

export default HomePage;
