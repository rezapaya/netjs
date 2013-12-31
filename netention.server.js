{
    "name": "Netention",
    "description": "http://netention.org",

	"host": "localhost",
	"port": "8080",  
	"databaseURL": "localhost/netention_0",
    "memoryUpdatePeriodMS": 5000,

    "plugins": [
		"rss.js", "irc.js"
	],

    "permissions": {
		"authenticate_to_configure_plugins": false,
		"authenticate_to_create_objects": false,
		"authenticate_to_delete_objects": false,
		"authenticate_to_proxy_http": false,
		"authenticate_to_create_profiles": false,
		"anyone_to_enable_or_disable_plugin": true
	}
}
