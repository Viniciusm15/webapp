import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import PreLoader from '@/components/PreLoader'
import EssayView from '@/components/Essay/EssayView'
import { handleAuthentionToRedirectUrl } from '@/helpers/functions'
import { essayList } from '@/pages/api/requests/client'

export default function Edit() {
    const router = useRouter()
    const [essays, setEssays] = useState([]);

    useEffect(() => {
        essayList('edited').then((response) => { setEssays(response.data.essays) })
    }, [])

    useEffect(() => { handleAuthentionToRedirectUrl(router, '/ensaios/edit') }, []);

    return (
        <React.Fragment>
            <PreLoader />
            <EssayView essays={essays} />
        </React.Fragment>
    )
}
