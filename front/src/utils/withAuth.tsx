import React, { ElementType, useEffect } from 'react'
import { useRouter } from 'next/router'

import Cookie from 'js-cookie'

import Layout from '@/components/layout'

interface Props {
    Component: ElementType
    role: string
}

const withAuth = ({ Component, role }: Props) => {
    console.log('role: ', role)
    const wrapper = (props: any) => {
        // const Role = Cookie.getJSON('credentials')?.role
        const router = useRouter()
        useEffect((): any => {
            switch (role) {
                case 'admin':
                    console.log('deal some admin tasks!')
                    // return <div>This is admin page</div>
                    // router.push('/admin')  
                    break;
                case 'manager':
                    // router.push('/manager') 
                    console.log('deal some manager tasks!')
                    return
                    break;
                case 'client':
                    router.push('/profile')
                    break
                default:
                    router.push('/')
            }
        }, [])
        return <Component {...props} />
    }
    return wrapper
}

export default withAuth