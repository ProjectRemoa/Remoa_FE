import { useRecoilState } from 'recoil';
import { followState, followStateLoading } from '../../state/followState';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import axiosInstance from '../axiosInterceptors';

export const fetchFollowData = async (memberId) => {
  try {
    const response = await axiosInstance.get(`/follow/${memberId}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const useFollowData = (memberId) => {
  const [followData, setFollowData] = useRecoilState(followState);
  const [isFollowDataLoading, setIsFollowDataLoading] =
    useRecoilState(followStateLoading);

  const query = useQuery(
    ['follow', memberId],
    () => fetchFollowData(memberId),
    {
      refetchOnWindowFocus: false,
    }
  );

  const refetchFollowData = async () => {
    await query.refetch();
  };

  useEffect(() => {
    if (query.data) {
      setFollowData(query.data);
    }
  }, [query.data, setFollowData]);

  useEffect(() => {
    if (query.isLoading) {
      setIsFollowDataLoading(true);
    } else {
      setIsFollowDataLoading(false);
    }
  }, [query.isLoading, setIsFollowDataLoading]);

  return { followData, refetchFollowData };
};
