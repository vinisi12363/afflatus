import { useContext } from 'react';

import UserContext from '../../context/contexts/UserContext'

export default function useToken() {
  const { userData: user } = useContext(UserContext);

  return user.token;
}
