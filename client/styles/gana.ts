import styled from "styled-components";

export const Body = styled.div`
    width: 1300px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 0px 30px;
    td{
        border: 1px solid #a2a9b1;
        padding: 0.2em 0.4em;
        display: table-cell;
        vertical-align: inherit;
        color: #202122;
        border-collapse: collapse;
    }
    th{
        background-color: #eaecf0;
        text-align: center;
        border: 1px solid #a2a9b1;
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