import styled from "styled-components";

export const Body = styled.div`
    width: 1000px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 50px 0px;
    table{
        width: 100%;
        border-spacing: 0px;
    }
    td{
        user-select: none;
        border: 1px solid #F08F90;
        cursor: pointer;
        padding: 0.2em 0.4em;
        display: table-cell;
        vertical-align: inherit;
        color: #202122;
        border-collapse: collapse;
    }
    th{
        background-color: #FDEFF4;
        text-align: center;
        border: 1px solid #F08F90;
        padding: 0.2em 0.4em;
        display: table-cell;
        vertical-align: inherit;
        font-weight: bold;
        text-indent: initial;
        border-spacing: 2px;
    }
    tbody{
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
`

export const PathDiv = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 50px;
`

export const TittleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    h3{
        margin: 0;
    }
    margin-bottom: 30px;
`

export const Toggle = styled.div`
    input{
    width: 80px;
    background-color: blue;
    padding: 0px 5px;
    height: 25px;
    border-radius: 15px;
    }
    span{
        border-radius: 50%;
        background-color: white;
        cursor: pointer;
        weight: 25x;
        height: 25px;
    }
`

export const Comment = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 0;
`

type SelectProps = {
    selected: boolean
}

export const Path = styled.button<SelectProps>`
    width: 50%;
    height: 55px;
    cursor: pointer;
    background-color: white;
    font-weight: bold;
    font-size: 17px;
    color: #333;
    outline: 0;
    border: 0;
    border: ${props => props.selected ? "3px solid #C93756" : "0px"};
    border-bottom: ${props => props.selected ? "0px" : "3px solid #C93756"};
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