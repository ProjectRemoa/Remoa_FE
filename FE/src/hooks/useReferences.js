import { useQuery } from 'react-query';
import { getReferences } from '../apis/references/references';
import { useEffect, useState } from 'react';

export const useReferencesData = (params) => {
  const [referenceData, setReferenceData] = useState();

  const { data } = useQuery(['references', params], () =>
    getReferences(params)
  );

  useEffect(() => {
    if (data) {
      setReferenceData({ ...data.data.data });
    }
  }, [data]);

  return { referenceData };
};
