import { Status } from '@/types/status';

export function getStatuses(): Status[] {
  return [
    {
      id: 'status1',
      name: 'Analysis',
      boardIds: [''] /* заполнить позже */,
    },
    {
      id: 'status2',
      name: 'In progress',
      boardIds: [''],
    },
    {
      id: 'status3',
      name: 'Testing',
      boardIds: [''],
    },
    {
      id: 'status4',
      name: 'Done',
      boardIds: [''],
    },
  ];
}
