import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import { MenuItem } from '@mui/material';
import useCep from '../../hooks/hooks/api/useCep.jsx';
import  useSaveCustomer from '../../hooks/hooks/api/useSaveCustomer.jsx';
import { useForm } from '../../hooks/hooks/useForm.jsx';
import { CustomDatePicker } from './CustomDatePicker.jsx';
import Input from '../Form/Input.jsx';
import MyButton from '../Form/Button.jsx';
import Select from '../Form/Select.jsx';
import { FormWrapper } from './FormWrapper.jsx';
import { InputWrapper } from './InputWrapper.jsx';
import { ErrorMsg } from './ErrorMsg.jsx';
import { ufList } from './ufList.jsx';
import FormValidations from './FormValidations.jsx';
import  NavigationBar  from '../Dashboard/NavigationBar/index.jsx';
import { SystemContainer } from '../PageContainers/SystemContainer.jsx';
import { PageContainer } from '../PageContainers/PageContainer.jsx';

dayjs.extend(CustomParseFormat);

export default function ChildForm() {
  const [dynamicInputIsLoading, setDynamicInputIsLoading] = useState(false);
  const { getCep } = useCep();
  const { saveCustomer } = useSaveCustomer();
  const [disabledButton , setDisabledButton] = useState(false);

  const { handleSubmit, handleChange, data, errors, setData, customHandleChange } = useForm({
    validations: FormValidations,
  
    onSubmit: async(data) => {

      setDisabledButton(true);
      const newData = {
        name: data.name,
        cpf: data.cpf.replaceAll('.', '').replaceAll('-', ''),
        birthday: dayjs(data.birthday).toISOString(),
        address: {
          cep: data.cep,
          street: data.street,
          city: data.city,
          number: data.number,
          state: data.state,
          neighborhood: data.neighborhood,
          addressDetail: data.addressDetail,
        },
        instagram: data.instagram.replace('@', ''),
        phone: data.phone.replace(/[^0-9]+/g, '').replace(/^(\d{2})(9?\d{4})(\d{4})$/, '($1) $2-$3'),
      };
      const link = import.meta.env.VITE_API_BASE_URL;
      try {
     
       const { data } = await saveCustomer(newData);
       console.log(data);
        toast.success('Informações salvas com sucesso!');
      } catch (err) {
        console.log(err);
        toast.error('Não foi possível salvar suas informações!');
      }
    },

    initialValues: {
      cpf: '',
      name: '',
      birthday: null,
      phone: '',
      cep: '',
      street: '',
      city: '',
      number: '',
      state: '',
      neighborhood: '',
      addressDetail: '',
      instagram: '',
    },
  });


  function isValidCep(cep) {
    return cep.length === 8;
  }
 
  async function handleCepChanges(event) {
    const { name, value } = event.target;

    const valueWithoutMask = value.replace('-', '');

    if (isValidCep(valueWithoutMask)) {
      const newDataValues = {
        ...data,
        [name]: value,
      };

      setDynamicInputIsLoading(true);
      const cepData = await getCep(valueWithoutMask);
      setDynamicInputIsLoading(false);

      setData({
        ...newDataValues,
        street: cepData.logradouro,
        city: cepData.localidade,
        neighborhood: cepData.bairro,
        state: cepData.uf,
      });
    }
  }

  return (
    <PageContainer>
      <SystemContainer>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <NavigationBar></NavigationBar>
        <FormWrapper onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              label="Nome Completo"
              name="name"
              type="text"
              value={data?.name || ''}
              onChange={handleChange('name')}
            />
            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Nome do Pai ou mãe"
              name="customer_name"
              type="text"
              value={data?.customer_name || ''}
              onChange={handleChange('customer_name')}
            />
            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <CustomDatePicker
              name="birthday"
              error={false}
              helperText={null}
              format="DD-MM-YYYY"
              label="Data de Nascimento"
              inputVariant="outlined"
              clearable
              value={dayjs(data.birthday).format('YYYY-MM-DD').toString()}
              onChange={(date) => {
                customHandleChange('birthday', (d) => d && dayjs(d).format('YYYY-MM-DD'))(date);
              }}
            />
            {errors.birthday && <ErrorMsg>{errors.birthday}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <Select label="Estado" name="state" id="state" value={data?.state || ''} onChange={handleChange('state')}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {ufList.map((uf) => (
                <MenuItem value={uf.name} key={uf.id}>
                  <em>{uf.name}</em>
                </MenuItem>
              ))}
            </Select>
            {errors.state && <ErrorMsg>{errors.state}</ErrorMsg>}
          </InputWrapper>
          <SubmitContainer>
            <MyButton type="submit" disabled={disabledButton}>
              Salvar
            </MyButton>
          </SubmitContainer>
        </FormWrapper>
        </LocalizationProvider>
        </SystemContainer> 
    </PageContainer>
  );
}

const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;

  > button {
    margin-top: 0 !important;
  }
`;
