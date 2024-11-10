import axios, { AxiosResponse } from 'axios';

import { User } from '@/types/user.types';

export async function getUsers(): Promise<AxiosResponse<User[]>> {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );
  return data;
}
