document.body.appendChild(document.createElement('script')).src='//code.jquery.com/jquery-1.9.1.min.js';
setTimeout(function(){
    jQuery(".s label:last-child").each(
        function(){
            jQuery(this).click();
        });
    jQuery(".j-textarea").each(
        function(){
            jQuery(this).val("Good Job.");
        });
},2000)
