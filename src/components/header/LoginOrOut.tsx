import { LogCss } from "./style";
import { RiArrowDownSLine } from 'react-icons/ri'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineLogout } from 'react-icons/md'
import { useUser } from "@/context/context";
import { useRouter } from 'next/router'


export default function LoginOrOut({ click, setClick }: any) {

    const { user } = useUser()
    const router = useRouter()

    function logOut() {

        localStorage.clear()
        location.reload()
    }

    return (

        <LogCss click={click} >
            <nav onClick={() => setClick(!click)}>

                <RiArrowDownSLine style={{ transform: click ? 'rotate(180deg)' : 'rotate(0)', transition: '0.5s' }} />
                <BsPerson />
            </nav>
            <ul>
                {
                    user ?
                        <>
                            <li><span>Perfil</span><BsPerson /></li>
                            <li onClick={logOut}><span>Sair </span><MdOutlineLogout /></li>
                        </>
                        :
                        <li onClick={() => router.push({ pathname: '/auth' }, undefined, { shallow: true })}><span>Login </span><MdOutlineLogout /></li>
                }
            </ul>

        </LogCss>

    );
}