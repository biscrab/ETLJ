import styled from "styled-components";

type BackgroundProps = {
    src: string
}

export const Background = styled.div<BackgroundProps>`
    background: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #363b3e;
    background-blend-mode: multiply;
    position: absolute;
    top: 53px;
    width: 100%;
    height: 100%;
`