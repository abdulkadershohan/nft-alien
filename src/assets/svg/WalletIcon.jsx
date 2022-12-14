import * as React from "react"

const WalletIcon = (props) => (
    <svg
        width={22}
        height={19}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M21.5 15v1.875a1.877 1.877 0 0 1-1.875 1.875H3.5c-1.655 0-3-1.346-3-3V3c0-1.655 1.345-3 3-3h13.875a1.125 1.125 0 1 1 0 2.25H3.5a.75.75 0 0 0 0 1.5h16.125c1.034 0 1.875.84 1.875 1.875V7.5h-3.75A3.754 3.754 0 0 0 14 11.25 3.754 3.754 0 0 0 17.75 15h3.75Z"
            fill="#141B22"
        />
        <path d="M21.5 9v4.5h-3.75a2.25 2.25 0 1 1 0-4.5h3.75Z" fill="#141B22" />
    </svg>
)

export default WalletIcon
