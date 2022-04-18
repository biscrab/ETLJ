import styled from 'styled-components'

export const LoadingBackground = styled.div`
    position: fixed;
    top: 0;
    z-index: 99999;
    background: rgba(255, 255, 255, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const LoadingText = styled.span`
    margin-top: 10px;
    font-weight: 600;
`