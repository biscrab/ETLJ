import styled from "styled-components";

export const Body = styled.div`
    width: 1300px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 0px 30px;
    li{
        list-style: none;
    }
`

export const SelectDiv = styled.div`
    display: flex;
`

export const Rank = styled.div`
    display: table-cell;
    border-right: 1px solid #e5e5e5;
    vertical-align: top;
    width: 200px;
`

export const Tit = styled.div`
    display: block;
    position: relative;
    height: 41px;
    background: #fafafa;
    color: #000;
    text-align: center;
    line-height: 41px;
    font-size: 13px;
    font-weight: bold;
`

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: white;
    li{
        display: flex;
    }
`