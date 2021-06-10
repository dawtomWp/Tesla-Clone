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
   scroll-snap-align: start;



`
const StyledItemContainer = styled.div`
   width:60vw;
   display:flex;
   flex-direction:column;
   align-items:center;
`
const StyledItemText = styled.div ` 
       margin-top:20vh;
       display:flex;
       flex-direction:column;
       font-size:37px;
      
       font-weight:bold;
       color:#393c41;
       align-items:center;
       flex:1;
       & > div {
           font-weight: 200;
           font-size:14px;

           & > p {
               text-align:center;
           }
       }
       & > p {
           text-align:center;
       }


`


const StyledLowerItemWrapper = styled.div`
    margin-bottom:5%;
    display:flex;
    flex-direction: column;

`
const StyledBtnWrapper = styled.div `
    display:flex;
    @media(max-width:768px) {
        flex-direction: column;
    }
 `

const StyledExpandList = styled.div `
   color:black;
   text-align: center;
   width:100%;
   margin-top:3%;
   justify-content:center !important;
   animation: grow 1s ease-in infinite alternate;


   @keyframes grow {
       0% {
           transform:translateY(0px)
       }
       100% {
           transform:translateY(10px)
       }
   }


`
const StyledArrow = styled(ExpandMoreIcon)`
   height:2em !important;
   width:2em !important;
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
                                    <Button secondary text={rightBtnText} link={rightBtnLink} />
                                )
                            }
                        </StyledBtnWrapper>
                        {first && (
                            <StyledExpandList>
                                    <StyledArrow/>
                            </StyledExpandList>
                        )}          
                    </StyledLowerItemWrapper>
      
          

            </StyledItemContainer>
        </StyledWrapper>

     );
}
 
export default Item;