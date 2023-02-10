import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { handleAuthentionToRedirectUrl } from '@/helpers/functions'
import EssayView from '@/components/Essay/EssayView'
import PreLoader from '@/components/PreLoader'

export default function Edit() {
    const router = useRouter()

    useEffect(() => { handleAuthentionToRedirectUrl(router, '/ensaios/edit') }, []);

    return (
        <React.Fragment>
            <PreLoader />
            <EssayView />
        </React.Fragment>
    )
}
