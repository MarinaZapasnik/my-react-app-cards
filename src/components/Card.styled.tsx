import styled from "styled-components";

type CardPropsType = {
  color?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
};


export const Card = styled.li<CardPropsType>`

  border-radius: ${(props) => props.borderRadius || '15px'};
  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || '350px'};
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: ${(props) => props.color || '#fff'};
  display: flex;
  flex-direction: column;
  align-items: center;
`