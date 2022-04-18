import styled from "styled-components";

export const Body = styled.div`
    width: 1000px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 30px 0px;
    li{
        list-style: none;
    }
`

export const SelectDiv = styled.div`
    display: flex;
    border-right: 1px solid #e5e5e5;
`

export const List = styled.ul`
    height: 1000px;
`

export const Rank = styled.div`
    display: table-cell;
    border-right: 1px solid #e5e5e5;
    vertical-align: top;
    width: 200px;
`

export const WorldClass = styled.div`
    display: table-cell;
    border-right: 1px solid #e5e5e5;
    vertical-align: top;
    width: 800px;
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

export const TagList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: white;
    li{
        display: flex;
    }
`

export const PageDiv = styled.div`
    display: flex;
    justify-content: center;
`