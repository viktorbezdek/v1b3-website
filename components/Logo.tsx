import React, { HTMLAttributes } from "react"

function Logo({ animate, dark, ...rest }: { dark?: boolean, animate?: boolean } & HTMLAttributes<Element>) {
	const [offset, setOffset] = React.useState(animate ? 1500 : 0)
	const [arr, setArr] = React.useState(500)

	React.useEffect(
		() => {
			if (animate) {
				let int = setInterval(() => {
					setOffset(Math.round(500 * Math.random()))
					setArr(Math.round(500 * Math.random()) + 100)
				}, 2000)

				return () => clearInterval(int)
			}
		},
		[animate]
	)
	return (
		<div {...rest}>
			<div className="relative">
				<svg
					className="absolute"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 75 73"
				>
					<path
						strokeWidth={3}
						strokeLinecap="round"
						strokeLinejoin="round"
						className={`stroke-black/10`}
						d="M21 .2l14.3 49.2 1.4 5.5h5.6a12 12 0 007.2-1.8c1.6-1.2 2.4-3 2.4-5.3a7 7 0 00-4.3-6.8c-1.4-.6-3-.9-5-.9H38l2.9-11.7a14 14 0 004.7-.8 6 6 0 004-5.9 6 6 0 00-2.2-5A8 8 0 0046 16L51 .6c2.7.3 5 .9 7.2 1.7 3.6 1.5 6.3 3.5 8.2 6.1 1.8 2.6 2.8 5.7 2.8 9.2A14.6 14.6 0 0162.8 30c-2 1.4-4.4 2.4-7.1 3v.6c3 .1 5.7.9 8.2 2.3a15.7 15.7 0 018 14.3c0 3.8-1 7.2-3 10.2a20 20 0 01-8.4 7A31 31 0 0147.4 70H23.6L.6.2H21z"
					></path>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 75 73"
				>
					<path
						strokeWidth={3}
						strokeDasharray={arr}
						strokeDashoffset={offset}
						strokeLinecap="round"
						strokeLinejoin="round"
						className={`transition-all ease-in-out duration-[1s] stroke-black`}
						d="M21 .2l14.3 49.2 1.4 5.5h5.6a12 12 0 007.2-1.8c1.6-1.2 2.4-3 2.4-5.3a7 7 0 00-4.3-6.8c-1.4-.6-3-.9-5-.9H38l2.9-11.7a14 14 0 004.7-.8 6 6 0 004-5.9 6 6 0 00-2.2-5A8 8 0 0046 16L51 .6c2.7.3 5 .9 7.2 1.7 3.6 1.5 6.3 3.5 8.2 6.1 1.8 2.6 2.8 5.7 2.8 9.2A14.6 14.6 0 0162.8 30c-2 1.4-4.4 2.4-7.1 3v.6c3 .1 5.7.9 8.2 2.3a15.7 15.7 0 018 14.3c0 3.8-1 7.2-3 10.2a20 20 0 01-8.4 7A31 31 0 0147.4 70H23.6L.6.2H21z"
					></path>
				</svg>
			</div>
		</div>
	)
}

export default React.memo(Logo)
