import useAsync from '../useAsync';
import * as customersApi from '../../../services/customersApi';

export default function useEnrollment() {
 
  
  const {
    data: enrollment,
    loading: enrollmentLoading,
    error: enrollmentError,
    act: getEnrollment
  } = useAsync(() => customersApi.getAllCustomers(), false);

  return {
    enrollment,
    enrollmentLoading,
    enrollmentError,
    getEnrollment
  };
}
