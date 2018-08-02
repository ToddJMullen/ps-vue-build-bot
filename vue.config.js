module.exports = {
	configureWebpack: {
		/* Settings given here will be merged into the webpack defaults on build  */
		module: {
			rules: [
				{test: /\.coffee$/, use: ['coffee-loader']}
			]
		}
	}
	,devServer: {
		proxy: {
			"/api": {
				target: "http://localhost:8081"
				,changeOrigin: true
			}
		}
	}
}