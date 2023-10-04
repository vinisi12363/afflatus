import api from './api';

export async function saveChild(body) {
  const formattedBody = { 
    name: body.name,
    customer_id: body.customer_id,
    birthday: body.birthday
  }
  const response = await api.post('/child',  formattedBody )
  console.log("resposta no front", response.data);
  return response.data;
}

export async function getAllChildrens() {
  const { data } = await api.get('/child');
  console.log(data);
  return data;
}