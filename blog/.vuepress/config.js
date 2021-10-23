module.exports = {
	title: 'Revelope',
	description: 'Developer Reve\'s Blog',
	dest: 'docs',
	base: '/blog/',
	head: [
		['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}],
		['link', {rel: 'icon', href: 'https://user-images.githubusercontent.com/9425680/135701075-eeb71836-082f-4fc5-b8eb-9aa3cd75af17.png'}]
	],
	markdown: {
		lineNumbers: true,
	},
	plugins: [
		[
			'@vuepress/blog',
			{
				directories: [
					{
						id: 'Java',
						dirname: 'post/java',
						path: '/post/java/index.html',
						layout: 'CategoryIndex',
						itemLayout: 'Post',
						itemPermalink: '/post/java/:slug',
					}
				]
			},
		],
		[
			[
				'@vuepress/google-analytics',
				{
					'ga': 'G-R056XQ43KK'
				}
			]
		],
	],
}