var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');//引入插件自动生产htmlcnpm install html-webpack-plugin --save-dev
module.exports = {
	entry:'./src/app.js',//单个js 文件
	//entry:['./src/script/main.js','./src/script/a.js'], //多个js情况输入
	// entry:{
	// 	main:'./src/script/main.js',
	// },
	

	output:{
		path:path.resolve(__dirname,"dist"),
		//filename:'bundle.js' //第一种情况输出
		//filename:'[name]-[hash].js'
		filename:'js/[name].bundle.js'
		
	},
	mode:'development',

	module:{
		rules :[
			{
				test:/\,js$/,
				loader:'babel-loader',
				exclude: __dirname + '/node_modules/',
				include:__dirname + '/src/',
				options:{
                    presets:['latest']
                }

			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader!postcss-loader!'
			}
		]
	},


	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			indject:'body',

			title:'this is good'


		})

	]
}