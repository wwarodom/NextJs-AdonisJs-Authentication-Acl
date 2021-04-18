import React from 'react'
import { useRouter } from 'next/router'

import ResetPassword from '@/components/layout/login/resetPassword'

const ResetPasswordToken = () => {
    const { token } = useRouter().query
    console.log('reset pass token', token)

    return (
        <ResetPassword token={token} />
    )
}

export default ResetPasswordToken