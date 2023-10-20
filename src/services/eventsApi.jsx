import api from './api';

export async function saveEvent(body) {
  const response = await api.post('/events',  body )
  console.log(response.data);
  return response.data;
}

export async function getAllEvents() {
  
  return await api.get('/events');;
}