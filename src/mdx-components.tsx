/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from 'mdx/types'
import { Heading } from './components/features/MDX/Heading/Heading'
import { Image } from './components/features/MDX/Heading/Image'
import { Link } from './components/features/MDX/Link'
import { YoutubeEmbed } from './components/ui/media/YoutubeEmbed/YoutubeEmbed'

// This file is required to use MDX in `app` directory.
// eslint-disable-next-line @eslint-react/hooks-extra/no-useless-custom-hooks
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: Link,
    // img: DynImage as any,
    Youtube: YoutubeEmbed,
    h2: (properties: any) => <Heading level={2} {...properties} />,
    h3: (properties: any) => <Heading level={3} {...properties} />,
    h4: (properties: any) => <Heading level={4} {...properties} />,
    Image,
    ...components,
  }
}
