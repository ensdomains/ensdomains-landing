import type { Metadata, ResolvingMetadata } from 'next'
import type { ReactNode } from 'react'
import { createMetadata } from '~/utils/metadata'
import { QueryClientProvider } from '~/utils/queryclient'

type Props = unknown

export const generateMetadata = async (
  _: Props,
  parentMetadata: ResolvingMetadata,
): Promise<Metadata> => {
  return createMetadata(
    {
      title: {
        template: '%s | ENS Blog',
        default: 'ENS Blog',
      },
      description: 'Newest articles',
      path: '/blog',
    },
    await parentMetadata,
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return <QueryClientProvider>{children}</QueryClientProvider>
}
