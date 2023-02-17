import * as React from "react"

const ProfileSvg = (props) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
        <defs>
      <style>
        {
          `.cls-2{fill:white;stroke: white;display:block;margin: auto}`
        }
      </style>
      </defs>
    <path className='cls-2' d="M12 11a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5Zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM4 23h16a1 1 0 0 0 1-1v-4a5.006 5.006 0 0 0-5-5H8a5.006 5.006 0 0 0-5 5v4a1 1 0 0 0 1 1Zm1-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3H5Z" />
  </svg>
)

export default ProfileSvg;
