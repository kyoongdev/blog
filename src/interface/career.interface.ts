import React from 'react';

export interface Career {
  title: string;
  startAt: string;
  endAt: string;
  job: string;
  description: string;
  children?: React.ReactNode;
  dataKey?: string;
}
