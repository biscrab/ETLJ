import styled from "styled-components";

export const Body = styled.div`
    width: 1100px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 50px 0px;
    table{
        width: 100%;
        border-spacing: 0px;
    }
    td{
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

type SelectProps = {
    selected: boolean
}

export const Path = styled.button<SelectProps>`
    width: 50%;
    height: 50px;
    cursor: pointer;
    background-color: white;
    font-weight: bold;
    font-size: 17px;
    color: #333;
    outline: 0;
    border: 0;
    border: ${props => props.selected ? "2px solid #C93756" : "2px solid #eee"};
    border-bottom: ${props => props.selected ? "0px" : "2px solid #C93756"};
`