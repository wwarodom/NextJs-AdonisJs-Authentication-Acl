import React from 'react'
import { Container, Form } from '@/styles/components/register'

import { Input } from '@/components/input'
import { HandleRegister } from '@/utils/authHandles'
import { useRouter } from 'next/router'

const RegisterForm = () => {
    const router: any = useRouter()

    return (
        <Container>
            <h1>Registrar</h1>
            <Form onSubmit={(data) => HandleRegister(router, data)}>
                <Input name='name' label='Name'  />
                <Input name='surname' label='Surname'  />
                <Input type='email' name='email' label='Email'  />
                <Input type='password' name='password' label='Senha'/>
                <Input type='password' name='password_confirmation' label='Confirma password'  />
                <br />
                <button type='submit'>Registrar</button>
            </Form>
        </Container>
    )
}

export default RegisterForm
