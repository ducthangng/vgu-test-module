import React from 'react';

interface Test {
  testClassId: number;
  tagId: number;
  testName: string;
  createdUserId: number;
  targetEntityCode: number;
  title: string;
  info: string;
  duration: number;
  dateAssigned: string;
  deadline: string;
  isDone: boolean;
}

export type { Test };
