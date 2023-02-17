import * as React from "react"

const CatalogueSvg = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
          style={{
            fill: "rgb(185, 185, 185)",
          }}
    d="M108 36H48a12 12 0 0 0-12 12v60a12 12 0 0 0 12 12h60a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12ZM96 96H60V60h36ZM208 36h-60a12 12 0 0 0-12 12v60a12 12 0 0 0 12 12h60a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Zm-12 60h-36V60h36ZM108 136H48a12 12 0 0 0-12 12v60a12 12 0 0 0 12 12h60a12 12 0 0 0 12-12v-60a12 12 0 0 0-12-12Zm-12 60H60v-36h36ZM208 136h-60a12 12 0 0 0-12 12v60a12 12 0 0 0 12 12h60a12 12 0 0 0 12-12v-60a12 12 0 0 0-12-12Zm-12 60h-36v-36h36Z" />
  </svg>
)

export default CatalogueSvg;
