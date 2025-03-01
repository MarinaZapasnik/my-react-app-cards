import styled from "styled-components"

type CardContentPropsType = {
   
    fontFamily?: string;
    color?: string;
    

    
}


export const CardContent = styled.div<CardContentPropsType>`
  padding: 20px;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: start;
`
export const CardTitle = styled.h2<CardContentPropsType>`
  font-family: ${(props) => props.fontFamily || "'Inter', sans-serif"};
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.color || '#000'};
` 
export const CardDescription = styled.p<CardContentPropsType>`
  font-family: ${(props) => props.fontFamily || "'Inter', sans-serif"};
  font-weight: 500;
  font-size: 12px;
  line-height: 167%;
  color: ${(props) => props.color ||'#abb3ba'};
`