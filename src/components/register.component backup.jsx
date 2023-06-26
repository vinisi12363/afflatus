import Calendar from "react-calendar"
import styled from "styled-components"
import  Typography  from "@mui/material/Typography"
import {BsPlusSquare} from 'react-icons/bs'

export default function RegisterComponent(){
    

   
    return(
        <RegisterPanel>
            <Typography variant='h1'> Formulário de cadastro </Typography>
            <RegisterBox>
            <form>
                
                <StyledInput1 type="text" placeholder="Nome da mamãe"/>
                <BirthDateInput type="date"></BirthDateInput>
                <PhoneeInput  placeholder='WhatsApp'type="tel"></PhoneeInput>

                <StyledInput1 placeholder="Nome do papai ou responsável"/>
                <BirthDateInput type="date"></BirthDateInput>
                <PhoneeInput placeholder='WhatsApp' type="tel"></PhoneeInput>

                <StyledInput1 placeholder="Nome do bebê"/>
                <BirthDateInput type="date"></BirthDateInput>
                <BsPlusSquare onClick={()=>{ <StyledInput1 placeholder="Nome do bebê"/> }}
                 style={{
                            hover: "pointer", 
                            width:"150px",
                            height:"150px",
                            color:"#000",
                            position:"relative",
                            bottom:"25px",
                            left:'180px'
                        
                        }}
                ></BsPlusSquare> 
                <StyledInput1 placeholder="Data especial (Batismo, primeiros passos etc)"/>
                <BirthDateInput type="date"></BirthDateInput>
                
                <button type="submit">Cadastrar</button>
            </form>
         
            </RegisterBox>
            
           
           
     
     
        </RegisterPanel>
    )




}


const BirthDateInput = styled.input `
        position: relative;
        right:75%;
        margin-top:20px;
        background-color:#ffffff;
        height:60px;
        max-width:200px;
        border:3px solid;
        border-radius:5px;
        text-align:center;




`
const PhoneeInput = styled.input `
        
        text-align:center;
        position: relative;
        right:10%;
        bottom:50px;
        margin-top:20px;
        background-color:#ffffff;
        height:60px;
        max-width:200px;
        border:3px solid;
        border-radius:5px;


`


const RegisterPanel = styled.div `
    align-items:center;
    justify-content:flex-start;
    display:flex;
    flex-direction:column;
    height:100dvh; 
    background-repeat:no-repeat;
    background-size:cover;
    background-image:url('https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg')


    `

const RegisterBox = styled.div `
    align-items:flex-start;
    display:flex;
    flex-direction:column;  
    justify-content:flex-start;
    height:50dvh;
   
    form{
        align-items:center;
        border-radius:5px;
        display:flex;
        flex-direction: column;
        height:60dvh;
        width:400px;

        button{
            margin-top:20px;
            width:150px;
            height:50px;
            font-size:20px;
            border:3px solid;
            color:black;
            background: #ebebee;

        }
    }
    input{
        margin-top:20px;
        background-color:#ffffff;
        height:60px;
        width:800px;
    }
    
`
const StyledInput1= styled.input`

    margin-top:30px;
    width:300px;
    height:60px;
    border: 3px solid black;
    border-radius:5px;
    text-align: center;
    font-size:25px;
    background-color:#dbdbdb;

`
const CalendarBox = styled.div ``