import { Status } from '@/types/status';

export function getStatuses(): Status[] {
  return [
    {
      id: '621783e1911e59ce42922b9b',
      name: 'Analysis',
      boardIds: ['620916bb6074c4636e651334'],
      createdAt: '2022-02-24T13:10:57.617Z',
      updatedAt: '2022-02-24T13:10:57.617Z',
    },
    {
      id: '6217841b911e59ce42922ba2',
      name: 'In progress',
      boardIds: ['620923b46074c4636e65133d'],
      createdAt: '2022-02-24T13:11:55.836Z',
      updatedAt: '2022-02-24T13:11:55.836Z',
    },
    {
      id: '62178432911e59ce42922ba4',
      name: 'Testing',
      boardIds: ['620b9f5c6074c4636e6514d0'],
      createdAt: '2022-02-24T13:12:18.317Z',
      updatedAt: '2022-02-24T13:12:18.317Z',
    },
    {
      id: '62178463911e59ce42922ba9',
      name: 'Done',
      boardIds: ['620ba1806074c4636e6514d9'],
      createdAt: '2022-02-24T13:13:07.310Z',
      updatedAt: '2022-02-24T13:13:07.310Z',
    },
  ];
}
