import styled from "styled-components"

export default function NavbarComponent(){

    return (
        <HeaderArea>
            <h1>Afflatus Assistant</h1>
           
                  <img src='data:image/jpeg;base64,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'></img>

         

        </HeaderArea>

    )


}


const HeaderArea = styled.div`
    height:9dvh;
    background-color:#333333;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    h1{
        margin-left:42%;
    }
    div {
        background-color:red;
       
    }
    img{    
        border: 5px black solid;
            margin-top:15px;
            border-radius:50%;
            width:60px;
            height:55px;
            margin-right:30px;
            
        }

`