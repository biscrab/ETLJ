import styled from "styled-components";

export const Body = styled.div`
    width: 1300px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 0px 30px;
`

export const GradeHeader = styled.div`
    margin-top: 30px;
    font-weight: bold;
    font-size: 20px;
`

export const GradeBody = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;

    span{
        font-size: 25px;
        margin: 5px;
        cursor: pointer;
    }
`

export const KanjiDiv = styled.div`
    display: flex;
`

export const Kanji = styled.div`
    font-size: 100px;
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
    }
`

export const Canvas = styled.canvas`
    width: 900px;
    height: 500px;
    background-color: white;
`