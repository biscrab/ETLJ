import styled from "styled-components";

type BackgroundProps = {
    src: string
}

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    color: white;
    div{
        height: 50px;
        display: flex;
        align-items: center;
        animation: fadein 2s;

        @keyframes fadein{
            from{
                opacity: 0;
                margin-top: 200px;
            }
        }
    }
    h1{
        font-size: 50px;
    }
    h2{
        padding-top: 20px;
        margin-left: 10px;
        font-size: 30px;
    }
`

export const Background = styled.div<BackgroundProps>`
    background: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #363b3e;
    background-blend-mode: multiply;
    position: absolute;
    top: 0px;
    z-index: -2;
    width: 100%;
    height: 100%;
`