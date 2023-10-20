import styled from "styled-components";
import { FormWrapper } from "./FormWrapper";
import { CustomDatePicker } from "./CustomDatePicker";
import { InputWrapper } from "./InputWrapper";
import MyButton from '../Form/Button.jsx';
import dayjs from "dayjs";
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from "react";
import { toast } from "react-toastify";
import { getAllChildrens } from "../../services/childsApi";
import { useEffect } from "react";
import { saveEvent } from "../../services/eventsApi";
dayjs.extend(CustomParseFormat);


export function SpecialDateAreaComponent(specialClick ,setSpecialClick){
    const [childrens , setChildrens] = useState([]);
    const [closed, setClosed] = useState(false);
    const [data , setData] = useState({description:'', specialDate:null, child_id:2});

    useEffect(()=>{
      const fetchData = async () => {
        try {
          const result = await getAllChildrens();
          
          const childrens = result.rows.map((child) => ({
            name: child.name,
            id: child.id,
          }));
        
          setChildrens(childrens);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();


    },[]);
    
    function handleChange(text) {
      
        setData({description: text, specialDate: data.specialDate , child_id: data.child_id  })
       
    }
    function customHandleChange(specialDate) {
      setData({specialDate: specialDate,  description: data.description , child_id: data.child_id});
    }
    function selectHandleChange(selectedChild) {
      console.log(selectedChild);
      setData({specialDate: data.specialDate,  description: data.description, child_id: selectedChild});
    }
   
    function fecharJanela() {
      setClosed(true);
      window.location.reload();
    }
    const salvar  = async(event) => {
        event.preventDefault();
      //      setDisabledButton(true);
      const newData = {
        child_id: data.child_id,
        special_date: dayjs(data.specialDate).toISOString(),
        description: data.description,
      };
      
      try {
        console.log(newData);
       const { data } = await saveEvent(newData);
       
       toast.success('Informações salvas com sucesso!');
      } catch (err) {
       console.log(err);
       toast.error('Não foi possível salvar suas informações!');
      }
    }
    return(
      <>
            { specialClick.specialClick && <SpecialDateArea visibility = {closed}>
            <button className='btnFechar'onClick={()=>{fecharJanela()}}>fechar</button>
            <h2> primeiro selecione o nome do seu bebê:</h2>
            <form onSubmit={(event)=>salvar(event) }>
               
                <select 
                  type="select"  
                  className="selectBaby" 
                  label='nome do bebê' 
                  value={data?.child_id || null} 
                  onChange={(e)=>{selectHandleChange(e.target.value)}}
                >
                    {childrens.map((child) => {
                      return <option key={child.id} value={child.id}>{child.name}</option>;
                    })}

                </select>
                <input className="descriptionInput" type="text"
                  name = {data.description}
                  placeholder="Descrição do que aconteceu na data especial"
                  value={data?.description || ''} 
                  onChange={(e)=>{handleChange(e.target.value)}}
                  />
                
                <input className="dateInput"
                 type="date"
                 name = {data.specialDate} 
                 format="DD-MM-AAAA"
                 value={data?.specialDate || ''} 
                 onChange={(e)=>{customHandleChange(e.target.value)}}
                ></input>
                    <button className='btnSalvar'type="submit">Salvar</button>
              
            </form>
         </SpecialDateArea> 
      }
      
      </>
    
        )
}
export const SpecialDateArea = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 50dvh;
    height: 50dvh;
    box-sizing: border-box;
    padding-top:8px;
    position:absolute;
    top: 30dvh;
    left:100dvh;
    display: ${(props) => (!props.visibility ? "flex" : "none")};
    z-index: 1;
    border-radius: 10px;
    border:5px #fff solid;
    -webkit-backdrop-filter: saturate(180%) blur(5px);
    backdrop-filter: saturate(100%) blur(5px);
    background: hsla(1, 70%, 90%, 0.5);


    h2{
      font-family: 'Roboto', sans-serif;
      font-weight: lighter;
      margin-left:10%;
    }
    .btnFechar{
        position:relative;
        left:75%;
        background: #FCCF85;
        max-width: 100px;
        height: 40px;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 16px;
        :hover{cursor: pointer;}
    }
    form{
      display:flex;
      flex-direction:column;
      width:80%;
      align-items:start;
      button{
        margin-top:10px;
      }
      .selectBaby{
        position:relative;
        left:10%;
        padding:6px;
        margin-left:5px;
        font-family: 'Roboto', sans-serif;
        min-height:50px;
        width:105%;
        text-align:center;
        border-radius:5px;
        margin-top:5px;
      }
      .descriptionInput{
        position:relative;
        left:10%;
        padding:6px;
        margin-left:5px;
        font-family: 'Roboto', sans-serif;
        min-height:50px;
        width:100%;
        text-align:center;
        border-radius:5px;
        margin-top:5px;
      }
      .dateInput{
        position:relative;
        left:10%;
        font-family: 'Roboto', sans-serif;
        height:40px;
        padding:6px;
        margin-left:5px;
        width:100%;
        text-align:center;
        border-radius:5px;
        margin-top:5px;
      }
      .btnSalvar{
        position:relative;
        left:50%;
        background: #FCCF85;
        min-width: 100px;
        height: 40px;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 16px;
        :hover{cursor: pointer;}
      }

    }
`
const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;

  > button {
    margin-top: 0 !important;
  }
`;
