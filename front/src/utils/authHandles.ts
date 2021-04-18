import api from '@/services/api'
import Cookie from 'js-cookie' 
import User from '@/interfaces/User'
import { useEffect } from 'react'

interface LoginData {
    email: string
    password: string
}

interface TokenResponse {
    data: {
        token: {
            token: string
            refreshToken: string
        }
        error: string
        user: { role: string }
    }

}

function Login(data: TokenResponse): any {
    const res = data.data
    console.log('before set cookie!')
    if (res.error)
        console.log('Login error: ', res.error)
    else {
        Cookie.set('credentials', {
            token: res.token.token,
            refreshToken: res.token.refreshToken,
            role: res.user.role
        })
    
        Cookie.set('user', res.user) 
    } 
}

export const HandleLogin = (data: LoginData, setOpen: (open: boolean) => void, router: any) => {
    // const router = useRouter()
    api.post('auth/login', data)
        .then((response: TokenResponse) => { 
            Login(response)

            setOpen(false)
            router.push('/')

            return true
        }).catch((error) => {
            return error
        })
}

interface RegisterData {
    name: string
    surname: string
    email: string
    password: string
    password_confirmation: string
}

export const HandleRegister = (router: any, data: RegisterData) => {
    console.log('not regist')
    api.post('auth/register', data)
        .then((response: TokenResponse) => {
            console.log('Hey front!!')
            Login(response) 
            console.log('after redirect login')
            router.push('/')
            // return response
        }).catch((error) => {
            return error
        })
}

export const handleLogout = (router: any) => {
    console.log('logout')
    Cookie.remove('credentials')
    Cookie.remove('user')
    router.push('/')
}

export const HandleSendChangeEmail = () => {
    api.post('auth/send-change-email')
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        })
}

interface ChangeEmailData {
    token: string
    data: {
        email: string
    }
}

export const HandleChangeEmail = ({ token, data }: ChangeEmailData) => {
     
    api.put(`auth/change-email?token=${token.token}`, data)
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        })
}

interface ChangePasswordData {
    password: string
    newPassword: string
    newPassword_confirmation: string
}

export const HandleChangePassword = (data: ChangePasswordData) => {
    api.put('auth/change-password', data)
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        })
}

interface ForgotPasswordData {
    email: string
}

export const HandleForgotPassword = (data: ForgotPasswordData) => { 
    api.post('auth/forgot-password', data)
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        })
}

interface ResetPasswordData {
    token: string
    data: {
        password: string
        password_confirmation: string
    }
}

export const HandleResetPassword = ({token, data }: ResetPasswordData) => { 
    api.put(`auth/reset-password?token=${token.token}`, data)
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        })
}

export const HandleRefreshToken = (router) => {
    api.post('/auth/refresh', {
        refresh_token: Cookie.getJSON('credentials')?.refreshToken
    }).then((response) => {
        if (response !== undefined) {
            Login(response, router)
        }
    })
}