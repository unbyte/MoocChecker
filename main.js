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
