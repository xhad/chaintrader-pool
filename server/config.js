module.exports = {

	//This is where you setup geth rpc to listen on
	ethServer : {
		host: '127.0.0.1',
		path: '/',
		//since we are listening on a custom port, we need to specify it by hand
		port: '8079',
		//This is what changes the request to a POST request
		method: 'POST'
	},

	redisPassword : "password",

	//Your pool coinbase address here
	poolAddress : "0xebae996502d621945d7450ae6efd153606b2d8b6"
};
