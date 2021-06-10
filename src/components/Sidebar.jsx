import React from 'react';
import styled from 'styled-components';
import LanguageIcon from '@material-ui/icons/Language';
import CloseIcon from '@material-ui/icons/Close';


const StyledBlur = styled.div`
   position:fixed;
   margin:-16px;
   min-height:100vh;
   width:100%;
   background: #e2e2e27a;
   backdrop-filter: blur(4px);
`

const StyledWrapper = styled.div`
    position:fixed;
    background-color:white;
    top:0;
    right:0;
    width:400px;
    min-height:100vh;
    z-index:110;
    font-weight:bold;
    font-size:15px;
    box-shadow: 0px 0px 25px 1px #646464;
    @media(max-width:768px) {
        width:300px;
    }

`
const StyledTextWrapper = styled.div `
        margin-top:70px;
        padding:30px;
        color:#393c41;

        & > p {
            padding:10px;
            cursor:pointer;
            transition:1s;
            border-radius:10px;
            &:hover {
                background-color: #e9e9e9a2;
            }
        }

`
const StyledLanguageSection = styled.div `
        display:flex;
        position:relative;
        color:#393c41;
        margin-top:20px;

        & > p {
            margin-left: 6px;
            margin-top: 3px;
            margin-bottom:5px;
        }
        & > h5 {
           position: absolute;
           top:26px;
           left:31px;
        }

`
const StyledCloseIcon = styled(CloseIcon)`
       position:absolute;
       right: 4%;
       top:1%;
       transform:scale(1.3);
       cursor:pointer;
       border-radius:50%;
       transition:1s;
       padding:5px;
       &:hover {
                background-color: #e9e9e9a2;
            }

`


const Sidebar = ({closeSidebar}) => {
    return ( 
     <StyledBlur>
       <StyledWrapper>
            <StyledCloseIcon onClick={closeSidebar}/>
        <StyledTextWrapper>
             <p>Existing Inventory</p>
             <p>Used Inventory</p>
             <p>Trade-In</p>
             <p>Cybertruck</p>
             <p>Roadster</p>
             <p>Semi</p>
             <p>Charging</p>
             <p>Powerwall</p>
             <p>Commercial Energy</p>
             <p>Utilities</p>
             <p>Test Drive</p>
             <p>Find Us</p>
             <p>Support</p>

             <StyledLanguageSection>
                <LanguageIcon/>
                 <p>United States</p>
                 <h5>English</h5>
             </StyledLanguageSection>
         </StyledTextWrapper>



      
       </StyledWrapper>
    </StyledBlur>
     );
}
 
export default Sidebar;