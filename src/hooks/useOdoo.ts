import { useState, useCallback } from 'react';
import { Odoo } from '../helpers/odoo';

interface OdooResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  fetchData: (params: any) => void;
}

const useOdoo = <T>(odooService: Odoo, rpcMethod: string): OdooResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (params: any) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await odooService.rpcCall<T>(rpcMethod, params);
        setData(response);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    },
    [odooService, rpcMethod]
  );

  return { data, isLoading, error, fetchData };
};

export default useOdoo;
