import { Metadata, ResolvingMetadata } from 'next'
import { ReactNode } from 'react'
import { createMetadata } from '~/utils/metadata'
import { QueryClientProvider } from '~/utils/queryclient'

export const generateMetadata = async (_, parentMetadata: ResolvingMetadata): Promise<Metadata> => {
  return createMetadata({
    title: {
      template: '%s | ENS Blog',
      default: 'ENS Blog',
    },
    description: 'Newest articles',
    path: '/blog',
  }, await parentMetadata)
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider>
      {children}
    </QueryClientProvider>
  )
}
