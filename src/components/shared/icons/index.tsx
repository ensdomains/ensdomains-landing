/** biome-ignore-all lint/nursery/useUniqueElementIds: icons */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: icons */
import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const SearchIcon = ({
  opacity = 0.3,
  ...props
}: Props & { opacity?: number }) => (
  <svg
    width="56"
    height="59"
    viewBox="0 0 56 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={opacity}>
      <g id="search">
        <circle
          id="Ellipse 14"
          cx="25.6845"
          cy="25.5526"
          r="21.0526"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector 90"
          d="M41.4736 43.9736L51.9999 54.4999"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
)

export const ArrowDownIcon = (props: Props) => (
  <svg
    width="15"
    height="9"
    viewBox="0 0 15 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.09082 1.27692L7.38176 7.56786L13.6727 1.27692"
      stroke="currentColor"
      strokeWidth="1.39799"
    />
  </svg>
)

export const SwapIcon = (props: Props) => (
  <svg
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="1.4724"
      y="2.07579"
      width="29.4607"
      height="28.1216"
      rx="4.01737"
      fill="#E5E5E5"
      stroke="#F6F6F6"
      strokeWidth="2.67825"
    />
    <path
      d="M22.2266 14.1278L16.2005 8.10175L10.1744 14.1278"
      stroke="#093C52"
      strokeWidth="1.33912"
    />
    <path
      d="M10.1748 18.1453L16.2009 24.1713L22.2269 18.1453"
      stroke="#093C52"
      strokeWidth="1.33912"
    />
  </svg>
)

export const ArrowUpRightIcon = (props: Props) => (
  <svg
    width="76"
    height="44"
    viewBox="0 0 76 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.62598 43.623V22.2084C3.62598 21.1039 4.52141 20.2084 5.62598 20.2084H53.0566"
      stroke="currentColor"
      strokeWidth="6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.1543 5.90083L69.642 19.5593L49.1543 33.2178L49.1543 5.90083Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="6"
    />
  </svg>
)

export const FarcastLikeIcon = (props: Props) => (
  <svg
    width="10"
    height="9"
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      id="Vector"
      d="M4.6357 7.54252C2.7554 6.44374 1.66679 5.33529 1.12601 4.34423C0.583596 3.347 0.593873 2.47084 0.906868 1.8384L4.6357 7.54252ZM4.6357 7.54252C6.51578 6.4436 7.60426 5.33512 8.14406 4.34421C8.68647 3.34699 8.67619 2.47084 8.3632 1.8384L4.6357 7.54252ZM2.5333 0.775335L2.5333 0.775332C1.83996 0.810815 1.21996 1.20673 0.906956 1.83823L2.5333 0.775335ZM2.5333 0.775335L2.53493 0.775247M2.5333 0.775335L2.53493 0.775247M2.53493 0.775247C3.11381 0.74369 3.74198 0.968637 4.2871 1.52138L4.6356 1.87475M2.53493 0.775247L4.6356 1.87475M4.6356 1.87475L4.98397 1.52126M4.6356 1.87475L4.98397 1.52126M4.98397 1.52126C5.52861 0.968619 6.15671 0.743696 6.73512 0.775248L6.73676 0.775332M4.98397 1.52126L6.73676 0.775332M6.73676 0.775332C7.4301 0.810815 8.05011 1.20673 8.36311 1.83823L6.73676 0.775332Z"
      stroke="currentColor"
      strokeWidth="0.978591"
    />
  </svg>
)

export const FarcastCommentIcon = (props: Props) => (
  <svg
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      id="Vector 91"
      d="M1.11353 2.99557V6.42064C1.11353 6.9611 1.55166 7.39923 2.09212 7.39923H2.49746C2.81406 7.39923 3.07071 7.65588 3.07071 7.97247C3.07071 8.48318 3.68817 8.73895 4.0493 8.37782L4.74127 7.68585C4.92479 7.50233 5.17369 7.39923 5.43323 7.39923H7.96366C9.04458 7.39923 9.92084 6.52297 9.92084 5.44205V2.99557C9.92084 1.91465 9.04458 1.03839 7.96366 1.03839H3.07071C1.98979 1.03839 1.11353 1.91465 1.11353 2.99557Z"
      stroke="currentColor"
      strokeWidth="0.978591"
    />
  </svg>
)

export const FarcastRecastIcon = (props: Props) => (
  <svg
    width="13"
    height="9"
    viewBox="0 0 13 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Group 2243910">
      <g id="Group 2243908">
        <path
          id="Vector 92"
          d="M0.556885 4.26737V3.70817C0.556885 2.62725 1.43314 1.75099 2.51407 1.75099H5.86923"
          stroke="currentColor"
          strokeWidth="0.978591"
        />
        <path
          id="Vector 92 (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.44983 0.213341L7.65166 1.68123L5.44983 3.14911L5.44983 0.213341Z"
          fill="currentColor"
        />
      </g>
      <g id="Group 2243909">
        <path
          d="M11.5653 4.12745L11.5653 4.68664C11.5653 5.76756 10.689 6.64382 9.60813 6.64382L6.25296 6.64382"
          stroke="currentColor"
          strokeWidth="0.978591"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.67236 8.18147L4.47053 6.71359L6.67236 5.2457L6.67236 8.18147Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
)

export const MessageBubbleIcon = (props: Props) => (
  <svg
    width="34"
    height="21"
    viewBox="0 0 34 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M34 0H2.34315C3.40401 0 4.42143 0.421426 5.17157 1.17157L23.1716 19.1716C25.6914 21.6914 30 19.9068 30 16.3431V4C30 1.79086 31.7909 0 34 0Z"
      fill="currentColor"
    />
  </svg>
)

export const EnsNavIcon = (props: Props) => (
  <svg
    width="36"
    height="41"
    viewBox="0 0 36 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M17.0679 0.872362L6.02054 19.05C5.9339 19.1925 5.73261 19.2084 5.62514 19.0808C4.65258 17.926 1.02927 13.0132 5.51274 8.53546C9.60393 4.44952 14.815 1.53633 16.7462 0.529473C16.9653 0.41524 17.1961 0.66136 17.0679 0.872362Z"
        fill="currentColor"
      />
      <path
        d="M16.4569 40.4508C16.6774 40.6052 16.949 40.342 16.8013 40.1172C14.3337 36.3641 6.13115 23.8765 4.99806 22.002C3.88045 20.153 1.6823 17.0802 1.49892 14.4513C1.48062 14.1889 1.11771 14.1356 1.02642 14.3824C0.879189 14.7804 0.722441 15.2555 0.576352 15.7982C-1.26789 22.6492 1.41052 29.919 7.22746 33.9906L16.4569 40.4509V40.4508Z"
        fill="currentColor"
      />
      <path
        d="M17.9743 40.1276L29.0217 21.95C29.1083 21.8075 29.3096 21.7916 29.4171 21.9192C30.3896 23.0739 34.0129 27.9867 29.5295 32.4645C25.4383 36.5504 20.2273 39.4636 18.296 40.4705C18.0769 40.5847 17.8461 40.3386 17.9743 40.1276Z"
        fill="currentColor"
      />
      <path
        d="M18.5974 0.5467C18.3769 0.392379 18.1053 0.655555 18.253 0.880301C20.7206 4.63343 28.9232 17.121 30.0562 18.9955C31.1739 20.8445 33.372 23.9173 33.5554 26.5462C33.5737 26.8087 33.9366 26.862 34.0279 26.6152C34.1751 26.2171 34.3319 25.742 34.478 25.1993C36.3222 18.3484 33.6438 11.0786 27.8268 7.00693L18.5974 0.5467Z"
        fill="currentColor"
      />
    </g>
  </svg>
)

export const ArrowRightIcon = (props: Props) => (
  <svg
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.428711 4.5H7.71443M7.71443 4.5L3.71443 0.5M7.71443 4.5L3.71443 8.5"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
)

export const BrowserIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 96 96"
    width="24"
    height="24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M22 36a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm16 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm22-6a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 8C8.059 8 0 16.059 0 26v44c0 9.941 8.059 18 18 18h60c9.941 0 18-8.059 18-18V26c0-9.941-8.059-18-18-18H18Zm-6 18a6 6 0 0 1 6-6h60a6 6 0 0 1 6 6v44a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6V26Z"
      clipRule="evenodd"
    />
  </svg>
)

export const GithubIcon = (props: Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 0.296875C5.37 0.296875 0 5.66988 0 12.2969C0 17.5999 3.438 22.0969 8.205 23.6819C8.805 23.7949 9.025 23.4239 9.025 23.1049C9.025 22.8199 9.015 22.0649 9.01 21.0649C5.672 21.7889 4.968 19.4549 4.968 19.4549C4.422 18.0699 3.633 17.6999 3.633 17.6999C2.546 16.9559 3.717 16.9709 3.717 16.9709C4.922 17.0549 5.555 18.2069 5.555 18.2069C6.625 20.0419 8.364 19.5119 9.05 19.2049C9.158 18.4289 9.467 17.8999 9.81 17.5999C7.145 17.2999 4.344 16.2679 4.344 11.6699C4.344 10.3599 4.809 9.28988 5.579 8.44988C5.444 8.14688 5.039 6.92688 5.684 5.27388C5.684 5.27388 6.689 4.95188 8.984 6.50388C9.944 6.23688 10.964 6.10488 11.984 6.09888C13.004 6.10488 14.024 6.23688 14.984 6.50388C17.264 4.95188 18.269 5.27388 18.269 5.27388C18.914 6.92688 18.509 8.14688 18.389 8.44988C19.154 9.28988 19.619 10.3599 19.619 11.6699C19.619 16.2799 16.814 17.2949 14.144 17.5899C14.564 17.9499 14.954 18.6859 14.954 19.8099C14.954 21.4159 14.939 22.7059 14.939 23.0959C14.939 23.4109 15.149 23.7859 15.764 23.6659C20.565 22.0919 24 17.5919 24 12.2969C24 5.66988 18.627 0.296875 12 0.296875Z"
      fill="currentColor"
    />
  </svg>
)

export const TwitterIcon = (props: Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.0583996 1L9.32452 13.3895L0 23.4627H2.09874L10.2625 14.6432L16.8584 23.4627H24L14.2123 10.3765L22.8916 1H20.7929L13.2747 9.1223L7.2 1H0.0583996ZM3.14469 2.54576H6.42551L20.9133 21.9169H17.6325L3.14469 2.54576Z"
      fill="currentColor"
    />
  </svg>
)

export const LinkSVG = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 96 96"
    {...props}
  >
    <path
      fill="currentColor"
      d="m49.757 53.272-1.514-1.515a6 6 0 1 0-8.486 8.486l1.515 1.514c7.03 7.03 18.427 7.03 25.456 0l23.03-23.029c7.029-7.03 7.029-18.427 0-25.456l-6.03-6.03c-7.03-7.029-18.426-7.029-25.456 0l-9.515 9.515a6 6 0 1 0 8.486 8.486l9.514-9.515a6 6 0 0 1 8.486 0l6.03 6.03a6 6 0 0 1 0 8.485l-23.03 23.03a6 6 0 0 1-8.486 0Z"
    />
    <path
      fill="currentColor"
      d="m46.243 42.728 1.514 1.515a6 6 0 0 0 8.486-8.486l-1.515-1.514c-7.03-7.03-18.427-7.03-25.456 0l-23.03 23.03c-7.029 7.029-7.029 18.425 0 25.455l6.03 6.03c7.03 7.029 18.427 7.029 25.456 0l9.515-9.515a6 6 0 1 0-8.486-8.486l-9.514 9.515a6 6 0 0 1-8.486 0l-6.03-6.03a6 6 0 0 1 0-8.485l23.03-23.03a6 6 0 0 1 8.486 0Z"
    />
  </svg>
)
