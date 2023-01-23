import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import fm, { FrontMatterResult } from 'front-matter';
import { readdirSync, readFileSync } from 'fs';
import Markdown from "markdown-to-jsx";

import { PostAttributes, rootDir } from '../index';

type PostProps = {
	content: string
}

const Post: NextPage = ({ content }: PostProps) => {
	return (
		<div className="mx-auto mt-10 prose prose-xl">
			<Markdown>
				{content}
			</Markdown>
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const rootDir = process.cwd() + "/content"
	const paths = readdirSync(rootDir)
		.map((file) => {
			return `/post/${file.replace(".md", "")}`
		})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async context => {
	const { slug } = context.params;
	const post: FrontMatterResult<PostAttributes> = fm(readFileSync(rootDir + "/" + slug + '.md', "utf8").toString())
	return {
		props: {
			slug,
			date: new Date(post.attributes.date).toLocaleString("en-US", {
				month: "short",
				day: "2-digit",
				year: "numeric",
			}),
			title: post.attributes.title.replace(/\\`/gim, "`"),
			categories: post.attributes.categories?.split(", "),
			content: post.body,
		},
	};
};

export default Post
