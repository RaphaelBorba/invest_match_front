import Link from 'next/link'
import styled from 'styled-components'
import { palleteDark, palleteLigth } from '@/styles/pallete'
import loginImg from '@/assets/login.png'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react'
import Head from 'next/head'
import { LoginCss } from './style'

export default function Login() {

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
        console.log(form)

    }



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

                <form onSubmit={handleSubmit}>
                    <h1>InvestMacth</h1>
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

                    <button type='submit' >{auth ? 'Criar Conta' : 'Logar'}</button>
                    <h4 onClick={changeAuth}>{auth ? 'Já tenho conta!' : 'Criar Conta!'}</h4>
                </form>
                <article ><Image src={loginImg} alt='Login Image'></Image></article>
            </section>
        </LoginCss>
        </>
    )
}

