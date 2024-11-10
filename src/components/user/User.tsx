import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useGetUser } from '@/components/user/hooks/useGetUsers';
import UserTable from '@/components/user/UserTable';

const User = () => {
  const { data, isLoading } = useGetUser();

  if (isLoading) {
    <LoadingSpinner />;
  }

  return <UserTable users={data} />;
};

export default User;
