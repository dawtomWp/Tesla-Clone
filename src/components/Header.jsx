import React from 'react';
import styled from 'styled-components';
import TeslaLogo from '../assets/images/teslaLogoSmall.svg'

const StyledWrapper = styled.div`
   display: flex;
   background-color: transparent;
   background:none;
   position: fixed;
   width: 100vw;
   top:0;
   margin:15px;
   margin-top:15px;
   z-index: 100;
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

   & > p {
       margin: 10px;
       text-transform: uppercase
   }
`

const StyledRightSide = styled.div`
   display: flex;
   justify-content: center;
   text-transform: uppercase;

   & > p {
       margin:10px;
       
   }
`

const Header = () => {
    return ( 
        <StyledWrapper>
            <StyledLogo>
                <img src={TeslaLogo} alt="tasla logo" />
            </StyledLogo>

            <StyledCenter>
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Soloar Roof</p>
                <p>Solar Panel</p>
            </StyledCenter>

            <StyledRightSide>
                <p>Shop</p>
                <p>Tesla Account</p>
            </StyledRightSide>

        </StyledWrapper>
     );
}
 
export default Header;