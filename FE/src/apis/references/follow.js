import { useRecoilState } from 'recoil';
import { followState, followStateLoading } from '../../state/followState';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import axios from 'axios';

export const fetchFollowData = async (memberId) => {
  try {
    console.log('팔로우 데이터 조회 시작');

    const response = await axios.get(`/BE/follow/${memberId}`);
    console.log('팔로우 데이터 조회 성공', response.data);
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

  return { followData, isFollowDataLoading, refetchFollowData };
};
