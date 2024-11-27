"use client";

import { memo } from "react";

import { useCurrentPage } from "@/hooks/useCurrentPage";
import { useSetPage } from "@/hooks/useSetPage";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const Pagination = ({ lastPage }: { lastPage: number }) => {
  const currentPage = useCurrentPage();
  const setPage = useSetPage();

  const generatePageLinks = () => {
    const linksArray = [];

    // Generate numbered page links
    for (let i = 1; i <= lastPage; i++) {
      if (Math.abs(i - currentPage) <= 1 || i === 1 || i === lastPage) {
        linksArray.push(
          <div
            key={i}
            className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium ${
              i === currentPage
                ? "bg-primary text-white"
                : "text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
            onClick={() => setPage(i)}
          >
            {i}
          </div>
        );
      } else if (Math.abs(i - currentPage) === 2) {
        linksArray.push(
          <div
            key={`dots-${i}`}
            className="px-4 py-2 text-sm font-medium text-gray-500"
          >
            ...
          </div>
        );
      }
    }

    return linksArray;
  };

  const renderPreviousLink = () => {
    if (currentPage > 1) {
      return (
        <div
          key="prev"
          className="relative inline-flex cursor-pointer items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          onClick={() => setPage(currentPage - 1)}
        >
          <ArrowLeftIcon className="mr-3 size-5" aria-hidden="true" />
          Previous
        </div>
      );
    }
    return null;
  };

  const renderNextLink = () => {
    if (currentPage < lastPage) {
      return (
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <div
            className="relative inline-flex cursor-pointer items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            onClick={() => setPage(currentPage + 1)}
          >
            Next
            <ArrowRightIcon className="ml-3 size-5" aria-hidden="true" />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">{renderPreviousLink()}</div>
      {lastPage > 1 && (
        <div className="hidden items-center md:flex">{generatePageLinks()}</div>
      )}
      <div className="-mt-px flex w-0 flex-1 justify-end">
        {renderNextLink()}
      </div>
    </nav>
  );
};

export default memo(Pagination);
