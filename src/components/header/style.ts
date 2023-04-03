import { palleteDark } from "@/styles/pallete";
import styled from "styled-components";



export const HeaderCss = styled.header`

    width: 100vw;
    height: 100px;
    background-color: ${palleteDark.silver};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 50px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
`;

export const SearchBarCss = styled.nav`

    width: 30%;
    height: 50px;
    display: flex;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    
    input{
        width: 85%;
        height: 100%;
        font-size: 20px;
        padding-left: 15px;
        font-weight: 300;
        border: none;
        border-radius: 20px 0 0 20px;
        outline: 0;
    }
    button{
        width: 15%;
        height: 100%;
        border: none;
        border-radius: 0 20px 20px 0;
        border-left: 1px solid #42BFDD;
        background-color: white;
        font-size: 26px;
        cursor: pointer;
        transition: .3s;
    }
    button:hover{
        background-color: #42BFDD;
    }
    
    @media  (max-width: 950px){
        display: none;
    }
`;

export const LogoCss = styled.h1`

    font-size: 50px;
    font-weight: 700;
    color: #42BFDD;
    background-image: -webkit-linear-gradient(135deg, #42BFDD 39%,#011638 56%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const LogCss = styled.div<any>`

    width: 100px;
    height: 50px;
    font-size: 35px;
    transition: .5s;
    position: relative;
    
    nav{
        position: absolute;
        right: 0;
        top: -30px;
        display: flex;
        justify-content: center;
        width: 200px;
        height: 100px;
        align-items: center;
        z-index: 2;
        cursor: pointer;
        background-color: ${palleteDark.silver};
    }
    ul{
        position: absolute;
        right: 0;
        background-color: ${palleteDark.silver};
        z-index: 1;
        top: ${props => props.click? '75px': '-50px'};
        width: 200px;
        transition: .5s;
        border-radius: 0 0 10px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        li{
            font-size: 25px;
            cursor: pointer;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
            span{
                transition: 0.3s;
                margin-right: 10px;
            }
        }
        li:hover{
            background-color: #42BFDD;
            color: white;
            span{
                color: white;
            }
        }
        li:last-child{
            border-radius: 0 0 10px 10px;
        }
        
    }

`;

export const Blank = styled.section<any>`

    position: fixed;
    top: 0;
    right: 0;
    display: ${props => props.click? 'inital': 'none'};
    background-color: red;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background-color: black;
    opacity: 0.2;
`;