import { Status } from '@/types/status';
import { http } from '../http';

const STATUS_BASE_PATH = '/statuses';

export const getStatuses = async (): Promise<Status[]> => {
  const { data } = await http.get<Status[]>(STATUS_BASE_PATH);
  return data;
};
