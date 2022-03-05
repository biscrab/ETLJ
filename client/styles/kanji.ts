import styled from "styled-components";

export const Body = styled.div`
    width: 1085px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 30px 0px;
`

export const KBody = styled.div`
    width: 900px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 50px 0px;
    img{
        margin-top: 20px;
    }
`

export const GradeHeader = styled.div`
    margin-top: 30px;
    font-weight: bold;
    font-size: 20px;
    border-bottom: 3px solid #C93756;
    padding-bottom: 5px;
`

export const GradeBody = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;

    span{
        font-size: 25px;
        margin: 5px;
        cursor: pointer;
        :hover{
            color: #C93756;
        }
    }
`

export const KanjiDiv = styled.div`
    display: flex;
`

export const WordList = styled.ul`
/*
    list-style: none;
    border-top: 2px solid #C93756;
    border-bottom: 2px solid #C93756;*/
`

export const KanjiCaracter = styled.div`
    border: 5px solid #C93756;
`

export const InfoDiv = styled.div`
    margin-left: 50px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    height: 240px;
    p{  
        font-weight: bold;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    h2{
        margin: 0;
        margin-bottom: 10px;
    }
    span{
        cursor: pointer;
        user-select: none;
    }
`

export const Kanji = styled.div`
    font-size: 200px;
    line-height: 200px;
    padding: 30px;
`

export const ButtonDiv = styled.div`
    border-top: 5px solid #C93756;
    button{
        height: 40px;
        width: 100%;
        font-weight: bold;
        font-size: 17px;
        background-color: white;
        border: 0;
        cursor: pointer;
    }
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 9999;
    top: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        width: 900px;
        height: 500px;
        display: flex;
        justify-content: end;
    }
    i{
        position: absolute;
        padding-top: 8px;
        padding-right: 8px;
        cursor: pointer;
    }
`

export const Canvas = styled.canvas`
    width: 900px;
    height: 500px;
    background-color: white;
`