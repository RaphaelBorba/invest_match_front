import { useUser } from "@/context/context";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginOrOut from "./LoginOrOut";
import SearchBar from "./SearchBar";
import { Blank, HeaderCss, LogoCss } from "./style";
import * as jwt from 'jsonwebtoken'

export default function Header() {

    const { user, setUser } = useUser()

    useEffect(() => {

        const token = localStorage.getItem('token')

        if (!user && token) {

            
            try {
                const { userId, type }:any = jwt.verify(token, 'raphaelBorba') 

                setUser({
                    token: token,
                    userId: userId,
                    type: type
                })

            } catch (error) {

                localStorage.clear()
            }
            
        }

    }, [])

    const [click, setClick] = useState(false)

    return (
        <>
            <HeaderCss>
                <Link href={'/'}><LogoCss onClick={() => setClick(false)}>InvestMatch</LogoCss></Link>
                <SearchBar />
                <LoginOrOut click={click} setClick={setClick} />
            </HeaderCss>
            {click ? <Blank click={click} onClick={() => setClick(!click)} /> : ''}
        </>
    );
}