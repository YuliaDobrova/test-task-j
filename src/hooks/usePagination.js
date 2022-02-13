import { useMemo } from 'react';

export const usePagination = totalPages =>
  useMemo(() => {
    // const pagesArray = [];
    const pagesArray = Array(totalPages)
      .fill(null)
      .map((_, index) => index + 1);

    // for (let i = 0; i < totalPages; i++) {
    //   pagesArray.push(i + 1);
    // }
    return pagesArray;
  }, [totalPages]);
