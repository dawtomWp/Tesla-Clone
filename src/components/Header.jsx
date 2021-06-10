import React,{useState} from 'react';
import styled from 'styled-components';
import TeslaLogo from '../assets/images/teslaLogoSmall.svg'
import Sidebar from './Sidebar';

const StyledWrapper = styled.div`
   display: flex;
   background-color: transparent;
   background:none;
   position: fixed;
   width: 100vw;
   top:0;
   margin:15px;
   z-index: 100;
   font-weight: bold;
   color:#393c41;
`
const StyledLogo = styled.div`
   height:24px;
   width:100px;
   margin-top: 7px;
`

const StyledCenter = styled.div`
   display: flex;
   flex:1;
   justify-content: center;
   align-items: center;
   margin-left:120px;

   & > p {
       cursor:pointer;
       font-size:14px;
       margin: 10px 15px;
       text-transform: capitalize;
       @media (max-width:1024px) {
       display: none;
   }
   }

`

const StyledRightSide = styled.div`
   display: flex;
   justify-content: center;

   text-transform: capitalize;
   margin-right:40px;

   & > p {
       cursor:pointer;
       font-size:14px;
       margin:10px;
       @media (max-width:1024px) {
       display: none;
   }

   }
`
const StyledMenu = styled.p `
   display:none;
@media (max-width: 1024px) {
    display: block;
    cursor:pointer;
       font-size:14px;
       margin:10px;
       margin-right:40px;
}
`

const Header = () => {

    const [sidebarVisibility, setSidebarVisibility] = useState(false);


    const handleSidebarToggle = () => setSidebarVisibility(!sidebarVisibility)

    
    return ( 
        <StyledWrapper>
            <StyledLogo>
                <img src={TeslaLogo} alt="tasla logo" />
            </StyledLogo>

   
            <StyledCenter>
            <p>Solar Roof</p>
            <p>Model S</p>
            <p>Model X</p>
            <p>Model Y</p>
        </StyledCenter>

        <StyledRightSide>
            <p>Shop</p>
            <p>Account</p>
            <p onClick={handleSidebarToggle}>Menu</p>
        </StyledRightSide>

        <StyledMenu onClick={handleSidebarToggle}>
               Menu
             </StyledMenu>

        {sidebarVisibility &&  <Sidebar closeSidebar={handleSidebarToggle}/>}
 
  
     


        
        
           

        </StyledWrapper>
     );
}
 
export default Header;