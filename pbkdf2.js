var crypto = require('crypto');
var salt = Date.now().toString();
exports.returnSalt = function(a) {
	// a = salt;
	// return a;
	return salt;
};
exports.encrypt = function(passWord) {
		return crypto.pbkdf2Sync(passWord,salt,100,8,'sha512').toString('hex');
};
