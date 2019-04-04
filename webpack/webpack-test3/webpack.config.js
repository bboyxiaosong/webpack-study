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
				include:path.resolve(__dirname , 'src'),
				exclude: path.resolve(__dirname , 'node_modules'),
				options:{
                    presets:['latest']
                }
			},
			{
				test:/\.html$/,
				loader: 'html-loader'
			},
			{
				test:/\.tpl$/,
				loader: 'ejs-loader'
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
			},
			{
              test:/\.less$/,
              loader:'style-loader!css-loader!postcss-loader!less-loader'
              
            },
            {
              test:/\.scss$/,
              loader:'style-loader!css-loader!postcss-loader!sass-loader'
			},
			{
				test:/\.(png|jpg|gif|svg)$/i,
				use:[
					{
						loader:'url-loader',
						options:{
							limit: 10000,
							name: 'assets/[name].[hash:5].[ext]'
						}
					},
					{
						loader:'image-webpack-loader'
					}
				]
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