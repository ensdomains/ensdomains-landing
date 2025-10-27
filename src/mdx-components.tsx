/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from 'mdx/types'
import { Heading } from './components/features/MDX/Heading/Heading'
import { Image } from './components/features/MDX/Heading/Image'
import { LoopingVideo } from './components/features/MDX/Heading/LoopingVideo'
import { Link } from './components/features/MDX/Link'
import { YoutubeEmbed } from './components/ui/media/YoutubeEmbed/YoutubeEmbed'

const CustomMDXComponents = {
  Image,
  LoopingVideo,
  Youtube: YoutubeEmbed,
}

declare global {
  type MDXProvidedComponents = typeof CustomMDXComponents
}

// This file is required to use MDX in `app` directory.
// eslint-disable-next-line @eslint-react/hooks-extra/no-useless-custom-hooks
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: Link,
    // img: DynImage as any,
    h2: (properties: any) => <Heading level={2} {...properties} />,
    h3: (properties: any) => <Heading level={3} {...properties} />,
    h4: (properties: any) => <Heading level={4} {...properties} />,
    ...components,
    ...CustomMDXComponents,
  }
}
