import { palleteDark } from "@/styles/pallete";
import styled from "styled-components";



export const LoginCss = styled.main<any>`
    
    width: 100vw;
    height: 100vh;
    background-color: #42BFDD;
    display: flex;
    justify-content: center;
    align-items: center;

    section{
        width: 75%;
        height: 700px;
        background-color: white;
        display: flex;
        position: relative;
        border-radius: 40px;
        article{
            transition: 1s;
            width: 50%;
            position: absolute;
            right: 0;
            height: 100%;
            margin-right: ${props => props.moveImage ? '50%' : '0%'};
            z-index: 1;
            img{
                width: 100%;
                height: 100%;
                border-radius: 40px;
            }
        }


        
    }

`;
export const AuthFormCss = styled.form<any>`

            transition: 1s;
            position: absolute;
            margin-left: ${props => props.moveImage ? '50%' : '0%'};
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 100%;
            flex-direction: column;
            gap: 15px;

            h1{
                margin-bottom: 20px;
            }
            h2{
                font-size: 25px;
                font-weight: 700;
            }
            h4:hover{
                transition: 0.3s;
                cursor: pointer;
                transform: scale(1.1);
                text-decoration: underline;
            }


            input{

                width: 60%;
                height: 50px;
                border: 2px solid;
                padding-left: 15px ;
                font-size: 20px;
                outline: 0;
                border-width: 0 0 2px;
                border-color: #42BFDD
            }
            button{
                margin-top: 10px;
            }
            div{
                display: flex;
                align-items: center;
                label{
                    cursor: pointer;
                    margin-right: 20px;
                    margin-left: 5px;
                }
            }
            
`;

export const ButtonWhiteBlueCss = styled.button`

    width: 200px;
    height: 50px;
    border-radius: 20px;
    background-color: white;
    border: #42BFDD 3px solid;
    font-size: 20px;
    transition: .5s;
    color: #42BFDD;
    
    &&:hover{
        cursor: pointer;
        background-color: #42BFDD;
        color: white;
    }
`;