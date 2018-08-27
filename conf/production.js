module.exports = {
	mono: {
		mongodb: {
			url: 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB_HOST+'/'+process.env.DB_NAME,
			dbName: process.env.DB_NAME,
			findLimitDefault: 500,
			findLimitMax: 500
		}
	}
}
