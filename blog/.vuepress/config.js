module.exports = {
	title: 'Revelope Blog',
	description: 'Reve\'s development blog',
	dest: 'docs',
	base: '/blog/',
	head: [
		['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}]
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
					},
					{
						id: 'Python',
						dirname: 'post/python',
						path: '/post/python/index.html',
						layout: 'CategoryIndex',
						itemLayout: 'Post',
						itemPermalink: '/post/python/:slug',
					}
				]
			},
		],
	],
}