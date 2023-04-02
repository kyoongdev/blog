import React from 'react';
import { useQuery } from 'react-query';

import { getMeApi } from 'services/User';
import { UserReq } from 'services/User/type';
import { clearTokens } from 'utils';

const useMe = () => {
  const [me, setMe] = React.useState<UserReq | null>(null);

  const { isSuccess, refetch } = useQuery(['getMe'], () => getMeApi().then((res) => res.data), {
    enabled: false,
  });

  const logout = () => {
    setMe(null);
    clearTokens();
  };

  const getMe = async () => {
    const response = await refetch();
    console.log({ response });

    if (!response.data) {
      logout();
      return;
    }

    setMe(response.data);
  };

  return {
    me,
    getMe,
    logout,
    isSuccess,
  };
};

export default useMe;
