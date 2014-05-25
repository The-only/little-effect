// 洗牌：(1-52)  52张牌随机分成四组
var objApp = {
	selectFrom: function(lowerValue, upperValue) {
		var choices = upperValue - lowerValue + 1;
		return Math.floor(Math.random() * choices + lowerValue);
	},
	play: function() {
		var len = 0,n,obj = {}, arr =[];
		while (len < 52){
			n = this.selectFrom(1, 52);
			if (!obj.hasOwnProperty(n)){
				obj[n] = n;
				arr[arr.length] = n;
				len++;
			}
		}
		for(var i=0; i<52; i++){
           document.write( parseInt(arr[i], 10)," " );
           if(i%13 === 0 && i!==0) document.write("<br/>")
        }
    console.log(obj);
	}
};
objApp.play();

//另一种优化方法
var a0 = [], a1 = [], a2 = [], a3 = [], arr = [];
for(var i=0; i<52; i++){
   arr[i] = i+1;
}
for(var i= 52; i>0; i--){
   var m = i%4;
   var num = arr.splice(Math.floor(Math.random()*i),1);
   eval("a"+m).push(num[0]);
}
console.log(a0);console.log(a1);console.log(a2);console.log(a3);