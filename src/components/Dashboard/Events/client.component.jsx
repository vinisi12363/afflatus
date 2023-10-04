import styled from "styled-components"
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import NavigationBar from "../NavigationBar/index.jsx";
import { PageContainer } from "../../PageContainers/PageContainer.jsx";
import { SystemContainer } from "../../PageContainers/SystemContainer.jsx";
import { Title } from "../../Title/Title.jsx";

export default function ClientBody (){
    const navigate = useNavigate()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
      console.log(selectedDate)
    return (
            <PageContainer>
                    <SystemContainer>
                        <NavigationBar></NavigationBar>
                        
                    <ListClientsArea>
                      <Title title={"Lembretes"}></Title>
                        <Card>
                                    <p> Fulana  da silva , Mãe do(a): Beltrano Junior  da silva ,  </p>
                                    <p>  Aniversário: 01/01 </p>
                                        <p>Aniversário do filho: 31/12 </p>
                                        <p>Datas especiais: 08/01 (Batismo) ,  09/12 (primeiros passos)</p>
                                        
                        </Card>
            
                        <ListClientsBox>
                                    <p> Fulana  da silva , Mãe do(a): Beltrano Junior  da silva ,  </p>
                                    <p>  Aniversário: 01/01 </p>
                                        <p>Aniversário do filho: 31/12 </p>
                                        <p>Datas especiais: 08/01 (Batismo) ,  09/12 (primeiros passos)</p>
                                        
                        </ListClientsBox>
                        
                            
                        <ListClientsBox>
                                    <p> Fulana  da silva , Mãe do(a): Beltrano Junior  da silva ,  </p>
                                    <p>  Aniversário: 01/01 </p>
                                        <p>Aniversário do filho: 31/12 </p>
                                        <p>Datas especiais: 08/01 (Batismo) ,  09/12 (primeiros passos)</p>
                                        
                        </ListClientsBox>
                        
                            
                        <ListClientsBox>
                                    <p> Fulana  da silva , Mãe do(a): Beltrano Junior  da silva ,  </p>
                                    <p>  Aniversário: 01/01 </p>
                                        <p>Aniversário do filho: 31/12 </p>
                                        <p>Datas especiais: 08/01 (Batismo) ,  09/12 (primeiros passos)</p>
                                        
                        </ListClientsBox>
                        
                            
                        <ListClientsBox>
                                    <p> Fulana  da silva , Mãe do(a): Beltrano Junior  da silva ,  </p>
                                    <p>  Aniversário: 01/01 </p>
                                        <p>Aniversário do filho: 31/12 </p>
                                        <p>Datas especiais: 08/01 (Batismo) ,  09/12 (primeiros passos)</p>
                                        
                        </ListClientsBox>
                        

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


`
