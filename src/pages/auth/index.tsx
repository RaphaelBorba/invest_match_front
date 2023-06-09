import loginImg from '@/public/login.png'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react'
import Head from 'next/head'
import { AuthFormCss, ButtonWhiteBlueCss, LoginCss } from './style'
import { useRouter } from 'next/router'
import { postSignIn, postSignUp } from '@/utils/api'
import { toast } from 'react-toastify'
import { useUser } from '@/context/context'
import * as jwt from 'jsonwebtoken'
import { LogoCss } from '@/components/header/style'

export default function Login() {
    
    //Variables and states
    const { setUser } = useUser()
    const router = useRouter()
    const [auth, setAuth] = useState(false) //false é login, true é cadastro
    const [moveImage, setMoveImage] = useState(false)
    const [form, setForm] = useState({
        name: '',
        type: '',
        email: '',
        password: '',
        image_url: ''
    })

    const handleForm = (e: ChangeEvent) => {

        const target = e.target as HTMLTextAreaElement
        const { name, value } = target

        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        // SIGN IN
        if (!auth) {
            postSignIn({ email: form.email, password: form.password })
                .then((e) => {
                    const decodeToken: any = jwt.decode(e.data.token)
                    setUser({
                        token: e.data.token,
                        userId: decodeToken.userId,
                        type: decodeToken.type
                    })
                    localStorage.setItem('token', e.data.token)

                    router.push({ pathname: '/' }, undefined, { shallow: true })

                })
                .catch((e) => toast.error(e.response.data.message))

        // SIGN UP
        } else {
            postSignUp(form)
                .then((e) => {
                    toast.success('Conta Criada!')
                    changeAuth()
                })
                .catch((e) => toast.error(e.response.data.message))
        }
    }

    // Function to change image and forms from place
    function changeAuth() {

        setMoveImage(!moveImage)
        setTimeout(() => setAuth(!auth), 300)
        setForm({
            name: '',
            type: '',
            email: '',
            password: '',
            image_url: ''
        })
    }
    return (
        <>
            <Head>
                <title>InvestMatch | Login</title>
            </Head>
            <LoginCss moveImage={moveImage}>
                <section >

                    <AuthFormCss moveImage={moveImage} onSubmit={handleSubmit}>
                        <LogoCss>InvestMacth</LogoCss>
                        {
                            !auth ?
                                <>
                                    <input value={form.email} type="email" placeholder='Email' name='email' onChange={handleForm} required />
                                    <input value={form.password} type="password" placeholder='Senha' name='password' onChange={handleForm} required />
                                </>
                                :
                                <>
                                    <input value={form.name} type="text" placeholder='Nome' name='name' onChange={handleForm} required />
                                    <input value={form.email} type="email" placeholder='Email' name='email' onChange={handleForm} required />
                                    <input value={form.image_url} type="url" placeholder='URL da imagem' name='image_url' onChange={handleForm} required />
                                    <input value={form.password} type="password" placeholder='Senha' name='password' onChange={handleForm} required />
                                    <div>
                                        <input onChange={handleForm} type="radio" name="type" id='inv' value="invest" required></input>
                                        <label htmlFor="inv">Investidor</label>
                                        <input onChange={handleForm} type="radio" name="type" id='emp' value="company" required></input>
                                        <label htmlFor="emp">Empresa</label>
                                    </div>
                                </>
                        }

                        <ButtonWhiteBlueCss type='submit' >{auth ? 'Criar Conta' : 'Logar'}</ButtonWhiteBlueCss>
                        <h4 onClick={changeAuth}>{auth ? 'Já tenho conta!' : 'Criar Conta!'}</h4>
                    </AuthFormCss>
                    <article ><Image src={loginImg} alt='Login Image'></Image></article>
                </section>
            </LoginCss>
        </>
    )
}