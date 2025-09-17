import NextLink from 'next/link'
import type { AnchorHTMLAttributes, FC, RefObject } from 'react'

export type LinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> & {
  href: string
  ref?: RefObject<HTMLAnchorElement | null>
}

export const Link: FC<LinkProps> = ({
  href,
  children,
  rel,
  ...rest
}: LinkProps) => {
  const isExternal = href.startsWith('http')

  if (isExternal) {
    return (
      <a
        target="_blank"
        rel={`noopener noreferrer${rel ? ` ${rel}` : ''}`}
        href={href}
        {...rest}
      >
        {children ?? href}
      </a>
    )
  }

  return (
    <NextLink href={href} {...rest}>
      {children ?? href}
    </NextLink>
  )
}
