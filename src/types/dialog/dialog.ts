import React from 'react';

export type Dialog = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: boolean;
};

export type DialogHook<TData> = [
  TData,
  React.Dispatch<React.SetStateAction<TData>>,
  Dialog,
];
