import api from './api';


export async function getAllEvents() {
  
  return await api.get('/events');;
}