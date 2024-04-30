import { SVGProps } from 'react';

type Properties = SVGProps<SVGSVGElement>;

export const SearchIcon = (properties: Properties) => (
    <svg
        width="56"
        height="59"
        viewBox="0 0 56 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...properties}
    >
        <g opacity="0.3">
            <g id="search">
                <circle
                    id="Ellipse 14"
                    cx="25.6845"
                    cy="25.5526"
                    r="21.0526"
                    stroke="currentColor"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    id="Vector 90"
                    d="M41.4736 43.9736L51.9999 54.4999"
                    stroke="currentColor"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
        </g>
    </svg>
);

export const ArrowDownIcon = (properties: Properties) => (
    <svg
        width="15"
        height="9"
        viewBox="0 0 15 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...properties}
    >
        <path
            d="M1.09082 1.27692L7.38176 7.56786L13.6727 1.27692"
            stroke="currentColor"
            stroke-width="1.39799"
        />
    </svg>
);

export const SwapIcon = (properties: Properties) => (
    <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...properties}
    >
        <rect
            x="1.4724"
            y="2.07579"
            width="29.4607"
            height="28.1216"
            rx="4.01737"
            fill="#E5E5E5"
            stroke="#F6F6F6"
            stroke-width="2.67825"
        />
        <path
            d="M22.2266 14.1278L16.2005 8.10175L10.1744 14.1278"
            stroke="#093C52"
            stroke-width="1.33912"
        />
        <path
            d="M10.1748 18.1453L16.2009 24.1713L22.2269 18.1453"
            stroke="#093C52"
            stroke-width="1.33912"
        />
    </svg>
);

export const ArrowUpRightIcon = (properties: Properties) => (
    <svg
        width="76"
        height="44"
        viewBox="0 0 76 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...properties}
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
);
