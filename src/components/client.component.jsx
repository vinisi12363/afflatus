import styled from "styled-components"
import {BiUserPlus} from 'react-icons/bi'
import {MdPersonSearch} from 'react-icons/md'
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


export default function ClientBody (){
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    return (

                <ClientPanel>
                    <ClientBoxArea>
                        <h1>Menu</h1>
                        <BiUserPlus style={{
                            width:"150px",
                            height:"150px",
                            color:"#000",
                        }}/>
                        <h2>Cadastrar</h2>

                        <MdPersonSearch style={{
                            width:"150px",
                            height:"150px",
                            color:"#000",
                        }}/>
                        <h2>Procurar</h2>

                    </ClientBoxArea>
                    <Calendar onChange={handleDateChange} value={selectedDate} />
                   
                   <ListClientsArea>
                   
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
                </ClientPanel>

    )


}


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
    height:80dvh;
    width:400px;
    background-color:sandybrown;

`
const ListClientsArea = styled.div `
    overflow-y:scroll;
    width:80%;
    background-image:  url("https://www.verywellfamily.com/thmb/XNQPqjgDTmu9RB9zdm6tebjF3hM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-482136905-2-574320f63df78c6bb016da13.jpg"); 
            background-repeat:no-repeat;
            background-size:cover;
     

    align-items: center;
    display: flex;
    flex-direction:column;

`

const ListClientsBox = styled.div`
        border: 3px grey solid;
        margin-top:18px;
        border-radius: 5px;
        background-color:#ebebeb;
        p{
        color:black;
        font-size:22px;

    }


`
