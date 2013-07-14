var ptp = require('./ptp.js');
var config = require('./config.js');
var username = config.config().username;
var password = config.config().password;
var passkey = config.config().passkey;
ptp.login(username, password, passkey, function (error, data) {
	if(error) {
		throw error;
	}
	data = JSON.parse(data);
	if(data.Result === 'Ok') {
		ptp.latest(function (error, data) {
			if(error) {
				throw error;
			}
			console.log(data);
		});
	}
});
ptp.login(username, password, passkey, function (error, data) {
	if(error) {
		throw error;
	}
	data = JSON.parse(data);
	if(data.Result === 'Ok') {
		ptp.search('Harry Potter', function (error, data) {
			if(error) {
				throw error;
			}
			console.log(data);
		});
	}
});