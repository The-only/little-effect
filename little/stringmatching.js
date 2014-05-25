//查找指定字符串出现的次数

var str = "aaabcgfyniceguigyiop gfy";
var b = "gfy";

var pos = 0;
var rs = [];

debugger;

while (pos < str.length && pos !== -1) {
	pos = indexOf(str, b, pos);
	if (pos !== -1) {
		rs[rs.length] = b;
		pos = pos + b.length;
	}
}

function indexOf(str, item, pos) {
	for (var i = pos; i < str.length; i++) {
		var tmp = "";

		for (var j = 0; j < item.length; j++) {
			tmp += str[i + j];
		}

		if (tmp === item) {
			return i;
		}
	}
	return -1;
}

//indexOf另一种优化方法
function indexOfSave(str, item, pos) {
	var i = pos,
		j = 0;
	while (j < item.length && i < str.length) {
		if (str[i] === item[j]) {
			i++;
			j++;
		} else {
			i = i - j + 1;
			j = 0;
		}
	}
	return (j === item.length ? i - j : -1);
}