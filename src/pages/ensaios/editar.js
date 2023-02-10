import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { handleAuthentionToRedirectUrl } from '@/helpers/functions'
import EssayView from '@/components/Essay/EssayView'

export default function Editar() {
    const router = useRouter()

    useEffect(() => { handleAuthentionToRedirectUrl(router, '/ensaios') }, []);

    return (
        <EssayView />
    )
}
