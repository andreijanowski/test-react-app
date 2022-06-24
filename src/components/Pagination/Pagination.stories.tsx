import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import Pagination from '.'

export default {
  title: "Component/Pagination",
  component: Pagination,
  argTypes: {
    type: { control: "string" }
  }
} as Meta

export const Dashboard = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="mb-10 max-w-120">
        <div className="mb-3">
          <Pagination totalCount={43} pageSize={10} curPage={page} onChange={setPage} />
        </div>
        <div className="mb-3">
          <Pagination totalCount={63} pageSize={10} curPage={page} onChange={setPage} />
        </div>
        <div className="mb-3">
          <Pagination totalCount={83} pageSize={10} curPage={page} onChange={setPage} />
        </div>
        <div className="mb-3">
          <Pagination totalCount={103} pageSize={10} curPage={page} onChange={setPage} />
        </div>
        <div className="mb-3">
          <Pagination totalCount={193} pageSize={10} curPage={page} onChange={setPage} />
        </div>
      </div>
    </>
  );
}

