import React from 'react';
import styled,{css} from 'styled-components';

const StyledButton = styled.div`
     display:flex;
     justify-content: center;
     align-items:center;
     border-radius:100px;
     background-color: rgba(23,26,32, 0.8);
     height:40px;
     width:256px;
     margin: 8px;
     opacity: 0.85;
     font-weight:bold;
     cursor:pointer;

     & > a {
       text-decoration:none;
       color:white;
       font-size:12px;
       text-align:center;
    }
   
   ${({secondary}) => secondary && css `
        background-color:white;
        opacity:0.65;

        & > a {
       color:black;
    }
      
   `
   }

`
const Button = ({secondary,link,text}) => {
    return ( 

        <StyledButton secondary={secondary}>
           <a href={link}>{text}</a>
        </StyledButton>


     );
}
 
export default Button;