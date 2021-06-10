import React from 'react'
import Item from '../components/Item';
import styled from 'styled-components';
import {itemsContent} from '../assets/storage/itemsContent'


const StyledWrapper = styled.div`
   scroll-snap-type: y mandatory;
   overflow: auto;
   height:100%;

`
const StyledItem = styled(Item)`
    scroll-snap-align: start;
`

const ItemsContainer = () => {

    const ItemsList = itemsContent.map(item => 
         <StyledItem 
            title={item.title}
            desc={item.desc}
            descLink={item.descLink}
            backgroundImg={item.backgroundImg}
            leftBtnText={item.leftBtnText}
            leftBtnLink={item.leftBtnLink} 
            rightBtnText={item.rightBtnText}
            rightBtnLink={item.rightBtnLink}
            twoButtons={item.twoButtons}
            first={item.first}   
            key={item.id} 


            
         />
 
        
    )


    return ( 
        <StyledWrapper>
            {ItemsList}
           
        </StyledWrapper>
     );
}
 
export default ItemsContainer;