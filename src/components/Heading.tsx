import React from 'react';

type HeadingProps = {
  children: React.ReactElement<{ children: React.ReactNode }> | string;
};

export const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2>;
};
