import NextHead from "next/head";
import React from "react";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export const Head: React.FC<Props> = (props) => {
  const { title, children, description } = props;
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        name="viewport"
      />
      {children}
      <title>{title ?? "NextJs Site"}</title>
      <meta name="description" content={description ?? "NextJs Site"} />
    </NextHead>
  );
};
