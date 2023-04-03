import { useAtom } from 'jotai';
import { useQuery } from 'react-query';

import { meState } from 'container/state';
import { getMeApi } from 'services/User';
import { clearTokens } from 'utils';

const useMe = () => {
  const [me, setMe] = useAtom(meState);
  const isAdmin = me?.userType === 'ADMIN';

  const { isSuccess, refetch } = useQuery(['getMe'], () => getMeApi().then((res) => res.data), {
    enabled: false,
    staleTime: Infinity,
    refetchInterval: 0,
  });

  const logout = () => {
    setMe(null);
    clearTokens();
  };

  const getMe = async () => {
    const response = await refetch();

    if (!response.data) {
      logout();
      return;
    }

    setMe(response.data);
  };

  return {
    me,
    isAdmin,
    getMe,
    logout,
    isSuccess,
  };
};

export default useMe;
