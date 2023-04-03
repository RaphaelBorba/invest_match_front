import { palleteDark } from "@/styles/pallete";
import styled from "styled-components";



export const ShowProjectsCss = styled.main`

    width: 80%;
    height: 150vh;
    margin-top: 100px;
    margin-inline: auto;

`;

export const DashboardHeaderCss = styled.div`

    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid ${palleteDark.silver};
    padding: 10px 10px 10px 5px;
    h1{
        font-size: 30px;
    }
    button{
        background-color: ${palleteDark.silver};
        
        border: none;
        width: 150px;
        height: 35px;
        font-size: 18px;
        border-radius: 5px;
        transition: 0.3s;
    }
    button:hover{
        color: white;
        background-color: #42BFDD;
        cursor: pointer;
        transform: scale(1.1);
    }
`;