//이미지 롤오버 소스코드 추가

var imgRoll = $("#gallery img");

imgRoll.hover(
	function(){
		$(this).attr("src", $(this).attr("src").replace(/_off@2x(\.gif|\.jpg|\.png)$/, "_on@2x$1"));
	},
	function(){
		$(this).attr("src", $(this).attr("src").replace(/_on@2x(\.gif|\.jpg|\.png)$/, "_off@2x$1"));
	}
);