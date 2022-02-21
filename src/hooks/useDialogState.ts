import React, { useState } from 'react';

type DialogHook<TData> = [
  TData,
  React.Dispatch<React.SetStateAction<TData>>,
  {
    open: (func?: () => void) => void;
    close: (func?: () => void) => void;
    toggle: () => void;
    isOpen: boolean;
  },
];

export function useDialogState<TData>(initialData: TData): DialogHook<TData> {
  const [data, setData] = useState(initialData);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const dialog = {
    open(func?: () => void) {
      setDialogIsOpen(true);
      if (func) {
        func();
      }
    },
    close(func?: () => void) {
      setDialogIsOpen(false);
      if (func) {
        func();
      }
    },
    toggle() {
      setDialogIsOpen(!dialogIsOpen);
    },
    isOpen: dialogIsOpen,
  };
  return [data, setData, dialog];
}
