String.prototype.regext = function (extRegex, callback) {
      
  var params = [];

  var extRegexStr = extRegex.toString();
  var paramRegex = /\(P\<(\w+)\>([^\)]+)\)/gim;

  var regex = eval(extRegexStr.replace(paramRegex, "($2)"));

  var match = null;

  while((match = paramRegex.exec(extRegexStr))) {
    var param = match[1];
    params.push(param);
  }
  
  var rawCaptures = null;
  var input = this.toString();
  while ((rawCaptures = regex.exec(input))) {

    var namedCaptures = {};
    
    for (var i = 0;  i < params.length; i ++) {
      var param = params[i];
      namedCaptures[param] = rawCaptures[i + 1];
    }

    callback(namedCaptures, rawCaptures);
    
    if (!regex.global) {
      break;
    }
  }
}
