import styled from "styled-components";

export const Body = styled.div`
    width: 1100px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 50px;
    ul{
        list-style: decimal;
        margin: 5px 10px;
        margin-bottom: 30px;
    }
`

export const P = styled.p`
    margin: 0;
    margin-bottom: 30px;
`

export const Link = styled.p`
    font-weight: bold;
    list-style: none;
    cursor: pointer;
    margin: 8px 0px;
    cursor: pointer;
    :hover{
        color: #C93756;
    }
`

export const Title = styled.div`
    margin-top: 30px;
    font-weight: bold;
    font-size: 20px;
    border-bottom: 3px solid #C93756;
    padding-bottom: 5px;
    margin-bottom: 10px;
`

export const SubTitle = styled.div`
    margin-top: 30px;
    font-weight: bold;
    font-size: 17px;
    border-bottom: 2px solid #C93756;
    padding-bottom: 5px;
    margin-bottom: 10px;
`

export const Explane = styled.p`
    margin: 3px 0px;
    font-size: 15px;
    line-height: 27px;
`