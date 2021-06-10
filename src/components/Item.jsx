import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledWrapper = styled.div`
   display: flex;
   justify-content: center;
   min-height:100vh;
   width:100vw;
   background-position:center;
   background-repeat: no-repeat;
   background-size:cover;

`
const StyledItemContainer = styled.div`
   width:40vw;
   display:flex;
   flex-direction:column;
   align-items:center;
`
const StyledItemText = styled.div ` 
       margin-top:20%;
       display:flex;
       flex-direction:column;
       font-size:34px;
       color:#393c41;
       align-items:center;
       flex:1;
       & > div {
           font-weight: 200;
           font-size:14px;
       }


`


const StyledLowerItemWrapper = styled.div`
    margin-bottom:5%;
    display:flex;
    flex-direction: column;

`
const StyledBtnWrapper = styled.div `
    display:flex;
 `

const StyledExpandList = styled.div `
   color:white;
   width:100%;
   margin-top:3%;
   justify-content:center !important;
`



const Item = ({title,desc,backgroundImg,leftBtnText, leftBtnLink, rightBtnText, rightBtnLink,twoButtons,first}) => {
    console.log(backgroundImg)
    return ( 
        <StyledWrapper style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <StyledItemContainer>
                <StyledItemText>
                    <p>{title}</p>
                    <div>
                        <p>{desc}</p>
                    </div>
                </StyledItemText>
                    <StyledLowerItemWrapper>
                        <StyledBtnWrapper>
                            <Button imp="primary" text={leftBtnText} link={leftBtnLink}/>
                            {
                                twoButtons && (
                                    <Button imp="secondary" text={rightBtnText} link={rightBtnLink} />
                                )
                            }
                        </StyledBtnWrapper>
                        {first && (
                            <StyledExpandList>
                                    <ExpandMoreIcon/>
                            </StyledExpandList>
                        )}          
                    </StyledLowerItemWrapper>
      
          

            </StyledItemContainer>
        </StyledWrapper>

     );
}
 
export default Item;