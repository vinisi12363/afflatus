import styled from "styled-components"
import Calendar from "react-calendar"

export default function RegisterComponent(){

    return(
        <RegisterPanel>
            <h1> Cadastro de clientes</h1>
           <RegisterBox>
            <form>
                <input type='text' placeholder="nome"></input>
                <input type='text' placeholder="número"></input>
                <CalendarBox>
                    <p>Data de Nascimento</p>
                    <Calendar/>
                </CalendarBox>
               
                <input type='text' placeholder="nome do bebê"></input>
                <button> Adicionar filho(a) </button>
                <CalendarBox>
                    <p>Data de Nascimento</p>
                    <Calendar/>
                </CalendarBox>

                <button type="submit">Cadastrar</button>
            </form>
           </RegisterBox>



        </RegisterPanel>
    )




}

const RegisterPanel = styled.div `
    align-items:center;
    justify-content:center;
    background-color:sandybrown;
`

const RegisterBox = styled.div `
    align-items:center;

`
const CalendarBox = styled.div ``