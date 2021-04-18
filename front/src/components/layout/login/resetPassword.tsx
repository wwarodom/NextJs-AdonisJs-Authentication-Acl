import React from 'react'
import { Container, Form, Input } from '@/styles/components/forgot-password/resetPassword'

import { HandleResetPassword } from '@/utils/authHandles'

interface SubmitData {
    password: string
    password_confirmation: string
}

const ResetPassword = (token) => {
    function Submit(data: SubmitData) { 
        HandleResetPassword({ token , data  })
    }

    return (
        <Container>
            <Form onSubmit={Submit} >
                <Input name='password' label='Password' />
                <Input name='password_confirmation' label='Password confirmation' />
                <button type='submit'>Submit</button>
            </Form>
        </Container>
    )
}

export default ResetPassword
