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
    align-items: center;
    h3{
        margin: 0;
    }
    margin-bottom: 30px;
`

export const Mode = styled.div`
    display: flex;
    align-items: center;
    b{
        margin-right: 10px;
    }
`

type ToggleType = {
    checked: boolean
}

export const Toggle = styled.div<ToggleType>`
    text-align: left;
    width: 45px;
    height: calc(45px / 2);
    border-radius:calc(60px / 3);    
    background-color: #0076f7;
    display: inline-block;
    position: relative;
    cursor: pointer;
    span {
      display: block;
      width: 100%;
      height: 100%;
    }
    input[type="checkbox"] {
        opacity: 0;
        position: absolute;
    } 
    span:before, span:after {
      content: "";
      cursor: pointer;
      position: absolute;
    }
    input[type="checkbox"]:checked:focus ~ span {
        span {
            box-shadow: 0 0 0 4px #fff;
        }
    }
    span{
      border-radius: calc(60px / 3);   
    }
    span:before {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      //background-color: ${props => props.checked ? "#f1f1f1" : "rgba(0, 0, 0, 0)"};
      border-radius: calc(60px / 3);
      transition: opacity .2s ease-out .1s, transform .2s ease-out .1s;
      transform: scale(1);
      opacity: 1;
    }
    span:after{
      top: 50%;
      z-index: 3;
      transition: transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15);
      width: calc(47px / 2);
      height: calc(47px / 2);
      transform: translate3d(0, -50%, 0);
      background-color: #fff;
      border-radius: 100%;
      box-shadow: 0 calc(2px / 3) calc(5px / 3) rgba(0, 0, 0, .3);  
    }
    input{
        width: calc(80px / 3);
        background-color: blue;
        padding: 0px calc(5px / 3);
        height: calc(25px / 3);
        border-radius: calc(15px / 3);
    }
    span{
        border-radius: 50%;
        cursor: pointer;
        weight: calc(25px / 3);
        height: calc(25px / 3);
    }
    input[type="checkbox"]:checked ~ span:before {
        transform: scale(0);
        opacity: .7;
    }
    input[type="checkbox"]:checked ~ span:after {
        transform: translate3d(100%, -50%, 0);
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