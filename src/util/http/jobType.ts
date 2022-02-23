import { createCRUDApis } from './crud';

export interface IJobType {
  _id?: string;
  title?: string;
}

const [
  createJobType,
  getJobTypes,
  getJobType,
  updateJobType,
  deleteJobType,
] = createCRUDApis<IJobType>('job-type');

export const useJobTypeApi = () => ({
  createJobType,
  getJobTypes,
  getJobType,
  updateJobType,
  deleteJobType,
});
