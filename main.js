var jqueryJs=document.createElement('script');
jqueryJs.setAttribute("type","text/JavaScript");
jqueryJs.setAttribute("src", 'http://lib.baomitu.com/jquery/2.2.4/jquery.min.js');
document.getElementsByTagName('head')[0].appendChild(jqueryJs);
jQuery(".s label:last-child").each(
    function(){
        jQuery(this).click();
    });
jQuery(".j-textarea").each(
    function(){
        jQuery(this).val("Good Job.");
    });
