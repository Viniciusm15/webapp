import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import PreLoader from '@/components/PreLoader'
import EssayView from '@/components/Essay/EssayView'
import { handleAuthentionToRedirectUrl } from '@/helpers/functions'
import { essayList } from '@/pages/api/requests/client'

export default function Completed() {
    const router = useRouter()
    const [essays, setEssays] = useState([]);

    useEffect(() => {
        essayList('created').then((response) => { setEssays(response.data.essays) })
    }, [])

    useEffect(() => { handleAuthentionToRedirectUrl(router, '/ensaios/completed') }, []);

    return (
        <React.Fragment>
            <PreLoader />
            <EssayView essays={essays} />
        </React.Fragment>
    )
}
