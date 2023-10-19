import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import { useState } from 'react';
import e from 'cors';
import { toast } from 'react-toastify';
import axios from 'axios';
import {signIn} from '../services/authApi.jsx';


export default function LoginBody(){
    const [open, setOpen] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    //const { setUserData } = useContext(UserContext);
    
    
    const login = async  (e) => {
        e.preventDefault();
        const link = import.meta.env.VITE_API_BASE_URL;
        try {
            const { data }= await signIn(username, password);
            //const { data } = await axios.post(`${link}/signin`, {username:username, password:password});
          //  setUserData({ data });
            console.log(data);
            toast.success("login efetuado com sucesso!");
            setOpen(true);
            navigate('/dashboard/client');
        } catch (error) {
            toast.error("usuario não cadastrado ou senha incorreta!");
        }
  
        
       
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
        padding:50px;
        align-items:center;
        
        -webkit-backdrop-filter: saturate(180%) blur(5px);
        backdrop-filter: saturate(180%) blur(5px);
        background: hsla(0, 0%, 100%, 0.8);
        border:1px #fff solid;
        border-radius:5px;
        display:flex;
        flex-direction: column;
        width:400px; 
     

        button{
            margin-top:20px;
            width:150px;
            height:50px;
            font-size:20px;
            border:1px #fff  solid;
            color:black;
            background: linear-gradient(to right, rgb(255,255,255), rgb(254, 202, 202), rgb(254, 249, 195));
            border-radius:5px;
            font-family: 'Roboto', sans-serif;
            cursor: pointer;
           :hover{
               filter: saturate(300%);

           }
           
        }
    }
   

`
const StyledInput1= styled.input`

    margin-top:30px;
    width:300px;
    height:60px;
    border: 1px #fff solid;
    border-radius:5px;
    font-family: 'Roboto', sans-serif;
    background:#fff;
    text-align: center;
    font-size:25px;
    

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

