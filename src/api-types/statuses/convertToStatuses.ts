import { Status } from '@/types/status';

export type StatusApiModel = {
  _id: string;
  name: string;
  boardIds?: string[];
  createdAt: string;
  updatedAt: string;
};

export const convertToStatus = (statusApiModel: StatusApiModel): Status => {
  const { _id, ...rest } = statusApiModel;

  return {
    id: _id,
    ...rest,
  };
};

export const convertToStatuses = (
  statusApiModel: StatusApiModel[],
): Status[] => {
  return statusApiModel.map(convertToStatus);
};
