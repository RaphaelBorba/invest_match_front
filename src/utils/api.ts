import axios from "axios";
import { SignInPost, SignUpPost } from "./protocols";

const URL = 'http://localhost:4000'

export function postSignUp(body: SignUpPost){

    return axios.post(`${URL}/auth/signUp`, body)
}

export function postSignIn(body: SignInPost){

    return axios.post(`${URL}/auth/signIn`, body)
}