import { useState } from 'react';
import { DialogHook } from '@/types/dialog';

export function useDialogState<TData>(initialData: TData): DialogHook<TData> {
  const [data, setData] = useState(initialData);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const dialog = {
    open() {
      setDialogIsOpen(true);
    },
    close() {
      setDialogIsOpen(false);
    },
    toggle() {
      setDialogIsOpen(!dialogIsOpen);
    },
    isOpen: dialogIsOpen,
  };
  return [data, setData, dialog];
}
