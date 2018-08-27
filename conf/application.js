/*
** This is your application configuration
** See https://terrajs.org/mono/configuration
*/

require('dotenv').config();

module.exports = {
	mono: {
		// See https://terrajs.org/mono/configuration/modules
		modules: [
			'mono-doc',
			'mono-mongodb'
		],
		// See https://terrajs.org/mono/configuration/http
		http: {
			port: 8000
		},
		// See https://terrajs.org/mono/configuration/log
		log: {
			level: 'verbose'
		}
	}
}
