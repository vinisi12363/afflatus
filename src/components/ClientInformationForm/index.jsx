import { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import { MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import useCep from '../../hooks/hooks/api/useCep.jsx';
import useEnrollment from '../../hooks/hooks/api/useEnrollment.jsx';
import useSaveEnrollment from '../../hooks/hooks/api/useSaveEnrollment.jsx';
import { useForm } from '../../hooks/hooks/useForm.jsx';
import { CustomDatePicker } from './CustomDatePicker.jsx';
import Input from '../Form/Input';
import MyButton from '../Form/Button';
import Select from '../../components/Form/Select';
import { FormWrapper } from './FormWrapper';
import { InputWrapper } from './InputWrapper';
import { ErrorMsg } from './ErrorMsg';
import { ufList } from './ufList';
import FormValidations from './FormValidations';
import { Title } from '../Title/Title';
import  NavigationBar  from '../Dashboard/NavigationBar/index.jsx';
import { SystemContainer } from '../PageContainers/SystemContainer.jsx';
import { PageContainer } from '../PageContainers/PageContainer.jsx';
dayjs.extend(CustomParseFormat);

export default function ClientInformationForm() {
  const [dynamicInputIsLoading, setDynamicInputIsLoading] = useState(false);
  const { getCep } = useCep();
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
        phone: data.phone.replace(/[^0-9]+/g, '').replace(/^(\d{2})(9?\d{4})(\d{4})$/, '($1) $2-$3'),
      };

      try {
        //await saveEnrollment(newData);
        toast.success('Informações salvas com sucesso!');
      } catch (err) {
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
              name="cpf"
              label="CPF"
              type="text"
              maxLength="14"
              mask="999.999.999-99"
              value={data?.cpf || ''}
              onChange={handleChange('cpf')}
            />
            {errors.cpf && <ErrorMsg>{errors.cpf}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
          <DatePicker />
            {errors.birthday && <ErrorMsg>{errors.birthday}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Telefone"
              mask={data?.phone.length < 15 ? '(99) 9999-99999' : '(99) 99999-9999'} // o 9 extra no primeiro é para permitir digitar um número a mais e então passar pra outra máscara - gambiarra? temos
              name="phone"
              value={data?.phone || ''}
              onChange={handleChange('phone')}
            />
            {errors.phone && <ErrorMsg>{errors.phone}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <Input
              label="CEP"
              name="cep"
              mask="99999-999"
              value={data?.cep || ''}
              onChange={(e) => {
                handleChange('cep')(e);
                handleCepChanges(e);
              }}
            />
            {errors.cep && <ErrorMsg>{errors.cep}</ErrorMsg>}
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

          <InputWrapper>
            <Input
              label="Cidade"
              name="city"
              value={data?.city || ''}
              onChange={handleChange('city')}
              disabled={dynamicInputIsLoading}
            />
            {errors.city && <ErrorMsg>{errors.city}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Rua"
              name="street"
              value={data?.street || ''}
              onChange={handleChange('street')}
              disabled={dynamicInputIsLoading}
            />
            {errors.street && <ErrorMsg>{errors.street}</ErrorMsg>}
          </InputWrapper>

          <InputWrapper>
            <Input label="Número" name="number" value={data?.number || ''} onChange={handleChange('number')} />
            {errors.number && <ErrorMsg>{errors.number}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Bairro"
              name="neighborhood"
              value={data?.neighborhood || ''}
              onChange={handleChange('neighborhood')}
              disabled={dynamicInputIsLoading}
            />
            {errors.neighborhood && <ErrorMsg>{errors.neighborhood}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Complemento"
              name="addressDetail"
              value={data?.addressDetail || ''}
              onChange={handleChange('addressDetail')}
            />
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
