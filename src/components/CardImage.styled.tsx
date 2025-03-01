import styled from "styled-components";




type CardImageContainerPropsType = {
    
    borderRadius?: string;
    width?: string;
    height?: string;
    imageUrl?: string;
    
}

export const CardImageContainer = styled.div<CardImageContainerPropsType>`
  border-radius: ${(props) => props.borderRadius || '10px'};
  width: ${(props) => props.width || '280px'};
  height: ${(props) => props.height || '170px'};  
  margin-top: 10px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;

` 


