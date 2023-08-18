import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import { useState } from 'react';
import e from 'cors';
import { toast } from 'react-toastify';


export default function LoginBody(){
    const [open, setOpen] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    
    const login = (e) => {
        e.preventDefault();
        toast.success("login efetuado com sucesso!");
        setOpen(true);
        navigate('/dashboard/client');
        
       
    }

    const handleChange =(e)=>{
          setUsername(e.target.value)
    }

    const handleChange1 =(e)=>{
        setPassword(e.target.value)
    }
    return(
        <PageContainer>
                  <LoginPanel>
                        
                        <form>
                            <StyledInput1 
                                 value={username} 
                                 onChange={(e)=>handleChange(e)} 
                                 required
                                 placeholder='usuario'
                                 type='text'  
                            ></StyledInput1>
                            <StyledInput1 
                                 value= {password}
                                 onChange={(e)=>handleChange1(e)}
                                 required
                                 placeholder='senha'
                                 type= 'password' 
                            ></StyledInput1>
                            <button 
                                type='submit' 
                                onClick={(e)=>{login(e)}}
                            > Entrar
                            </button>
                         
                        </form>
                     
                </LoginPanel>
                <LoginContainer>
               
                      
                       
                </LoginContainer>
             
        </PageContainer>

    )

}


const LoginPanel = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;

    form{
        align-items:center;
        background:linear-gradient(to right, #f4c095, #FFD77F);
        border:3px black solid;
        border-radius:5px;
        display:flex;
        flex-direction: column;
        width:400px; 
        height:520px;

        button{
            margin-top:20px;
            width:150px;
            height:50px;
            font-size:20px;
            border:3px solid;
            color:white;
            background:#333333;

           
        }
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

const PageContainer  = styled.div`
    width:100%;
    min-height:100dvh;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    background-image: url("https://www.verywellfamily.com/thmb/XNQPqjgDTmu9RB9zdm6tebjF3hM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-482136905-2-574320f63df78c6bb016da13.jpg"); 
    background-repeat:no-repeat;
    background-size:cover;
`

const LoginContainer = styled.div `
    display:flex;
    flex-direction:column;
 
    h1{
        font-size:60px;
        color:black;
    }
  
`;

