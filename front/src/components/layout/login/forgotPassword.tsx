import React from 'react'

// import { Modal, Slide, Form, Input } from '@/styles/components/layout/login/forgotPassword'
import { Input } from '@/components/input'
import { Modal, Slide, Form  } from '@/styles/components/layout/login'


import { HandleForgotPassword } from '@/utils/authHandles'

interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

const ForgotPassword = ({ open, setOpen }: Props) => {
    return (
        <Modal open={open} onClose={() => setOpen(false)} >
            <Slide direction='up' timeout={500} in={open} >
                <main>
                    <h1>Forgot password</h1>
                    <Form onSubmit={HandleForgotPassword}>
                        <Input name='email' label='email' />
                        <button type='submit' >Forgot password</button>
                    </Form>
                </main>
            </Slide>
        </Modal>
    )
}

export default ForgotPassword