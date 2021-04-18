import React from 'react'
import { Container } from '@/styles/components/profile/change-email/sendChangeEmail'

import { HandleSendChangeEmail } from '@/utils/authHandles'

const SendChangeEmail = () => {
    return (
        <Container>
            <main>
                <button onClick={HandleSendChangeEmail} >Change email</button>
            </main>
        </Container>
    )
}

export default SendChangeEmail
