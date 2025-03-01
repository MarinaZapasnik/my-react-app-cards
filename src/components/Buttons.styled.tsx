import styled from "styled-components"

type ButtonsPropsType = {
    width?: string,
    height?: string,
    borderRadius?: string;
    color?: string;
    borderColor?:string;
    textColor?: string;
    hoverColor?: string;
    activeColor?: string;
    textActiveColor?: string;
    textHoverColor?: string;
    fontFamily?: string;
    
}

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 12px;
`
export const Button = styled.button<ButtonsPropsType>`
    border-radius: ${(props) => props.borderRadius || '5px'};
    border: 2px solid  ${(props) => props.borderColor || '#4e71fe'};
    width: ${(props) => props.width || '86px'};
    height: ${(props) => props.height || '30px'};
    background: ${(props) => props.color || '#4e71fe'} ;
    font-family: ${(props) => props.fontFamily || "'Inter', sans-serif"};
    font-weight: 700;
    font-size: 10px;
    line-height: 200%;
    color: ${(props) => props.textColor || '#292c2d'};
    display: flex;
    justify-content: center;
    align-items: center;
    

    &:active {
        background: ${(props) => props.activeColor || '#cb3bc6'};
        color: ${(props) => props.textActiveColor || '#292c2d'};
    }

    &:hover {
        background: ${(props) => props.hoverColor || '#cb3bc6'};
        color: ${(props) => props.textHoverColor || '#292c2d'};
        transform: scale(0.98);
    }

    &:focus {
        outline: none;
    }
            
`