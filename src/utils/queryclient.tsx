'use client'

import {
  QueryClient,
  QueryClientProvider as TanstackQueryProvider,
} from '@tanstack/react-query'
import type { ReactNode } from 'react'

export const queryClient = new QueryClient()

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TanstackQueryProvider client={queryClient}>
      {children}
    </TanstackQueryProvider>
  )
}
