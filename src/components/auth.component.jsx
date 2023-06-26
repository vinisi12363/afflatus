import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import { useState } from 'react';
import e from 'cors';

export default function LoginBody(){
    const [open, setOpen] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    
    const login = (e)=>{
        e.preventDefault()
      
        setOpen(true)
            navigate('/client')
        
       
    }

    const handleChange =(e)=>{
          setUsername(e.target.value)
    }

    const handleChange1 =(e)=>{
       
        setPassword(e.target.value)
    }
    return(
        <PageContainer>
                <LoginContainer>
                <h1> Afflatus </h1>
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
                                    > Log In
                                    </button>
                                 
                                </form>
                             
                        </LoginPanel>
                        <h1> Assistant </h1>
                </LoginContainer>
             
        </PageContainer>

    )

}


const LoginPanel = styled.div`
    display:flex;
    flex-direction:column;

    form{
        align-items:center;
        background-color:sandybrown;
        border:3px black solid;
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
    background-color: black;
    align-items: center;
    
`

const LoginContainer = styled.div `


  
    display:flex;
    flex-direction:column;
    
 
    h1{
        font-size:60px;
        color:black;
    }
    background-image: url("https://www.verywellfamily.com/thmb/XNQPqjgDTmu9RB9zdm6tebjF3hM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-482136905-2-574320f63df78c6bb016da13.jpg"); 
    background-repeat:no-repeat;
    background-size:cover;
   
`

