//实现getElementsByClassName兼容
function getElementsByClassName(node, classname) {
	if (node.getElementsByClassName) {
		return node.getElementsByClassName(classname);
	} else {
		var results = [];
		var elems = node.getElementsByTagName("*");
		for (var i = elems.length - 1; i >= 0; i--) {
			if (elems[i].className.indexOf("classname") !== -1) {
				results[results.length] = elems[i];
			}
		}
		return results;
	}
}

