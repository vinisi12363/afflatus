import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import { MenuItem } from '@mui/material';
import useParents from '../../hooks/hooks/useParents.jsx';
import { useForm } from '../../hooks/hooks/useForm.jsx';
import { CustomDatePicker } from './CustomDatePicker.jsx';
import Input from '../Form/Input.jsx';
import MyButton from '../Form/Button.jsx';
import Select from '../Form/Select.jsx';
import { FormWrapper } from './FormWrapper.jsx';
import { InputWrapper } from './InputWrapper.jsx';
import { ErrorMsg } from './ErrorMsg.jsx';
import { saveChild } from '../../services/childsApi.jsx';
import FormValidations from './FormValidations.jsx';
import  NavigationBar  from '../Dashboard/NavigationBar/index.jsx';
import { SystemContainer } from '../PageContainers/SystemContainer.jsx';
import { PageContainer } from '../PageContainers/PageContainer.jsx';
import { InputSpecialDateWrapper } from './SpecialDateWrapper.jsx';
import { SpecialDateAreaComponent } from './SpecialDateArea.jsx';
import { ThreeDots } from 'react-loader-spinner';

dayjs.extend(CustomParseFormat);

export default function ChildForm() {
  const { getParents } = useParents();
  const [disabledButton , setDisabledButton] = useState(false);
  const [parentsData, setParentsData] = useState([]);
  const [specialClick, setSpecialClick] = useState(false);
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getParents();
          const parents = result.map((parent) => ({
          name: parent.name,
          id: parent.id,
         }));
        
        setParentsData(parents);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const { handleSubmit, handleChange, data, errors, setData, customHandleChange } = useForm({
    
   
    onSubmit: async(data) => {
    
      const customer_id = parentsData.find((parent) => parent.name === data.parentName).id;
      setDisabledButton(true);
      const newData = {
        name: data.name,
        birthday: dayjs(data.birthday).toISOString(),
        customer_id: customer_id,
      };
      
      try {
        console.log(newData);
       const { data } = await saveChild(newData);
       setDisabledButton(false);
      
       toast.success('Informações salvas com sucesso!');
      } catch (err) {
       console.log(err);
       toast.error('Não foi possível salvar suas informações!');
       setDisabledButton(false);
      }
    },

    initialValues: {
      name: '',
      birthday: null,
      parentName: '',
    },
  });
   const setClick = ()=>{
      setSpecialClick(true);
   }
  
  return (
    <PageContainer>
      <SystemContainer>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <NavigationBar></NavigationBar>
        <FormWrapper onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              label="Nome Completo do(a) bebê"
              name="name"
              type="text"
              value={data?.name|| ''}
              onChange={handleChange('name')}
            />
            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <Select
             label="nome do pai / mãe" 
             name="parentName" id="parentName" 
             value={data?.parentName || ''} onChange={handleChange('parentName')}>s
              {parentsData.map((p) => (
                <MenuItem value={p.name} key={p.id}>
                  <em>{p.name}</em>
                </MenuItem>
              ))}
            </Select>
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
            
          <SubmitContainer>
            <MyButton type="submit" disabled={disabledButton}>
              {!disabledButton? "Salvar": <ThreeDots color="#FFF"></ThreeDots>}
            </MyButton>
          </SubmitContainer>
        </FormWrapper>
        </LocalizationProvider>
        <StyledP onClick={()=>{setClick()}}>Gostaria de guardar uma data especial do bebê? clique aqui</StyledP>
        {specialClick && <SpecialDateAreaComponent  specialClick={specialClick} setSpecialClick={setSpecialClick}></SpecialDateAreaComponent>}
        </SystemContainer> 
    </PageContainer>
  );
}
const StyledP = styled.p`
  font-family: 'Roboto', sans-serif;
  :hover{
    cursor: pointer;
  }

`
const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;

  > button {
    margin-top: 0 !important;
  }
`;
