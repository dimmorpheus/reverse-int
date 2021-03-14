module.exports = function reverse (n) {
	var str;
	var revStr;

	str = n.toString();
	revStr = "";

	for (var i = str.length - 1; i >= 0; --i)
		revStr += str[i];

	return parseInt(revStr);
  
}
