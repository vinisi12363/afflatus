import api from './api';

export async function signIn(username, password) {
  const response = await api.post('/signin', { username, password });
  return response.data;
}

