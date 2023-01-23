import type { FC } from 'react';

interface AboutSummaryProps { }

const AboutSummary: FC<AboutSummaryProps> = ({ }) => {
	return (<div className="min-h-[75vh] pt-28">
		<div className="flex flex-wrap items-baseline max-w-lg mx-5 mt-10 mb-10">
			<span className="w-full mb-5 text-6xl font-black tracking-tight">
				Hello,<br />I'm Viktor
			</span>
			<div>
				<p className="text-xl font-light leading-relaxed">
					Father, husband, geek, motorcyclist, fabricator and a software
					architect with over 20 years of experience in the digital
					industry. I have a proven track record of leading teams and
					driving innovation in web and mobile product design, development
					and maintenance. I am currently responsible for frontend
					architecture at Toptal.
				</p>
			</div>
		</div>
	</div>);
}
export default AboutSummary;
