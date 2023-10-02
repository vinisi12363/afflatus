import api from './api';

export async function saveCustomer(body) {
  const formattedBody = { 
    name: body.name,
    cpf: body.cpf,
    address: `${body.address.street}, ${body.address.number}, ${body.address.neighborhood}, ${body.address.city}, ${body.address.state}, ${body.address.cep}`,
    phone: body.phone,
    instagram: body.instagram,
    birthday: body.birthday
  }
  const response = await api.post('/customers',  formattedBody )
  console.log(response.data);
  return response.data;
}

export async function getAllCustomers() {
  const response = await api.get('/customers');
  return response.data;
}