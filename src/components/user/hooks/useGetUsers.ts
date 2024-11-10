import { useQuery } from '@tanstack/react-query';

import { keys } from '@/config/constants/queryKeys';
import { getUsers } from '@/services/sample.service';
import { User } from '@/types/user.types';

export function useGetUser() {
  return useQuery<unknown, Error, User[]>({
    queryKey: [keys.users],
    queryFn: () => getUsers(),
  });
}
