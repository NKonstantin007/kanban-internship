import { StatusApiModel, convertToStatuses } from '@/api-types/statuses';
import { Status } from '@/types/status';
import { http } from '../http';

const STATUSES_BASE_PATH = '/statuses';

export const getALLStatuses = async (): Promise<Status[]> => {
  const { data } = await http.get<StatusApiModel[]>(STATUSES_BASE_PATH);
  return convertToStatuses(data);
};
