import { useUser } from "@/context/context";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginOrOut from "./LoginOrOut";
import SearchBar from "./SearchBar";
import { Blank, HeaderCss, LogoCss } from "./style";
import * as jwt from 'jsonwebtoken'

export default function Header() {

    const {user, setUser} = useUser()

    useEffect(()=>{

        const token = localStorage.getItem('token')
        
        if(!user && token){
            const decodeToken: any = jwt.decode(token)
            setUser({
                token: token,
                userId: decodeToken.userId,
                type: decodeToken.type
            })
        } 

    },[])

    const [click, setClick] = useState(false)

    return (
        <>
            <HeaderCss>
                <Link href={'/'}><LogoCss onClick={() => setClick(false)}>InvestMatch</LogoCss></Link>
                <SearchBar />
                <LoginOrOut click={click} setClick={setClick} />
            </HeaderCss>
            {click? <Blank click={click} onClick={() => setClick(!click)} /> : ''}
        </>
    );
}