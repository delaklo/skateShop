import * as React from "react"

const ShopBasketSvg = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke= {props.color}
    {...props}
  >
    <defs>
      <style>
        {
          `.cls-1{fill:none;stroke-miterlimit:10;stroke-width:1.91px;margin:-100%;vertical-align:middle;}`
        }
      </style>
    </defs>
    <g id="cart">
      <circle className="cls-1" cx={10.07} cy={20.59} r={1.91} />
      <circle className="cls-1" cx={18.66} cy={20.59} r={1.91} />
      <path
        className="cls-1"
        d="M.52 1.5h2.66a2.87 2.87 0 0 1 2.74 2l3.19 10.41h-.47a2.39 2.39 0 0 0-2.39 2.39 2.39 2.39 0 0 0 2.39 2.38h10"
      />
      <path className="cls-1"
       d="M7.21 5.32h15.27v1.91l-1.91 6.68H9.11" />
    </g>
  </svg>
)

export default ShopBasketSvg;
