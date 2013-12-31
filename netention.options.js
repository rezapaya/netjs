{
    "name": "Netention",
    "description": "http://netention.org",

	"host": "localhost",
	"port": "8080",  
	"databaseURL": "localhost/netention_0",
    "memoryUpdatePeriodMS": 5000,

    "plugins": [
		"_rss.js", "_irc.js"
	],

    "permissions": {
		"enableAnonymous": true,
		"authenticate_to_configure_plugins": false,
		"authenticate_to_create_objects": false,
		"authenticate_to_delete_objects": false,
		"authenticate_to_proxy_http": false,
		"authenticate_to_create_profiles": false,
		"anyone_to_enable_or_disable_plugin": true
	},

	"client": {
		"ui": "ui.mobile.js",
		"initialView": "list",
		"initialDisplayAvatarMenu": false,
		"defaultAvatarIcon": "/icon/netention-160.jpg",
		"includeCanNeedNot": true,
		"wikiStartPage": "Life",
		"showPlanOnSelfPage": true,
		"defaultTheme": "_cybernetic",
		"requireIdentity": false,
		"maxStartupObjects": 8192,
		"defaultMapMode2D": true,
		"enableTogetherJS": false
	}
}

