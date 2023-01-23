import { HTMLAttributes } from "react"

function CodersRank(props: HTMLAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      strokeWidth="3.5"
      viewBox="0 0 24 24"
    >
      <path d="M16 18L22 12 16 6"></path>
      <path d="M8 6L2 12 8 18"></path>
    </svg>
  )
}

export default CodersRank
