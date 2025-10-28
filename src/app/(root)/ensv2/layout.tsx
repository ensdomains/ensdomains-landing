import type { ReactNode } from 'react'
import { QueryClientProvider } from '~/utils/queryclient'

export default function Layout({ children }: { children: ReactNode }) {
  return <QueryClientProvider>{children}</QueryClientProvider>
}
