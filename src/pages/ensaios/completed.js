import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { handleAuthentionToRedirectUrl } from '@/helpers/functions'
import EssayView from '@/components/Essay/EssayView'
import PreLoader from '@/components/PreLoader'

export default function Completed() {
    const router = useRouter()

    useEffect(() => { handleAuthentionToRedirectUrl(router, '/ensaios/completed') }, []);

    return (
        <React.Fragment>
            <PreLoader />
            <EssayView />
        </React.Fragment>
    )
}
