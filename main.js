let suckIt = "<div style=\"position: fixed;top: 50%;z-index: 999;right: 10%;padding: 1em;background: rgba(233,233,233,.6);border: 1px solid #aaa;\"><textarea placeholder=\"评价内容\" id=\"fuckMe\" style=\"padding: 10px;height: 60px;width: 200px;margin: 10px;\"></textarea><p style=\"    text-align: center;\"><input type=\"checkbox\" id=\"autooo\" name=\"auto\" value=\"fuckeveryone\">Auto (Beta)<br><input type=\"submit\" value=\"Fuck It Now\" onclick=\"fuckIt();\" style=\"border: 1px solid #aaa;padding: 5px;color: #888;cursor: pointer;\"></p></div>";
document.body.insertAdjacentHTML("afterbegin", suckIt);
var cbk = document.getElementById('autooo');
function fuckIt() {
    var element = document.getElementsByClassName("j-gotonext");
    let judge = document.getElementById('fuckMe').value; [].forEach.call(document.getElementsByClassName('s'), e = >{
        e.children[e.children.length - 1].children[0].checked = true
    }); [].forEach.call(document.getElementsByClassName('j-textarea'), e = >{
        e.value = judge
    });
    if (cbk.checked) {
        document.getElementsByClassName('j-submitbtn')[0].click() if (typeof(element) == "undefined" || element == null) {
            document.getElementsByClassName('j-gotonext')[0].click()
        } else {
            alert("Completed.");
            return false;
        }
        setTimeout(fuckIt, 1000);
    }

    return false;
}
