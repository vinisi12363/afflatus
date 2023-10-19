import styled from "styled-components"
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import NavigationBar from "../NavigationBar/index.jsx";
import { PageContainer } from "../../PageContainers/PageContainer.jsx";
import { SystemContainer } from "../../PageContainers/SystemContainer.jsx";
import { Title } from "../../Title/Title.jsx";
import axios from 'axios';
import { useEffect } from "react";
import { getAllEvents } from "../../../services/eventsApi.jsx";
export default function ClientBody (){
    const navigate = useNavigate()
    const [clientsList , setClientsList] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    useEffect(()=>{
        fetchClients();
    },[]);
    const fetchClients = async ()=>{
        try {
            const promise = await getAllEvents();
            console.log('Promise no front',promise);
           promise.data.forEach(element => {
                element.birthday = formatarData(element.birthday);
                element.child_birthday = formatarData(element.child_birthday);
                element.specialDate?  formatarData(element.specialDate) : null;
           });
           
            setClientsList(promise.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    const formatarData = (data)=>{
        console.log (data);
        const dataOriginal = new Date(data);
        const dia = dataOriginal.getDate().toString().padStart(2, '0');
        const mes = (dataOriginal.getMonth() + 1).toString().padStart(2, '0'); 
        const dataFormatada = `${dia}/${mes}`;
        return dataFormatada;
    }
    console.log('clients',clientsList);
    return (
            <PageContainer>
                    <SystemContainer>
                        <NavigationBar></NavigationBar>
                        
                        <ListClientsArea>
    
                    {clientsList.map((client) => (
                        <ListClientsBox key={client.id}>
                            <p className="parentName">  {client.name} </p>
                            <p  className="bday">  {client.birthday} </p>
                            <p  className="childName"> {client.child_name}</p>
                            <p  className="childBday"> {client.child_birthday} </p>
                            {client.description && <p className="description"> {client.description}</p>}
                            {client.specialDate && <p className="speciaDate"> {client.specialDate}</p>} 
                        </ListClientsBox>
                    ))}
                     

                </ListClientsArea>

                    </SystemContainer>
                </PageContainer>
    )


}

const CalendarBox = styled.div`
    
    border-radius:5px;
    width:80%;
    margin-top:20px;
    border:3px black solid;


`
const ClientPanel = styled.div`
        display:flex;
        flex-direction:row;
        background-color: lightgrey;
        height:100dvh;    
        
`


const ClientBoxArea = styled.div`
    align-items:center;
    display : flex;
    flex-direction: column;
    height:100%;
    min-width:100%;
    background-color:sandybrown;

`
const ListClientsArea = styled.div `
    overflow-y:scroll;
    width:100%;
    background-image:  url("https://www.verywellfamily.com/thmb/XNQPqjgDTmu9RB9zdm6tebjF3hM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-482136905-2-574320f63df78c6bb016da13.jpg"); 
            background-repeat:no-repeat;
            background-size:cover;
     

    align-items: center;
    display: flex;
    flex-direction:column;

`
/*
const ListClientsBox = styled.div`
        border: 3px grey solid;
        width:60%;
        margin-top:18px;
        border-radius: 5px;
        align-items:center;
        background-color:#ebebeb;
        p{
        color:black;
        font-size:22px;

    }


`*/
const ListClientsBox = styled.div`
  width: 60%;
  line-height: 0.6;
  border: 1px solid #FFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 16px;
  margin: 10px 0;
  flex-direction: column;
  align-items: start;
  padding-top:20px;

  -webkit-backdrop-filter: saturate(180%) blur(5px);
  backdrop-filter: saturate(180%) blur(5px);
  background: hsla(0, 0%, 100%, 0.8);

  p {
    color: #333;
    font-size: 20px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    white-space: break-spaces;
    flex-wrap:wrap;
  }
 p::before{
    font-style: normal;
    font-weight:normal;
    font-size: 16px;
    color: #333;
    font-family: "Roboto", sans-serif;
 }
 .parentName::before {
    content: "Nome do responsável: ";

  }
  .bday::before {
    content: "Aniversário: ";
  }
  .childName::before {
    content: "Nome do bebê: ";
  }
  .childBday::before {
    content: "Aniversário do bebê: ";
  }
  .description::before {
    content: "Descrição: ";
  }
  .speciaDate::before {
    content: "Data especial: ";
  }
 
            
`;