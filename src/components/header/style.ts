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
`;

export const SearchBarCss = styled.nav`

    width: 30%;
    height: 50px;
    background-color: white;
    
    
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

export const LogCss = styled.div`

    width: 100px;
    height: 50px;
    border: 1px solid red;
`;