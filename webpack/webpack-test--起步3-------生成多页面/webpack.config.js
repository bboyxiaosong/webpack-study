var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');//引入插件自动生产htmlcnpm install html-webpack-plugin --save-dev
module.exports = {
	// entry:['./src/script/main.js','./src/script/a.js'], //第一种情况输入

	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js',
		b:'./src/script/b.js',
		c:'./src/script/c.js'
	},
	output:{
		path:path.resolve(__dirname,"dist"),
		//filename:'bundle.js' //第一种情况输出
		filename:'js/[name]-[chunkhash].js',
		publicPath:'http://cdn.com',//占位符要上线的话
	},
	mode:'development',

	plugins:[
		new htmlWebpackPlugin({
			//filename:'index-[hash].html',
			filename:'a.html',
			template:'index.html',
			inject:false,
			title:'this is a',
			//chunks:['main','a']//只加载a
			excludeChunks:['b','c']

		}),
		new htmlWebpackPlugin({
			filename:'b.html',
			template:'index.html',
			inject:false,
			title:'this is b',
			//chunks:['b'],//只加载b,
			excludeChunks:['a','c']
		}),
		new htmlWebpackPlugin({
			filename:'c.html',
			template:'index.html',
			inject:false,
			title:'this is c',
			//chunks:['c'],//只加载c,
			excludeChunks:['b','a ']
		})

	]
}