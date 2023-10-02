import useAsync from '../useAsync';
import useToken from '../useToken';

import * as customersApi from '../../../services/customersApi';

export default function useSaveCustomer() {

  const {
    loading: savecustomerLoading,
    error: saveCustomerError,
    act: saveCustomer
  } = useAsync((data) => customersApi.saveCustomer(data), false);

  return {
     savecustomerLoading,
     saveCustomerError,
     saveCustomer
  };
}
