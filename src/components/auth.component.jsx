import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function LoginBody(){
    const navigate = useNavigate()
    const login = ()=>{
        navigate('/client')
    }

    return(
        <PageContainer>
                <LoginContainer>
                <h1> Afflatus </h1>
                        <LoginPanel>
                                <form>
                                    <StyledInput1 placeholder='usuario' type='text' required ></StyledInput1>
                                    <StyledInput1 placeholder='senha' type= 'password' required></StyledInput1>
                                    <button type='submit'onClick={()=>{login()}}> Log In</button>
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

