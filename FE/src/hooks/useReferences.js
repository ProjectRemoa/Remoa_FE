import { useQuery } from 'react-query';
import { getReferences } from '../apis/references/references';
import { useEffect, useState } from 'react';

export const useReferencesData = (params) => {
  const [referenceData, setReferenceData] = useState();
  const { data } = useQuery(
    ['references', params],
    () => getReferences(params),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data) {
      const fetchedData = data.data.data;
      setReferenceData({ ...fetchedData });
    }
  
  }, [data]);

  return { referenceData };
};
