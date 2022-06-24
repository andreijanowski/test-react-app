import React, { useMemo } from 'react';

import clsx from 'clsx';
import Icon from '../Icon';

interface IPageButtonProps {
  page: number;
  active?: boolean;
  onChange: (page: number) => void;
}

const PageButton = ({ page, active = false, onChange }: IPageButtonProps) => (
  <button
    className={clsx(
      'focus:outline-none px-2 w-10 h-10 border border-yellow-500 flex items-center justify-center rounded-full',
      active ? 'bg-yellow-500 text-white' : 'text-gray-700',
    )}
    onClick={() => onChange(page)}
  >
    {page}
  </button>
);

interface IPaginationProps {
  totalCount: number;
  pageSize: number;
  curPage: number;
  onChange: (page: number) => void;
}

const Pagination = ({
  totalCount, pageSize = 10, curPage, onChange,
}: IPaginationProps) => {
  const pageCount = useMemo(() => Math.ceil(totalCount / pageSize), [pageSize, totalCount]);

  const onPrev = () => {
    if (curPage > 1) {
      onChange(curPage - 1);
    }
  };

  const onNext = () => {
    if (curPage < pageCount) {
      onChange(curPage + 1);
    }
  };

  return (
    <div className="inline-flex space-x-10 items-center">
      <button
        className="focus:outline-none disabled:bg-gray-300 text-white px-2 w-10 h-10 bg-yellow-500 flex justify-center items-center rounded-full"
        onClick={onPrev}
        disabled={curPage === 1}
      >
        <Icon icon="chevron-left" className="w-3 h-3" />
      </button>
      <div className="flex space-x-3">
        {pageCount <= 5 ? (
          <>
            {[...Array(pageCount)].map((_, index) => (
              <PageButton
                key={index + 1}
                page={index + 1}
                onChange={onChange}
                active={index + 1 === curPage}
              />
            ))}
          </>
        ) : (
          <>
            {curPage < 3 ? (
              [...Array(Math.min(3, pageCount))].map((_, index) => (
                <PageButton
                  key={index}
                  page={index + 1}
                  onChange={onChange}
                  active={index + 1 === curPage}
                />
              ))
            ) : (
              <>
                <PageButton page={1} onChange={onChange} />
                {
                  curPage > 3 && (
                    <button className="focus:outline-none w-10 h-10 flex justify-center items-center rounded">
                      <Icon icon="ellipsisH" className="w-3 h-3" />
                    </button>
                  )
                }
              </>
            )}
            {curPage >= 3 && curPage <= pageCount - 3 && (
              <>
                <PageButton page={curPage - 1} onChange={onChange} />
                <PageButton page={curPage} onChange={onChange} active />
                <PageButton page={curPage + 1} onChange={onChange} />
              </>
            )}
            {curPage > pageCount - 3 && curPage > 2 ? (
              [...Array(Math.max(4, pageCount - curPage))].map((_, idx) => (
                <PageButton
                  key={pageCount - Math.max(4, pageCount - curPage) + idx + 1}
                  page={pageCount - Math.max(4, pageCount - curPage) + idx + 1}
                  onChange={onChange}
                  active={pageCount - Math.max(4, pageCount - curPage) + idx + 1 === curPage}
                />
              ))
            ) : (
              <>
                {
                  pageCount - curPage - 1 > 1 && (
                    <>
                      <button className="focus:outline-none w-10 h-10 flex justify-center items-center rounded-full">
                        <Icon icon="ellipsisH" className="w-3 h-3" />
                      </button>
                    </>
                  )
                }
                <PageButton page={pageCount} onChange={onChange} />
              </>
            )}
          </>
        )}
      </div>
      <button
        className="focus:outline-none disabled:bg-gray-300 text-white bg-yellow-500 px-2 w-10 h-10 flex justify-center items-center rounded-full"
        onClick={onNext}
        disabled={curPage === pageCount}
      >
        <Icon icon="chevron-right" className="w-3 h-3" />
      </button>
    </div>
  );
};

export default Pagination;
