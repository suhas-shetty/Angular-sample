var logMessage = function(){
	if(env.debug == 1){
		console.log.apply(console, arguments);
	}
};