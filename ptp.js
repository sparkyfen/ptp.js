var request = require('request');
var endpoint = 'https://tls.passthepopcorn.me';
var login = function (username, password, passkey, callback) {
	if(username === null || password === null || passkey === null) {
		return callback("Missing parameters");
	}
	request.post(
		endpoint+'/ajax.php?action=login', {
			form: {
				username: username,
				password: password,
				passkey: passkey,
				keeplogged: 1
			}
		},
		function (error, response, body) {
			if(error) {
				return callback(error);
			}
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback("Login Error.");
			}
		}
	);
};
var latest = function (callback) {
	request.post(
		endpoint+'/torrents.php?json=noredirect',
		function (error, response, body) {
			if(error) {
				return callback(error);
			}
			callback(null, body);
		}
	);
};
var search = function (query, callback) {
	if(query === null) {
		return callback("Missing parameters");
	}
	request.post(
		endpoint+'/torrents.php?searchstr='+query+'&json=noredirect',
		function (error, response, body) {
			if(error) {
				return callback(error);
			}
			callback(null, body);
		}
	)
};
exports.login = login;
exports.latest = latest;
exports.search = search;