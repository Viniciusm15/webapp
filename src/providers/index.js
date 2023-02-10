import React from 'react'

import { ReactQueryProvider } from '@/providers/reactQuery'

const Providers = ({ children }) => {
    return (
        <ReactQueryProvider>{children}</ReactQueryProvider>
    )
}

export default Providers
