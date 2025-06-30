import type { ComponentProps } from 'react'

export const ChevronIcon = (props: ComponentProps<'svg'>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    {...props}
  >
    <path
      d="M5.12227 0.36344L3.20545 2.28024C2.72087 2.76483 2.72087 3.55108 3.20545 4.03567L5.12227 5.95251C6.25302 7.08327 6.25294 8.91609 5.12227 10.0469L3.20461 11.9645C2.72026 12.4491 2.72111 13.2346 3.20545 13.7192L5.1231 15.6368C5.60766 16.1211 6.39232 16.1211 6.87689 15.6368L13.6362 8.87744C14.1208 8.39288 14.1215 7.60746 13.6371 7.12281L6.87772 0.36344C6.3931 -0.121147 5.6069 -0.121147 5.12227 0.36344Z"
      fill="currentColor"
    />
  </svg>
)
