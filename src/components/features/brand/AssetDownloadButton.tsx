'use client'

import type { HTMLAttributes } from 'react'

type Value = 'Download' | 'PNG' | 'SVG'

export const AssetDownloadButton = ({
  links,
  ...props
}: {
  links: { url: string; title: string }[]
} & HTMLAttributes<HTMLSelectElement>) => {
  return (
    <select
      value="Download"
      {...props}
      onChange={(e) => {
        const v = e.currentTarget.value as Value

        const link = document.createElement('a')
        link.href = v
        link.download = v.slice(v.lastIndexOf('/') + 1)
        link.click()
      }}
    >
      <option disabled>Download</option>
      {links.map((link) => (
        <option value={link.url} key={link.url}>
          {link.title}
        </option>
      ))}
    </select>
  )
}
