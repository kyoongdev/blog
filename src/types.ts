import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export type NextLayout = React.FC<LayoutProps>;
