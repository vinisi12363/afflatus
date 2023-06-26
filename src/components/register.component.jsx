import Calendar from "react-calendar"
import styled from "styled-components"
import  Typography  from "@mui/material/Typography"
import {BsPlusSquare} from 'react-icons/bs'
import { useState } from "react"
export default function RegisterComponent(){

    const [nomeMae , setNomeMae] = useState("")
    const [nascMae , setNascMae] = useState("")
    const [numeroMae , setNumeroMae] = useState("")

    const [nomePai , setNomePai] = useState("")
    const [nascPai , setNascPai] = useState("")
    const [numeroPai , setNumeroPai] = useState("")
    
    
    const [nomeBebe , setNomeBebe] = useState("")
    const [nascBebe , setNascBebe] = useState("")

    const [specialDateText, setSpecialDateText] = useState("")
    const [specialDate, setSpecialDate] = useState("")


    let ObjCadastro= {}

  
    const cadastrar=(e)=>{
        e.preventDefault();
       
        if(specialDateText.length==0){
            ObjCadastro= {
                nomeMae:nomeMae,
                nascMae:nascMae,
                numeroMae:numeroMae,
                nomePai:nomePai,
                nascPai:nascPai,
                numeroPai:numeroPai,
                nomeBebe:nomeBebe,
                nascBebe:nascBebe  
            }
        
        } else {
            ObjCadastro= {
                nomeMae:nomeMae,
                nascMae:nascMae,
                numeroMae:numeroMae,
                nomePai:nomePai,
                nascPai:nascPai,
                numeroPai:numeroPai,
                nomeBebe:nomeBebe,
                nascBebe:nascBebe, 
                specialDateText:specialDateText,
                specialDate:specialDate
            }

        }
          
     

        console.log("objeto cadastrado", ObjCadastro)
    }

    return(
        <RegisterPanel>
            <Typography variant='h1'> Formulário de cadastro </Typography>
            <RegisterBox>
            <form onSubmit={(e)=>cadastrar(e) }>

                <StyledInput1 required onChange={e=>setNomeMae(e.target.value)} value={nomeMae}type="text" placeholder="Nome da mamãe"/>
                <BirthDateInput required onChange={e=>setNascMae(e.target.value)} value={nascMae} type="date"></BirthDateInput>
                <PhoneeInput  required onChange={e=>setNumeroMae(e.target.value)} value={numeroMae} placeholder='WhatsApp'type="tel"></PhoneeInput>

                <StyledInput1 required onChange={e=>setNomePai(e.target.value)} value={nomePai} placeholder="Nome do papai ou responsável"/>
                <BirthDateInput required onChange={e=>setNascPai(e.target.value)} value={nascPai} type="date"></BirthDateInput>
                <PhoneeInput required onChange={e=>setNumeroPai(e.target.value)} value={numeroPai} placeholder='WhatsApp' type="tel"></PhoneeInput>

                <StyledInput1 required onChange={e=>setNomeBebe(e.target.value)} value={nomeBebe} placeholder="Nome do bebê"/>
                <BirthDateInput  required onChange={e=>setNascBebe(e.target.value)} value={nascBebe} type="date"></BirthDateInput>


                <StyledInput1  onChange={e=> setSpecialDateText(e.target.value)} placeholder="Data especial (Batismo, primeiros passos etc)"/>
                <BirthDateInput   onChange={e=> setSpecialDate(e.target.value)} type="date"></BirthDateInput>
                
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