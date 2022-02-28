import { useState } from 'react';
import { Dialog } from '@/types/dialog';

export function useSimpleDialog(): Dialog {
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
  return dialog;
}
