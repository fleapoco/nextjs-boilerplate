import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<IProps> = ({ children, className }) => {
  return <div className={`${className ?? ''} container w-full max-w-7xl px-[15px] m-auto`}>{children}</div>;
};

export default Container;
