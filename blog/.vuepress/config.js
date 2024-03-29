module.exports = {
	title: 'Revelope',
	description: 'Developer Reve\'s Blog',
	dest: 'docs',
	base: '/',
	head: [
		['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}],
		['link', {rel: 'icon', href: 'https://user-images.githubusercontent.com/9425680/135701075-eeb71836-082f-4fc5-b8eb-9aa3cd75af17.png'}],
		["script", {async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"}],
		["script", {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-R056XQ43KK');"]],
	],
	locales: {
		'/': {lang: 'ko-KR'}
	},
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
						id: 'HTML_CSS',
						dirname: 'post/html-css',
						path: '/post/html-css/index.html',
						layout: 'CategoryIndex',
						itemLayout: 'Post',
						itemPermalink: '/post/html-css/:slug',
					}
				]
			},
		],
		[
			"sitemap",
			{
				hostname: "https://blog.revelope.kr/"
			}
		],
	],
}