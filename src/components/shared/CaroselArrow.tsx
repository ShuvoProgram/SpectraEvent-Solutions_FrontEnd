import React, { CSSProperties, FC, HTMLAttributes } from 'react';

interface ArrowProps extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  style?: CSSProperties;
}

const NextArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} z-10 !flex items-center !w-0 !h-0 justify-center ltr:left-auto ltr:-right-2 rtl:right-auto rtl:-left-2 before:text-[20px] lg:before:text-[40px] before:content-[''] hover:bg-palette-card/20 drop-shadow-xl`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const PrevArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} z-10 !flex items-center !w-0 !h-0 justify-center ltr:left-auto ltr:-right-2 rtl:right-auto rtl:-left-2 before:text-[20px] lg:before:text-[40px] before:content-[''] hover:bg-palette-card/20 drop-shadow-xl`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };
