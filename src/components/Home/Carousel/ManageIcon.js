import React from "react"
import IconBase from "./Icon"

export default function ManageIcon({ active }) {
  return (
    <IconBase active={active} width="24" height="24" className="manage-svg">
      <g clip-path="url(#clip0_137_92)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 8V3H8V8H3ZM0 2C0 0.895431 0.895431 0 2 0H9C10.1046 0 11 0.895431 11 2V9C11 10.1046 10.1046 11 9 11H2C0.895431 11 0 10.1046 0 9V2ZM3 21V16H8V21H3ZM0 15C0 13.8954 0.895431 13 2 13H9C10.1046 13 11 13.8954 11 15V22C11 23.1046 10.1046 24 9 24H2C0.895431 24 0 23.1046 0 22V15ZM16 3V8H21V3H16ZM15 0C13.8954 0 13 0.895431 13 2V9C13 10.1046 13.8954 11 15 11H22C23.1046 11 24 10.1046 24 9V2C24 0.895431 23.1046 0 22 0H15ZM16 21V16H21V21H16ZM13 15C13 13.8954 13.8954 13 15 13H22C23.1046 13 24 13.8954 24 15V22C24 23.1046 23.1046 24 22 24H15C13.8954 24 13 23.1046 13 22V15Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_137_92">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </IconBase>
  )
}
