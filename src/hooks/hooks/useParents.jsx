import useAsync from './useAsync';

import * as customersApi from '../../services/customersApi';

export default function useParents() {

  const {
    loading: useParentsLoading,
    error: useParentsError,
    act: getParents
  } = useAsync(() => customersApi.getAllCustomers(), false);

  return {
    useParentsLoading,
    useParentsError,
    getParents
  };
}
