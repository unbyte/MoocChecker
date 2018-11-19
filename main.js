document.body.appendChild(document.createElement('script')).src = '//code.jquery.com/jquery-1.9.1.min.js';

let suckIt = "<div style=\"position: fixed;top: 50%;z-index: 999;right: 10%;padding: 1em;background: rgba(233,233,233,.6);border: 1px solid #aaa;\"><textarea placeholder=\"评价内容\" id=\"fuckMe\" style=\"padding: 10px;height: 60px;width: 200px;margin: 10px;\"></textarea><p style=\"    text-align: center;\"><input type=\"submit\" value=\"Fuck It Now\" onclick=\"fuckIt();\" style=\"border: 1px solid #aaa;padding: 5px;color: #888;\"></p></div>";
setTimeout(function () {
    $("body").append(suckIt);
}, 2500);


function fuckIt() {
    let judge = $("#fuckMe").val();
    $(".s label:last-child").each(
        function () {
            $(this).click();
        });
    $(".j-textarea").each(
        function () {
            $(this).val(judge);
        });
    return false;
}
