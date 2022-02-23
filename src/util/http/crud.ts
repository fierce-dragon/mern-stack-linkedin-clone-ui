import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../secrets';

export type CreateOneFunc<T = any> = (data: T) => Promise<AxiosResponse<T>>;
export type GetAllFunc<T = any> = () => Promise<AxiosResponse<T[]>>;
export type GetOneByIdFunc<T = any> = (id: string) => Promise<AxiosResponse<T>>;
export type UpdateOneByIdFunc<T = any> = (
  id: string,
  data: T,
) => Promise<AxiosResponse<T>>;
export type DeleteOneByIdFunc = (
  id: string,
) => Promise<AxiosResponse<{ message: string }>>;

export const createCRUDApis: <T = any>(
  endpoint: string,
) => [
  CreateOneFunc<T>,
  GetAllFunc<T>,
  GetOneByIdFunc<T>,
  UpdateOneByIdFunc<T>,
  DeleteOneByIdFunc,
] = endpoint => {
  const url = API_URL + endpoint;
  const createOne: CreateOneFunc = data => axios.post(url, data);
  const getAll: GetAllFunc = () => axios.get(url);
  const getOneById: GetOneByIdFunc = id => axios.get(url + '/' + id);
  const updateOneById: UpdateOneByIdFunc = (id, data) =>
    axios.put(url + '/' + id, data);
  const deleteOneById: DeleteOneByIdFunc = id => axios.delete(url + '/' + id);
  return [createOne, getAll, getOneById, updateOneById, deleteOneById];
};
