import styled from "styled-components";
import { FormWrapper } from "./FormWrapper";
import { CustomDatePicker } from "./CustomDatePicker";
import { InputWrapper } from "./InputWrapper";
import MyButton from '../Form/Button.jsx';
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Input from "../Form/Input";
import { ErrorMsg } from './ErrorMsg.jsx';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import { useForm } from "../../hooks/hooks/useForm";

dayjs.extend(CustomParseFormat);


export function SpecialDateAreaComponent(){
  
    function handleChange(description) {
        data.description = description;
    }
    function customHandleChange(specialDate) {
        data.specialDate = specialDate;
    }
    function saveSpecialData(){
        alert('salvo');
    }
   
    const { handleSubmit, data, errors } = useForm({
  
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
           console.log(data);
           toast.success('Informações salvas com sucesso!');
          } catch (err) {
           console.log(err);
           toast.error('Não foi possível salvar suas informações!');
          }
        },
    
        initialValues: {
          name: '',
          birthday: null,
          parentName: '',
        },
      });
    return(
        <SpecialDateArea>
            <FormWrapper onSubmit={()=>saveSpecialData()}>
                <InputWrapper>
                <Input type="text"
                 placeholder="description"
                  name = 'description' 
                  value={data?.description || ''} 
                  onChange={()=>{handleChange('description')}}
                  />
                </InputWrapper>
                    
                <InputWrapper>
                <Input type="date"
                 name = 'specialDate' 
                 format="DD-MM-YYYY"
              label="Data de Nascimento"
              inputVariant="outlined"
                 value={data?.specialDate || ''} 
                 onChange={()=>{customHandleChange('specialDate')}}
                ></Input>
                </InputWrapper>
               
                <SubmitContainer>
                    <MyButton type="submit">Salvar</MyButton>
                </SubmitContainer>
            </FormWrapper>
        </SpecialDateArea>
    
    )
}
export const SpecialDateArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ebebeb;
    width: 50dvh;
    height: 50dvh;
    z-index: 1;
    border-radius: 10px;
`
const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;

  > button {
    margin-top: 0 !important;
  }
`;
