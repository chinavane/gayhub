var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var fields = require('./fields'); 
//��������model
for(var i in fields) {
    mongoose.model(i, new Schema(fields[i]));
}
//������ȡmodel�ķ���
exports.getModel = function(name) {
    return mongoose.model(name);
}