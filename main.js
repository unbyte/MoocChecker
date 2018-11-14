
// 增加了一个可重用按钮，嵌入于左侧目录
// Console执行脚本后可关闭，点击按钮即可

document.body.appendChild(document.createElement('script')).src='https://code.jquery.com/jquery-1.9.1.min.js';
var br = document.createElement("br"); // 这是一个空行
var check100btn = document.createElement("button"); // 以 DOM 创建新元素
check100btn.innerText = "一键100分";
check100btn.style = "width:230px;height:51px;margin:auto;font-size:20px";
check100btn.onclick = function() {
	setTimeout(function() {
		$(".s label:last-child").each(function() {
			$(this).click();
		});
		$(".j-textarea").each(function() {
			$(this).val("Good Job."); //这里是点评的内容
		});
	},2000)
}
$(".u-greentab.j-tabitem.f-f0.last").after(br);
$(".u-greentab.j-tabitem.f-f0.last").after(check100btn);
$(".u-greentab.j-tabitem.f-f0.last").after(br);




// 请先使用以下代码

document.body.appendChild(document.createElement('script')).src='//code.jquery.com/jquery-1.9.1.min.js';
setTimeout(function(){
    $(".s label:last-child").each(
        function(){
            $(this).click();
        });
    $(".j-textarea").each(
        function(){
            $(this).val("Good Job."); //这里是点评的内容
        });
},2000)




// 上面的代码使用过一次以后，只要页面没有刷新，请直接使用以下代码

$(".s label:last-child").each(
    function(){
        $(this).click();
    });
$(".j-textarea").each(
    function(){
        $(this).val("Good Job."); //这里是点评的内容
    });
