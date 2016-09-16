var config = {
	development : {
		baseUrl : 'http://localhost:8080',
		apiHost : 'http://localhost:8080',
		apiPrefix : '/api/v1/',
		debug: 1
	},
	production : {
		baseUrl : 'http://localhost:8080',
		apiHost : 'http://localhost:8080',
		apiPrefix : '/api/v1/',
		debug: 0
	}
};

var env = config['development'];