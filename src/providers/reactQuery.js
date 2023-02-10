import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: true,
      retry: 1,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 0,
      cacheTime: 0,
      refetchInterval: false,
      refetchOnMount: true
    }
  }
})

export const ReactQueryProvider = (props) => <QueryClientProvider client={queryClient} {...props} />
