import React, {useEffect, useMemo, useState} from 'react';
import moment from 'moment';
import { uniq } from 'lodash';
import { SearchInput } from "../../components/SearchInput";
import Select from "../../components/Select";
import Pagination from "../../components/Pagination";
import TvTable from "../../components/TvTable";
import { pageSizeOptions } from "../../config/constant";
import data from '../../data/data.json';
import ButtonGroup from "../../components/ButtonGroup";

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

  useEffect(() => {
    setPage(1);
  }, [searchTerm, type, year, pageSize])

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

    if (type && type !== 'all') {
      calculatedData = calculatedData.filter((item) => item.types.includes(type));
    }

    if (year && year !== 'all') {
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

  const typeOptions = useMemo(() => {
    let types = data.map((item) => item.types).reduce((array, el) => [...array, ...el], ['all']);

    return uniq(types).map((item) => ({ label: item, value: item }));
  }, []);

  const yearOptions = useMemo(() => {
    let types = data.map((item) => moment(item.premiere).format('yyyy')).reduce((array, el) => [...array, el], ['all']);

    return uniq(types).map((item) => ({ label: item, value: item }));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8">
      <div className="flex space-x-6 mb-6">
        <SearchInput
          className="w-100"
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
      {
        tableData.length ? (
          <div className="flex justify-center space-x-8">
            <Pagination
              totalCount={filteredData.length}
              pageSize={pageSize}
              curPage={page}
              onChange={setPage}
            />
            <ButtonGroup
              options={pageSizeOptions}
              value={pageSize}
              onChange={setPageSize}
            />
          </div>
        ) : ''
      }
    </div>
  )
};

export default HomePage;
