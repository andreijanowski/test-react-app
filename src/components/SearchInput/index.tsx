import React, { forwardRef, LegacyRef } from "react";
import clsx from "clsx";
import Icon from "../Icon";

export interface SearchInputProps {
  className?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  value?: string;
}

export const SearchInput = forwardRef( ({ className, value, onChange, onBlur }: SearchInputProps, ref: LegacyRef<HTMLInputElement>) => {
  return (
    <div className={clsx("relative block", className)}>
      <Icon icon="search" className="absolute top-1/2 transform -translate-y-2/4 left-4 mr-2 h-5 w-5 text-white" />
      <input
        ref={ref}
        name="search"
        placeholder="Search..."
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="h-11 placeholder-white rounded-lg bg-yellow-500 text-white focus:outline-none focus:ring-opacity-50 focus:ring-yellow-500 focus:ring-2 block w-full pl-12 border-gray-100 p-2 border"
      />
    </div>
  );
});
